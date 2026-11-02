export interface ProjectDetails {
  slug: string;
  name: string;
  desc: string;
  role?: string;
  isContribution?: boolean;
  isPrivateRepo?: boolean;
  isBackendPrivate?: boolean;
  tech: string;
  meta: string;
  icon: string;
  longDescription: string;
  github: string | { frontend?: string; backend?: string };
  live: string;
  liveLabel?: string;
  client: {
    name: string;
    industry: string;
    duration: string;
    deliverables: string[];
  };
  problems: {
    title: string;
    description: string;
    solution: string;
  }[];
  video?: string; // YouTube video ID
}

export const PROJECTS_DATA: Record<string, ProjectDetails> = {
  gitrabbit: {
    slug: "gitrabbit",
    name: "GITRABBIT",
    desc: "AI CODE REVIEW & REPOSITORY INTELLIGENCE",
    role: "Lead Systems Architect & Full-Stack",
    isContribution: false,
    tech: "NestJS / TypeScript / LLM APIs / PostgreSQL",
    meta: "Tested with 2,000+ users",
    icon: "🐇",
    longDescription: "GitRabbit is an AI code review and repository intelligence platform. Designed an automated repository analysis engine that parses project specifications to detect architectural risks, dependency conflicts, and code-to-requirement mismatches beyond line-level diffs. Tested with 2,000+ users, the platform orchestrates context-aware LLM pipelines to verify whether AI-agent-written code and developer pull requests align with high-level architectural specifications.",
    github: "https://github.com/shakib5560/gitrabbit2.0",
    live: "https://www.gitrabbit.co/",
    client: {
      name: "GitRabbit",
      industry: "AI Developer Tools & Code Intelligence",
      duration: "Product Engineering",
      deliverables: [
        "Automated repository analysis engine",
        "Project specification parsing & code-to-requirement verification",
        "Architectural risk & dependency conflict detection beyond line-level diffs",
        "Context-aware LLM pipelines for code reasoning",
        "Tested and validated with 2,000+ users"
      ]
    },
    problems: [
      {
        title: "Repository-Level Analysis Beyond Line-Level Diffs",
        description: "Standard code review tools only evaluate line-by-line diffs, missing multi-file architectural regressions, dependency conflicts, and contract breaks.",
        solution: "Engineered an analysis engine that parses the entire project context, dependency graphs, and requirements to validate changes against overall system architecture."
      },
      {
        title: "Handling Large Git Diffs within Token Constraints",
        description: "Parsing and sending massive pull request diffs to LLM APIs exceeded payload limits and context windows.",
        solution: "Developed intelligent diff filtering and semantic chunking to summarize boilerplate while dedicating reasoning capacity to high-impact architectural changes."
      }
    ]
  },
  autotaskx: {
    slug: "autotaskx",
    name: "AUTOTASKX",
    desc: "INDUSTRIAL IOT & FORMULATION PLATFORM",
    role: "Lead Systems Architect & Full-Stack",
    isContribution: false,
    isBackendPrivate: true,
    tech: "Next.js / FastAPI / TimescaleDB / Redis / AWS",
    meta: "Sub-25ms Real-Time · 60% Dye Trial Reduction",
    icon: "🏭",
    longDescription: "Architected an industrial IoT platform unifying dye-formulation, defect grading, and machine telemetry using algorithmic recipe engines and Redis Pub/Sub. Achieved sub-25ms real-time broadcasting and reduced lab dye trials by 60% with Next.js, FastAPI, TimescaleDB, and AWS.",
    github: {
      frontend: "https://github.com/shakib5560/AutoTaskX",
      backend: "https://github.com/shakib5560/autotaskx-api"
    },
    live: "https://autotaskx.online/",
    client: {
      name: "Industrial Dyehouse Automation",
      industry: "Industrial IoT & Smart Manufacturing",
      duration: "Production Deployment",
      deliverables: [
        "Industrial IoT platform unifying dye formulation & defect grading",
        "Algorithmic recipe engines reducing lab dye trials by 60%",
        "Sub-25ms real-time telemetry broadcasting with Redis Pub/Sub",
        "Time-series database persistence with TimescaleDB",
        "FastAPI backend microservices & Next.js frontend on AWS"
      ]
    },
    problems: [
      {
        title: "Translating Optical Physics into Matrix Math",
        description: "Matching target dye formulations required combining multi-wavelength reflectance curves into non-negative concentration vectors.",
        solution: "Formulated the problem as a Non-Negative Least Squares (NNLS) optimization computing exact dye concentration vectors in under 15ms."
      },
      {
        title: "Real-Time Machine Telemetry Synchronization",
        description: "Burst telemetry events from production machines at high line speeds risked desyncing user dashboards and overwhelming the database.",
        solution: "Implemented an async WebSocket manager backed by Redis Pub/Sub broadcasting telemetry under 25ms, persisting historical time-series data to TimescaleDB."
      }
    ]
  },
  "off-white": {
    slug: "off-white",
    name: "OFF---WHITE",
    desc: "LUXURY STREETWEAR & E-COMMERCE STOREFRONT",
    role: "Contributor — Frontend Development & UI/UX Implementation",
    isContribution: true,
    isPrivateRepo: true,
    tech: "React / Next.js / TypeScript / Tailwind CSS / UI/UX Design",
    meta: "Collaborative Frontend & UI/UX Delivery",
    icon: "◻️",
    longDescription: "Off-White (off---white.com) is an internationally recognized luxury streetwear and high-fashion e-commerce platform founded by Virgil Abloh. Contributing as a frontend developer under DevNest, my work focused on enhancing the customer-facing landing page experience, UI consistency, content hierarchy, and reusable component modules using React and Next.js—improving user engagement and content discovery while strictly preserving the brand's iconic deconstructionist visual language and typography.",
    github: "https://github.com/shakib5560",
    live: "https://www.off---white.com",
    liveLabel: "OFFICIAL_STOREFRONT",
    client: {
      name: "Off-White™ (via DevNest Contract)",
      industry: "Luxury Fashion, High-End Streetwear & E-Commerce",
      duration: "Collaborative Contract",
      deliverables: [
        "Landing page visual hierarchy & content presentation enhancement",
        "Reusable, content-driven UI components & modular drop blocks",
        "Frontend UI implementation using React, Next.js, and TypeScript",
        "Component-level state management & interactive data-flow",
        "Mobile-responsive navigation & lookbook discovery optimization",
        "High-fashion editorial layout refinement respecting brand aesthetics"
      ]
    },
    problems: [
      {
        title: "Enhancing an Established Luxury Storefront Without Brand Disruption",
        description: "Off-White possesses an iconic brutalist and high-fashion design identity with stark typography and signature quotation marks. The challenge was modernizing the landing page experience and shopping flow without disturbing the brand's core artistic ethos.",
        solution: "Conducted meticulous layout audits, engineering subtle, high-impact UI enhancements that improved scannability and component modularity while adhering strictly to Off-White's minimalist, high-contrast design tokens."
      },
      {
        title: "Content Modularity Across Dynamic Product Drops",
        description: "High-fashion drops and capsule collections require rapid layout variations without altering core platform styling or risking regressions.",
        solution: "Engineered atomic, highly configurable Next.js and React content blocks with strict TypeScript interfaces, giving marketing and merchandising teams the flexibility to compose responsive drop banners and showcase grids seamlessly."
      },
      {
        title: "Responsive Lookbook & Mobile Navigation Usability",
        description: "Mobile shoppers experienced navigation friction when exploring multi-category editorial lookbooks and product drops.",
        solution: "Refined the mobile drawer navigation, streamlined category discovery pathways, and optimized touch targets to meet WCAG standards while maintaining the minimalist look."
      }
    ]
  },
  rinors: {
    slug: "rinors",
    name: "RINORS",
    desc: "MULTI-VENDOR E-COMMERCE MARKETPLACE",
    role: "Full-Stack Engineer",
    isContribution: false,
    isPrivateRepo: true,
    tech: "Next.js / TypeScript / T3 Stack / tRPC",
    meta: "10,000+ monthly users",
    icon: "❖",
    longDescription: "Built a high-traffic multi-vendor marketplace serving 10,000+ monthly users. Implemented end-to-end type-safe tRPC APIs, vendor management workflows, and modular relational schemas using Prisma and PostgreSQL.",
    github: "https://github.com/shakib5560",
    live: "https://www.rinors.com/",
    client: {
      name: "Rinors Marketplace",
      industry: "Multi-Vendor E-Commerce",
      duration: "7 Months",
      deliverables: [
        "High-traffic multi-vendor marketplace serving 10,000+ monthly users",
        "End-to-end type-safe tRPC API architecture",
        "Vendor management workflows & storefront controls",
        "Modular relational schemas with Prisma & PostgreSQL",
        "High-concurrency query optimization and caching"
      ]
    },
    problems: [
      {
        title: "Multi-Vendor Tenant Isolation & RBAC",
        description: "Managing vendor-specific catalogs, orders, and financial data while maintaining strict tenant separation.",
        solution: "Designed modular relational schemas in Prisma with scoped access control and end-to-end type safety via tRPC."
      },
      {
        title: "High Concurrent Traffic Stability",
        description: "Handling traffic spikes from thousands of active buyers and vendors without degradations in checkout latency.",
        solution: "Implemented query batching, edge caching, and optimized database indexing to maintain fast response times."
      }
    ]
  },
  idea2system: {
    slug: "idea2system",
    name: "IDEA2SYSTEM",
    desc: "AUTOMATED ARCHITECTURE & ERD GENERATOR",
    role: "Backend & AI Systems Engineer",
    isContribution: false,
    tech: "NestJS / PostgreSQL / Docker / LLM Pipelines",
    meta: "Multi-Stage LLM Chains · Dockerized",
    icon: "🧠",
    longDescription: "Engineered a containerized NestJS and PostgreSQL backend orchestrating multi-stage LLM chains to auto-generate validated ERDs, system architectures, and REST API contracts.",
    github: "https://github.com/shakib5560/Idea2System-API-V2.0",
    live: "https://hub.docker.com/r/shakib106/idea2system-api",
    liveLabel: "DOCKERHUB_IMAGE",
    video: "8qNOPrrWJXo",
    client: {
      name: "Idea2System",
      industry: "AI Developer Tools & Software Engineering",
      duration: "Product Engineering",
      deliverables: [
        "Containerized NestJS & PostgreSQL backend",
        "Multi-stage LLM chains for system architecture synthesis",
        "Automated database schema & ERD generation",
        "Validated REST API contract generation",
        "Dockerized production deployment"
      ]
    },
    problems: [
      {
        title: "Cross-Artifact Schema & API Consistency",
        description: "Ensuring AI-generated database schemas, ERDs, and REST API contracts remain strictly aligned and syntactically valid.",
        solution: "Engineered a multi-stage validation pipeline with schema linters and cross-referencing logic that guarantees consistency across generated system artifacts."
      },
      {
        title: "Reproducible Containerized Deployment",
        description: "Standardizing development and execution environments across different host platforms.",
        solution: "Containerized the platform with Docker multi-stage builds and automated image distribution on Docker Hub."
      }
    ]
  },
  toygalaxy: {
    slug: "toygalaxy",
    name: "TOYGALAXY",
    desc: "E-COMMERCE PLATFORM",
    role: "Full-Stack Web Developer (Contract)",
    isContribution: true,
    isPrivateRepo: true,
    tech: "Django / JavaScript / Tailwind CSS",
    meta: "2,500+ Daily Active Users",
    icon: "◫",
    longDescription: "Engineered backend services for a production e-commerce platform using Django. Supported 2,500+ daily active users, optimizing ORM queries and schema indexing to ensure reliability during traffic spikes.",
    github: "https://github.com/shakib5560/ToyGalaxy",
    live: "https://www.toygalaxy.com.au/",
    client: {
      name: "ToyGalaxy Australia",
      industry: "E-Commerce & Retail",
      duration: "Contract",
      deliverables: [
        "Backend services for production e-commerce platform using Django",
        "High-traffic catalog and checkout flows supporting 2,500+ DAUs",
        "ORM query optimization with select_related & prefetch_related",
        "Composite database schema indexing for zero-downtime reliability",
        "REST APIs and streamlined request validation pipelines"
      ]
    },
    problems: [
      {
        title: "Dynamic Search & Filtering Performance",
        description: "Large product collections caused slow database joins and delayed category filtering responses.",
        solution: "Optimized Django ORM queries with select_related and prefetch_related, introduced indexed fields, and implemented Redis caching to improve filtering speed."
      },
      {
        title: "High-Traffic Checkout Stability",
        description: "Seasonal traffic surges threatened to saturate database connections and slow down the checkout pipeline.",
        solution: "Tuned ORM queries, added composite schema indexes, and introduced robust payload validation to keep response times consistently fast and eliminate downtime."
      }
    ]
  },
  ainos: {
    slug: "ainos",
    name: "AINOS",
    desc: "AI-POWERED ECOMMERCE PLATFORM",
    role: "Lead Full-Stack & AI Systems Engineer",
    isContribution: false,
    tech: "NestJS / React / PostgreSQL / Prisma / Redis / JWT / Docker / AI APIs",
    meta: "Automated SEO & AI Image Pipelines",
    icon: "◈",
    longDescription: "AINOS is an AI-powered eCommerce platform designed for modern digital businesses that want intelligent automation with a clean and minimalist user experience. The platform combines AI-driven product management, automated content generation, and smart SEO optimization within a scalable full-stack architecture. AINOS provides an advanced AI-enabled control panel where administrators can automatically generate product descriptions, optimize SEO metadata, and edit product images using AI-powered workflows. The system focuses on performance, automation, and seamless user experience for both customers and store managers.",
    github: {
      frontend: "https://github.com/shakib5560/AINOS",
      backend: "https://github.com/shakib5560/AINOS_API"
    },
    live: "https://ainos-premium.netlify.app/",
    client: {
      name: "AINOS Technologies",
      industry: "AI-Powered eCommerce & SaaS",
      duration: "6 Months",
      deliverables: [
        "AI-powered eCommerce platform",
        "Minimalist modern landing page",
        "AI-enabled admin control panel",
        "Automated product description generation",
        "AI-based image editing workflows",
        "Automated SEO optimization system",
        "Secure authentication & subscription management",
        "Scalable NestJS backend architecture",
        "Responsive React frontend implementation",
        "Dockerized production deployment",
        "Performance optimization & caching system"
      ]
    },
    problems: [
      {
        title: "AI Processing & Request Optimization",
        description: "AI-powered operations such as automated description generation, SEO processing, and image editing created heavy concurrent API workloads and response bottlenecks.",
        solution: "Implemented queue-based request handling, Redis caching, optimized Prisma queries, and modular NestJS services to improve AI task execution speed and maintain stable server performance."
      },
      {
        title: "Automated SEO & Dynamic Metadata Generation",
        description: "Generating unique SEO-friendly metadata dynamically for thousands of products while maintaining performance and consistency was complex.",
        solution: "Built AI-assisted metadata generation pipelines with server-side optimization and centralized SEO management logic to automate titles, descriptions, keywords, and structured metadata generation."
      },
      {
        title: "AI Image Editing & Asset Management",
        description: "Processing AI-generated image edits and managing optimized media delivery introduced storage and performance challenges.",
        solution: "Integrated optimized media handling pipelines with Cloudinary, background asset transformations, and CDN caching to reduce load times and maintain visual quality."
      },
      {
        title: "Admin Workflow Automation & High-Concurrency Scalability",
        description: "Managing environment consistency, high concurrency during bulk catalog updates, and deployment reliability across production environments created operational complexity.",
        solution: "Decoupled administrative workloads using asynchronous jobs, transaction isolation in Prisma/PostgreSQL, Docker containerization, and rate-limiting safeguards."
      }
    ]
  },
  gyaanbd: {
    slug: "gyaanbd",
    name: "GYAANBD",
    desc: "LMS PLATFORM",
    tech: "Next.js / TypeScript / NestJS / JWT / PostgreSQL / i18n",
    meta: "Multi-language support",
    icon: "◬",
    longDescription: "GyaanBD is a multilingual learning management system (LMS) designed to provide accessible digital education and knowledge-sharing experiences. The platform supports secure course management, scalable architecture, and multilingual content delivery.",
    github: "https://github.com/shakib5560/gyaanbd.com",
    live: "https://gyaanbd.vercel.app",
    client: {
      name: "GyaanBD Learning Network",
      industry: "Education Technology (EdTech)",
      duration: "5 Months",
      deliverables: [
        "Multi-language LMS platform",
        "Secure authentication & authorization",
        "Course management dashboard",
        "Responsive Next.js frontend",
        "RESTful API architecture",
        "SEO optimization & i18n support",
        "CI/CD deployment optimization"
      ]
    },
    problems: [
      {
        title: "Multi-Language Rendering & SEO",
        description: "Handling multilingual dynamic content while maintaining SEO consistency introduced rendering complexity.",
        solution: "Implemented Next.js i18n architecture with server-side rendering optimization and modular translation management."
      },
      {
        title: "Authentication & Protected Learning Modules",
        description: "Managing secure access across multiple educational modules required scalable authorization workflows.",
        solution: "Built JWT-based authentication with protected API routes, role-based permissions, and centralized authorization middleware using NestJS."
      },
      {
        title: "Deployment Pipeline & Build Stability",
        description: "Production deployments occasionally failed due to TypeScript build mismatches and environment configuration issues.",
        solution: "Improved deployment workflows with strict environment validation, production build testing, and optimized CI/CD deployment handling."
      }
    ]
  },
  atlania: {
    slug: "atlania",
    name: "ATLANIA",
    desc: "AI-POWERED AUTONOMOUS BLOGGING PLATFORM",
    tech: "Next.js / NestJS / OpenAI / PostgreSQL / Redis / TailwindCSS",
    meta: "AI Auto-SEO & Auto-Images",
    icon: "🌌",
    longDescription: "Atlania is a next-generation AI-powered autonomous blogging and content automation platform designed for modern digital publishers. It completely automates the workflow of content generation, search engine optimization (SEO), conceptual visual asset generation, and plagiarism/copyright removal using advanced multi-agent systems. Powered by an intelligent AI-enabled control plane, administrators can trigger autonomous research agents, design visual layouts, schedule releases, and track real-time audience metrics, all within a highly optimized and futuristic workspace architecture.",
    github: {
      frontend: "https://github.com/shakib5560/Atlania",
      backend: "https://github.com/shakib5560/Atlania-API"
    },
    live: "https://atlania.vercel.app/",
    client: {
      name: "Atlania Media Group",
      industry: "Autonomous Content & AI SaaS",
      duration: "8 Months",
      deliverables: [
        "AI-powered autonomous blog generation system",
        "Automated SEO optimization & dynamic metadata injection pipeline",
        "AI-driven visual asset generation & image editing workflows",
        "AI-based plagiarism & copyright scanning and removal engine",
        "Intelligent AI command control plane & analytics dashboard",
        "Responsive server-side rendered (SSR) Next.js frontend",
        "Scalable NestJS and PostgreSQL backend microservices",
        "Dockerized production deployment with multi-region scaling"
      ]
    },
    problems: [
      {
        title: "Autonomous Content Quality & Dynamic SEO Mapping",
        description: "Generating long-form content that remains readable, matches a specific brand voice, and integrates high-traffic SEO keywords naturally is difficult with standard one-shot prompt completions.",
        solution: "Engineered a hierarchical multi-agent editing pipeline that splits content creation into researching, drafting, SEO keyword injection, and proofreading phases, improving SEO scores by 92% and user engagement duration."
      },
      {
        title: "Automated Plagiarism Check & Copyright Removals",
        description: "To prevent legal liability and search engine indexing penalties, generated blog posts must undergo rigorous real-time copyright and plagiarism scanning before publication.",
        solution: "Built a customized copyright scanner that checks generated phrases against online search APIs, flags similarity indices, and automatically executes localized re-writing prompts to secure 100% original content."
      },
      {
        title: "Asynchronous Image Synthesis & CDN Delivery",
        description: "Generating highly relevant visual assets for blog posts on the fly introduces significant API latency and server resource blocks.",
        solution: "Implemented an asynchronous image generation queue using BullMQ and Redis. Autonomously formats optimal art prompts, synthesizes visuals via DALL-E 3/Stable Diffusion, compresses to Next-Gen WebP, and distributes via edge CDNs."
      }
    ]
  }
};
