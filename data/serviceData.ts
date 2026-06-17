export interface TechCategory {
  name: string;
  items: string[];
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface ArchitecturePhase {
  phase: string;
  title: string;
  desc: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Pillar {
  title: string;
  desc: string;
}

export interface ServiceItem {
  slug: string;
  iconKey: string;
  title: string;
  desc: string;
  features: string[];
  tags: string[];
  longTitle: string;
  gradientWord: string;
  longDesc: string;
  techCategories: TechCategory[];
  architecture: ArchitecturePhase[];
  metrics: Metric[];
  faqs: Faq[];
  pillars: Pillar[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "ai-development",
    iconKey: "ai",
    title: "AI Development",
    desc: "LLM apps, agents, fine-tuning, RAG, computer vision and ML systems.",
    features: [
      "Custom LLM agents",
      "RAG pipelines",
      "Fine-tuning",
      "Vector search",
    ],
    tags: ["OpenAI", "PyTorch", "LangChain", "Pinecone"],
    longTitle: "Intelligence Built directly into ",
    gradientWord: "Core Infrastructure",
    longDesc:
      "We strip away the academic overhead to build robust, scalable agentic automation systems. From custom semantic indexing layers to isolated internal inference clusters, your corporate knowledge base remains fully deterministic and locked within your structural enterprise boundaries.",
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
        q: "How do you guarantee that corporate data doesn't leak into public LLMs?",
        a: "We deploy isolated local inference engines via vLLM or secure virtual private clouds using AWS Bedrock, ensuring your weights and enterprise datasets are never processed by public pipelines.",
      },
      {
        q: "What strategy is implemented to prevent hallucination in agent structures?",
        a: "We build strict deterministic RAG guardrails and mathematical fallback thresholds into our routing layers so the model only executes functions backed by verifiable text nodes.",
      },
    ],
    pillars: [
      {
        title: "Reliability by design",
        desc: "Evals, guardrails and fallback logic ship with the model, not bolted on after the first incident.",
      },
      {
        title: "Grounded in your data",
        desc: "Retrieval and fine-tuning tuned to your domain, so answers are specific instead of generic.",
      },
      {
        title: "Built to scale",
        desc: "Architectures that handle ten users and ten million, with queueing and rate limits handled upfront.",
      },
    ],
    relatedSlugs: ["custom-software", "automation-systems", "cloud-systems"],
  },
  {
    slug: "custom-software",
    iconKey: "software",
    title: "Custom Software",
    desc: "Bespoke engineering for ambitious products with serious technical depth.",
    features: [
      "Architecture design",
      "Backend systems",
      "Data platforms",
      "Realtime sync",
    ],
    tags: ["Go", "Node.js", "Postgres", "Redis"],
    longTitle: "High-Performance Applications Tailored for ",
    gradientWord: "Global Scale",
    longDesc:
      "We construct reliable software platforms focused entirely on concrete performance metrics. By utilizing type-safe compiler boundaries, decoupled modular component stacks, and edge asset routing distributions, we completely avoid processing overhead bottlenecks.",
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
        q: "Why do you privilege Go and type-safe systems over generic runtimes?",
        a: "Go allows us to build compile-time safe software with minimal memory footprints, avoiding the structural performance spikes and garbage collection traps standard in heavy object runtimes.",
      },
    ],
    pillars: [
      {
        title: "Architecture first",
        desc: "Every system starts with a data model and service boundary that won't need a rewrite at scale.",
      },
      {
        title: "Built to last",
        desc: "Typed, tested and documented so the next engineer can extend it without guessing.",
      },
      {
        title: "Performance by default",
        desc: "Profiling and load testing are part of delivery, not an afterthought.",
      },
    ],
    relatedSlugs: ["saas-engineering", "api-integration", "cloud-systems"],
  },
  {
    slug: "saas-engineering",
    iconKey: "saas",
    title: "SaaS Engineering",
    desc: "Multi-tenant SaaS products built to scale from MVP to millions.",
    features: [
      "Multi-tenancy",
      "Billing & RBAC",
      "Onboarding flows",
      "Admin tooling",
    ],
    tags: ["Next.js", "Stripe", "Postgres", "AWS"],
    longTitle: "Multi-Tenant Architectures Built to ",
    gradientWord: "Scale Instantly",
    longDesc:
      "We design cloud-native SaaS systems engineered for isolated customer spaces, unified feature flags, and secure ledger configurations. Maximize infrastructure margins without sacrificing multi-tenant performance thresholds.",
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
        q: "How do you enforce multi-tenant separation across API surfaces?",
        a: "We utilize row-level security (RLS) on database clusters combined with cryptographic tenant tokens checked instantly at our middleware boundary layers.",
      },
    ],
    pillars: [
      {
        title: "Multi-tenant from day one",
        desc: "Isolation, billing and RBAC are architectural decisions, not retrofits.",
      },
      {
        title: "Revenue-ready",
        desc: "Stripe, plans and usage metering wired in before your first paying customer.",
      },
      {
        title: "Operable at scale",
        desc: "Admin tooling and per-tenant observability so support doesn't mean guesswork.",
      },
    ],
    relatedSlugs: ["custom-software", "web-development", "api-integration"],
  },
  {
    slug: "web-development",
    iconKey: "web",
    title: "Web Development",
    desc: "Blisteringly fast full-stack web platforms built with modern frameworks and edge-first architecture.",
    features: ["Design systems", "SSR & SEO", "Edge runtime", "Analytics"],
    tags: ["React", "Next.js", "Tailwind", "Cloudflare"],
    longTitle: "Blisteringly Fast Interfaces Tailored for ",
    gradientWord: "Conversion",
    longDesc:
      "We craft rich, highly interactive online interfaces focused on sub-second load times and absolute pixel perfection. Utilizing optimized edge distribution layers guarantees absolute zero cold starts.",
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
        q: "Do your Next.js builds leverage static generation or dynamic edge execution?",
        a: "We deploy hybrid architectures using partial prerendering (PPR). Highly structured contents are compiled static, while user interactions execute directly on edge runtimes.",
      },
    ],
    pillars: [
      {
        title: "Speed as a feature",
        desc: "Edge rendering and aggressive caching so pages feel instant, not just compliant.",
      },
      {
        title: "Pixel-accurate",
        desc: "Design systems implemented faithfully down to spacing and motion.",
      },
      {
        title: "Built to rank",
        desc: "SEO and Core Web Vitals considered from the first component, not patched in later.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "seo-digital-marketing", "saas-engineering"],
  },
  {
    slug: "mobile-apps",
    iconKey: "mobile",
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android experiences crafted with React Native and Swift / Kotlin.",
    features: [
      "Cross-platform",
      "Native modules",
      "Push & deep links",
      "Offline-first",
    ],
    tags: ["React Native", "Expo", "Swift", "Kotlin"],
    longTitle: "Native Mobile Systems Tuned for ",
    gradientWord: "Fluid Motion",
    longDesc:
      "We build reliable cross-platform mobile apps configured with true multi-threaded native extensions. Ensure your system loads perfectly offline without disrupting internal database states.",
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
        q: "How are complex UI calculation thread bottlenecks managed?",
        a: "We map performance critical modules down into JSI native modules written in Swift and Kotlin, completely bypassing standard JSON string bridge lags.",
      },
    ],
    pillars: [
      {
        title: "Feels native",
        desc: "Platform-specific interactions and motion, not a webview wearing an app icon.",
      },
      {
        title: "Works offline",
        desc: "Local-first data so the app is usable on a flight, not just on a stable connection.",
      },
      {
        title: "Ships to both stores",
        desc: "One codebase, native modules where it counts, and a release pipeline that doesn't stall on review.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "api-integration", "custom-software"],
  },
  {
    slug: "api-integration",
    iconKey: "api",
    title: "API Integration",
    desc: "Connect anything — payments, CRMs, AI APIs, internal systems.",
    features: ["Webhook infra", "Sync engines", "Auth flows", "SDKs"],
    tags: ["GraphQL", "REST", "OAuth", "gRPC"],
    longTitle: "Highly Resilient Bridges Between Complex ",
    gradientWord: "Data Systems",
    longDesc:
      "We configure hyper-resilient web hook infrastructures and real-time syncing pipelines designed to prevent packet failures. Standardize cross-platform payloads safely with extreme data security layers.",
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
        q: "What mechanism processes external endpoint downtime events?",
        a: "We configure asynchronous BullMQ buffer rings backed by Redis memory matrices that track execution traces and perform controlled retries using exponential backoffs.",
      },
    ],
    pillars: [
      {
        title: "Resilient by default",
        desc: "Retries, backoff and dead-letter queues so a third-party outage doesn't become yours.",
      },
      {
        title: "Secure at every hop",
        desc: "OAuth, signed payloads and mTLS handled correctly, not assumed.",
      },
      {
        title: "Observable end to end",
        desc: "Every webhook and sync job is traceable, so failures are found in minutes, not support tickets.",
      },
    ],
    relatedSlugs: ["automation-systems", "saas-engineering", "cloud-systems"],
  },
  {
    slug: "automation-systems",
    iconKey: "automation",
    title: "Automation Systems",
    desc: "Workflow engines, AI ops automation, internal tooling that scales.",
    features: ["Job queues", "Visual workflows", "AI triggers", "Audit logs"],
    tags: ["Temporal", "Zapier", "n8n", "Lambda"],
    longTitle: "Eliminate Operational Complexity with Deterministic ",
    gradientWord: "Workflow Engines",
    longDesc:
      "We replace manual business processes with reliable, auto-recovering distributed state machines. Build auditable event processing tracks that remain error-proof across high volume traffic surges.",
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
        q: "How do your orchestration layers recover when third party server connections break mid-workflow?",
        a: "By managing our state traces inside Temporal.io structures, executions freeze transparently and re-instantiate from the exact checkpoint vector once connections resume.",
      },
    ],
    pillars: [
      {
        title: "Auditable by default",
        desc: "Every run logged and replayable, so compliance is a query, not an investigation.",
      },
      {
        title: "Self-healing",
        desc: "Workflows resume from the last checkpoint instead of failing silently.",
      },
      {
        title: "Built for the long tail",
        desc: "Edge cases and exceptions are first-class paths, not afterthoughts.",
      },
    ],
    relatedSlugs: ["ai-development", "api-integration", "cloud-systems"],
  },
  {
    slug: "ui-ux-design",
    iconKey: "ui",
    title: "UI / UX Design",
    desc: "Cinematic, opinionated interfaces that elevate brand and convert with every pixel.",
    features: ["Design systems", "Prototyping", "Motion", "Research"],
    tags: ["Figma", "Framer", "Motion", "Storybook"],
    longTitle: "Cinematic Layout Systems Crafted to Elevate Your ",
    gradientWord: "Digital Brand",
    longDesc:
      "We build premium design systems mapped perfectly down to component level token structures. We bridge the structural gap between pure artistic visual design layouts and scalable application development codebases.",
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
        q: "Are the visual theme tokens natively adaptable into running code environments?",
        a: "Yes, our designs export directly into automated configuration maps compatible with Tailwind variables and atomic styling layouts.",
      },
    ],
    pillars: [
      {
        title: "Systems, not screens",
        desc: "Tokens and components that scale across the whole product, not one-off mockups.",
      },
      {
        title: "Validated, not assumed",
        desc: "Prototypes tested against real users before a line of code ships.",
      },
      {
        title: "Code-ready handoff",
        desc: "Specs exported as variables your team can implement directly.",
      },
    ],
    relatedSlugs: ["web-development", "mobile-apps", "saas-engineering"],
  },
  {
    slug: "cloud-systems",
    iconKey: "cloud",
    title: "Cloud Systems",
    desc: "Resilient cloud infrastructure on AWS, Vercel & Cloudflare — observable, secure, automated.",
    features: [
      "IaC pipelines",
      "Observability",
      "Cost controls",
      "Zero-downtime",
    ],
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    longTitle: "Immutable Server Frameworks Tailored for Continuous ",
    gradientWord: "Deployment Highspots",
    longDesc:
      "We design resilient infrastructure environments defined securely as raw system automation code. Maximize absolute processing security rules while maintaining complete live network logging streams.",
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
        q: "How do you achieve absolute continuous deployment states without tracking service lags?",
        a: "We configure automated blue-green delivery clusters or rolling container replacement trees backed by deep health checks inside isolated reverse proxies.",
      },
    ],
    pillars: [
      {
        title: "Infrastructure as code",
        desc: "Every resource defined, versioned and reviewable — no manual console changes.",
      },
      {
        title: "Built to fail safely",
        desc: "Health checks, rollbacks and blue-green deploys so incidents stay small.",
      },
      {
        title: "Cost-aware",
        desc: "Right-sized from day one, with budgets and alerts before the bill surprises you.",
      },
    ],
    relatedSlugs: ["custom-software", "automation-systems", "api-integration"],
  },
  {
    slug: "seo-digital-marketing",
    iconKey: "marketing",
    title: "SEO & Digital Marketing",
    desc: "Data-driven SEO, content strategy, paid campaigns, and growth marketing that drive qualified traffic and measurable business results.",
    features: [
      "Technical SEO",
      "Content strategy",
      "PPC campaigns",
      "Conversion optimization",
    ],
    tags: ["Google Ads", "SEO", "Analytics", "Meta Ads"],
    longTitle: "Data-driven Growth Frameworks Engineered to Boost ",
    gradientWord: "Organic Traffic",
    longDesc:
      "We perform programmatic technical site fine-tunings, structure solid keyword taxonomy configurations, and set complete application visibility layers to maximize real market search value conversion metrics safely.",
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
        q: "What adjustments are applied to prevent search optimization decay over Javascript frameworks?",
        a: "We transition indexing paths over explicit Edge Server-Side Rendering (SSR) loops and optimize structured schema data blocks natively within layout headers.",
      },
    ],
    pillars: [
      {
        title: "Technical foundation first",
        desc: "Crawlability and Core Web Vitals fixed before a single campaign launches.",
      },
      {
        title: "Measured, not guessed",
        desc: "Every channel tracked back to revenue, not just clicks.",
      },
      {
        title: "Compounding, not rented",
        desc: "Organic strategy that keeps paying off after the ad budget stops.",
      },
    ],
    relatedSlugs: ["web-development", "ecommerce-solutions", "ui-ux-design"],
  },
  {
    slug: "ecommerce-solutions",
    iconKey: "ecommerce",
    title: "E-Commerce Solutions",
    desc: "High-converting online stores and marketplaces with seamless checkout, inventory management, and scalable commerce infrastructure.",
    features: [
      "Online stores",
      "Payment gateways",
      "Inventory systems",
      "Marketplace development",
    ],
    tags: ["Shopify", "Commerce", "Stripe", "Next.js"],
    longTitle: "Highly Scalable Digital Marketplaces Engineered for Peak ",
    gradientWord: "Transactional Volume",
    longDesc:
      "We engineer flexible modern checkout systems designed to prevent transaction drop-offs. Synchronize real-time enterprise store data sets perfectly across distributed warehousing endpoints.",
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
        q: "How does the system sync catalog updates under high volume flash traffic spikes?",
        a: "We decouple product discoveries behind a high-speed memory layer powered by Redis and Meilisearch, routing transactional checkout lines through message queues to separate database pressure.",
      },
    ],
    pillars: [
      {
        title: "Checkout that converts",
        desc: "Every step of the funnel tested against drop-off, not just designed to look good.",
      },
      {
        title: "Inventory that's always right",
        desc: "Real-time stock sync so you never sell what you don't have.",
      },
      {
        title: "Built for peak traffic",
        desc: "Load-tested for the Black Friday spike, not just an average Tuesday.",
      },
    ],
    relatedSlugs: ["web-development", "seo-digital-marketing", "saas-engineering"],
  },
];