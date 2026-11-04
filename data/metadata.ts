
import type { Metadata } from "next";

export const pageMetadata = {
  home: {
    title: "4xCode | AI-Powered Software, SaaS & Web Development Studio",
    description:
      "4xCode engineers high-performance SaaS, AI agents, and web platforms for ambitious brands. Senior team, 132+ products shipped. Start your project today. ",
    icons: {
      icon: "./favicon.ico",
    },
    alternates: {
      canonical: "https://www.4xcode.com",
    },
  },

  services: {
    title: "Software Development Services for AI, SaaS & Web | 4xcode",
    description: "Explore 4xcode software development services across AI, custom software, SaaS, web, mobile, APIs and cloud, all from one team. Find the right service.",
    alternates: {
      canonical: "https://www.4xcode.com/service",
    },
  },

} satisfies Record<string, Metadata>;

// Service detail pages (key = URL slug)
export const serviceMetadata: Record<string, Metadata> = {
  "web-development": {
    title: "Website Development Services: Fast & SEO-Ready | 4xcode",
    description:
      "Website development services with React and Next.js, built for fast loading, clean SEO structure and edge delivery. Get a quote for your next website.",
  },

  "mobile-apps": {
    title: "Custom Mobile App Development Company | iOS & Android",
    description:
      "4xcode is a custom mobile app development company building native-feel iOS and Android apps with React Native, Swift and Kotlin. Discuss your app idea.",
  },

  "search-engine-optimization-seo": {
    title: "Search Engine Optimization for Software Brands | 4xcode",
    description:
      "Search engine optimization from an engineering team: technical SEO audits, Core Web Vitals fixes and content strategy that turns traffic into enquiries.",
  },
  "custom-software": {
    title: "Custom Software Development Company for Your Workflow",
    description:
      "Need tools that fit your process? 4xcode is a custom software development company building backends, data platforms and real-time systems. Get a quote.",
  },
  "ai-development": {
    title: "Custom AI Development: LLM Agents & RAG Systems | 4xcode",
    description:
      "Custom AI development for production, not demos. 4xcode builds LLM agents, RAG pipelines and fine-tuned models around your data. Talk to our experts.",
  },
  "automation": {
    title: "AI Automation Services to Cut Manual Work | 4xcode",
    description:
      "AI automation services that replace repetitive tasks with workflows, job queues and AI-triggered actions built on n8n, Temporal and Lambda. Get a quote.",
  },
  "ui-ux-design": {
    title: "UX UI Design Services for Web & SaaS Products | 4xcode",
    description:
      "UX UI design services from a team that also builds your product: design systems, interactive prototypes and user research. Discuss your project today.",
  },
  "cloud-systems": {
    title: "Cloud Consulting Services: AWS, IaC & DevOps | 4xcode",
    description:
      "Cloud consulting services covering AWS infrastructure-as-code, observability, cost control and zero-downtime deployments. Talk to our cloud experts.",
  },
  "digital-marketing-services": {
    title: "Digital Marketing Services: SEO, PPC & Paid Social | 4xcode",
    description:
      "Digital marketing services that combine Google Ads, Meta Ads, SEO and analytics with conversion optimisation to grow qualified leads. Talk to our team.",
  },
  "ecommerce-solutions": {
    title: "Ecommerce Development Services: Shopify & Next.js | 4xcode",
    description:
      "Ecommerce development services for custom Shopify and Next.js storefronts, payment gateways, inventory systems and marketplaces. Discuss your store today.",
  },
  "saas-engineering": {
    title: "SaaS Development Company for Scalable Platforms | 4xcode",
    description:
      "4xcode is a SaaS development company building multi-tenant platforms with billing, role-based access and onboarding on Next.js and AWS. Discuss your SaaS.",
  },
  "api-integration": {
    title: "API Integration Services for CRMs, Payments & AI | 4xcode",
    description:
      "API integration services that connect your payment processors, CRMs and AI tools using webhooks, OAuth and custom SDKs. Talk to our integration team.",
  },
};
