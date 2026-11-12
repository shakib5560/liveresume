"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// ─── Experience Data ──────────────────────────────────────────────────────────

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  tech: string[];
  responsibilities: string[];
  impact: { metric: string; label: string }[];
  challenges: { title: string; problem: string; solution: string }[];
  keyLearnings: string[];
}

const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: "Software Engineer (L1 → Promoted to L2)",
    company: "RAJTECH BD",
    period: "January 2026 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    tech: ["NestJS", "React.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis", "FastAPI", "JWT", "RBAC", "Docker"],
    responsibilities: [
      "Full-Stack & Core Feature Engineering (L2, June 2026 – Present): Engineered end-to-end full-stack features, role-based dashboards, and third-party API integrations (webhooks & background queues) using NestJS, React.js, PostgreSQL (Prisma), and Redis.",
      "Technical Execution & Code Reviews: Translated client requirements into technical specifications and modular database schemas, conducted PR code reviews, and coordinated sprint workflows for on-time delivery.",
      "Backend Microservices (L1, January 2026 – June 2026): Architected 20+ backend modules and NestJS/FastAPI services with JWT and RBAC, reliably handling 200K+ daily requests across 8+ production services.",
      "Performance Optimization: Slashed p95 API latency by 79% (from 850ms to 180ms) via N+1 query elimination, composite PostgreSQL indexing, and Redis caching layers.",
    ],
    impact: [
      { metric: "79%", label: "p95 API Latency Cut (850→180ms)" },
      { metric: "200K+", label: "Daily Requests Handled" },
      { metric: "20+", label: "Production Modules Architected" },
      { metric: "8+", label: "Production Services" },
    ],
    challenges: [
      {
        title: "Eliminating N+1 Queries & Slashing p95 API Latency",
        problem: "High-traffic endpoints experienced 850ms p95 latency under concurrent loads due to unoptimized Prisma ORM query patterns and missing composite indexes.",
        solution: "Eliminated N+1 queries through batched Prisma queries, added composite PostgreSQL indexes on high-frequency filters, and introduced Redis caching layers, cutting p95 response times by 79% down to 180ms.",
      },
      {
        title: "Multi-Service Architecture & RBAC Security",
        problem: "Scaling 8+ client-facing microservices while maintaining consistent role-based access control, JWT verification, and clean service boundaries without introducing latency overhead.",
        solution: "Implemented centralized JWT authentication and fine-grained RBAC middleware across NestJS and FastAPI services, standardizing API contracts and ensuring reliable inter-service communication.",
      },
    ],
    keyLearnings: [
      "Database performance tuning through composite PostgreSQL indexing, query profiling, and Redis caching.",
      "Full-stack feature delivery with NestJS, React.js, and Prisma, managing sprint workflows and peer code reviews.",
      "Architecting scalable backend microservices with robust JWT and RBAC security models.",
    ],
  },
  {
    role: "Full-Stack Web Developer (Contract)",
    company: "DEVNEST",
    period: "February 2025 – December 2025",
    location: "Remote (Karachi, Pakistan)",
    type: "Contract",
    tech: ["Django", "NestJS", "React.js", "Python", "JavaScript", "PostgreSQL", "Redis", "Tailwind CSS", "REST APIs"],
    responsibilities: [
      "Built and shipped full-stack features, REST APIs, and checkout flows for commercial e-commerce platforms (ToyGalaxy Case Study & Off-White contributions) using Django, NestJS, and React.js.",
      "Contributed to ToyGalaxy, supporting 2,500+ daily active users (DAUs) with zero downtime.",
      "Optimized ORM queries, database indexes, and request validation pipelines to improve performance, response times, and system reliability during traffic spikes.",
    ],
    impact: [
      { metric: "2,500+", label: "DAUs Supported (ToyGalaxy)" },
      { metric: "0", label: "Downtime During Traffic Spikes" },
      { metric: "Full-Stack", label: "Django, NestJS & React.js" },
      { metric: "REST", label: "APIs & Checkout Pipelines" },
    ],
    challenges: [
      {
        title: "High-Traffic Checkout Stability & ORM Bottlenecks",
        problem: "Seasonal traffic surges on commercial e-commerce platforms led to database query bottlenecks and potential slowdowns during order processing.",
        solution: "Tuned Django ORM queries with select_related/prefetch_related, restructured relational indexes, and tightened request validation pipelines to maintain zero downtime and consistent latency.",
      },
    ],
    keyLearnings: [
      "Production Django ORM query optimization and relational schema indexing.",
      "Delivering robust checkout flows and commercial e-commerce features with Django, NestJS, and React.js.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "TECHONFY IT",
    period: "April 2024 – September 2024",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    tech: ["Python", "Django", "Django REST Framework (DRF)", "TypeScript", "JavaScript", "REST APIs", "Git & GitHub"],
    responsibilities: [
      "Full-Stack Developer Intern (July 2024 – September 2024): Shipped production features, REST APIs, and bug fixes across client web applications using Python, Django, and DRF within an Agile workflow.",
      "Web Development Intern (April 2024 – June 2024): Built reusable frontend components, relational schemas, API integrations, and authentication flows using TypeScript and JavaScript.",
    ],
    impact: [
      { metric: "Agile", label: "Sprint Feature Delivery" },
      { metric: "REST APIs", label: "Shipped with Django & DRF" },
      { metric: "TypeScript", label: "Reusable Components & Schemas" },
      { metric: "Git PR", label: "Structured Code Reviews" },
    ],
    challenges: [
      {
        title: "Adopting Production Git-Based PR & Collaboration Workflows",
        problem: "Transitioning to enterprise codebases required adhering to strict PR conventions, automated checks, and multi-developer branching strategies.",
        solution: "Proactively engaged in code reviews, learned systematic debugging techniques from senior developers, and maintained clean commit histories across client deliveries.",
      },
    ],
    keyLearnings: [
      "Full-stack development lifecycle across Python, Django, DRF, TypeScript, and JavaScript.",
      "Git PR workflows, peer code reviews, and structured debugging within Agile sprint cycles.",
    ],
  },
];

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ProjectSummary {
  slug: string;
  name: string;
  title: string;
  role: string;
  isContribution?: boolean;
  badge?: string;
  desc: string;
  tech: string[];
  meta: string;
  icon: string;
}

const DATA = {
  name: "SHAMIUL SHAKIB",
  title: "FULL-STACK SOFTWARE ENGINEER (NESTJS • REACT/NEXT.JS • PYTHON/DJANGO)",
  tagline: "Building systems that scale.",
  summary: "Full-Stack Software Engineer with 2+ years of hands-on experience building production-ready web applications, enterprise SaaS/ERP modules, e-commerce platforms, and AI-powered backend services. Core expertise includes TypeScript, NestJS, Node.js, React.js, Next.js, Python (Django/FastAPI), and PostgreSQL. Experienced in translating business requirements into modular architectures, optimizing application performance, integrating AI services, and delivering reliable software within Agile teams.",
  profile: [
    { label: "2+ YRS PRODUCTION FULL-STACK & BACKEND EXPERIENCE", color: "var(--text-primary)", bar: "var(--accent)" },
    { label: "NESTJS • REACT / NEXT.JS • PYTHON / DJANGO", color: "var(--yellow)", bar: "var(--yellow)" },
    { label: "ENTERPRISE SAAS/ERP & INDUSTRIAL IOT ARCHITECTURES", color: "var(--accent)", bar: "var(--accent)" },
    { label: "AI-POWERED CODE INTELLIGENCE & LLM WORKFLOWS", color: "var(--yellow)", bar: "var(--yellow)" },
    { label: "79% P95 LATENCY REDUCTION & DATABASE OPTIMIZATION", color: "var(--text-secondary)", bar: "var(--border-hover)" },
  ],
  expertise: {
    "BACKEND DEVELOPMENT": "Node.js, NestJS, Express.js, Python, Django, Django REST Framework (DRF), FastAPI",
    "FRONTEND DEVELOPMENT": "React.js, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, T3 Stack, HTML5, CSS3",
    "DATABASES & ORM": "PostgreSQL, Prisma ORM, SQL, Redis, TimescaleDB, MongoDB, Mongoose",
    "APIS & ARCHITECTURE": "RESTful APIs, GraphQL, tRPC, Microservices, JWT Authentication, Role-Based Access Control (RBAC), System Design",
    "DEVOPS & CLOUD": "Docker, AWS (EC2, S3), CI/CD (GitHub Actions), Linux VPS, Nginx, Cloudflare, Git & GitHub",
    "AI & AUTOMATION": "LLM APIs (OpenAI, Claude), Generative AI Integration, Vector Databases, Multi-Agent Workflows, BeautifulSoup, Scrapy",
  },
  education: [
    {
      institution: "BANGLADESH UNIVERSITY OF BUSINESS AND TECHNOLOGY (BUBT)",
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      grade: "CGPA: 3.43 / 4.00",
      period: "Jun 2023 – Nov 2026",
      location: "Mirpur, Dhaka",
      coursework: "Data Structures & Algorithms · System Design · Computer Networking · OOP · Database Systems · AI Systems"
    },
    {
      institution: "GOVERNMENT GRAPHIC ARTS INSTITUTE",
      degree: "Diploma in Engineering (Graphic Design & Software Technology)",
      grade: "CGPA: 3.60 / 4.00",
      period: "Jan 2020 – May 2023",
      location: "Mohammadpur, Dhaka",
      coursework: "Software Technology · Web Development · JavaScript · TypeScript · Python · React · Node.js · Django · REST APIs"
    },
    {
      institution: "BAHARPUR HIGH SCHOOL",
      degree: "Secondary School Certificate (SSC — Science)",
      grade: "GPA: 4.93 / 5.00",
      period: "2019",
      location: "Rajbari",
      coursework: "Science Major · Physics, Chemistry, Higher Mathematics, Biology"
    },
  ],
  certifications: [
    {
      title: "Advance Your Node.js Skills",
      issuer: "LinkedIn",
      credential: "https://www.linkedin.com/learning/certificates/14d3bc8e594d03be0f545c803408bf78a508c15b4f933b28371aa155178e7881",
      icon: "⬡",
    },
    {
      title: "Docker for Developers",
      issuer: "LinkedIn",
      credential: "https://www.linkedin.com/learning/certificates/ec238d9f34f7446280a37ac3549da897cbe174bd6ab60b473d788c721ea8b685",
      icon: "◫",
    },
    {
      title: "Building Generative AI Skills for Developers",
      issuer: "LinkedIn",
      credential: "https://www.linkedin.com/learning/certificates/07ce910ef6882762b32c5768f5b4aad7143578f2aa26e36fa55db07295662ec8?trk=share_certificate",
      icon: "◈",
    },
    {
      title: "AWS: Zero to Hero",
      issuer: "Train With Shubham",
      credential: "https://www.trainwithshubham.com/verify-certificate?serialno=Z9XFGDKG",
      icon: "☁",
    },
    {
      title: "Mastering AI-Assisted Development",
      issuer: "LinkedIn",
      credential: "https://www.linkedin.com/learning/certificates/19ca561dad9460869dc561d12b4f0efc2df0ccf558dce837987198d9aa0a0f51?trk=share_certificate",
      icon: "◉",
    },
  ],
  achievements: [
    {
      title: "1st Place — Regional Business Innovation Challenge (2023)",
      description: "Ranked first among participating teams for developing an algorithmic software approach to controlling chemical reactions.",
      icon: "🏆"
    },
    {
      title: "BUBT Three Minute Thesis (3MT) Presenter",
      description: "Presented FacePass, a facial authentication system designed for secure web login and identity verification.",
      icon: "🎙️"
    }
  ],
  references: [
    {
      name: "Md. Faisal Amir Mostafa",
      organization: "RajTech BD Ltd",
      designation: "Co-founder & CEO",
      address: "1st Floor, House # 13, Road # 05, Block #C, Mirpur-12, Dhaka 1216",
      phoneOffice: "01990668674",
      phoneResidential: undefined,
      mobile: "01758522846",
      email: "rajtechbdt@gmail.com",
      relation: "Professional",
    },
    {
      name: "Minhazul Haque",
      organization: "SYSSOLUTION",
      designation: "Chief Solutions Officer (CSO)",
      address: "Water Valley, BA-84/B, Lake Drive Rd, South Badda, Gulshan-1, Dhaka-1212",
      phoneOffice: "9644440440",
      phoneResidential: "9644440440",
      mobile: "01827168080",
      email: "info@syssolution.net",
      relation: "Professional",
    },
  ],
  projects: [
    {
      slug: "gitrabbit",
      name: "GITRABBIT",
      title: "AI Code Review & Repository Intelligence",
      role: "Lead Systems Architect & Full-Stack",
      isContribution: false,
      desc: "Designed an automated repository analysis engine that parses project specifications to detect architectural risks, dependency conflicts, and code-to-requirement mismatches beyond line-level diffs.",
      tech: ["NestJS", "TypeScript", "LLM APIs", "PostgreSQL", "Docker"],
      meta: "Tested with 2,000+ users",
      icon: "🐇",
    },
    {
      slug: "autotaskx",
      name: "AUTOTASKX",
      title: "Industrial IoT & Formulation Platform",
      role: "Lead Systems Architect & Full-Stack",
      isContribution: false,
      desc: "Architected an industrial IoT platform unifying dye-formulation, defect grading, and machine telemetry using algorithmic recipe engines and Redis Pub/Sub.",
      tech: ["Next.js", "FastAPI", "TimescaleDB", "Redis", "AWS"],
      meta: "Sub-25ms Real-Time · 60% Dye Trial Reduction",
      icon: "🏭",
    },
    {
      slug: "off-white",
      name: "OFF---WHITE",
      title: "Luxury Streetwear & High-Fashion E-Commerce",
      role: "Contributor — Frontend Development & UI/UX Implementation",
      isContribution: true,
      desc: "Contributed to enhancing the customer-facing landing page experience, reusable component modules, and responsive UX for off---white.com, preserving iconic brand aesthetics.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
      meta: "Collaborative Frontend & UI/UX Delivery",
      icon: "◻️",
    },
    {
      slug: "rinors",
      name: "RINORS",
      title: "Multi-Vendor E-Commerce Marketplace",
      role: "Full-Stack Engineer",
      isContribution: false,
      desc: "Built a high-traffic multi-vendor marketplace serving 10,000+ monthly users. Implemented end-to-end type-safe tRPC APIs, vendor management workflows, and modular relational schemas.",
      tech: ["Next.js", "TypeScript", "T3 Stack", "tRPC", "Prisma"],
      meta: "10,000+ Monthly Users · End-to-End Type-Safe",
      icon: "❖",
    },
    {
      slug: "idea2system",
      name: "IDEA2SYSTEM",
      title: "Automated Architecture & ERD Generator",
      role: "Backend & AI Systems Engineer",
      isContribution: false,
      desc: "Engineered a containerized NestJS and PostgreSQL backend orchestrating multi-stage LLM chains to auto-generate validated ERDs, system architectures, and REST API contracts.",
      tech: ["NestJS", "PostgreSQL", "Docker", "LLM Pipelines"],
      meta: "Multi-Stage LLM Chains · Dockerized",
      icon: "🧠",
    },
    {
      slug: "toygalaxy",
      name: "TOYGALAXY",
      title: "Commercial E-Commerce Platform",
      role: "Full-Stack Web Developer (Contract)",
      isContribution: true,
      desc: "Engineered backend services and checkout flows for a production e-commerce platform using Django. Supported 2,500+ daily active users, optimizing ORM queries and schema indexing to ensure zero downtime.",
      tech: ["Django", "JavaScript", "Tailwind CSS", "PostgreSQL", "Redis"],
      meta: "2,500+ Daily Active Users · Optimized ORM",
      icon: "◫",
    },
    {
      slug: "ainos",
      name: "AINOS",
      title: "Minimalist React & Next.js Theme (CodeCanyon)",
      role: "UI/UX Designer & Template Creator (CodeCanyon Author)",
      badge: "CODECANYON THEME",
      isContribution: false,
      desc: "Ultra-minimalist React, Next.js, and Tailwind CSS template published on CodeCanyon. Designed from scratch with ES6+, HTML5 & CSS3, and an engineered backend-ready architecture.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "ES6+", "HTML5 & CSS3"],
      meta: "CodeCanyon Marketplace · Backend-Ready System",
      icon: "◈",
    },
  ] as ProjectSummary[],
  connect: {
    phone: "+880 1771-659336",
    email: "dev.shakib@outlook.com",
    website: "shamiulshakib.me",
    github: "github.com/shakib5560",
    linkedin: "linkedin.com/in/sheikh-shamiul-834878206",
    location: "Shyamoli, Dhaka, Bangladesh",
    hackerrank: "hackerrank.com/profile/dev_shakib6",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
      <span style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 500 }}>{"// "}</span>
      <span style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" as const }}>{label}</span>
    </div>
  );
}

function TerminalCursor() {
  return <span className="cursor-blink" style={{ color: "var(--accent)" }}>▋</span>;
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

const TICKER = ["ENGINEER", "//", "DESIGNER", "//", "DEVELOPER", "//", "CREATIVE", "//", "CODE", "//", "ARCHITECT", "//"];

function Ticker({ reversed = false }: { reversed?: boolean }) {
  const items = [...TICKER, ...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="ticker-container" style={{ overflow: "hidden", width: "100%", maxWidth: "100%", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
      <div
        style={{
          display: "flex", gap: "2rem", alignItems: "center", whiteSpace: "nowrap", width: "max-content",
          animation: `ticker ${reversed ? "28s" : "22s"} linear infinite ${reversed ? "reverse" : "normal"}`,
        }}
      >
        {items.map((item, i) => (
          <span key={i} style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", color: item === "//" ? "var(--border-hover)" : "var(--text-muted)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [typed, setTyped] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const full = DATA.tagline;

  const navLinks = [
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "education", href: "#education" },
    { label: "certifications", href: "#certifications" },
    { label: "references", href: "#references" },
    { label: "connect", href: "#connect" },
  ];

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else clearInterval(t);
    }, 50);
    return () => clearInterval(t);
  }, [full]);

  return (
    <header style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container-max" style={{ paddingBottom: "3.5rem" }}>

        {/* Nav */}
        <motion.div
          style={{ marginBottom: "4rem" }}
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        >
          <div
            className="responsive-nav"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
              <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>PORTFOLIO_2026</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }}>
              {/* Desktop links */}
              <div className="desktop-nav-links">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href}
                    style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >{link.label}</a>
                ))}
              </div>

              {/* Resume Download */}
              <motion.a
                href="https://drive.google.com/file/d/16uvE0JiEmd3ny6EYZoAuI6WApZmiyhVm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Resume"
                animate={{ borderColor: ["var(--border)", "var(--accent)", "var(--border)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "var(--accent-dim)" }}
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "6px 12px",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-primary)",
                  fontSize: "11px", letterSpacing: "0.12em",
                  textDecoration: "none",
                  whiteSpace: "nowrap" as const,
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                RESUME
              </motion.a>

              <ThemeToggle />

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="mobile-menu-btn"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                style={{
                  background: mobileMenuOpen ? "var(--accent-dim)" : "var(--surface)",
                  border: `1px solid ${mobileMenuOpen ? "var(--accent)" : "var(--border)"}`,
                  color: mobileMenuOpen ? "var(--accent)" : "var(--text-primary)",
                  cursor: "pointer",
                  width: "36px",
                  height: "36px",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
              >
                {mobileMenuOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  overflow: "hidden",
                  width: "100%",
                  marginTop: "0.75rem",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div style={{
                  padding: "10px 14px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--surface-2)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace" }}>$</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.15em" }}>ls ~/sections</span>
                  </div>
                  <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>SELECT TO JUMP</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", padding: "6px" }}>
                  {navLinks.map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontSize: "12px",
                        letterSpacing: "0.12em",
                        borderLeft: "2px solid transparent",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.background = "var(--accent-dim)";
                        e.currentTarget.style.borderLeftColor = "var(--accent)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderLeftColor = "transparent";
                      }}
                    >
                      <span>{`0${idx + 1} // ${link.label.toUpperCase()}`}</span>
                      <span style={{ fontSize: "11px", color: "var(--accent)" }}>→</span>
                    </a>
                  ))}

                  <a
                    href="https://drive.google.com/file/d/16uvE0JiEmd3ny6EYZoAuI6WApZmiyhVm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      marginTop: "6px",
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent)",
                      textDecoration: "none",
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                    }}
                  >
                    <span>DOWNLOAD RESUME (PDF)</span>
                    <span style={{ fontSize: "12px" }}>↗</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Hero */}
        <div className="responsive-hero" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "flex-end" }}>
          <div>
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <p style={{ fontSize: "13px", letterSpacing: "0.25em", color: "var(--text-muted)", marginBottom: "14px" }}>&lt;identity&gt;</p>
              <h1 style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", fontWeight: 700, lineHeight: 1, margin: 0, letterSpacing: "-0.03em" }}>
                <span style={{ color: "var(--text-primary)" }}>SHAMIUL </span>
                <span style={{ color: "var(--accent)", textShadow: "0 0 50px rgba(253,203,110,0.35)" }}>SHAKIB</span>
              </h1>
              <p style={{ fontSize: "13px", letterSpacing: "0.25em", color: "var(--text-muted)", margin: "10px 0 28px" }}>&lt;/identity&gt;</p>
            </motion.div>
            <motion.p
              style={{ fontSize: "13px", letterSpacing: "0.35em", color: "var(--text-secondary)", marginBottom: "28px" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              {DATA.title}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
              <span style={{ color: "var(--accent)", fontSize: "15px" }}>$ </span>
              <span style={{ color: "var(--text-muted)", fontSize: "15px" }}>{typed}</span>
              {typed.length < full.length && <TerminalCursor />}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="responsive-hero-photo"
            style={{ position: "relative", flexShrink: 0 }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden",
              border: "1px solid var(--border)", boxShadow: "0 0 70px rgba(253,203,110,0.15), 0 0 0 5px rgba(253,203,110,0.05)",
              position: "relative",
            }}>
              <Image src="/profile1.png" alt="Shamiul Shakib" width={200} height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) brightness(1.02)" }}
                priority
              />
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "radial-gradient(circle, transparent 55%, rgba(0,0,0,0.65) 100%)"
              }} />
            </div>
            <div style={{
              position: "absolute", bottom: "12px", right: "0px",
              display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px",
              background: "var(--surface)", border: "1px solid var(--border)",
              color: "var(--text-secondary)", fontSize: "12px", letterSpacing: "0.1em",
            }}>
              <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
              available
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// ─── Profile + Expertise ──────────────────────────────────────────────────────

// ─── Professional Summary ────────────────────────────────────────────────────

function SummarySection() {
  return (
    <motion.section
      id="summary"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
        <motion.div variants={fadeUp} custom={0}>
          <SectionLabel label="PROFESSIONAL SUMMARY" />
        </motion.div>
        <motion.div variants={fadeUp} custom={1} style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "1.75rem 2rem",
          position: "relative",
        }}>
          {/* Terminal prompt line */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span style={{ color: "var(--accent)", fontSize: "13px", fontFamily: "'JetBrains Mono', monospace" }}>$</span>
            <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.18em" }}>cat about.md</span>
            <TerminalCursor />
          </div>
          <p style={{
            fontSize: "14px",
            lineHeight: 1.9,
            color: "var(--text-secondary)",
            borderLeft: "2px solid var(--accent)",
            paddingLeft: "1.25rem",
            maxWidth: "820px",
          }}>
            {DATA.summary}
          </p>
          {/* Key stat chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "1.5rem" }}>
            {[
              { icon: "⚡", label: "2+ YRS PRODUCTION" },
              { icon: "⚙️", label: "NESTJS • REACT • DJANGO" },
              { icon: "🚀", label: "79% P95 LATENCY REDUCTION" },
              { icon: "📡", label: "SUB-25MS REAL-TIME IoT" },
              { icon: "🤖", label: "AI CODE INTELLIGENCE" },
              { icon: "☁️", label: "DOCKER & AWS MICROSERVICES" },
            ].map((chip) => (
              <span key={chip.label} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "4px 12px",
                background: "var(--accent-dim)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                fontSize: "10.5px",
                letterSpacing: "0.12em",
              }}>
                <span>{chip.icon}</span>{chip.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Profile + Expertise ──────────────────────────────────────────────────────

function ProfileExpertise() {
  return (
    <motion.section
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max grid-cols-1-2" style={{ gap: 0 }}>
        <div className="mobile-border-none mobile-padding-y expertise-left" style={{ paddingRight: "4rem", borderRight: "1px solid var(--border)" }}>
          <motion.div variants={fadeUp} custom={0}><SectionLabel label="PROFILE" /></motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {DATA.profile.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <span style={{ marginTop: "6px", width: "2px", height: "14px", flexShrink: 0, background: item.bar, display: "block" }} />
                <span style={{ fontSize: "13px", letterSpacing: "0.05em", lineHeight: 1.6, color: item.color }}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mobile-border-none mobile-padding-y expertise-right" style={{ paddingLeft: "4rem" }}>
          <motion.div variants={fadeUp} custom={0}><SectionLabel label="EXPERTISE" /></motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {Object.entries(DATA.expertise).map(([key, val], i) => (
              <motion.div key={key} variants={fadeUp} custom={i + 1}>
                <p style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 500, marginBottom: "6px" }}>{key}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-secondary)" }}>{val}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Experience Details Panel ─────────────────────────────────────────────────

function ExperienceDetails({ exp }: { exp: ExperienceEntry }) {
  return (
    <motion.div
      key="details"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      <div style={{
        marginTop: "24px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}>

        {/* Responsibilities */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 500, marginBottom: "14px" }}>CORE RESPONSIBILITIES</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {exp.responsibilities.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>▸</span>
                <p style={{ fontSize: "12px", lineHeight: 1.75, color: "var(--text-secondary)" }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 500, marginBottom: "14px" }}>IMPACT & RESULTS</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px" }}>
            {exp.impact.map((item, i) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column", gap: "4px",
                padding: "10px 16px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                minWidth: "100px",
              }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--yellow)", letterSpacing: "-0.01em" }}>{item.metric}</span>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "var(--text-muted)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 500, marginBottom: "14px" }}>CHALLENGES & SOLUTIONS</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {exp.challenges.map((ch, i) => (
              <div key={i} style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                padding: "18px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--yellow)", fontSize: "11px", fontWeight: 600 }}>[CHALLENGE_{i + 1}]</span>
                  <span style={{ color: "var(--text-primary)", fontSize: "12px", fontWeight: 500 }}>{ch.title}</span>
                </div>
                <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "10px" }}>
                  <span style={{ color: "var(--text-muted)" }}>&gt;_ Problem: </span>{ch.problem}
                </p>
                <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--accent)" }}>
                  <span style={{ color: "var(--text-muted)" }}>&gt;_ Solution: </span>{ch.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 500, marginBottom: "14px" }}>KEY LEARNINGS</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {exp.keyLearnings.map((l, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>◦</span>
                <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-muted)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExperienceCard({ exp, index, isOpen, onToggle }: {
  exp: ExperienceEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index + 1}
      style={{
        paddingLeft: "20px",
        borderLeft: `2px solid ${isOpen ? "var(--accent)" : "var(--border)"}`,
        transition: "border-color 0.25s ease",
      }}
    >
      {/* Card Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" as const }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" as const }}>
            <p style={{ fontSize: "14px", letterSpacing: "0.08em", fontWeight: 600, color: "var(--accent)" }}>&gt; {exp.company}</p>
            <span style={{
              fontSize: "10px", letterSpacing: "0.12em",
              padding: "2px 8px",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}>{exp.type.toUpperCase()}</span>
          </div>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px" }}>{exp.role}</p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>{exp.period} · {exp.location}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-end", gap: "12px", flexShrink: 0 }}>
          <motion.button
            onClick={onToggle}
            animate={!isOpen ? {
              boxShadow: ["0px 0px 0px rgba(253,203,110,0)", "0px 0px 12px rgba(253,203,110,0.25)", "0px 0px 0px rgba(253,203,110,0)"],
              borderColor: ["var(--border)", "var(--accent)", "var(--border)"],
              color: ["var(--text-muted)", "var(--accent)", "var(--text-muted)"]
            } : {
              boxShadow: "0px 0px 0px rgba(253,203,110,0)",
              borderColor: "var(--accent)",
              color: "var(--accent)",
              backgroundColor: "var(--accent-dim)"
            }}
            transition={!isOpen ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
            whileHover={{
              scale: 1.03,
              borderColor: "var(--accent)",
              color: "var(--accent)",
              backgroundColor: "var(--accent-dim)",
              boxShadow: "0px 0px 15px rgba(253,203,110,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "7px 14px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              fontSize: "11px", letterSpacing: "0.12em",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: "inline-block", fontSize: "14px", lineHeight: 1 }}
            >+</motion.span>
            {isOpen ? "COLLAPSE" : "VIEW DETAILS"}
          </motion.button>
        </div>
      </div>

      {/* Tech Tags */}
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginTop: "14px" }}>
        {exp.tech.map((t, ti) => (
          <span key={ti} style={{
            fontSize: "10px", letterSpacing: "0.1em",
            padding: "3px 9px",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            background: "var(--surface)",
          }}>{t}</span>
        ))}
      </div>

      {/* Expandable Details */}
      <AnimatePresence>
        {isOpen && <ExperienceDetails exp={exp} />}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Experience Section ───────────────────────────────────────────────────────

function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <motion.section
      id="experience"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="EXPERIENCE" /></motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {EXPERIENCE_DATA.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────

function EducationSection() {
  return (
    <motion.section
      id="education"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="EDUCATION & ACADEMIC BACKGROUND" /></motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "1rem" }}>
          {DATA.education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{
                borderColor: "var(--accent)",
                backgroundColor: "var(--surface-2)",
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "22px 26px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Institution & Period Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ flex: 1, minWidth: "260px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.04em" }}>
                      &gt; {edu.institution}
                    </span>
                    {edu.grade && (
                      <span style={{
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        padding: "2px 8px",
                        border: "1px solid var(--border)",
                        background: "var(--bg)",
                        color: "var(--yellow)",
                        fontWeight: 600,
                      }}>
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "13.5px", color: "var(--text-primary)", fontWeight: 500 }}>
                    {edu.degree}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  <span style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    padding: "3px 10px",
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    color: "var(--text-secondary)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {edu.period}
                  </span>
                  <span style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>
                    📍 {edu.location}
                  </span>
                </div>
              </div>

              {/* Coursework & Focus */}
              <div style={{
                paddingTop: "10px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
                flexWrap: "wrap",
              }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", flexShrink: 0 }}>
                  Coursework &amp; Focus:
                </span>
                <span style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {edu.coursework}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Certifications ──────────────────────────────────────────────────────────

function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="CERTIFICATIONS & PROFESSIONAL DEVELOPMENT" /></motion.div>

        {/* Decorative header row */}
        <motion.div variants={fadeUp} custom={1} style={{
          display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px",
          padding: "10px 16px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}>
          <span style={{ color: "var(--accent)", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace" }}>$</span>
          <span style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.18em" }}>ls ~/certifications --verified</span>
          <TerminalCursor />
        </motion.div>

        {/* Cert cards grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {DATA.certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 2}
              whileHover={{
                borderColor: "var(--accent)",
                backgroundColor: "var(--accent-dim)",
                x: 4,
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                flexWrap: "wrap" as const,
              }}
            >
              {/* Left: icon + info */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1, minWidth: 0 }}>
                {/* Index badge */}
                <div style={{
                  flexShrink: 0,
                  width: "32px", height: "32px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  color: "var(--accent)",
                  fontSize: "14px",
                }}>
                  {cert.icon}
                </div>

                <div style={{ minWidth: 0 }}>
                  {/* Issuer tag */}
                  <p style={{
                    fontSize: "10px", letterSpacing: "0.18em",
                    color: "var(--text-muted)", marginBottom: "4px",
                    textTransform: "uppercase" as const,
                  }}>
                    {cert.issuer}
                  </p>
                  {/* Title */}
                  <p style={{
                    fontSize: "13px", fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap" as const,
                  }}>
                    {cert.title}
                  </p>
                </div>
              </div>

              {/* Right: credential link */}
              <motion.a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  borderColor: ["var(--border)", "var(--accent)", "var(--border)"],
                  color: ["var(--text-muted)", "var(--accent)", "var(--text-muted)"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                whileHover={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "var(--accent-dim)",
                  boxShadow: "0 0 14px rgba(253,203,110,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  flexShrink: 0,
                  display: "flex", alignItems: "center", gap: "7px",
                  padding: "6px 14px",
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  fontSize: "10.5px", letterSpacing: "0.12em",
                  textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: "nowrap" as const,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                CREDENTIAL
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div variants={fadeUp} custom={DATA.certifications.length + 2} style={{
          marginTop: "24px",
          display: "flex", alignItems: "center", gap: "10px",
          padding: "10px 16px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderLeft: "2px solid var(--accent)",
        }}>
          <span style={{ color: "var(--accent)", fontSize: "12px" }}>◎</span>
          <span style={{ fontSize: "11px", letterSpacing: "0.14em", color: "var(--text-muted)" }}>
            {DATA.certifications.length} VERIFIED CREDENTIALS · CONTINUOUSLY LEARNING
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────

function AchievementsSection() {
  return (
    <motion.section
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="ACHIEVEMENTS & HONORS" /></motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
          {DATA.achievements.map((ach, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              style={{
                padding: "20px 24px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--accent)",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
              whileHover={{ borderColor: "var(--accent)" }}
            >
              <div style={{
                flexShrink: 0,
                width: "36px", height: "36px",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--yellow)",
                fontSize: "18px",
              }}>
                {ach.icon}
              </div>
              <div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px", letterSpacing: "0.02em" }}>
                  {ach.title}
                </p>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── References ───────────────────────────────────────────────────────────────

function References() {
  return (
    <motion.section
      id="references"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="PROFESSIONAL REFERENCES" /></motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
          {DATA.references.map((ref, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderTop: "2px solid var(--accent)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s ease",
              }}
              whileHover={{ borderColor: "var(--accent)" }}
            >
              {/* Header: Name, Designation & Relation Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.02em", margin: "0 0 4px" }}>
                    &gt; {ref.name}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, margin: 0 }}>
                    {ref.designation}
                  </p>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", fontWeight: 500, margin: "2px 0 0" }}>
                    {ref.organization}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "9.5px",
                    letterSpacing: "0.12em",
                    padding: "3px 8px",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {ref.relation}
                </span>
              </div>

              {/* Contact and Address Details Table */}
              <div
                style={{
                  marginTop: "12px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                {/* Address */}
                <div style={{ display: "grid", gridTemplateColumns: "115px 1fr", gap: "8px" }}>
                  <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>Address:</span>
                  <span style={{ color: "var(--text-secondary)" }}>{ref.address}</span>
                </div>

                {/* Phone Office */}
                {ref.phoneOffice && (
                  <div style={{ display: "grid", gridTemplateColumns: "115px 1fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>Phone (Office):</span>
                    <a
                      href={`tel:${ref.phoneOffice}`}
                      style={{ color: "var(--text-primary)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {ref.phoneOffice}
                    </a>
                  </div>
                )}

                {/* Phone Residential (if available) */}
                {ref.phoneResidential && (
                  <div style={{ display: "grid", gridTemplateColumns: "115px 1fr", gap: "8px" }}>
                    <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>Phone (Res):</span>
                    <a
                      href={`tel:${ref.phoneResidential}`}
                      style={{ color: "var(--text-primary)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {ref.phoneResidential}
                    </a>
                  </div>
                )}

                {/* Mobile */}
                <div style={{ display: "grid", gridTemplateColumns: "115px 1fr", gap: "8px" }}>
                  <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>Mobile:</span>
                  <a
                    href={`tel:${ref.mobile}`}
                    style={{ color: "var(--text-primary)", textDecoration: "none", fontWeight: 500 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {ref.mobile}
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: "grid", gridTemplateColumns: "115px 1fr", gap: "8px" }}>
                  <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>Email:</span>
                  <a
                    href={`mailto:${ref.email}`}
                    style={{ color: "var(--accent)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    {ref.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.section
      id="projects"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="FEATURED WORK // ARCHITECTURE & IMPLEMENTATION" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: "4px 0 0",
                letterSpacing: "-0.02em",
              }}
            >
              Key Engineering Projects
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            custom={1}
            style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.1em", maxWidth: "380px" }}
          >
            Production SaaS platforms, real-time IoT architectures, and collaborative frontend contributions.
          </motion.p>
        </div>

        <div className="responsive-projects-grid">
          {DATA.projects.map((proj, i) => (
            <TransitionLink
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "flex" }}
            >
              <motion.div
                variants={fadeUp}
                custom={i + 1}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  width: "100%",
                  background: hovered === i ? "var(--surface)" : "var(--project-card-surface)",
                  border: `1px solid ${hovered === i ? "var(--accent)" : "var(--border)"}`,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease",
                  boxShadow: hovered === i ? "0 0 0 1px var(--accent), 0 16px 40px rgba(0,0,0,0.22)" : "none",
                }}
              >
                {/* Accent top line on hover */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: hovered === i ? "var(--accent)" : "transparent",
                  transition: "background 0.22s ease",
                }} />

                {/* Card Content */}
                <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>

                  {/* Header Row: index + status badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                    <span style={{
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      color: "var(--text-muted)",
                      fontWeight: 400,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{
                      fontSize: "9px",
                      letterSpacing: "0.14em",
                      padding: "3px 8px",
                      border: `1px solid ${proj.badge ? "var(--accent)" : proj.isContribution ? "var(--yellow)" : "var(--accent)"}`,
                      color: proj.badge ? "var(--accent)" : proj.isContribution ? "var(--yellow)" : "var(--accent)",
                      background: proj.badge ? "var(--accent-dim)" : "transparent",
                      fontWeight: 600,
                      textTransform: "uppercase" as const,
                    }}>
                      {proj.badge || (proj.isContribution ? "CONTRIBUTION" : "CORE SYSTEM")}
                    </span>
                  </div>

                  {/* Project Name + Title */}
                  <div style={{ marginBottom: "16px" }}>
                    <h3 style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                      lineHeight: 1.15,
                    }}>
                      {proj.name}
                    </h3>
                    <p style={{
                      fontSize: "11.5px",
                      color: hovered === i ? "var(--accent)" : "var(--text-muted)",
                      letterSpacing: "0.08em",
                      lineHeight: 1.4,
                      transition: "color 0.22s ease",
                    }}>
                      {proj.title}
                    </p>
                  </div>

                  {/* Thin divider */}
                  <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }} />

                  {/* Description */}
                  <p style={{
                    fontSize: "12.5px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                    flex: 1,
                  }}>
                    {proj.desc}
                  </p>

                  {/* Meta metric */}
                  {proj.meta && (
                    <div style={{ marginBottom: "18px" }}>
                      <span style={{
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        color: "var(--yellow)",
                        fontWeight: 500,
                      }}>
                        ◆ {proj.meta}
                      </span>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "24px" }}>
                    {proj.tech.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize: "9.5px",
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div style={{
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: hovered === i ? "var(--accent)" : "var(--text-muted)",
                      fontWeight: 600,
                      transition: "color 0.22s ease",
                    }}>
                      VIEW CASE STUDY
                    </span>
                    <span style={{
                      color: hovered === i ? "var(--accent)" : "var(--text-muted)",
                      fontSize: "14px",
                      display: "inline-block",
                      transform: hovered === i ? "translate(4px, -2px)" : "translate(0, 0)",
                      transition: "all 0.22s ease",
                    }}>
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── Connect ──────────────────────────────────────────────────────────────────

function Connect() {
  const links = [
    { label: DATA.connect.phone, icon: "☏", href: `tel:${DATA.connect.phone.replace(/[\s-]/g, "")}`, external: false },
    { label: DATA.connect.email, icon: "✉", href: `mailto:${DATA.connect.email.toLowerCase()}`, external: false },
    { label: DATA.connect.website.toUpperCase(), icon: "🌐", href: `https://${DATA.connect.website}`, external: true },
    { label: "GITHUB", icon: "⌥", href: `https://${DATA.connect.github}`, external: true },
    { label: "LINKEDIN", icon: "⌘", href: `https://${DATA.connect.linkedin}`, external: true },
    { label: "DOWNLOAD RESUME", icon: "📄", href: "https://drive.google.com/file/d/16uvE0JiEmd3ny6EYZoAuI6WApZmiyhVm/view?usp=sharing", external: true },
  ];
  return (
    <motion.section
      id="connect"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="CONNECT" /></motion.div>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.15em", marginBottom: "18px" }}>
          LOCATION: <span style={{ color: "var(--text-primary)" }}>{DATA.connect.location.toUpperCase()}</span>
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "12px", marginBottom: "30px" }}>
          {links.map((link, i) => (
            <motion.a key={i} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} variants={fadeUp} custom={i + 1}
              style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "12px 22px",
                border: "1px solid var(--border)", background: "var(--surface)",
                color: "var(--text-secondary)", fontSize: "13px", letterSpacing: "0.08em",
                textDecoration: "none", cursor: "pointer",
              }}
              whileHover={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--accent-dim)" }}
              transition={{ duration: 0.15 }}
            >
              <span style={{ color: "var(--text-muted)" }}>{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>
        <motion.div variants={fadeUp} custom={links.length + 1}>
          <motion.a
            href="https://www.hackerrank.com/profile/dev_shakib6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "18px",
              padding: "16px 22px",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              textDecoration: "none",
              cursor: "pointer",
              flexWrap: "wrap" as const,
            }}
            whileHover={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--accent-dim)",
              boxShadow: "0 0 20px var(--accent-glow)",
              y: -2,
            }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
              <div style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--accent)",
                fontSize: "16px",
                flexShrink: 0,
              }}>
                ◈
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--text-muted)", textTransform: "uppercase" as const }}>
                    Competitive Programming & Problem Solving
                  </span>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 6px var(--accent)" }} />
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.06em" }}>
                  HackerRank Profile <span style={{ color: "var(--text-muted)", fontWeight: 400, fontSize: "12px" }}>· @dev_shakib6</span>
                </div>
              </div>
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 16px",
              border: "1px solid var(--border)",
              background: "var(--bg)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--accent)",
              fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace",
              whiteSpace: "nowrap" as const,
            }}>
              <span>VIEW PROFILE</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="container-max" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>© 2026 SHAMIUL SHAKIB</span>
      <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>BUILT WITH TYPESCRIPT</span>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden", width: "100%", maxWidth: "100%" }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
        <Header />
        <Ticker />
        <SummarySection />
        <ProfileExpertise />
        <Projects />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <Ticker reversed />
        <References />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
