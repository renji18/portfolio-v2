export const stories = [
  {
    title: "Designing a Unified Job Architecture",
    category: "System Design",
    description:
      "How I replaced separate Estimate, Repair Order, and Inspection workflows with a single Job architecture that eliminated duplicated business logic and simplified reporting.",
    readTime: "5 min read",
    slug: "unified-job-architecture",
  },

  {
    title: "Making Inventory Counts Impossible to Break",
    category: "Backend Engineering",
    description:
      "The challenges of tracking parts across estimates, reservations, ordering, technician usage, invoicing, and returns while preventing negative inventory.",
    readTime: "6 min read",
    slug: "inventory-consistency",
  },

  {
    title: "The Payment Bug That Forced a Redesign",
    category: "Debugging",
    description:
      "A production issue involving partial payments, loyalty points, and mixed payment methods that led to redesigning the entire payment reconciliation engine.",
    readTime: "4 min read",
    slug: "payment-engine-redesign",
  },

  {
    title: "Taking OCR Accuracy from 50% to 90%",
    category: "Computer Vision",
    description:
      "Lessons learned while building a license plate recognition system for a government-backed public safety project.",
    readTime: "5 min read",
    slug: "ocr-accuracy",
  },
];

export const story = [
  {
    slug: "unified-job-architecture",

    category: "System Design",

    title: "Designing a Unified Job Architecture",

    readTime: "5 min read",

    tagline:
      "Replacing separate Estimate, Repair Order, and Inspection workflows with a single scalable domain model.",

    problem:
      "Edge Autosoft originally treated estimates, repair orders, and inspections as independent workflows. Each contained duplicated logic for services, pricing, taxes, technicians, status tracking, and reporting.",

    whyHard: [
      "Multiple workflows represented the same business process.",
      "Pricing logic existed in multiple places.",
      "Reporting required querying several unrelated entities.",
      "Future features required implementing logic repeatedly.",
    ],

    solution: [
      "Created a unified Job entity.",
      "Introduced JobType and JobStatus.",
      "Attached services, parts, technicians, and inspections through shared relationships.",
      "Converted workflow progression into state transitions.",
    ],

    result: [
      "Removed duplicated business logic.",
      "Created a shared pricing engine.",
      "Simplified reporting.",
      "Reduced future development effort.",
    ],

    lessons: [
      "Good domain models compound in value as systems grow.",
      "Most complexity comes from duplicated concepts rather than missing abstractions.",
      "Workflow engines should model state transitions instead of separate entities.",
    ],
  },
  {
    slug: "inventory-consistency",

    category: "Backend Engineering",

    title: "Making Inventory Counts Impossible to Break",

    readTime: "6 min read",

    tagline:
      "Designing inventory workflows capable of handling reservations, usage, invoicing, returns, and ordering.",

    problem:
      "A single part can move through estimates, repair orders, supplier orders, technician usage, invoices, and returns. Inventory counts must remain accurate at every stage.",

    whyHard: [
      "Race conditions between users.",
      "Double reservation risks.",
      "Negative stock scenarios.",
      "Partial usage workflows.",
      "Order modifications after approval.",
    ],

    solution: [
      "Separated available, reserved, and used quantities.",
      "Tracked inventory movements through dedicated lifecycle records.",
      "Built explicit inventory state transitions.",
      "Added safeguards preventing invalid stock updates.",
    ],

    result: [
      "Accurate inventory tracking.",
      "Prevention of negative stock situations.",
      "Reliable reporting.",
      "Scalable inventory architecture.",
    ],

    lessons: [
      "Inventory is fundamentally a state-transition problem.",
      "Never derive stock counts from business assumptions.",
      "Explicit lifecycle tracking simplifies debugging.",
    ],
  },
  {
    slug: "payment-engine-redesign",

    category: "Debugging",

    title: "The Payment Bug That Forced a Redesign",

    readTime: "4 min read",

    tagline:
      "How a production payment bug led to redesigning financial calculations around invariants.",

    problem:
      "Invoice balances occasionally drifted out of sync when partial payments, loyalty points, cash discounts, and mixed payment methods were combined.",

    whyHard: [
      "Multiple payment methods.",
      "Partial payments.",
      "Cash discounts.",
      "Loyalty redemption.",
      "Derived values stored across several calculations.",
    ],

    solution: [
      "Reduced calculations to four financial values.",
      "Paid Amount",
      "Discount Amount",
      "Loyalty Amount",
      "Pending Amount",
    ],

    result: [
      "Consistent invoice balances.",
      "Simplified debugging.",
      "Accurate reconciliation.",
      "Cleaner payment architecture.",
    ],

    lessons: [
      "Financial systems should be built around invariants.",
      "Derived values create hidden complexity.",
      "Simple equations outperform complex business rules.",
    ],
  },
  {
    slug: "ocr-accuracy",

    category: "Computer Vision",

    title: "Taking OCR Accuracy from 50% to 90%",

    readTime: "5 min read",

    tagline:
      "Lessons from building a vehicle license plate recognition system for public safety applications.",

    problem:
      "The initial OCR engine achieved nearly perfect results on still images but failed when exposed to real toll booth footage.",

    whyHard: [
      "Motion blur.",
      "Poor lighting.",
      "Vehicle speed.",
      "Camera angle variations.",
      "Real-world image quality.",
    ],

    solution: [
      "Collected real toll booth footage.",
      "Adjusted image preprocessing.",
      "Improved plate extraction.",
      "Tuned OCR workflows.",
      "Repeated testing against production-like data.",
    ],

    result: [
      "Improved recognition accuracy from roughly 50-60% to above 90%.",
      "Successful deployment.",
      "Government adoption.",
      "Recognition from law enforcement stakeholders.",
    ],

    lessons: [
      "Production data beats synthetic testing.",
      "Real-world constraints expose hidden assumptions.",
      "Accuracy metrics mean little without realistic datasets.",
    ],
  },
];
