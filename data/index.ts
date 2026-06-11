import { CaseStudy } from "@/types";

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

export const SERVICES_DATA = [
  {
    title: "AI Development",
    iconKey: "ai",
    desc: "LLM apps, agents, fine-tuning, RAG, computer vision and ML systems.",
    features: [
      "Custom LLM agents",
      "RAG pipelines",
      "Fine-tuning",
      "Vector search",
    ],
    tags: ["OpenAI", "PyTorch", "LangChain", "Pinecone"],
  },
  {
    title: "Custom Software",
    iconKey: "software",
    desc: "Bespoke engineering for ambitious products with serious technical depth.",
    features: [
      "Architecture design",
      "Backend systems",
      "Data platforms",
      "Realtime sync",
    ],
    tags: ["Go", "Node.js", "Postgres", "Redis"],
  },
  {
    title: "SaaS Engineering",
    iconKey: "saas",
    desc: "Multi-tenant SaaS products built to scale from MVP to millions.",
    features: [
      "Multi-tenancy",
      "Billing & RBAC",
      "Onboarding flows",
      "Admin tooling",
    ],
    tags: ["Next.js", "Stripe", "Postgres", "AWS"],
  },
  {
    title: "Web Development",
    iconKey: "web",
    desc: "Blisteringly fast full-stack web platforms built with modern frameworks and edge-first architecture.",
    features: ["Design systems", "SSR & SEO", "Edge runtime", "Analytics"],
    tags: ["React", "Next.js", "Tailwind", "Cloudflare"],
  },
  {
    title: "Mobile Apps",
    iconKey: "mobile",
    desc: "Native-feeling iOS & Android experiences crafted with React Native and Swift / Kotlin.",
    features: [
      "Cross-platform",
      "Native modules",
      "Push & deep links",
      "Offline-first",
    ],
    tags: ["React Native", "Expo", "Swift", "Kotlin"],
  },
  {
    title: "API Integration",
    iconKey: "api",
    desc: "Connect anything — payments, CRMs, AI APIs, internal systems.",
    features: ["Webhook infra", "Sync engines", "Auth flows", "SDKs"],
    tags: ["GraphQL", "REST", "OAuth", "gRPC"],
  },
  {
    title: "Automation Systems",
    iconKey: "automation",
    desc: "Workflow engines, AI ops automation, internal tooling that scales.",
    features: ["Job queues", "Visual workflows", "AI triggers", "Audit logs"],
    tags: ["Temporal", "Zapier", "n8n", "Lambda"],
  },
  {
    title: "UI / UX Design",
    iconKey: "ui",
    desc: "Cinematic, opinionated interfaces that elevate brand and convert with every pixel.",
    features: ["Design systems", "Prototyping", "Motion", "Research"],
    tags: ["Figma", "Framer", "Motion", "Storybook"],
  },
  {
    title: "Cloud Systems",
    iconKey: "cloud",
    desc: "Resilient cloud infrastructure on AWS, Vercel & Cloudflare — observable, secure, automated.",
    features: [
      "IaC pipelines",
      "Observability",
      "Cost controls",
      "Zero-downtime",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
];
