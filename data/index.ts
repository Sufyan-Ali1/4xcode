import { CaseStudy } from "@/types";
import { Testimonial } from "@/types";
import { TeamMember } from "@/types";

// case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    tag: "AI SAAS",

    title: " Neura Dashboard ",
    description: "Realtime AI ops console for ML teams. ",
    image: "/assets/caseStudy.jpeg",
  },
  {
    id: "2",
    tag: "SAAS",
    title: "FlowDesk CRM",
    description: "Pipeline automation for revenue orgs.",
    image: "/assets/caseStudy.jpeg",
  },
  {
    id: "3",
    tag: "AI AGENT",
    title: "Aether Chat",
    description: "Multi-modal assistant w/ tool-use.",
    image: "/assets/caseStudy.jpeg",
  },
];
// services data

// case studies data
export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "neura-ops",
    tag: "AI",
    title: "Neura Ops",
    description: "Realtime AI ops dashboard for ML platform teams.",
    metric: "12k inferences/sec at 38% lower cost.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Next.js", "Python", "OpenAI"],
  },

  {
    id: "apex-vision",
    tag: "AI",
    title: "Apex Vision",
    description:
      "Realtime manufacturing defect tracking running on edge models.",
    metric: "99.4% precision detection accuracy.",
    image: "/assets/caseStudy.jpeg",
    tags: ["PyTorch", "FastAPI", "Docker"],
  },
  {
    id: "synapse-search",
    tag: "AI",
    title: "Synapse AI",
    description:
      "Enterprise semantic discovery engine over multi-format data lake records.",
    metric: "84% reduction in internal document retrieval times.",
    image: "/assets/caseStudy.jpeg",
    tags: ["LlamaIndex", "ChromaDB", "AWS"],
  },

  // ─── SAAS CATEGORY (4 PROJECTS) ───

  {
    id: "helix-saas",
    tag: "SAAS",
    title: "Helix Analytics",
    description:
      "Multi-tenant event processing tracking infrastructure engine.",
    metric: "140M pipeline data tracks analyzed daily.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Next.js", "ClickHouse", "Redis"],
  },

  {
    id: "vantage-tenant",
    tag: "SAAS",
    title: "Vantage Spaces",
    description:
      "Dynamic cloud resource broker and multi-region allocation layer.",
    metric: "Cut redundant engineering cloud spend by 32%.",
    image: "/assets/caseStudy.jpeg",
    tags: ["TypeScript", "GraphQL", "Kubernetes"],
  },

  {
    id: "vault-fintech",
    tag: "FINTECH",
    title: "Vault Fintech",
    description: "KYC + ledger backbone powering a neobank.",
    metric: "Cleared 1M users in 9 months.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Go", "Postgres", "AWS"],
  },
  {
    id: "quantum-trade",
    tag: "FINTECH",
    title: "Quantum Trade",
    description: "High-frequency algorithmic liquidity processing layer.",
    metric: "Zero-frictional latency down to sub-milliseconds.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Rust", "C++", "AWS"],
  },
  {
    id: "strata-ledger",
    tag: "FINTECH",
    title: "Strata Settlement",
    description: "Cross-border double-entry accounting reconciliation engine.",
    metric: "Audit verification times reduced from hours to seconds.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Rust", "Postgres", "gRPC"],
  },

  {
    id: "atlas-automate",
    tag: "AUTOMATION",
    title: "Atlas Automate",
    description: "Visual workflow engine with AI triggers.",
    metric: "60% reduction in manual ops.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Temporal", "TypeScript"],
  },

  {
    id: "vector-ops",
    tag: "AUTOMATION",
    title: "Vector Data Ingest",
    description:
      "Automated extraction and vector normalization pipeline for unstructured legacy PDFs.",
    metric: "Processed 8M documents with zero pipeline blocks.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Python", "Temporal", "FastAPI"],
  },

  // ─── E-COMMERCE CATEGORY (4 PROJECTS) ───
  {
    id: "mercury-shop",
    tag: "E-COMMERCE",
    title: "Mercury Shop",
    description: "Headless storefront with AI search & recs.",
    metric: "+27% conversion lift.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Next.js", "Shopify", "OpenAI"],
  },
  {
    id: "titan-cart",
    tag: "E-COMMERCE",
    title: "Titan Commerce",
    description:
      "Hyper-localized multi-currency checkout routing pipeline for high-traffic retailers.",
    metric: "Maintained 100% uptime through Black Friday traffic surges.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Next.js", "Tailwind", "Cloudflare Workers"],
  },
  {
    id: "velox-fulfillment",
    tag: "E-COMMERCE",
    title: "Velox Logistics",
    description:
      "Predictive fulfillment engine optimizing warehouse inventory layouts dynamically.",
    metric: "Decreased localized shipping overhead margins by 18%.",
    image: "/assets/caseStudy.jpeg",
    tags: ["Python", "Postgres", "Docker"],
  },
];
// testimonials data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    quote:
      "Diagnosed my air suspension fault in under an hour. Genuine parts, premium service. The workshop feels like a Formula 1 garage.",
    author: "Daniel R.",
    vehicle: "Range Rover Vogue",
    initial: "D",
  },
  {
    id: 2,
    stars: 5,
    quote:
      "Booked online, got a quote within 30 minutes, car back the next day. They spotted issues my dealer missed. Highly recommend.",
    author: "Sarah M.",
    vehicle: "Range Rover Sport",
    initial: "S",
  },
  {
    id: 3,
    stars: 5,
    quote:
      "Best Range Rover specialist I've used. Transparent pricing, honest advice and the car drives like new. Worth every penny.",
    author: "Omar K.",
    vehicle: "Defender 110",
    initial: "O",
  },
  {
    id: 4,
    stars: 5,
    quote:
      "Brakes, fluids and a full diagnostic done in a day. The booking experience and communication were outstanding.",
    author: "Priya S.",
    vehicle: "Velar HSE",
    initial: "P",
  },
];
// team data
export const TEAM: TeamMember[] = [
  { initials: "AC", name: "Aris Chen", role: "CEO & Engineering" },
  { initials: "MR", name: "Mateo Rivas", role: "Head of AI" },
  { initials: "LP", name: "Lena Park", role: "Design Director" },
  { initials: "YK", name: "Yusuf Khan", role: "Principal Engineer" },
];
