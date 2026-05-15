import {
  rolesEnum,
  accountTypeEnum,
  projectStatusEnum,
  proposalStatusEnum,
  milestoneStatusEnum,
  invoiceStatusEnum,
  paymentStatusEnum,
  notificationTypeEnum,
  disputeStatusEnum,
} from "@/lib/constants/enums"
import { relations } from "drizzle-orm"
import {
  boolean,
  pgTable as table,
  serial,
  text,
  varchar,
  integer,
  decimal,
  doublePrecision,
  date,
  uniqueIndex,
 
} from "drizzle-orm/pg-core"



export const users = table("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email").notNull().unique(),
  phone: varchar("phone", { length: 256 }),
  role: rolesEnum("role").default("client"),
  bio: text("bio"),
  location: text("location"),
  website: text("website"),
  accountType: accountTypeEnum("accountType").default("individual"),
  isActive: boolean("isActive").default(false),
})

export const companyProfiles = table("companyProfiles", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  companyName: text("companyName").notNull().unique(),
  logoUrl: text("logoUrl"),
  industry: text("industry"),
  companySize: text("companySize"),
  userRole: text("userRole"),
  bio: text("bio"),
})

export const freelancerProfiles = table("freelancerProfiles", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  headline: text("headline"),
  hourlyRate: decimal("hourlyRate"),
  skills: text("skills").array(),
  availability: boolean("availability"),
  totalEarned: decimal("totalEarned"),
  completedJobs: integer("completedJobs"),
  averageRating: doublePrecision("averageRating"),
})

export const portfolioItems = table("portfolioItems", {
  id: serial("id").primaryKey(),
  profileId: integer("profileId").references(() => freelancerProfiles.id),
  title: text("title"),
  description: text("description"),
  url: text("url"),
  imageUrl: text("imageUrl"),
})

export const projects = table("projects", {
  id: serial("id").primaryKey(),
  clientId: integer("clientId").references(() => users.id),
  freelancerId: integer("freelancerId").references(() => freelancerProfiles.id),
  title: text("title"),
  description: text("description"),
  budget: doublePrecision("budget"),
  deadline: date("deadline"),
  status: projectStatusEnum("status").default("draft"),
  tags: text("tags").array(),
  isTemplate: boolean("isTemplate"),
  templateId: text("templateId"),
})

export const proposals = table("proposals", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  freelancerId: integer("freelancerId").references(() => freelancerProfiles.id),
  coverLetter: text("coverLetter"),
  bidAmount: doublePrecision("bidAmount"),
  deliveryDays: integer("deliveryDays"),
  status: proposalStatusEnum("status").default("pending"),
})

export const milestones = table("milestones", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  title: text("title"),
  description: text("description"),
  amount: doublePrecision("amount"),
  dueDate: date("dueDate"),
  status: milestoneStatusEnum("status").default("pending"),
  order: integer("order"),
})

export const messages = table("messages", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  senderId: integer("senderId").references(() => users.id),
  receiverId: integer("receiverId").references(() => users.id),
  content: text("content"),
  isRead: boolean("isRead"),
})

export const fileUploads = table("fileUploads", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  uploadedById: integer("uploadedById").references(() => users.id),
  milestoneId: integer("milestoneId").references(() => milestones.id),
  messageId: integer("messageId").references(() => messages.id),
  fileName: text("fileName"),
  fileUrl: text("fileUrl"),
  mimeType: text("mimeType"),
  fileSize: integer("fileSize"),
})

export const invoices = table("invoices", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  createdById: integer("createdById").references(() => users.id),
  receiverById: integer("receiverById").references(() => users.id),
  amount: doublePrecision("amount"),
  tax: doublePrecision("tax"),
  totalAmount: doublePrecision("totalAmount"),
  status: invoiceStatusEnum("status").default("draft"),
  dueDate: date("dueDate"),
  paidAt: date("paidAt"),
  notes: text("notes"),
  invoiceNumber: text("invoiceNumber"),
})

export const payments = table("payments", {
  id: serial("id").primaryKey(),
  invoiceId: integer("invoiceId").references(() => invoices.id),
  amount: doublePrecision("amount"),
  currency: text('currency'),
  status: paymentStatusEnum("status").default("pending"),
  stripePaymentId: text('stripePaymentId'),
  stripeSessionId: text('stripeSessionId'),
  escrowFunded: boolean('escrowFunded'),
  escrowFundedAt: date('escrowFundedAt'),
  escrowReleasedAt: date('escrowReleasedAt'),
  refundedAt: date('refundedAt'),
})

export const reviews = table("reviews", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  reviewerId: integer("reviewerId").references(() => users.id),
  revieweeId: integer("revieweeId").references(() => users.id),
  rating: integer('rating'),
  comment: text('comment'),
}, (t) => ({
  uniqueReview: uniqueIndex("unique_review").on(t.projectId, t.reviewerId),
}))

export const notifications = table("notifications", {
  id: serial("id").primaryKey(),
  userId: integer("userId").references(() => users.id),
  type: notificationTypeEnum('type').default('project_posted'),
  title: text('title'),
  body: text('body'),
  isRead: boolean('isRead'),
  linkUrl: text('linkUrl'),
})

export const disputes = table("disputes", {
  id: serial("id").primaryKey(),
  projectId: integer("projectId").references(() => projects.id),
  raisedById: integer("raisedById").references(() => users.id),
  againstId: integer("againstId").references(() => users.id),
  reason: text('reason'),
  status: disputeStatusEnum('status').default('open'),
  resolution: text('resolution'),
  resolvedAt: date('resolvedAt'),
})


// --- Users & Profiles ---

export const usersRelations = relations(users, ({ one, many }) => ({
  companyProfile: one(companyProfiles, {
    fields: [users.id],
    references: [companyProfiles.userId],
  }),
  freelancerProfile: one(freelancerProfiles, {
    fields: [users.id],
    references: [freelancerProfiles.userId],
  }),
  projectsAsClient: many(projects),
  messagesSent: many(messages, { relationName: "sender" }),
  messagesReceived: many(messages, { relationName: "receiver" }),
  notifications: many(notifications),
  invoicesCreated: many(invoices, { relationName: "invoiceCreator" }),
  invoicesReceived: many(invoices, { relationName: "invoiceReceiver" }),
}))

export const companyProfilesRelations = relations(companyProfiles, ({ one }) => ({
  user: one(users, {
    fields: [companyProfiles.userId],
    references: [users.id],
  }),
}))

export const freelancerProfilesRelations = relations(freelancerProfiles, ({ one, many }) => ({
  user: one(users, {
    fields: [freelancerProfiles.userId],
    references: [users.id],
  }),
  portfolioItems: many(portfolioItems),
  proposals: many(proposals),
  projects: many(projects),
}))

// --- Portfolio & Projects ---

export const portfolioItemsRelations = relations(portfolioItems, ({ one }) => ({
  profile: one(freelancerProfiles, {
    fields: [portfolioItems.profileId],
    references: [freelancerProfiles.id],
  }),
}))

export const projectsRelations = relations(projects, ({ one, many }) => ({
  client: one(users, {
    fields: [projects.clientId],
    references: [users.id],
  }),
  freelancer: one(freelancerProfiles, {
    fields: [projects.freelancerId],
    references: [freelancerProfiles.id],
  }),
  proposals: many(proposals),
  milestones: many(milestones),
  messages: many(messages),
  invoices: many(invoices),
  disputes: many(disputes),
  reviews: one(reviews),
}))

// --- Proposals, Milestones, & Messages ---

export const proposalsRelations = relations(proposals, ({ one }) => ({
  project: one(projects, {
    fields: [proposals.projectId],
    references: [projects.id],
  }),
  freelancer: one(freelancerProfiles, {
    fields: [proposals.freelancerId],
    references: [freelancerProfiles.id],
  }),
}))

export const milestonesRelations = relations(milestones, ({ one, many }) => ({
  project: one(projects, {
    fields: [milestones.projectId],
    references: [projects.id],
  }),
  files: many(fileUploads),
}))

export const messagesRelations = relations(messages, ({ one, many }) => ({
  project: one(projects, {
    fields: [messages.projectId],
    references: [projects.id],
  }),
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
    relationName: "sender",
  }),
  receiver: one(users, {
    fields: [messages.receiverId],
    references: [users.id],
    relationName: "receiver",
  }),
  files: many(fileUploads),
}))

// --- Invoices & Payments ---

export const invoicesRelations = relations(invoices, ({ one, many }) => ({
  project: one(projects, {
    fields: [invoices.projectId],
    references: [projects.id],
  }),
  creator: one(users, {
    fields: [invoices.createdById],
    references: [users.id],
    relationName: "invoiceCreator",
  }),
  receiver: one(users, {
    fields: [invoices.receiverById],
    references: [users.id],
    relationName: "invoiceReceiver",
  }),
  payments: many(payments),
}))

export const paymentsRelations = relations(payments, ({ one }) => ({
  invoice: one(invoices, {
    fields: [payments.invoiceId],
    references: [invoices.id],
  }),
}))

// --- Reviews, Notifications & Disputes ---

export const reviewsRelations = relations(reviews, ({ one }) => ({
  project: one(projects, {
    fields: [reviews.projectId],
    references: [projects.id],
  }),
  reviewer: one(users, {
    fields: [reviews.reviewerId],
    references: [users.id],
  }),
  reviewee: one(users, {
    fields: [reviews.revieweeId],
    references: [users.id],
  }),
}))

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}))

export const disputesRelations = relations(disputes, ({ one }) => ({
  project: one(projects, {
    fields: [disputes.projectId],
    references: [projects.id],
  }),
  raisedBy: one(users, {
    fields: [disputes.raisedById],
    references: [users.id],
  }),
  against: one(users, {
    fields: [disputes.againstId],
    references: [users.id],
  }),
}))

export const fileUploadsRelations = relations(fileUploads, ({ one }) => ({
  project: one(projects, {
    fields: [fileUploads.projectId],
    references: [projects.id],
  }),
  uploader: one(users, {
    fields: [fileUploads.uploadedById],
    references: [users.id],
  }),
  milestone: one(milestones, {
    fields: [fileUploads.milestoneId],
    references: [milestones.id],
  }),
  message: one(messages, {
    fields: [fileUploads.messageId],
    references: [messages.id],
  }),
}))