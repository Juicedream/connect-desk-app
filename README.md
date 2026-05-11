# CONNECT DESK WEB APP

### The Problem:

I run a small digital agency and managing freelancers is chaos. Projects are tracked in spreadsheets, feedback gets buried in email threads, invoices are sent over WhatsApp, and there's no single place where a client can log in and see what's happening with their project. I need a platform that brings everything together.

### The solution:

ConnectDesk is a web app where agencies post projects, freelancers apply and get hired, and clients track progress — all in one place. Think a lightweight hybrid of Notion + Upwork, built lean.

### What the app should do:

- [ ] Client want to post a project brief and review freelancer proposals so I can hire the right person quickly.
- [ ] Freelancer want to apply to projects, submit deliverables, and get paid without chasing emails.
- [ ] Client want a live dashboard showing project milestones, file uploads, and messages so I always know what's happening.
- [ ] Admin manage users, flag disputes, and see platform-wide activity.
- [ ] Client reviews proposals and hires one freelancer per project.
- [ ] Both client and freelancer want in app messaging per project between themseleves.
- [ ] Client should be able to leave a review and rating per freelancer completed project (post project).
- [ ] Freelancers should have their profiles public with porfolio.
- [ ] Admin dispute resolution workflow.
- [ ] Admin analytics dashboard to manage users on the app.
- [ ] App should have an escrow style payment integration.
- [x] Landing page to show potential freelancers and clients what connect desk is all about
- [x] Light & Dark Mode should be available

### Nice to have:
- [ ] Client should have saved project templates to avoid having to retype the same project brief multiple times. Once a client has posted a project before, instead of filling out the whole project brief from scratch every time, they can save a project as a template and reuse it with one click — pre-filling the title, description, budget range, milestones, etc.


### Core features in phases

##### Phase 1 - Core (MVP)
These need to go `live first`:
```
- Auth (sign up / login) with role selection: Client, Freelancer, Admin
- Project posting by clients with title, description, budget, deadline
- Freelancer browse & apply to projects with a proposal
- Client reviews proposals and hires one freelancer per project
- Basic project dashboard — milestones, status updates, file uploads
- In-app messaging between client and freelancer per project
- Simple invoice generation and manual payment status tracking
```
##### Phase 2 - Growth & Scale
Once the `MVP is validated`:
```
- Escrow-style payment integration (Stripe)
- Review & rating system post-project
- Freelancer public profiles with portfolio
- Notification system (email + in-app)
- Admin dispute resolution workflow
- Analytics dashboard for admins
- Project templates for repeat clients
```

### Other information:

| Features            |                 Methods                  | Priority |
| :------------------ | :--------------------------------------: | -------: |
| Roles               |        Admin, Client, Freelancer         |     🔴 High |
| Authentication      |             Sign up / Login              |     🔴 High |
| Notification system |              Email + in-app              |     🔴 High |
| Messaging           |                  In-app                  |     🔴 High |
| Dashboard           | Milestones, Status Updates, File uploads |   🟡 Medium |
| Payments            |            Stripe / Paystack             |   🟡 Medium |
| Invoice generation  |                Freelancer                |   🟡 Medium |
| Dark Mode           |     App                                  | 🟢 Low
| Multi-Language Support           |     App                                  | 🟢 Low

### Technologies
 ##### ==Frontend 🖥️==
  - Next.js  ( Framework )
  - Tailwind CSS ( Styling )
  - Shadcn-ui ( Accessible Components )
  - Zustand ( State management )
  - React Hook Form + Zod ( Forms and Validation )
  - Typescript ( Code Language to ensure high code quality )

 ##### ==Backend 🔐==
  - Next.js ( Framework )
  - Next.js API Routes / Server Actions
  - Prisma ORM ( Clean database queries )
  - Supabase Auth ( Authentication, sessions and role based access management )
  - Zustand ( State management )
  - React Hook Form + Zod ( Forms and Validation )
  - Typescript ( Code Language to ensure high code quality )

 ##### ==Database ⛓️==
  - PostgreSQL ( Relational database )
  - Supabase ( Postgres itself, file storage, realtime )

 ##### ==File Uploads 📂==
  - Supabase Storage / Uploadthing ( File uploads )

 ##### ==Messaging 💬==
  - Supabase Realtime / Pusher ( Websocket based )

 ##### ==Payment 💰==
  - Stripe / Paystack ( Escrow Style Payments, invoicing and payouts )

 ##### ==Email Notifications 🔔==
  - Resend / any other mail services as fallback ( Modern email API )
  - React Email ( Build email templates in React )

 ##### ==Deployment 🚀==
  - Vercel ( Works with Next.js )
  - Supabase ( DB and storage hosting )


### Success Metrics 📈
- A client can post a project and hire a freelancer in under 5 minutes
- 90%+ uptime with no data loss on file uploads
- Freelancers can submit deliverables and see payment status without contacting support
- At least 3 full project cycles completed end-to-end in the first month of testing
- Page load times under 2 seconds on standard connections


### Guide
 
 ##### Prisma connection
 ```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
 ```
 ##### Enums
 ```ts
enum Role {
  CLIENT
  FREELANCER
  ADMIN
}

enum ProjectStatus {
  DRAFT
  OPEN
  IN_PROGRESS
  COMPLETED
  CANCELLED
  DISPUTED
}

enum ProposalStatus {
  PENDING
  ACCEPTED
  REJECTED
  WITHDRAWN
}

enum MilestoneStatus {
  PENDING
  IN_PROGRESS
  SUBMITTED
  APPROVED
  REJECTED
}

enum InvoiceStatus {
  DRAFT
  SENT
  PAID
  OVERDUE
  CANCELLED
}

enum PaymentStatus {
  PENDING
  ESCROW
  RELEASED
  REFUNDED
  FAILED
}

enum DisputeStatus {
  OPEN
  UNDER_REVIEW
  RESOLVED
  CLOSED
}

enum NotificationType {
  PROJECT_POSTED
  PROPOSAL_RECEIVED
  PROPOSAL_ACCEPTED
  PROPOSAL_REJECTED
  MILESTONE_SUBMITTED
  MILESTONE_APPROVED
  MILESTONE_REJECTED
  MESSAGE_RECEIVED
  INVOICE_SENT
  PAYMENT_RELEASED
  DISPUTE_OPENED
  DISPUTE_RESOLVED
  REVIEW_RECEIVED
}
 ```

