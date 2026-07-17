import type { Track } from "./types";

export interface TimelineData {
  eyebrow: string;
  title: string;
  subtitle: string;
  months: string[];
  tracks: Track[];
  legend: { variant: "prep" | "build" | "milestone"; label: string }[];
}

export const inHouseData: TimelineData = {
  eyebrow: "Implementation Roadmap",
  title: "In-house Developer · 6-Month Plan",
  subtitle: "GA, Legal & Compliance running since May; Marketing Budget module initiated in late June — full go-live in October.",
  months: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  tracks: [
    {
      title: "Master Data & Infrastructure",
      deliverable: "ready-to-use master data",
      bars: [
        {
          label: "Infra setup",
          start: 1,
          end: 1,
          variant: "prep",
          description: "Set up the local server, database schema, and standard project boilerplate for MRA Hub.",
          features: [
            "Initialize database (Supabase/Postgres)",
            "Repository setup & basic folder structure",
            "Set up environment variables & secrets",
          ],
        },
        {
          label: "Data schema",
          start: 2,
          end: 2,
          variant: "prep",
          description: "Define relational database models and master data tables.",
          features: [
            "Design entity relationship diagram (ERD)",
            "Define data validations and foreign keys",
            "Prepare migration scripts for standard databases",
          ],
        },
      ],
    },
    {
      title: "General Affairs",
      tag: { text: "since May", color: "green" },
      deliverable: "asset register + maintenance schedule",
      bars: [
        {
          label: "Asset Inventory & Barcode",
          start: 1,
          end: 2,
          variant: "build",
          description: "Core GA module to record, catalog, and print barcodes for all corporate assets.",
          features: [
            "Asset database registry (create/read/update/delete)",
            "Generate unique QR Code/Barcode per asset",
            "Mobile camera barcode scanner integration",
          ],
        },
        {
          label: "Maintenance",
          start: 3,
          end: 4,
          variant: "build",
          description: "Scheduler for preventive maintenance and logging repair requests for physical assets.",
          features: [
            "Scheduled maintenance tasks (daily, weekly, monthly)",
            "Submit ticketing system for asset damage",
            "Assign tickets to technicians with status flow",
          ],
        },
        {
          label: "Rental & Leasing",
          start: 5,
          end: 6,
          variant: "build",
          description: "Tracks corporate properties, contracts, rental schedules, and rent-to-own assets.",
          features: [
            "Record lease agreements & tenant contact details",
            "Automatic billing calculations",
            "Tenant check-in / check-out tracker",
          ],
        },
      ],
    },
    {
      title: "Legal & Compliance",
      tag: { text: "since May", color: "green" },
      deliverable: "contract repository + reminders",
      bars: [
        {
          label: "Contract Repository",
          start: 1,
          end: 2,
          variant: "build",
          description: "Secure storage for all legal agreements, contracts, and vendor documents.",
          features: [
            "Categorized document repository (e.g. Vendor, Partner, Employment)",
            "Global full-text search inside contracts",
            "Access control lists (ACL) for sensitive documents",
          ],
        },
        {
          label: "Milestone Alerts",
          start: 3,
          end: 4,
          variant: "build",
          description: "Notification engine to warn legal team of upcoming contract expirations.",
          features: [
            "Configurable email notifications (e.g. 90, 60, 30 days before expiration)",
            "Dashboard timeline of contract dates",
            "Integration with corporate messaging channels",
          ],
        },
        {
          label: "Compliance Matrix & SOP",
          start: 5,
          end: 8,
          variant: "build",
          description: "Central checklist for standard operating procedures (SOPs) and compliance checklists.",
          features: [
            "SOP upload and department-wide document publishing",
            "Employee read receipt audits",
            "Regulatory compliance requirement mapping",
          ],
        },
      ],
    },
    {
      title: "Marketing Budget",
      tag: { text: "late June", color: "amber" },
      deliverable: "end-to-end budget flow",
      bars: [
        {
          label: "Budget Plan",
          start: 4,
          end: 5,
          variant: "build",
          description: "Enables marketing managers to propose campaigns and request budget allocations.",
          features: [
            "Create campaign proposals with cost line-items",
            "Submit budget for multi-level manager approval",
            "Remaining budget auto-calculators",
          ],
        },
        {
          label: "Magic Link",
          start: 6,
          end: 7,
          variant: "build",
          description: "Secures external manager approvals without forcing them to log into the main system.",
          features: [
            "One-click secure login links sent via Email",
            "Approval/Rejection buttons in the email/landing page",
            "Link expiration (token validity) configurations",
          ],
        },
        {
          label: "Locking",
          start: 8,
          end: 9,
          variant: "build",
          description: "Prevents modification of campaign budgets once approved or locked by finance.",
          features: [
            "Freeze budget lines for active campaigns",
            "Audit trail of who modified budget structures",
            "Unlock requests workflow for admin overrides",
          ],
        },
        {
          label: "Payment",
          start: 10,
          end: 11,
          variant: "build",
          description: "Submits verified budget details to the finance queue for final disbursement processing.",
          features: [
            "Generate payment request vouchers",
            "Link invoices to campaign budget lines",
            "Mark payment status (Pending, Paid, Rejected)",
          ],
        },
      ],
    },
    {
      title: "Integration, UAT & Migration",
      deliverable: "UAT sign-off + migrated data",
      bars: [
        {
          label: "UAT",
          start: 9,
          end: 9,
          variant: "prep",
          description: "User Acceptance Testing phase to test all modules against real scenarios.",
          features: [
            "Scenario-based QA runs by operational users",
            "Bug reporting and resolution sprints",
            "Final sign-off from department heads",
          ],
        },
        {
          label: "Migration",
          start: 10,
          end: 11,
          variant: "prep",
          description: "Import existing spreadsheets and legacy data into the production database.",
          features: [
            "Excel / CSV batch data importer scripts",
            "Data mapping & duplicate resolution",
            "Pre-migration sanity checks & audits",
          ],
        },
      ],
    },
    {
      title: "Go-Live & Adoption",
      deliverable: "rollout, training & hypercare",
      bars: [
        {
          label: "★ Go-Live",
          start: 11,
          end: 12,
          variant: "milestone",
          description: "Deploy MRA Hub to production and conduct onboarding workshops.",
          features: [
            "Production deployment (Vercel & AWS/Supabase)",
            "Admin & staff training sessions",
            "Hypercare support week (on-call bug fixes)",
          ],
        },
      ],
    },
  ],
  legend: [
    { variant: "prep", label: "Preparation & testing" },
    { variant: "build", label: "Module building" },
    { variant: "milestone", label: "Go-Live Milestone · October 2026" },
  ],
};

export interface AgencyDeliverables {
  phase1: { title: string; items: string[] };
  phase2: { title: string; items: string[] };
}

export interface AgencyData extends TimelineData {
  deliverables: AgencyDeliverables;
  whyDecember: { title: string; text: string };
}

export const agencyData: AgencyData = {
  eyebrow: "OLAP & Dashboarding Track",
  title: "MRAMU · Two-Phase Plan",
  subtitle: "Phase 1 (FDM) runs August–November; Phase 2 (NetSuite) integrated in December when data stabilizes — Go-live March 2027.",
  months: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  tracks: [
    {
      title: "Foundation & Infra",
      deliverable: "discovery, RBAC, AWS setup (A1–A2)",
      bars: [
        {
          label: "Infra Setup",
          start: 1,
          end: 2,
          variant: "prep",
          description: "Set up the AWS environment, VPC, secure database instances, and base Next.js boilerplate.",
          features: [
            "AWS VPC & Security Group configuration",
            "AWS Secrets Manager & RDS setup",
            "Base REST/GraphQL API setup",
          ],
        },
      ],
    },
    {
      title: "S3 & Connectors",
      deliverable: "raw layer + source ingestion (A3a–A3b)",
      bars: [
        {
          label: "S3 + FDM",
          start: 1,
          end: 4,
          variant: "prep",
          description: "Establish the Amazon S3 raw data layer and ingest the first data source (FDM).",
          features: [
            "Configure S3 bucket lifecycle policies",
            "Set up FDM schema and batch importers",
            "Implement secure IAM access policies",
          ],
        },
        {
          label: "★ NetSuite",
          start: 9,
          end: 10,
          variant: "build",
          description: "Kickoff NetSuite ERP data integration once ERP data stabilizes.",
          features: [
            "Connect to Oracle NetSuite API (SuiteTalk)",
            "Fetch journal entries, purchases, and sales ledgers",
            "Handle error retries & data backfills",
          ],
        },
      ],
    },
    {
      title: "Scheduling & Semantic",
      deliverable: "DWH schema, entity resolution (A3c)",
      bars: [
        {
          label: "Semantic Layer",
          start: 3,
          end: 6,
          variant: "prep",
          description: "Build the database warehouse schema, scheduling jobs, and entity resolution models.",
          features: [
            "Data scheduling system (cron pipelines)",
            "DWH tables & dimensional modeling",
            "Cross-source Entity Resolution (merging customer profiles)",
          ],
        },
        {
          label: "+ NetSuite",
          start: 9,
          end: 14,
          variant: "build",
          description: "Integrate NetSuite accounts and dimensions into the existing semantic warehouse layer.",
          features: [
            "Map NetSuite Chart of Accounts to analytics tables",
            "Create consolidated financial semantic views",
            "Validate ledger records against FDM entries",
          ],
        },
      ],
    },
    {
      title: "Data Quality",
      deliverable: "watchdog, alerting, backfill (A3d)",
      bars: [
        {
          label: "Data Quality",
          start: 5,
          end: 6,
          variant: "prep",
          description: "Establish a watchdog service to monitor data health and send alerts.",
          features: [
            "Write automated data validation checks",
            "Configure notification system (Slack/Email)",
            "Implement automatic query retry logic",
          ],
        },
      ],
    },
    {
      title: "Dashboards",
      deliverable: "7 pages per Mockup v2 (A4)",
      bars: [
        {
          label: "Wave 1 (FDM)",
          start: 5,
          end: 8,
          variant: "prep",
          description: "Develop and release the first batch of 4 executive dashboards using FDM source.",
          features: [
            "Executive Dashboard v1",
            "GA Dashboard",
            "Compliance & Legal Dashboard",
            "Data Watchdog Dashboard",
          ],
        },
        {
          label: "Wave 2 (NetSuite)",
          start: 11,
          end: 16,
          variant: "build",
          description: "Develop and release the final batch of 4 dashboards utilizing ERP data.",
          features: [
            "HR Dashboard",
            "Financial Dashboard",
            "Operational & Retail Dashboard",
            "Executive Dashboard enriched",
          ],
        },
      ],
    },
    {
      title: "QA, UAT & Go-Live",
      deliverable: "testing, UAT, revision, handover (A5)",
      bars: [
        {
          label: "QA",
          start: 7,
          end: 8,
          variant: "prep",
          description: "Conduct quality assurance, security audits, and preliminary user testing.",
          features: [
            "Perform vulnerability scanning",
            "Cross-browser visual testing",
            "Code formatting & query optimization reviews",
          ],
        },
        {
          label: "QA + Rev + UAT · ★ Go-Live",
          start: 9,
          end: 16,
          variant: "build",
          description: "Final testing cycle, user acceptance sign-offs, data migration audits, and production launch.",
          features: [
            "Comprehensive User Acceptance Testing (UAT)",
            "Deploy pipeline to production environment",
            "System handover and developer documentation release",
          ],
        },
      ],
    },
  ],
  legend: [
    { variant: "prep", label: "Phase 1 — FDM Data Source" },
    { variant: "build", label: "Phase 2 — NetSuite Integration" },
    { variant: "milestone", label: "Milestones — NetSuite (Dec 2026) · Go-Live (Mar 2027)" },
  ],
  deliverables: {
    phase1: {
      title: "Phase 1 (Aug – Nov 2026 · FDM Source)",
      items: [
        "Executive Dashboard v1",
        "GA Dashboard",
        "Compliance & Legal Dashboard",
        "Data Watchdog"
      ]
    },
    phase2: {
      title: "Phase 2 (Dec 2026 – Q1 2027 · NetSuite)",
      items: [
        "HR Dashboard",
        "Financial Dashboard",
        "Operational & Retail Dashboard",
        "Executive Dashboard enriched"
      ]
    }
  },
  whyDecember: {
    title: "Why December",
    text: "NetSuite ERP soft-launches in September 2026 — we estimate its data won't be reliable enough to build on until December 2026, which is the trigger for Phase 2 kickoff. Phase 1 runs fully on FDM in the meantime, including working out exactly which historical records in FDM are usable, so dashboard delivery doesn't wait on NetSuite maturing. FDM and NetSuite data both land in the same S3 raw layer + RDS warehouse either way — Phase 2 extends the existing pipeline, it doesn't rebuild it."
  }
};
