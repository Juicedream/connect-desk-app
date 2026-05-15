import { pgEnum } from "drizzle-orm/pg-core";

// 1. Always use String Enums for Database Mapping
export enum Role {
  CLIENT = "client",
  FREELANCER = "freelancer",
  ADMIN = "admin",
}

export enum ProjectStatus {
  DRAFT = "draft",
  OPEN = "open",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  DISPUTED = "disputed",
}

export enum ProposalStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  WITHDRAWN = "withdrawn",
}

export enum MilestoneStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  SUBMITTED = "submitted",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export enum InvoiceStatus {
  DRAFT = "draft",
  SENT = "sent",
  PAID = "paid",
  OVERDUE = "overdue",
  CANCELLED = "cancelled",
}

export enum PaymentStatus {
  PENDING = "pending",
  ESCROW = "escrow",
  RELEASED = "released",
  REFUNDED = "refunded",
  FAILED = "failed",
}

export enum DisputeStatus {
  OPEN = "open",
  UNDER_REVIEW = "under_review",
  RESOLVED = "resolved",
  CLOSED = "closed",
}

export enum NotificationType {
  PROJECT_POSTED = "project_posted",
  PROPOSAL_RECEIVED = "proposal_received",
  PROPOSAL_ACCEPTED = "proposal_accepted",
  PROPOSAL_REJECTED = "proposal_rejected",
  MILESTONE_SUBMITTED = "milestone_submitted",
  MILESTONE_APPROVED = "milestone_approved",
  MILESTONE_REJECTED = "milestone_rejected",
  MESSAGE_RECEIVED = "message_received",
  INVOICE_SENT = "invoice_sent",
  PAYMENT_RELEASED = "payment_released",
  DISPUTE_OPENED = "dispute_opened",
  DISPUTE_RESOLVED = "dispute_resolved",
  REVIEW_RECEIVED = "review_received",
}

export enum AccountType {
  INDIVIDUAL = "individual",
  COMPANY = "company",
}

// 2. Helper to extract Enum values as a clean Drizzle-compatible Tuple
// This satisfies the [string, ...string[]] requirement and avoids boilerplate
const enumToPgValues = <T extends Record<string, string>>(e: T) => {
  return Object.values(e) as [string, ...string[]];
};

// 3. Export Drizzle Enum Definitions
// 3. Export Drizzle Enum Definitions with camelCase Tags
export const rolesEnum = pgEnum("roleType", enumToPgValues(Role));
export const projectStatusEnum = pgEnum("projectStatus", enumToPgValues(ProjectStatus));
export const proposalStatusEnum = pgEnum("proposalStatus", enumToPgValues(ProposalStatus));
export const milestoneStatusEnum = pgEnum("milestoneStatus", enumToPgValues(MilestoneStatus));
export const invoiceStatusEnum = pgEnum("invoiceStatus", enumToPgValues(InvoiceStatus));
export const paymentStatusEnum = pgEnum("paymentStatus", enumToPgValues(PaymentStatus));
export const disputeStatusEnum = pgEnum("disputeStatus", enumToPgValues(DisputeStatus));
export const notificationTypeEnum = pgEnum("notificationType", enumToPgValues(NotificationType));
export const accountTypeEnum = pgEnum("accountType", enumToPgValues(AccountType));