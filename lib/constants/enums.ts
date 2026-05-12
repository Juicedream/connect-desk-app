enum Role {
  CLIENT,
  FREELANCER,
  ADMIN,
}

enum ProjectStatus {
  DRAFT,
  OPEN,
  IN_PROGRESS,
  COMPLETED,
  CANCELLED,
  DISPUTED,
}

enum ProposalStatus {
  PENDING,
  ACCEPTED,
  REJECTED,
  WITHDRAWN,
}

enum MilestoneStatus {
  PENDING,
  IN_PROGRESS,
  SUBMITTED,
  APPROVED,
  REJECTED,
}

enum InvoiceStatus {
  DRAFT,
  SENT,
  PAID,
  OVERDUE,
  CANCELLED,
}

enum PaymentStatus {
  PENDING,
  ESCROW,
  RELEASED,
  REFUNDED,
  FAILED,
}

enum DisputeStatus {
  OPEN,
  UNDER_REVIEW,
  RESOLVED,
  CLOSED,
}

enum NotificationType {
  PROJECT_POSTED,
  PROPOSAL_RECEIVED,
  PROPOSAL_ACCEPTED,
  PROPOSAL_REJECTED,
  MILESTONE_SUBMITTED,
  MILESTONE_APPROVED,
  MILESTONE_REJECTED,
  MESSAGE_RECEIVED,
  INVOICE_SENT,
  PAYMENT_RELEASED,
  DISPUTE_OPENED,
  DISPUTE_RESOLVED,
  REVIEW_RECEIVED,
}

enum AccountType {
  INDIVIDUAL,
  COMPANY,
}

export  {
  Role,
  ProjectStatus,
  DisputeStatus,
  ProposalStatus,
  InvoiceStatus,
  PaymentStatus,
  NotificationType,
  AccountType,
  MilestoneStatus
}