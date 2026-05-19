export interface ProjectDetails {
  slug: string;
  name: string;
  desc: string;
  tech: string;
  meta: string;
  icon: string;
  longDescription: string;
  github: string | { frontend?: string; backend?: string };
  live: string;
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
}

export const PROJECTS_DATA: Record<string, ProjectDetails> = {
  ainos: {
    slug: "ainos",
    name: "AINOS",
    desc: "AI-POWERED ECOMMERCE PLATFORM",
    tech: "NestJS / React / PostgreSQL / Prisma / Redis / JWT / Docker / AI APIs",
    meta: "Secure Payments",
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
        solution: "Developed optimized media processing workflows with asynchronous image handling, compression strategies, and CDN-ready asset delivery architecture."
      },
      {
        title: "Production Deployment & DevOps Stability",
        description: "Managing environment consistency, AI service integrations, and deployment reliability across production environments created operational complexity.",
        solution: "Containerized services using Docker, implemented environment-based configuration management, optimized CI/CD deployment workflows, and improved runtime monitoring for stable production releases."
      }
    ]
  },
  toygalaxy: {
    slug: "toygalaxy",
    name: "TOYGALAXY",
    desc: "E-COMMERCE PLATFORM",
    tech: "Django / JavaScript / PostgreSQL / Redis / TailwindCSS / Docker",
    meta: "2,000+ daily users",
    icon: "◫",
    longDescription: "ToyGalaxy is a modern e-commerce ecosystem designed for hobbyists, collectors, and toy enthusiasts. The platform supports large-scale product collections, dynamic inventory management, and optimized customer purchasing workflows.",
    github: "https://github.com/shakib5560",
    live: "https://www.toygalaxy.com.au/",
    client: {
      name: "ToyGalaxy Retail Ltd.",
      industry: "E-Commerce & Consumer Products",
      duration: "4 Months",
      deliverables: [
        "Advanced product catalog system",
        "Dynamic filtering & fuzzy search",
        "Inventory synchronization dashboard",
        "Customer account & order management",
        "Optimized Django backend architecture",
        "High-traffic performance optimization",
        "Production deployment & debugging support"
      ]
    },
    problems: [
      {
        title: "Dynamic Search & Filtering Performance",
        description: "Large product collections caused slow database joins and delayed category filtering responses.",
        solution: "Optimized Django ORM queries with select_related and prefetch_related, introduced indexed fields, and implemented Redis caching to improve filtering speed."
      },
      {
        title: "Cart Persistence & Session Synchronization",
        description: "Users frequently lost cart data during authentication transitions or encountered duplicated session states.",
        solution: "Developed custom session synchronization middleware that dynamically merged guest and authenticated cart states while maintaining transactional consistency."
      },
      {
        title: "Production Debugging & Server Optimization",
        description: "High traffic occasionally caused memory spikes and slower response times during peak usage periods.",
        solution: "Optimized server-side query execution, reduced redundant API requests, improved static asset delivery, and introduced monitoring strategies for production debugging."
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
  rinors: {
    slug: "rinors",
    name: "RINORS",
    desc: "MULTI-VENDOR E-COMMERCE",
    tech: "Next.js / T3 Stack / TypeScript / Prisma / PostgreSQL / TailwindCSS",
    meta: "10,000+ monthly users",
    icon: "❖",
    longDescription: "Rinors is a scalable multi-vendor e-commerce marketplace designed to support independent sellers, storefront management, and high-volume customer transactions with modern full-stack architecture.",
    github: "https://github.com/shakib5560",
    live: "https://www.rinors.com/",
    client: {
      name: "Rinors Marketplace",
      industry: "Multi-Vendor E-Commerce",
      duration: "7 Months",
      deliverables: [
        "Multi-vendor marketplace architecture",
        "Vendor dashboard & inventory management",
        "Secure payment & order workflows",
        "Type-safe T3 Stack implementation",
        "Scalable Prisma database architecture",
        "Performance optimization & caching",
        "Production deployment & monitoring"
      ]
    },
    problems: [
      {
        title: "Multi-Vendor Data Isolation",
        description: "Managing vendor-specific inventory, orders, and analytics while maintaining secure tenant separation increased backend complexity.",
        solution: "Designed a modular T3 Stack architecture with Prisma relational modeling and vendor-scoped authorization systems."
      },
      {
        title: "High Concurrent Traffic Optimization",
        description: "The marketplace needed stable performance while handling thousands of monthly active users.",
        solution: "Implemented query optimization, lazy-loading strategies, caching mechanisms, and frontend rendering improvements to reduce server overhead."
      },
      {
        title: "Deployment & Runtime Debugging",
        description: "Production builds occasionally introduced runtime inconsistencies caused by server-side rendering and API synchronization issues.",
        solution: "Improved deployment validation workflows, optimized API error handling, and implemented centralized debugging strategies for production monitoring."
      }
    ]
  },
  gitrabbit: {
    slug: "gitrabbit",
    name: "GITRABBIT",
    desc: "AI-POWERED CODE REVIEW PLATFORM",
    tech: "Next.js / TypeScript / OpenAI / GitHub APIs / Tailwind CSS",
    meta: "Auto Pull-Request Reviews",
    icon: "🐇",
    longDescription: "GitRabbit is an advanced AI-powered code review assistant that integrates directly into GitHub repository workflows. It automatically reviews pull requests, analyzes code changes for potential bugs, checks styling and security issues, and provides line-by-line recommendations to speed up the review cycle.",
    github: "https://github.com/shakib5560/gitrabbit",
    live: "https://gitrabbit-demo.netlify.app",
    client: {
      name: "GitRabbit Open Source / DevTools Inc.",
      industry: "Developer Productivity & AI Code Review Tools",
      duration: "2 Months (Contract)",
      deliverables: [
        "GitHub Webhooks handler endpoint evaluating diff files",
        "OpenAI API integration for context-aware code review suggestions",
        "Interactive dashboard displaying review metrics and PR timelines",
        "Security scanning modules targeting exposed secrets and vulnerability patterns"
      ]
    },
    problems: [
      {
        title: "Handling Extremely Large Git Diff Files within API Payload Limits",
        description: "Parsing and sending extremely large git diff files from massive pull requests directly to OpenAI APIs regularly exceeded payload size limits and context window token constraints.",
        solution: "Developed a diff chunking and filtering algorithm in Node.js. It excludes binary files, locks files, and generated files (like package-lock.json), then splits large files into logical hunks. The system summarizes non-critical files and only sends high-impact code blocks for deep AI review."
      },
      {
        title: "Real-time Rate Limits and GitHub API Throttling",
        description: "During high concurrent review runs, the platform repeatedly hit GitHub's REST API rate limits, failing to post reviews or fetch repo metadata.",
        solution: "Implemented a token-bucket rate limiter and migrated key operations to GitHub's GraphQL API to request data more efficiently. Setup a Redis caching layer for repository structure details, reducing REST API requests by 75%."
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
