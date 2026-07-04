export const caseStudies = [
  {
    title: "Edge Autosoft",
    category: "Automotive ERP Platform",
    metrics: ["23 Modules", "84 Entities"],
    description:
      "Automotive ERP platform covering CRM, inventory, repair workflows, invoicing, reporting, loyalty programs, and payments.",
    slug: "edge-autosoft",
  },
  {
    title: "Capital Lending",
    category: "Lending Workflow Platform",
    metrics: ["Routing Engine", "State Machine"],
    description:
      "Platform connecting borrowers, lenders, and agents through lender routing, application workflows, offer management, and funding lifecycle automation.",
    slug: "capital-lending",
  },
  {
    title: "Muno",
    category: "Community Management Platform",
    metrics: ["1000+ Users", "Multi-Tenant"],
    description:
      "Multi-tenant membership and community management platform supporting events, donations, memberships, registrations, payments, and self-service kiosks.",
    slug: "muno",
  },
  {
    title: "Secure Scan",
    category: "Public Safety Platform",
    metrics: ["90%+ OCR", "Police Integration"],
    description:
      "Computer vision platform using OpenCV and OCR to automate vehicle verification workflows and support public-safety initiatives.",
    slug: "secure-scan",
  },
];

export const caseStudy = [
  {
    name: "Edge Autosoft",
    category: "Automotive ERP Platform",
    image: "/assets/projects/autosoft.png",
    slug: "edge-autosoft",
    tagline:
      "A unified automotive ERP platform built to streamline repair operations, inventory management, invoicing, reporting, and customer workflows.",
    overview:
      "Edge Autosoft is a SaaS platform designed for automotive repair shops and service centers. The platform consolidates CRM, inventory management, repair workflows, invoicing, reporting, technician operations, loyalty programs, and payment processing into a single system.",
    metrics: [
      {
        value: "23",
        label: "Modules Delivered",
      },
      {
        value: "84+",
        label: "Database Entities",
      },
      {
        value: "100s",
        label: "API Operations",
      },
      {
        value: "5",
        label: "Engineers",
      },
    ],
    challenge:
      "Automotive service centers often rely on disconnected tools for customer management, estimates, repair orders, inventory, invoicing, and reporting. This leads to duplicated data, operational inefficiencies, inconsistent workflows, and limited visibility across the business.",
    architectureDecisions: [
      {
        title: "Unified Job Architecture",
        description:
          "Replaced separate Estimate, Repair Order, and Inspection workflows with a single Job domain model using JobType and JobStatus based state transitions.",
      },
      {
        title: "Inventory Lifecycle Design",
        description:
          "Designed inventory workflows supporting ordering, reservations, technician usage, invoicing, returns, and stock reconciliation.",
      },
      {
        title: "Shared Pricing Engine",
        description:
          "Centralized pricing, taxes, discounts, fees, loyalty programs, and payment calculations to eliminate duplicate business logic.",
      },
    ],
    engineeringChallenges: [
      {
        title: "Inventory Consistency",
        description:
          "Maintaining accurate inventory counts across estimates, repair orders, supplier ordering, technician usage, invoicing, and returns while preventing negative stock and double reservations.",
      },
      {
        title: "Dynamic Pricing Calculations",
        description:
          "Supporting services, parts, taxes, discounts, loyalty programs, cash discounts, and payment adjustments while guaranteeing financial consistency.",
      },
      {
        title: "Payment Reconciliation",
        description:
          "Redesigned invoice payment calculations around accounting invariants to support partial payments, mixed payment methods, loyalty redemption, and cash discounts.",
      },
    ],
    impact: [
      "Delivered a complete automotive ERP platform covering end-to-end repair operations.",
      "Reduced duplicate business logic through a unified workflow architecture.",
      "Created scalable foundations for future modules and reporting capabilities.",
      "Supported complex inventory, payment, and technician workflows through a single platform.",
    ],
    lessonsLearned: [
      "Domain modeling decisions become exponentially more valuable as systems grow.",
      "Financial systems are easier to maintain when built around strict invariants.",
      "Inventory management is fundamentally a state-transition problem rather than a CRUD problem.",
      "Reducing duplicate business logic creates long-term engineering leverage.",
    ],
    techStack: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "React",
      "Redux Toolkit",
      "TailwindCSS",
    ],
  },
  {
    name: "Muno",
    category: "Community Management Platform",
    image: "/assets/projects/muno.png",
    slug: "muno",

    tagline:
      "A multi-tenant community management platform helping organizations manage memberships, events, donations, registrations, and payments from a unified system.",

    overview:
      "Muno is an enterprise community management platform built for associations, chambers of commerce, charities, clubs, chapters, and non-profit organizations. The platform supports memberships, family management, event registrations, seating management, donations, kiosk payments, and organization-wide administration while maintaining complete tenant isolation.",

    metrics: [
      {
        value: "1000+",
        label: "Active Users",
      },
      {
        value: "5",
        label: "Organizations",
      },
      {
        value: "Multi",
        label: "Tenant Platform",
      },
      {
        value: "1",
        label: "Primary Backend Lead",
      },
    ],

    challenge:
      "Community organizations often rely on separate systems for memberships, events, donations, registrations, and payments. Maintaining consistency across these workflows while supporting multiple organizations within the same platform required careful architecture and strong tenant isolation.",

    architectureDecisions: [
      {
        title: "Multi-Tenant Foundation",
        description:
          "Designed the platform around an organization-first architecture where memberships, events, donations, forms, payments, and kiosks belong to isolated tenant organizations.",
      },
      {
        title: "Unified Membership Model",
        description:
          "Created flexible membership workflows supporting families, individuals, businesses, recurring memberships, and organization-specific plans.",
      },
      {
        title: "Shared Payment Infrastructure",
        description:
          "Centralized membership payments, donations, event registrations, and terminal transactions into a common payment processing architecture.",
      },
    ],

    engineeringChallenges: [
      {
        title: "Event Registration & Seating",
        description:
          "Designed registration workflows supporting members, guests, dynamic pricing rules, floor plans, table assignments, reserved seating, and capacity management.",
      },
      {
        title: "Concurrent Seat Reservations",
        description:
          "Prevented double booking while maintaining accurate seat availability during concurrent registrations.",
      },
      {
        title: "Payment Idempotency",
        description:
          "Implemented idempotency keys across payment flows to eliminate duplicate transactions caused by retries, refreshes, or double-click submissions.",
      },
    ],

    impact: [
      "Delivered the company's most successful product serving multiple organizations.",
      "Created a scalable foundation supporting memberships, events, donations, and kiosks through a single platform.",
      "Enabled organizations to manage members, events, payments, and fundraising from one system.",
      "Successfully onboarded multiple paying organizations and over 1000 active users.",
    ],

    lessonsLearned: [
      "Multi-tenant systems must be designed around tenant boundaries from day one.",
      "Concurrency becomes a business problem when dealing with registrations and reservations.",
      "Payment systems require defensive design against duplicate submissions.",
      "Shared platform architecture creates leverage across multiple customer organizations.",
    ],

    techStack: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "React",
      "Redux Toolkit",
      "Dejavoo Integration",
    ],
  },
  {
    name: "Capital Lending",
    category: "FinTech Lending Platform",
    image: "/assets/projects/capital-lending.png",
    slug: "capital-lending",

    tagline:
      "A lending workflow platform connecting borrowers, lenders, and agents through automated routing, offer management, and funding workflows.",

    overview:
      "Capital Lending is a financial platform designed to bridge the gap between borrowers, lenders, and intermediaries. The system manages the complete application lifecycle from submission through funding while handling lender matching, offers, commissions, document collection, and auditing.",

    metrics: [
      {
        value: "4",
        label: "User Roles",
      },
      {
        value: "100%",
        label: "Backend Ownership",
      },
      {
        value: "2",
        label: "Engineering Team",
      },
      {
        value: "1",
        label: "Primary Developer",
      },
    ],

    challenge:
      "Every lender has different qualification rules, funding products, geographic restrictions, revenue requirements, and approval criteria. The platform needed to route applications intelligently while maintaining transparency, auditability, and workflow integrity.",

    architectureDecisions: [
      {
        title: "Dynamic Lender Routing Engine",
        description:
          "Built a routing engine capable of matching applications to lenders based on evolving eligibility rules and product requirements.",
      },
      {
        title: "Routing Snapshot Preservation",
        description:
          "Stored lender selection decisions alongside application history to preserve explainability even after future rule changes.",
      },
      {
        title: "Workflow State Machine",
        description:
          "Implemented controlled application state transitions preventing invalid workflow progression and maintaining auditability.",
      },
    ],

    engineeringChallenges: [
      {
        title: "Eligibility Rule Evaluation",
        description:
          "Evaluated lender criteria including funding amounts, industry restrictions, revenue thresholds, business age, geography, and product types.",
      },
      {
        title: "Workflow Enforcement",
        description:
          "Prevented invalid application transitions while supporting borrower, lender, agent, operator, and administrator workflows.",
      },
      {
        title: "Audit Trail Design",
        description:
          "Created detailed audit records for every significant workflow transition and business action.",
      },
    ],

    impact: [
      "Built a complete funding lifecycle platform from application to funding completion.",
      "Created explainable lender-routing mechanisms preserving historical decision context.",
      "Reduced operational complexity through workflow automation.",
      "Enabled multiple stakeholders to collaborate within a controlled workflow environment.",
    ],

    lessonsLearned: [
      "Business workflows become easier to maintain when modeled as state machines.",
      "Auditability should be designed into financial systems rather than added later.",
      "Preserving historical business decisions is often more important than storing current rules.",
      "Explainability builds trust in automated decision systems.",
    ],

    techStack: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "React",
      "Redux Toolkit",
      "JWT",
      "AWS",
    ],
  },

  {
    name: "Secure Scan",
    category: "Public Safety & Computer Vision Platform",
    image: "/assets/projects/secure-scan.png",
    slug: "secure-scan",

    tagline:
      "A computer vision platform designed to assist law-enforcement agencies through automated vehicle verification and license plate recognition.",

    overview:
      "Secure Scan is a government-associated public safety project deployed at toll booths to identify vehicles against police-maintained databases. The platform combines computer vision, OCR, backend services, and government APIs to automate vehicle verification workflows and improve security operations.",

    metrics: [
      {
        value: "90%+",
        label: "OCR Accuracy",
      },
      {
        value: "1",
        label: "Recognition Engine",
      },
      {
        value: "Government",
        label: "Deployment",
      },
      {
        value: "Award",
        label: "Police Recognition",
      },
    ],

    challenge:
      "License plate recognition performed well on static images but accuracy dropped significantly when processing real toll-booth video streams containing poor angles, motion blur, lighting variations, and inconsistent plate visibility.",

    architectureDecisions: [
      {
        title: "Hybrid Recognition Pipeline",
        description:
          "Designed a pipeline combining OpenCV image processing, OCR extraction, backend orchestration, and government verification services.",
      },
      {
        title: "Secure Deployment Model",
        description:
          "Implemented system restrictions preventing unauthorized shutdown or interference with active monitoring operations.",
      },
      {
        title: "Verification Workflow Integration",
        description:
          "Connected vehicle recognition results directly with police-maintained databases and alerting systems.",
      },
    ],

    engineeringChallenges: [
      {
        title: "Real-World OCR Accuracy",
        description:
          "Improved recognition accuracy from approximately 50-60% to above 90% by tuning image-processing workflows and training against real-world toll booth footage.",
      },
      {
        title: "Video Processing Reliability",
        description:
          "Handled inconsistent lighting, motion blur, camera angles, and varying license plate conditions.",
      },
      {
        title: "Government System Integration",
        description:
          "Built secure integrations between the recognition engine, backend services, and law-enforcement APIs.",
      },
    ],

    impact: [
      "Successfully deployed a vehicle verification platform supporting public safety operations.",
      "Improved real-world OCR accuracy from approximately 50% to over 90%.",
      "Contributed to government-backed technology initiatives focused on law-enforcement efficiency.",
      "Received recognition from the Superintendent of Police for contributions to the project.",
    ],

    lessonsLearned: [
      "Machine-learning and computer-vision systems behave very differently in production environments.",
      "Real-world datasets expose weaknesses that synthetic testing rarely reveals.",
      "Operational reliability is as important as recognition accuracy.",
      "Public-sector software requires strong security and deployment discipline.",
    ],

    techStack: [
      "Python",
      "OpenCV",
      "OCR",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "React",
      "AWS",
    ],
  },
];
