export interface TechCategory {
  name: string;
  items: string[];
}
export interface TagItem {
  name: string;
  description: string;
}

export interface ArchitecturePhase {
  phase: string;
  title: string;
  desc: string;
}
export interface ChoiceReason {
  title: string;
  desc: string;
}

export interface Metric {
  value: string;
  label: string;
}
export interface FeatureItem {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Pillar {
  title: string;
  desc: string;
}

export interface SoftwareBuildData {
  heading: {
    white: string;
    red: string;
  };
  subheading: string;
  industries: string[];
}

export interface SectionData {
  heading: string;
  description: string;
  cards: {
    card_heading: string;
    card_description: string;
  }[];
}

export interface ServiceItem {
  slug: string;
  iconKey: string;
  title: string;
  titleTag: string;
  metaDesc: string;
  intro: string;
  desc: string;
  features: FeatureItem[];
  tags: TagItem[];
  longTitle: string;
  gradientWord: string;
  longDesc: string;
  techCategories: TechCategory[];
  architecture: ArchitecturePhase[];
  whyTeamsChoose: ChoiceReason[];
  metrics: Metric[];
  faqs: Faq[];
  pillars: Pillar[];
  relatedSlugs: string[];
  software_build_data: SoftwareBuildData;
  sectionData: SectionData;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "ai-development",
    iconKey: "ai",
    title: "AI Development",
    titleTag: "AI Development Services | LLM Agents, RAG & ML — 4xCode",
    metaDesc:
      "Custom AI agent development, RAG pipelines, fine-tuning, and vector search built to ship in production — not just demos. Talk to 4xCode.",
    desc: "Custom AI agent development, RAG pipelines, fine-tuning, and vector search built to ship in production — not just demos.",
    intro:
      "4xCode builds production-grade AI systems — not prototypes. Our AI development services cover custom LLM agents, RAG pipelines, model fine-tuning, and vector search, using OpenAI, PyTorch, and LangChain to ship AI that holds up under real user load. ",
    features: [
      {
        title: "Custom LLM agents",
        description:
          "Multi-step reasoning agents that can call tools, query APIs, and complete real workflows, not just answer single-turn questions.",
      },
      {
        title: "RAG pipelines",
        description:
          "Retrieval systems that connect your LLM to your actual knowledge base, documents, or product data, with chunking and re-ranking strategies tuned for accuracy.",
      },
      {
        title: "Fine-tuning",
        description:
          "Model fine-tuning for domain-specific tone, accuracy, or task performance when prompting alone isn't precise enough.",
      },
      {
        title: "Vector search",
        description:
          "Production-grade vector search infrastructure for semantic search, recommendations, and retrieval at scale.",
      },
    ],
    tags: [
      {
        name: "OpenAI",
        description:
          "Foundation models and function-calling agent orchestration.",
      },
      {
        name: "PyTorch",
        description: "Custom model training and fine-tuning workflows.",
      },
      {
        name: "LangChain",
        description: "Chaining retrieval, tools, and multi-step agent logic.",
      },
      {
        name: "Pinecone",
        description: "Vector storage and low-latency semantic search at scale.",
      },
    ],
    longTitle: "AI Development Services Built to Ship, Not Just ",
    gradientWord: "Demo",
    longDesc:
      "Custom LLM agents, RAG pipelines, and machine learning systems engineered for production load. Most 'AI features' never make it past a prototype. 4xCode's AI development services are built specifically for production: systems that hold up under real traffic, real edge cases, and real user expectations. We design custom LLM agents that reason through multi-step tasks, retrieval-augmented generation (RAG) pipelines that ground responses in your actual data, and fine-tuned models tailored to your domain — all engineered with the same rigor we bring to traditional software, because an AI feature that breaks in production is worse than no AI feature at all.",
    techCategories: [
      {
        name: "Frameworks & Engine",
        items: ["LangChain", "LlamaIndex", "FastAPI", "PyTorch"],
      },
      {
        name: "Vector Databases",
        items: ["Pinecone", "Milvus", "Qdrant", "pgvector"],
      },
      {
        name: "Inference & Deployment",
        items: ["vLLM", "AWS Bedrock", "HuggingFace", "Ollama"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Semantic Ingestion",
        desc: "Parsing unformatted file structures and setting deterministic structural embedding pipelines.",
      },
      {
        phase: "02",
        title: "Context Window Tuning",
        desc: "Configuring pipeline prompts and local guardrails to compress latency and token usage.",
      },
      {
        phase: "03",
        title: "Isolated Cluster Launch",
        desc: "Setting strict boundary rules, secure API abstractions, and real-world system analytics.",
      },
    ],
    metrics: [
      { value: "99.2%", label: "Accuracy Threshold" },
      { value: "<220ms", label: "Inference Latency" },
      { value: "100%", label: "Data Isolation" },
    ],
    faqs: [
      {
        q: "How long does it take to build an AI agent or RAG pipeline?",
        a: "Most RAG implementations ship in 3–6 weeks depending on data complexity; custom multi-step agents typically take 6–10 weeks including evaluation and hardening.",
      },
      {
        q: "Do you work with our existing tech stack?",
        a: "Yes — we integrate AI features into existing Next.js, Node, or Python backends rather than requiring a rebuild.",
      },
      {
        q: "Can you fine-tune a model on our proprietary data?",
        a: "Yes, we handle data preparation, fine-tuning, and evaluation, with strict data privacy controls throughout.",
      },
    ],
    pillars: [
      {
        title: "Reliability by design",
        desc: "We build deterministic pipelines around LLMs instead of relying on fragile prompt chains, so behavior stays predictable as you scale.",
      },
      {
        title: "Grounded in your data",
        desc: "Every agent ships with evaluation and monitoring, so you know when output quality drifts — before your users do.",
      },
      {
        title: "Built to scale",
        desc: "Our AI work is integrated with full-stack engineering, so the AI feature actually connects cleanly to your existing product instead of living in a separate sandbox.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Deterministic Architectures",
        desc: "We build deterministic pipelines around LLMs instead of relying on fragile prompt chains, so behavior stays predictable as you scale.",
      },
      {
        title: "Evaluation & Monitoring",
        desc: "Every agent ships with evaluation and monitoring, so you know when output quality drifts — before your users do.",
      },
      {
        title: "Clean Product Integration",
        desc: "Our AI work is integrated with full-stack engineering, so the AI feature actually connects cleanly to your existing product instead of living in a separate sandbox.",
      },
    ],
    relatedSlugs: ["custom-software", "automation-systems", "cloud-systems"],
 
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
   software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Indusddtry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food and water",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
  
},
  {
    slug: "custom-software",
    iconKey: "software",
    title: "Custom Software",
    titleTag: "Custom Software Development Services — 4xCode",
    metaDesc:
      "Bespoke software architecture, backend systems, and data platforms engineered for ambitious products with serious technical depth.",
    desc: "Bespoke software architecture, backend systems, and data platforms engineered for ambitious products with serious technical depth.",
    intro:
      "When off-the-shelf tools hit their ceiling, 4xCode designs custom software architecture built for your exact problem — backend systems, data platforms, and realtime sync built on Go, Node.js, and Postgres. ",
    features: [
      {
        title: "Architecture design",
        description:
          "Systems design sessions that map your data model, scaling requirements, and failure modes before a line of code is written.",
      },
      {
        title: "Backend systems",
        description:
          "Robust, typed backend services built for correctness and maintainability, not just speed to first demo.",
      },
      {
        title: "Data platforms",
        description:
          "Custom data pipelines and storage architecture for products where the data model is the product.",
      },
      {
        title: "Realtime sync",
        description:
          "Live, multi-user state synchronization for collaborative tools, dashboards, and operational systems.",
      },
    ],
    tags: [
      {
        name: "Go",
        description: "High-throughput, low-latency backend services.",
      },
      {
        name: "Node.js",
        description: "Flexible API layers and rapid backend iteration.",
      },
      { name: "Postgres", description: "Relational data integrity at scale." },
      { name: "Redis", description: "Caching, queues, and realtime pub/sub." },
    ],
    longTitle: "Custom Software Development for Problems Off-the-Shelf Tools ",
    gradientWord: "Can't Solve",
    longDesc:
      "Bespoke architecture, backend systems, and data platforms built for serious technical depth. Some products outgrow no-code tools and templated SaaS in the first six months. When your business logic is genuinely unique — complex data relationships, custom workflows, real-time requirements — 4xCode designs custom software architecture from the ground up instead of forcing your problem into someone else's framework. We've built backend systems and data platforms for products handling everything from high-frequency transaction processing to multi-step regulatory workflows, always with an eye on what the system needs to look like in three years, not just at launch.",
    techCategories: [
      {
        name: "Core Infrastructure Layers",
        items: ["Go (Golang)", "Node.js", "Express", "GraphQL"],
      },
      {
        name: "Data Persistence & Management",
        items: ["PostgreSQL", "Redis Cache", "MongoDB Atlas", "Prisma"],
      },
      {
        name: "Telemetry & Performance",
        items: ["Prometheus", "Grafana", "OpenTelemetry"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Relational Mapping",
        desc: "Mapping core engine interactions, designing isolated databases, and predicting capacity loads.",
      },
      {
        phase: "02",
        title: "Decoupled Building",
        desc: "Constructing safe processing APIs alongside real-time monitoring streams.",
      },
      {
        phase: "03",
        title: "Edge Route Operations",
        desc: "Configuring global CDN caches, secure origin headers, and auto-scaling compute environments.",
      },
    ],
    metrics: [
      { value: "99.99%", label: "Engine Availability" },
      { value: "15M+", label: "Concurrent Packets" },
      { value: "0ms", label: "State Discrepancy" },
    ],
    faqs: [
      {
        q: "When does custom software make more sense than a SaaS template?",
        a: "When your core business logic is differentiated — unique data relationships, compliance requirements, or workflows no off-the-shelf product handles — custom architecture pays for itself quickly.",
      },
      {
        q: "Will our internal team be able to maintain this after launch?",
        a: "Yes — we build with standard, well-documented patterns and hand off full technical documentation, not a black box.",
      },
      {
        q: "Do you handle data migration from a legacy system?",
        a: "Yes, including phased migrations that keep the old system running during cutover.",
      },
    ],
    pillars: [
      {
        title: "Architecture first",
        desc: "We design for the failure modes most teams don't think about until they hit production at scale.",
      },
      {
        title: "Built to last",
        desc: "Strict TypeScript and typed backend contracts mean fewer runtime surprises and faster onboarding for your own engineers later.",
      },
      {
        title: "Performance by default",
        desc: "We document architecture decisions as we make them, so the system is maintainable by your team — not just ours.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Failure Mode Design",
        desc: "We design for the failure modes most teams don't think about until they hit production at scale.",
      },
      {
        title: "Strict Type Safety",
        desc: "Strict TypeScript and typed backend contracts mean fewer runtime surprises and faster onboarding for your own engineers later.",
      },
      {
        title: "Transparent Documentation",
        desc: "We document architecture decisions as we make them, so the system is maintainable by your team — not just ours.",
      },
    ],
    relatedSlugs: ["saas-engineering", "api-integration", "cloud-systems"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },  
},
  {
    slug: "saas-engineering",
    iconKey: "saas",
    title: "SaaS Engineering",
    titleTag: "SaaS Development Company | Multi-Tenant Engineering — 4xCode",
    metaDesc:
      "Multi-tenant SaaS platforms with billing, RBAC, and onboarding flows built to scale from MVP to millions of users.",
    desc: "Multi-tenant SaaS platforms with billing, RBAC, and onboarding flows built to scale from MVP to millions of users.",
    intro:
      "4xCode is a SaaS development company specializing in multi-tenant architecture, billing and RBAC, and onboarding flows — built on Next.js, Stripe, and AWS to scale from your first ten customers to your millionth. ",
    features: [
      {
        title: "Multi-tenancy",
        description:
          "Tenant isolation strategies (shared schema, schema-per-tenant, or database-per-tenant) chosen based on your actual scale and compliance needs.",
      },
      {
        title: "Billing & RBAC",
        description:
          "Usage-based and seat-based billing integrations with granular role-based access control baked into the data layer, not bolted on.",
      },
      {
        title: "Onboarding flows",
        description:
          "Activation-focused onboarding designed to get users to their 'aha moment' fast, with instrumentation to measure where users drop off.",
      },
      {
        title: "Admin tooling",
        description:
          "Internal admin dashboards so your team can support customers, manage tenants, and debug issues without touching the database directly.",
      },
    ],
    tags: [
      {
        name: "Next.js",
        description: "Fast, SEO-capable frontend with server-side rendering.",
      },
      {
        name: "Stripe",
        description: "Subscription billing, metering, and invoicing.",
      },
      {
        name: "Postgres",
        description: "Relational tenant data with row-level security.",
      },
      {
        name: "AWS",
        description:
          "Scalable, compliant infrastructure as your customer base grows.",
      },
    ],
    longTitle: "SaaS Development Built to Scale From ",
    gradientWord: "MVP to Millions",
    longDesc:
      "Multi-tenant architecture, billing, and onboarding engineered for real growth, not just a launch demo. Building a SaaS product is different from building a website — the architecture decisions you make in month one determine whether you can support 10 customers or 10,000 without a rewrite. As a SaaS development company, 4xCode specializes in multi-tenant systems engineered correctly from day one: tenant isolation, role-based access control, usage-based billing, and onboarding flows that convert trial users into paying customers. We've taken SaaS products from first customer to seven figures in ARR without the painful architecture rewrite most teams hit at scale.",
    techCategories: [
      {
        name: "Frontend Client",
        items: ["Next.js 15", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Access & Billing Engine",
        items: ["Stripe Core", "Clerk / Auth0", "Casbin RBAC"],
      },
      {
        name: "Infrastructure Layers",
        items: ["AWS ECS", "PostgreSQL Shards", "Redis Cluster"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Tenant Isolation Strategy",
        desc: "Structuring secure horizontal database separations or dynamic sub-domain routers.",
      },
      {
        phase: "02",
        title: "Subscription Synchronization",
        desc: "Deploying production webhooks tied directly into localized subscription tables.",
      },
      {
        phase: "03",
        title: "Observability Overhaul",
        desc: "Enabling complete per-tenant logging matrices to trace usage analytics reliably.",
      },
    ],
    metrics: [
      { value: "<45ms", label: "RBAC Resolution" },
      { value: "40%", label: "Compute Savings" },
      { value: "Zero", label: "Cross-Tenant Leaks" },
    ],
    faqs: [
      {
        q: "What tenant isolation model is right for our SaaS?",
        a: "It depends on your compliance requirements and customer size — we'll walk through shared-schema vs. database-per-tenant trade-offs specific to your product during discovery.",
      },
      {
        q: "Can you integrate with our existing billing provider?",
        a: "Yes, we work with Stripe, Paddle, and most usage-based billing platforms.",
      },
      {
        q: "How do you handle SaaS security and compliance (SOC 2, GDPR)?",
        a: "We build with compliance-ready patterns from the start — encrypted data at rest, audit logging, and access controls — and can support your path to SOC 2 or GDPR readiness.",
      },
    ],
    pillars: [
      {
        title: "Multi-tenant from day one",
        desc: "We've built multi-tenant systems that scaled without the re-architecture most SaaS teams face at their first growth inflection point.",
      },
      {
        title: "Revenue-ready",
        desc: "Billing and RBAC are designed into the schema from day one, avoiding the security and accounting headaches of retrofitting them later.",
      },
      {
        title: "Operable at scale",
        desc: "We instrument onboarding from day one so you have real activation data, not guesses, when deciding what to fix next.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Battle-Tested Scaling",
        desc: "We've built multi-tenant systems that scaled without the re-architecture most SaaS teams face at their first growth inflection point.",
      },
      {
        title: "Schema-Integrated Security",
        desc: "Billing and RBAC are designed into the schema from day one, avoiding the security and accounting headaches of retrofitting them later.",
      },
      {
        title: "Data-Driven Activation",
        desc: "We instrument onboarding from day one so you have real activation data, not guesses, when deciding what to fix next.",
      },
    ],
    relatedSlugs: ["custom-software", "web-development", "api-integration"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
 
},
  {
    slug: "web-development",
    iconKey: "web",
    title: "Web Development",
    titleTag: "Web Development Agency | Next.js & React — 4xCode",
    metaDesc:
      "Full-stack web platforms built with React and Next.js, edge runtime, and SEO-first architecture for blistering speed and conversion.",
    desc: "Full-stack web platforms built with React and Next.js, edge runtime, and SEO-first architecture for blistering speed and conversion.",
    intro:
      "As a web development agency built around React and Next.js, 4xCode ships design systems, SSR-optimized pages, and edge-runtime infrastructure — so your site is fast for users and legible to search engines from day one. ",
    features: [
      {
        title: "Design systems",
        description:
          "Reusable, documented component libraries so your site stays visually consistent as it grows, without rebuilding UI from scratch each time.",
      },
      {
        title: "SSR & SEO",
        description:
          "Server-side rendering and metadata architecture built specifically for search engine crawlability and rich social previews.",
      },
      {
        title: "Edge runtime",
        description:
          "Deployment at the edge for low-latency response times regardless of where your users are.",
      },
      {
        title: "Analytics",
        description:
          "Performance and behavior analytics instrumented from launch, so you can see what's working without guessing.",
      },
    ],
    tags: [
      {
        name: "React",
        description: "Component-driven, maintainable frontend architecture.",
      },
      {
        name: "Next.js",
        description:
          "SSR, static generation, and built-in performance optimization.",
      },
      {
        name: "Tailwind",
        description: "Fast, consistent styling without CSS bloat.",
      },
      {
        name: "Cloudflare",
        description: "Edge delivery, caching, and DDoS protection.",
      },
    ],
    longTitle: "Web Development That's Fast for Users and Legible to ",
    gradientWord: "Search Engines",
    longDesc:
      "Full-stack platforms built on React and Next.js with edge-first architecture. A slow website costs you both rankings and revenue — Core Web Vitals are a ranking factor, and every 100ms of added load time measurably hurts conversion. As a web development agency built around React and Next.js, 4xCode designs sites and web applications with performance and SEO architecture baked in from the first commit: server-side rendering where it helps search visibility, static generation where it helps speed, and edge runtime deployment so your site is fast everywhere, not just near your origin server.",
    techCategories: [
      {
        name: "Application Engineering",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Content & Assets",
        items: ["Sanity.io", "Cloudflare Images", "Uploadthing"],
      },
      {
        name: "Deployment Systems",
        items: ["Cloudflare Pages", "Vercel Edge Platform", "Fastly"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Interface Schema Mapping",
        desc: "Deconstructing visual compositions into highly functional, reactive state trees.",
      },
      {
        phase: "02",
        title: "Edge Architecture Hookup",
        desc: "Configuring server-side asset rendering properties over hyper-local edge nodes.",
      },
      {
        phase: "03",
        title: "Core Web Vitals Pass",
        desc: "Eliminating heavy visual layout shifts to ensure smooth score performance across test suites.",
      },
    ],
    metrics: [
      { value: "100/100", label: "Lighthouse Score" },
      { value: "0ms", label: "Cold Start Overhead" },
      { value: "98%", label: "Cache Hit Rate" },
    ],
    faqs: [
      {
        q: "Will my new site be SEO-ready at launch?",
        a: "Yes — proper meta tags, semantic HTML, sitemap, schema markup, and Core Web Vitals optimization are built in, not added later.",
      },
      {
        q: "Do you build on top of our existing CMS?",
        a: "We can integrate headless CMS platforms (Contentful, Sanity, etc.) or build custom content management depending on your team's workflow.",
      },
      {
        q: "How fast will the site actually load?",
        a: "We target sub-second Largest Contentful Paint and pass all Core Web Vitals thresholds before launch — measured, not estimated.",
      },
    ],
    pillars: [
      {
        title: "Speed as a feature",
        desc: "We treat SEO architecture as a first-class requirement, not an afterthought bolted on after launch.",
      },
      {
        title: "Pixel-accurate",
        desc: "Performance budgets (load time, Core Web Vitals) are set and tracked from day one, not discovered after a client complains.",
      },
      {
        title: "Built to rank",
        desc: "Our design systems mean your marketing team can ship new pages without waiting on engineering for every change.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "SEO-First Engineering",
        desc: "We treat SEO architecture as a first-class requirement, not an afterthought bolted on after launch.",
      },
      {
        title: "Monitored Performance Budgets",
        desc: "Performance budgets (load time, Core Web Vitals) are set and tracked from day one, not discovered after a client complains.",
      },
      {
        title: "Modular Design Frameworks",
        desc: "Our design systems mean your marketing team can ship new pages without waiting on engineering for every change.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "seo-digital-marketing", "saas-engineering"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "mobile-apps",
    iconKey: "mobile",
    title: "Mobile Apps",
    titleTag: "Mobile App Development Company | iOS & Android — 4xCode",
    metaDesc:
      "Native-feeling cross-platform apps built with React Native, Swift, and Kotlin — push notifications, deep links, offline-first.",
    desc: "Native-feeling cross-platform apps built with React Native, Swift, and Kotlin — push notifications, deep links, offline-first.",
    intro:
      "4xCode builds mobile apps that feel native, not hybrid. Our mobile app development company uses React Native alongside Swift and Kotlin native modules for performance-critical features, push notifications, and offline-first experiences. ",
    features: [
      {
        title: "Cross-platform",
        description:
          "Shared React Native codebase for business logic and most UI, cutting development time without sacrificing feel.",
      },
      {
        title: "Native modules",
        description:
          "Custom Swift and Kotlin modules for performance-critical or platform-specific features that React Native can't handle well alone.",
      },
      {
        title: "Push & deep links",
        description:
          "Push notification infrastructure and deep linking so users land exactly where they should, from any entry point.",
      },
      {
        title: "Offline-first",
        description:
          "Local-first data architecture so the app stays usable on poor connections and syncs cleanly when connectivity returns.",
      },
    ],
    tags: [
      {
        name: "React Native",
        description: "Shared cross-platform UI and logic.",
      },
      {
        name: "Expo",
        description:
          "Faster builds, OTA updates, and simplified native module management.",
      },
      {
        name: "Swift",
        description: "Native iOS performance and platform integration.",
      },
      {
        name: "Kotlin",
        description: "Native Android performance and platform integration.",
      },
    ],
    longTitle: "Mobile Apps That Feel Native, Built for Both ",
    gradientWord: "Platforms at Once",
    longDesc:
      "Cross-platform engineering with native modules where performance actually matters. Cross-platform mobile development gets a bad reputation because most teams use it everywhere, including the places it doesn't belong. 4xCode builds mobile apps as a mobile app development company that uses React Native for shared business logic and UI, then drops into native Swift and Kotlin modules specifically where performance or platform APIs demand it — camera processing, background tasks, biometric auth. The result is an app that ships faster than fully native development, without the janky feel users associate with 'just a web app in a wrapper.'",
    techCategories: [
      {
        name: "Cross Platform Core",
        items: ["React Native", "Expo Router", "TypeScript"],
      },
      {
        name: "Native Bridge Extensions",
        items: ["Swift Core", "Kotlin Native", "Objective-C"],
      },
      {
        name: "Local Cache Matrices",
        items: ["WatermelonDB", "MMKV Storage", "SQLite Elastic"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Offline Storage Strategy",
        desc: "Configuring ultra-fast local databases for un-interrupted runtime operations.",
      },
      {
        phase: "02",
        title: "Push Notification Tunneling",
        desc: "Wiring background fetch routines safely with Firebase Cloud Messaging pipelines.",
      },
      {
        phase: "03",
        title: "App Store Flight Launch",
        desc: "Automating internal build distribution metrics for fast TestFlight cycles.",
      },
    ],
    metrics: [
      { value: "60 FPS", label: "UI Thread Fluidity" },
      { value: "100%", label: "Offline Accessibility" },
      { value: "<18MB", label: "Initial Package Size" },
    ],
    faqs: [
      {
        q: "Should we build native or cross-platform?",
        a: "For most consumer and SaaS mobile products, React Native with targeted native modules gets you to market faster at near-native quality — we'll flag if your specific use case (heavy AR, gaming) needs a fully native approach instead.",
      },
      {
        q: "Can you maintain feature parity between iOS and Android?",
        a: "Yes — shared business logic in React Native means new features ship to both platforms simultaneously by default.",
      },
      {
        q: "How do you handle app store review and submission?",
        a: "We manage App Store and Google Play submission, including compliance review, screenshots, and metadata.",
      },
    ],
    pillars: [
      {
        title: "Feels native",
        desc: "We know exactly where cross-platform breaks down and build native modules there instead of fighting the framework.",
      },
      {
        title: "Works offline",
        desc: "Offline-first architecture is designed in from the start for apps where connectivity can't be assumed.",
      },
      {
        title: "Ships to both stores",
        desc: "One codebase for iOS and Android means feature parity without double the engineering time.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Targeted Native Extensions",
        desc: "We know exactly where cross-platform breaks down and build native modules there instead of fighting the framework.",
      },
      {
        title: "Local-First Architecture",
        desc: "Offline-first architecture is designed in from the start for apps where connectivity can't be assumed.",
      },
      {
        title: "Unified Development Cycle",
        desc: "One codebase for iOS and Android means feature parity without double the engineering time.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "api-integration", "custom-software"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "api-integration",
    iconKey: "api",
    title: "API Integration",
    titleTag: "API Integration Services | Payments, CRM, AI — 4xCode",
    metaDesc:
      "Connect payment processors, CRMs, AI APIs, and internal systems with secure webhook infrastructure, sync engines, and SDKs.",
    desc: "Connect payment processors, CRMs, AI APIs, and internal systems with secure webhook infrastructure, sync engines, and SDKs.",
    intro:
      "4xCode's API integration services connect the systems your business already runs on — payment processors, CRMs, AI APIs — through resilient webhook infrastructure, OAuth flows, and custom SDKs. ",
    features: [
      {
        title: "Webhook infra",
        description:
          "Reliable webhook ingestion with retry logic, deduplication, and dead-letter handling so events never silently disappear.",
      },
      {
        title: "Sync engines",
        description:
          "Bidirectional data sync between systems with conflict resolution, not just one-way data dumps.",
      },
      {
        title: "Auth flows",
        description:
          "OAuth, API key, and token-based auth flows built securely and maintained as providers change their requirements.",
      },
      {
        title: "SDKs",
        description:
          "Custom internal SDKs so your team can integrate with your own APIs as easily as a third party would with theirs.",
      },
    ],
    tags: [
      {
        name: "GraphQL",
        description:
          "Flexible, efficient data fetching across integrated systems.",
      },
      {
        name: "REST",
        description: "Straightforward, widely compatible API integration.",
      },
      {
        name: "OAuth",
        description:
          "Secure, standards-based authentication and authorization.",
      },
      {
        name: "gRPC",
        description: "High-performance service-to-service communication.",
      },
    ],
    longTitle: "API Integration Services That Connect What You ",
    gradientWord: "Already Run",
    longDesc:
      "Webhook infrastructure, sync engines, and auth flows that actually hold up in production. Most businesses don't need one giant platform — they need their existing tools to talk to each other reliably. 4xCode's API integration services connect payment processors, CRMs, AI APIs, and internal systems through resilient webhook infrastructure and sync engines built to handle real-world failure modes: dropped webhooks, rate limits, schema drift, and partial failures. We've integrated everything from Stripe and Salesforce to custom internal APIs, and we build every integration assuming the third-party API will fail eventually — because it will.",
    techCategories: [
      {
        name: "Data Access Protocols",
        items: ["GraphQL Engine", "gRPC Protobufs", "REST Standards"],
      },
      {
        name: "Security Verification",
        items: ["OAuth 2.0 Connect", "mTLS Encryption", "HMAC Signatures"],
      },
      {
        name: "Queue Orchestration",
        items: ["RabbitMQ Broker", "BullMQ Tasks", "Apache Kafka"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Payload Blueprint Design",
        desc: "Mapping explicit schema properties and planning strict network traffic filters.",
      },
      {
        phase: "02",
        title: "Retry Engine Configuration",
        desc: "Deploying resilient exponential backoff job setups to preserve operational states.",
      },
      {
        phase: "03",
        title: "Zero Data Drop Verification",
        desc: "Testing systems against high concurrency requests to ensure strict transactional reliability.",
      },
    ],
    metrics: [
      { value: "0%", label: "Packet Drop Ratio" },
      { value: "18k/s", label: "Message Throughput" },
      { value: "mTLS", label: "Encryption Default" },
    ],
    faqs: [
      {
        q: "What happens if a third-party API goes down or changes?",
        a: "Our integrations include retry logic, monitoring, and alerting so failures are caught immediately — not discovered by your customers.",
      },
      {
        q: "Can you integrate AI APIs like OpenAI or Anthropic into our existing product?",
        a: "Yes, this is one of our most common integration requests, including rate limit handling and cost monitoring.",
      },
      {
        q: "Do you support real-time data sync between systems?",
        a: "Yes, including conflict resolution for systems that can both write to the same data.",
      },
    ],
    pillars: [
      {
        title: "Resilient by default",
        desc: "We design every integration assuming failure, with retries, dead-letter queues, and monitoring — not happy-path-only code.",
      },
      {
        title: "Secure at every hop",
        desc: "We've worked with most major payment, CRM, and AI provider APIs, so we already know their quirks and rate limits.",
      },
      {
        title: "Observable end to end",
        desc: "Integrations are documented and monitored so issues surface as alerts, not as angry customer emails three weeks later.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Defensive Failure Architecture",
        desc: "We design every integration assuming failure, with retries, dead-letter queues, and monitoring — not happy-path-only code.",
      },
      {
        title: "Deep Native API Familiarity",
        desc: "We've worked with most major payment, CRM, and AI provider APIs, so we already know their quirks and rate limits.",
      },
      {
        title: "Active Alert Pipeline",
        desc: "Integrations are documented and monitored so issues surface as alerts, not as angry customer emails three weeks later.",
      },
    ],
    relatedSlugs: ["automation-systems", "saas-engineering", "cloud-systems"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "automation-systems",
    iconKey: "automation",
    title: "Automation Systems",
    titleTag: "Workflow Automation Systems for Business — 4xCode",
    metaDesc:
      "AI-triggered workflow engines, job queues, and internal tooling that scales — built on Temporal, n8n, and AWS Lambda.",
    desc: "AI-triggered workflow engines, job queues, and internal tooling that scales — built on Temporal, n8n, and AWS Lambda.",
    intro:
      "4xCode designs workflow automation systems — visual workflows, job queues, and AI-triggered actions — that take manual ops work off your team's plate, built on Temporal, n8n, and Lambda. ",
    features: [
      {
        title: "Job queues",
        description:
          "Durable, retryable background job processing so long-running or critical tasks never silently fail.",
      },
      {
        title: "Visual workflows",
        description:
          "Workflow engines your ops team can actually read and adjust, not just engineers.",
      },
      {
        title: "AI triggers",
        description:
          "AI-powered decision points in workflows — routing, classification, summarization — where rules-based logic isn't enough.",
      },
      {
        title: "Audit logs",
        description:
          "Full audit trails for every automated action, critical for compliance and debugging.",
      },
    ],
    tags: [
      {
        name: "Temporal",
        description: "Durable, fault-tolerant workflow orchestration.",
      },
      {
        name: "Zapier",
        description: "Fast, no-code integration of common business tools.",
      },
      {
        name: "n8n",
        description:
          "Self-hosted, flexible workflow automation with full control.",
      },
      {
        name: "Lambda",
        description: "Scalable, serverless execution of automation logic.",
      },
    ],
    longTitle: "Workflow Automation That Takes Manual Work Off ",
    gradientWord: "Your Team's Plate",
    longDesc:
      "Job queues, visual workflows, and AI-triggered automation built to scale. Every fast-growing company eventually hits a wall of manual, repetitive operational work — onboarding steps, data reconciliation, approval chains, alert triage. 4xCode designs workflow automation systems that take that work off your team without turning into another fragile Zapier chain that breaks the moment a field name changes. We build durable, observable job queues and visual workflows, with AI triggers for the steps that need judgment, and full audit logs so you always know what happened and why.",
    techCategories: [
      {
        name: "State Machine Processing",
        items: ["Temporal.io", "n8n Enterprise", "AWS Step Functions"],
      },
      {
        name: "Compute Abstractions",
        items: ["AWS Lambda Core", "Cloudflare Workers"],
      },
      {
        name: "Data Logging Infrastructure",
        items: [
          "Elasticsearch Stack",
          "Axiom Monitoring",
          "Prisma Event Matrix",
        ],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "State Boundary Definition",
        desc: "Deconstructing systemic routines into safe, individual functional processes.",
      },
      {
        phase: "02",
        title: "Asynchronous Pipeline Wiring",
        desc: "Connecting job queues directly into streaming event listeners safely.",
      },
      {
        phase: "03",
        title: "Audit Log Distribution",
        desc: "Configuring structural streaming metrics to record compliance histories securely.",
      },
    ],
    metrics: [
      { value: "100%", label: "Audit Traceability" },
      { value: "4.5x", label: "Speed Execution" },
      { value: "Zero", label: "Manual Failures" },
    ],
    faqs: [
      {
        q: "Will automation replace our existing tools like Zapier?",
        a: "Not necessarily — we often use Zapier or n8n for simpler integrations and build custom orchestration (Temporal, Lambda) only where reliability or scale demands it.",
      },
      {
        q: "Can automated workflows include AI decision-making?",
        a: "Yes — classification, routing, and summarization steps can be AI-powered while keeping critical actions auditable.",
      },
      {
        q: "How do you prevent automation failures from going unnoticed?",
        a: "Every workflow includes monitoring and alerting, plus audit logs, so failures surface immediately rather than silently dropping data.",
      },
    ],
    pillars: [
      {
        title: "Auditable by default",
        desc: "We build automation as durable infrastructure, not brittle no-code chains that fail silently.",
      },
      {
        title: "Self-healing",
        desc: "AI triggers are added where they add real judgment, not as a buzzword feature.",
      },
      {
        title: "Built for the long tail",
        desc: "Every workflow includes audit logging, so automated decisions are traceable for compliance and debugging.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Infrastructure vs Brittle Code",
        desc: "We build automation as durable infrastructure, not brittle no-code chains that fail silently.",
      },
      {
        title: "Contextual Strategic AI",
        desc: "AI triggers are added where they add real judgment, not as a buzzword feature.",
      },
      {
        title: "Complete Process Trails",
        desc: "Every workflow includes audit logging, so automated decisions are traceable for compliance and debugging.",
      },
    ],
    relatedSlugs: ["ai-development", "api-integration", "cloud-systems"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "ui-ux-design",
    iconKey: "ui",
    title: "UI / UX Design",
    titleTag: "UI/UX Design Agency for SaaS & AI Products — 4xCode",
    metaDesc:
      "Cinematic, conversion-focused interface design — design systems, prototyping, and motion that elevates brand at every pixel.",
    desc: "Cinematic, conversion-focused interface design — design systems, prototyping, and motion that elevates brand at every pixel.",
    intro:
      "As a UI/UX design agency embedded inside engineering, 4xCode designs interfaces that convert — design systems, interactive prototypes, and motion design built in Figma and Framer, validated with real user research.",
    features: [
      {
        title: "Design systems",
        description:
          "Documented, reusable component libraries that keep your product visually consistent as new features ship.",
      },
      {
        title: "Prototyping",
        description:
          "Interactive prototypes for usability testing before a single line of production code is written.",
      },
      {
        title: "Motion",
        description:
          "Purposeful motion design that guides attention and communicates state, not just animation for its own sake.",
      },
      {
        title: "Research",
        description:
          "User research and usability testing to validate design decisions with real behavior, not opinions in a meeting.",
      },
    ],
    tags: [
      {
        name: "Figma",
        description: "Collaborative interface design and design systems.",
      },
      {
        name: "Framer",
        description: "High-fidelity, interactive prototyping.",
      },
      {
        name: "Motion",
        description: "Production-grade animation and interaction design.",
      },
      {
        name: "Storybook",
        description: "Documenting and testing UI components in isolation.",
      },
    ],
    longTitle: "UI/UX Design That Elevates Brand and ",
    gradientWord: "Converts",
    longDesc:
      "Design systems, prototyping, and motion built into the product, not bolted on after. Good design isn't decoration — it's the difference between a user understanding your product in ten seconds or bouncing in five. As a UI/UX design agency embedded inside engineering (not a separate vendor handing off static mockups), 4xCode designs interfaces validated with real user research, built as reusable design systems, and brought to life with motion that feels intentional rather than decorative. Because our designers and engineers work together from day one, what gets designed is what actually ships — pixel for pixel.",
    techCategories: [
      {
        name: "Visual Composition Space",
        items: [
          "Figma Advanced",
          "Adobe Creative Cloud",
          "Prototyping Toolsets",
        ],
      },
      {
        name: "System Token Management",
        items: ["Style Dictionary", "Tailwind Theme Tokens"],
      },
      {
        name: "Interaction Development",
        items: ["Framer Motion Engine", "Storybook Workspace"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Token Hierarchy Mapping",
        desc: "Defining foundational layout guidelines, layout behaviors, and strict tone targets.",
      },
      {
        phase: "02",
        title: "Interactive Interface Assembly",
        desc: "Building comprehensive, functional visual setups to simulate real deployment fields.",
      },
      {
        phase: "03",
        title: "Production Sync Handoff",
        desc: "Translating styling constraints cleanly into absolute, type-safe layout variables.",
      },
    ],
    metrics: [
      { value: "1:1", label: "Figma to Code Accuracy" },
      { value: "48+", label: "Token Variables Matrix" },
      { value: "Premium", label: "Aesthetic Scoring" },
    ],
    faqs: [
      {
        q: "Do you design and build, or just design?",
        a: "Both — our designers work directly alongside the engineers who'll build the product, which is why the shipped product matches the design.",
      },
      {
        q: "Can you redesign our existing product without a full rebuild?",
        a: "Yes, we frequently do incremental design system overhauls applied to existing codebases.",
      },
      {
        q: "How do you validate design decisions before development?",
        a: "Through interactive prototypes and usability testing with real or representative users before committing engineering time.",
      },
    ],
    pillars: [
      {
        title: "Systems, not screens",
        desc: "Designers and engineers work in the same team, so your final product matches the design — not a watered-down approximation of it.",
      },
      {
        title: "Validated, not assumed",
        desc: "We validate design decisions with real usability testing, not just internal opinion.",
      },
      {
        title: "Code-ready handoff",
        desc: "Design systems are built for the engineering team to actually use, not abandoned in a Figma file no one opens again.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Unified Creative-Engineering Flow",
        desc: "Designers and engineers work in the same team, so your final product matches the design — not a watered-down approximation of it.",
      },
      {
        title: "Empirical UX Auditing",
        desc: "We validate design decisions with real usability testing, not just internal opinion.",
      },
      {
        title: "Operationalized Design Systems",
        desc: "Design systems are built for the engineering team to actually use, not abandoned in a Figma file no one opens again.",
      },
    ],
    relatedSlugs: ["web-development", "mobile-apps", "saas-engineering"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "cloud-systems",
    iconKey: "cloud",
    title: "Cloud Systems",
    titleTag: "Cloud Infrastructure Consulting | AWS & Vercel — 4xCode",
    metaDesc:
      "Resilient, observable cloud infrastructure on AWS, Vercel, and Cloudflare — IaC pipelines, zero-downtime deploys, cost control.",
    desc: "Resilient, observable cloud infrastructure on AWS, Vercel, and Cloudflare — IaC pipelines, zero-downtime deploys, cost control.",
    intro:
      "4xCode's cloud infrastructure consulting covers infrastructure-as-code, observability, and zero-downtime deployments across AWS, Vercel, and Cloudflare — built so your platform scales without surprise bills or 3am pages.",
    features: [
      {
        title: "IaC pipelines",
        description:
          "Infrastructure-as-code (Terraform, CDK) so your environments are version-controlled, reproducible, and reviewable like any other code.",
      },
      {
        title: "Observability",
        description:
          "Distributed logging, tracing, and alerting so you catch behavioral issues before they hit production users.",
      },
      {
        title: "Cost controls",
        description:
          "Resource tagging, budget alerts, and architecture choices that prevent runaway cloud spend.",
      },
      {
        title: "Zero-downtime",
        description:
          "Deployment strategies (blue-green, rolling) that mean shipping doesn't mean downtime.",
      },
    ],
    tags: [
      { name: "AWS", description: "Scalable, compliant core infrastructure." },
      {
        name: "Docker",
        description: "Consistent, portable application packaging.",
      },
      {
        name: "Kubernetes",
        description:
          "Orchestration at scale when you've outgrown simpler deployment models.",
      },
      {
        name: "Terraform",
        description: "Declarative, version-controlled infrastructure as code.",
      },
    ],
    longTitle: "Cloud Infrastructure That Scales Without Surprise Bills or ",
    gradientWord: "3am Pages",
    longDesc:
      "Resilient infrastructure on AWS, Vercel, and Cloudflare — observable, secure, automated. Infrastructure problems rarely show up in a demo — they show up the first time real traffic hits, or the first time a deploy goes wrong at 2am. 4xCode's cloud infrastructure consulting builds systems designed for that moment: infrastructure-as-code so environments are reproducible, observability so you catch issues before customers do, and zero-downtime deployment pipelines so shipping a fix doesn't mean an outage. We also build with cost visibility from day one, because the worst time to discover your cloud bill quadrupled is the month it happens.",
    techCategories: [
      {
        name: "Infrastructure as Code",
        items: ["Terraform Platform", "AWS CDK Engine", "Pulumi Orchestrator"],
      },
      {
        name: "Container Management",
        items: ["Docker Engine", "Kubernetes Mesh", "AWS ECS / Fargate"],
      },
      {
        name: "Monitoring & Tracking",
        items: ["Datadog Framework", "Grafana Loki", "AWS CloudWatch"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Security Perimeter Layout",
        desc: "Isolating server spaces behind custom Virtual Private Clouds and access filters.",
      },
      {
        phase: "02",
        title: "Deployment Flow Setup",
        desc: "Automating validation processes within highly stable container deployment paths.",
      },
      {
        phase: "03",
        title: "Live Tracking Monitoring",
        desc: "Hooking automated alert protocols straight into team communication lines.",
      },
    ],
    metrics: [
      { value: "99.999%", label: "Target Cluster Uptime" },
      { value: "Zero", label: "Hardcoded Keys" },
      { value: "<3min", label: "Full Infrastructure Provision" },
    ],
    faqs: [
      {
        q: "Do we need Kubernetes, or is that overkill for us?",
        a: "Often it's overkill early on — we'll recommend simpler serverless or container-based architecture unless your scale genuinely needs Kubernetes' complexity.",
      },
      {
        q: "How do you prevent unexpected cloud cost spikes?",
        a: "Through budget alerts, resource tagging, and architecture reviews that catch inefficient patterns before they compound at scale.",
      },
      {
        q: "Can you migrate us from our current cloud provider?",
        a: "Yes, including phased migrations designed to avoid downtime during cutover.",
      },
    ],
    pillars: [
      {
        title: "Infrastructure as code",
        desc: "We build observability in from the start, so issues are caught by monitoring, not by angry customers.",
      },
      {
        title: "Built to fail safely",
        desc: "Cost controls are designed into the architecture, not added reactively after a shocking invoice.",
      },
      {
        title: "Cost-aware",
        desc: "Zero-downtime deployment means your team can ship fixes fast without scheduling risky maintenance windows.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Early Telemetry Capture",
        desc: "We build observability in from the start, so issues are caught by monitoring, not by angry customers.",
      },
      {
        title: "Embedded Expense Hardening",
        desc: "Cost controls are designed into the architecture, not added reactively after a shocking invoice.",
      },
      {
        title: "Zero-Downtime Releases",
        desc: "Zero-downtime deployment means your team can ship fixes fast without scheduling risky maintenance windows.",
      },
    ],
    relatedSlugs: ["custom-software", "automation-systems", "api-integration"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "seo-digital-marketing",
    iconKey: "marketing",
    title: "SEO & Digital Marketing",
    titleTag: "Technical SEO & Growth Marketing Services — 4xCode",
    metaDesc:
      "Data-driven technical SEO, content strategy, and paid campaigns that drive qualified traffic and measurable revenue, not vanity metrics.",
    desc: "Data-driven technical SEO, content strategy, and paid campaigns that drive qualified traffic and measurable revenue, not vanity metrics.",
    intro:
      "4xCode pairs technical SEO and content strategy with paid acquisition — Google Ads, Meta Ads, and conversion optimization — to drive traffic that actually converts, backed by the same engineering rigor we bring to product. ",
    features: [
      {
        title: "Technical SEO",
        description:
          "Site speed, crawlability, schema markup, and Core Web Vitals fixes that remove the technical ceiling on your rankings.",
      },
      {
        title: "Content strategy",
        description:
          "Keyword-mapped content plans built around actual search intent and your sales funnel, not just volume metrics.",
      },
      {
        title: "PPC campaigns",
        description:
          "Google Ads and Meta Ads campaigns built and optimized against revenue, not vanity click metrics.",
      },
      {
        title: "Conversion optimization",
        description:
          "Landing page and funnel testing to make sure traffic you've earned actually converts.",
      },
    ],
    tags: [
      {
        name: "Google Ads",
        description: "High-intent paid search acquisition.",
      },
      {
        name: "SEO",
        description:
          "Technical audits, keyword research, and rank tracking via elite industry tooling.",
      },
      {
        name: "Analytics",
        description: "Funnel measurement and attribution back to revenue.",
      },
      {
        name: "Meta Ads",
        description: "Paid social acquisition and retargeting.",
      },
    ],
    longTitle: "Technical SEO & Growth Marketing That Drives Revenue, Not ",
    gradientWord: "Vanity Metrics",
    longDesc:
      "Technical SEO, content strategy, and paid campaigns built on the same engineering rigor as our products. Marketing and engineering are usually run as separate disciplines, which is exactly why most SEO work fails to move the needle — content gets published on a site with broken Core Web Vitals, or paid campaigns drive traffic to a page that doesn't convert. 4xCode runs SEO and digital marketing alongside engineering, which means technical SEO fixes (site speed, schema, crawlability) and content strategy are paired with the actual product and conversion path — and paid campaigns (Google Ads, Meta Ads) are optimized against real revenue data, not just click-through rate.",
    techCategories: [
      {
        name: "Performance Audits",
        items: [
          "Lighthouse Insights",
          "Screaming Frog Core",
          "Search Console Matrices",
        ],
      },
      {
        name: "Conversion Analytics",
        items: ["Google Analytics 4", "PostHog Platform", "Hotjar Tracking"],
      },
      {
        name: "Campaign Optimization",
        items: ["Meta Pixel Engine", "Google Tag Manager", "Semrush Systems"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "System Performance Audit",
        desc: "Fixing network crawler errors, structural server layout parameters, and caching values.",
      },
      {
        phase: "02",
        title: "Taxonomy Asset Deployment",
        desc: "Injecting semantic content layouts dynamically across all targeted user channels.",
      },
      {
        phase: "03",
        title: "Conversion Matrix Tracking",
        desc: "Deploying analytical event triggers to track exactly where customer acquisitions convert.",
      },
    ],
    metrics: [
      { value: "+140%", label: "Organic Visibility Growth" },
      { value: "Sub-Second", label: "Crawler Document Parse" },
      { value: "100%", label: "Event Capture Integrity" },
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Technical fixes can show ranking movement within weeks; competitive keyword rankings through content typically take 3–6 months of consistent publishing.",
      },
      {
        q: "Do you handle both SEO and paid ads, or just one?",
        a: "Both — and we coordinate them, since paid campaigns and organic content should reinforce the same keyword strategy rather than compete for budget separately.",
      },
      {
        q: "Can you fix technical SEO issues on our existing site without a rebuild?",
        a: "In most cases yes — schema, speed, and crawlability issues are usually fixable without a full rebuild.",
      },
    ],
    pillars: [
      {
        title: "Technical foundation first",
        desc: "We fix the technical SEO ceiling (speed, schema, crawlability) most agencies can't touch because they don't have engineers.",
      },
      {
        title: "Measured, not guessed",
        desc: "Content strategy is mapped to actual search intent and your funnel, not just keyword volume.",
      },
      {
        title: "Compounding, not rented",
        desc: "Paid campaigns are measured against revenue and LTV, not just impressions and clicks.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Engineering-Driven Mechanics",
        desc: "We fix the technical SEO ceiling (speed, schema, crawlability) most agencies can't touch because they don't have engineers.",
      },
      {
        title: "Intentional Pipeline Architecture",
        desc: "Content strategy is mapped to actual search intent and your funnel, not just keyword volume.",
      },
      {
        title: "Unit Economic Measurement",
        desc: "Paid campaigns are measured against revenue and LTV, not just impressions and clicks.",
      },
    ],
    relatedSlugs: ["web-development", "ecommerce-solutions", "ui-ux-design"],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
  {
    slug: "ecommerce-solutions",
    iconKey: "ecommerce",
    title: "E-Commerce Solutions",
    titleTag: "E-Commerce Development Agency | Shopify & Custom — 4xCode",
    metaDesc:
      "High-converting online stores with seamless checkout, inventory management, and scalable commerce infrastructure.",
    desc: "High-converting online stores with seamless checkout, inventory management, and scalable commerce infrastructure.",
    intro:
      " 4xCode builds e-commerce experiences engineered to convert — custom storefronts and marketplaces on Shopify and Next.js, with payment gateways and inventory systems built to handle real scale.",
    features: [
      {
        title: "Online stores",
        description:
          "Storefronts built for speed and conversion, on Shopify or fully custom depending on your flexibility needs.",
      },
      {
        title: "Payment gateways",
        description:
          "Reliable payment processing integration that handles failures gracefully instead of losing the sale.",
      },
      {
        title: "Inventory systems",
        description:
          "Inventory management that stays accurate across channels, preventing overselling and stockout surprises.",
      },
      {
        title: "Marketplace development",
        description:
          "Multi-vendor marketplace infrastructure for platforms connecting buyers and sellers, not just single-store commerce.",
      },
    ],
    tags: [
      {
        name: "Shopify",
        description:
          "Fast-to-market, flexible storefronts with a mature ecosystem.",
      },
      {
        name: "Commerce",
        description:
          "Headless commerce APIs for customized structural scaling parameters.",
      },
      { name: "Stripe", description: "Reliable, scalable payment processing." },
      {
        name: "Next.js",
        description:
          "Fully custom, high-performance storefronts when Shopify's limits don't fit.",
      },
    ],
    longTitle: "E-Commerce Development Built to Convert at ",
    gradientWord: "Scale",
    longDesc:
      "Online stores, marketplaces, and checkout flows engineered for real transaction volume. An online store that looks great but has a clunky checkout loses sales every single day it's live. 4xCode builds e-commerce experiences as an e-commerce development agency focused on the parts that actually drive revenue: fast, low-friction checkout, reliable inventory systems that don't oversell, and payment infrastructure that handles real transaction volume without failing during your biggest sales day. Whether you need a Shopify storefront customized beyond template limits or a fully custom marketplace, we build for conversion first.",
    techCategories: [
      {
        name: "Headless Engine Core",
        items: [
          "Shopify Storefront API",
          "MedusaJS Platform",
          "Next.js Commerce",
        ],
      },
      {
        name: "Payment Processing Layer",
        items: ["Stripe Connect", "PayPal SDK", "Adyen Merchant Pipeline"],
      },
      {
        name: "Data Stream Cache",
        items: ["Redis Server Matrix", "Meilisearch Engine", "Webhooks Router"],
      },
    ],
    architecture: [
      {
        phase: "01",
        title: "Storefront Architecture Design",
        desc: "Decoupling operational web components from heavy tracking database engines.",
      },
      {
        phase: "02",
        title: "Payment Terminal Wiring",
        desc: "Setting secure encryption checks to route customer purchases into clean ledger logs.",
      },
      {
        phase: "03",
        title: "Real-time Synchronization Launch",
        desc: "Connecting physical stock tracking systems seamlessly with live frontend display metrics.",
      },
    ],
    metrics: [
      { value: "<350ms", label: "Instant Cart Mutations" },
      { value: "99.98%", label: "Checkout Integrity" },
      { value: "Real-time", label: "Stock Synchronization" },
    ],
    faqs: [
      {
        q: "Should we build on Shopify or go fully custom?",
        a: "Shopify fits most standard storefronts well; fully custom makes sense when you need marketplace functionality, complex pricing logic, or performance Shopify's theme architecture can't deliver.",
      },
      {
        q: "Can you handle high-traffic sales events without the site going down?",
        a: "Yes — we load-test checkout and inventory systems specifically for peak-traffic scenarios like flash sales and major promotions.",
      },
      {
        q: "Do you support multi-vendor marketplaces, not just single stores?",
        a: "Yes, including vendor onboarding, split payments, and per-vendor inventory management.",
      },
    ],
    pillars: [
      {
        title: "Checkout that converts",
        desc: "We optimize checkout flow specifically, since even small friction there has an outsized impact on conversion rate.",
      },
      {
        title: "Inventory that's always right",
        desc: "Inventory accuracy is treated as a first-class requirement, not an afterthought that causes oversells during peak demand.",
      },
      {
        title: "Built for peak traffic",
        desc: "We build on Shopify when it fits and fully custom when your business model needs more — not a one-size answer.",
      },
    ],
    whyTeamsChoose: [
      {
        title: "Checkout Flow Optimization",
        desc: "We optimize checkout flow specifically, since even small friction there has an outsized impact on conversion rate.",
      },
      {
        title: "Strict Real-Time Ledger Controls",
        desc: "Inventory accuracy is treated as a first-class requirement, not an afterthought that causes oversells during peak demand.",
      },
      {
        title: "Flexible Implementation Vectors",
        desc: "We build on Shopify when it fits and fully custom when your business model needs more — not a one-size answer.",
      },
    ],
    relatedSlugs: [
      "web-development",
      "seo-digital-marketing",
      "saas-engineering",
    ],
    software_build_data:{
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

},
sectionData:{
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  },
  
},
];





export const software_build_data={
  heading:{
    white: "Software built for your",
    red: "Industry",
  },

  subheading:
    "We combine product thinking, engineering, and industry-specific workflows to create software that drives your business operations.",

  industries:[
    "Automotive & Mobility",
    "Professional Services",
    "Startups & SaaS",
    "Sports & Fitness",
      "E-Commerce & Retail",
    "Finance & Operations",
    "Logistics & Transportation",
    "Food",
    "Travel & Hospitality",
  "Education & EdTech",  
    "Marketing & Advertising",
  "Healthcare & Technology",
  ]

}


export const sectionData = {
    heading: "Technology experience for scalable digital products",

    description:
      "4xCode combines software architecture, AI development, web performance, SaaS engineering, and cloud infrastructure for startup and growing businesses.",

    cards: [
      {
        card_heading: "AI Development Services",
        card_description:
          "We build intelligent AI solutions, agents, and RAG systems for business products.",
      },
      {
        card_heading: "Custom Software Development",
        card_description:
          "Scalable software solutions designed around your business requirements.",
      },
      {
        card_heading: "SaaS Development Company",
        card_description:
          "Launch scalable SaaS platforms with reliable backend, billing, and secure infrastructure.",
      },
      {
        card_heading: "Web Development Services",
        card_description:
          "Fast, responsive, and optimized websites that convert users and search traffic.",
      },
      {
        card_heading: "Cloud Engineering Services",
        card_description:
          "Build, deploy, and manage cloud infrastructure that scales reliably and confidently.",
      },
      {
        card_heading: "SEO-Friendly Web Development",
        card_description:
          "Improve ranking with technical SEO, Core Web Vitals, and high-performance design.",
      },
    ],
  };