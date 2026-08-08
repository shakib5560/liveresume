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
    role: "Backend Software Engineer",
    company: "RAJTECH BD",
    period: "Jan 2026 – Present",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "FastAPI", "JWT", "Docker", "CI/CD"],
    responsibilities: [
      "Designed and developed scalable backend services for an enterprise AI-powered SaaS platform using NestJS, TypeScript, PostgreSQL, and Prisma ORM, following modular software architecture and clean coding principles.",
      "Built secure REST APIs and FastAPI microservices with JWT authentication, Role-Based Access Control (RBAC), request validation, rate limiting, background jobs, and asynchronous processing.",
      "Optimized database performance through query optimization, indexing strategies, caching, and efficient data modeling to reduce API response latency.",
      "Collaborated with cross-functional teams and international clients to design technical architecture, define API contracts, manage Docker-based deployments, and maintain CI/CD pipelines throughout the software development lifecycle.",
    ],
    impact: [
      { metric: "20%", label: "AI Workflow Efficiency ↑" },
      { metric: "Modular", label: "Microservice Architecture" },
      { metric: "RBAC", label: "Secure Multi-Tenant APIs" },
      { metric: "CI/CD", label: "Automated Deployments" },
    ],
    challenges: [
      {
        title: "Designing a Scalable Multi-Tenant SaaS Backend",
        problem: "Building an enterprise SaaS that isolates tenant data, enforces role-based access, and scales horizontally without leaking context between users or organizations.",
        solution: "Implemented a modular NestJS architecture with tenant-scoped guards, JWT-based RBAC middleware, and Prisma data models that enforce row-level isolation, allowing the system to scale confidently across clients.",
      },
      {
        title: "Optimizing AI Workflow Response Times",
        problem: "AI-driven pipeline endpoints were synchronous and caused high latency under concurrent load, degrading user experience significantly.",
        solution: "Refactored AI-heavy operations into background jobs using NestJS Bull queues and Redis, decoupling request/response cycles and improving throughput by 20% under production traffic.",
      },
    ],
    keyLearnings: [
      "How to architect clean, multi-tenant NestJS backends that remain maintainable as teams grow.",
      "Practical trade-offs between synchronous REST and async queue-driven processing for AI workloads.",
      "Collaborating with international clients to define API contracts and manage expectations across time zones.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "DEVNEXT",
    period: "Feb 2025 – Dec 2025",
    location: "Karachi, Pakistan (Remote)",
    type: "Project-Based (Contract)",
    tech: ["Django", "JavaScript", "PostgreSQL", "Redis", "TailwindCSS", "REST APIs", "Docker"],
    responsibilities: [
      "Developed and maintained production-grade full-stack web applications supporting more than 1,500 daily active users, including enterprise e-commerce platforms such as ToyGalaxy Australia.",
      "Designed scalable backend architecture, relational database schemas, REST APIs, and reusable frontend components using Django, JavaScript, and modern web development practices.",
      "Improved application performance by optimizing SQL queries, reducing database bottlenecks, implementing caching strategies, and minimizing server response time.",
      "Managed the complete software development lifecycle, including client communication, requirement analysis, development, testing, deployment, production support, and continuous system improvements.",
    ],
    impact: [
      { metric: "1,500+", label: "Daily Active Users" },
      { metric: "30%", label: "Server Response Time ↓" },
      { metric: "Redis", label: "Caching Layer Implemented" },
      { metric: "E2E", label: "Full SDLC Ownership" },
    ],
    challenges: [
      {
        title: "Scaling a Django Backend to 1,500+ Daily Users",
        problem: "The existing application experienced degraded performance under increasing traffic — slow database queries, N+1 ORM issues, and unoptimized session handling were the main culprits.",
        solution: "Profiled the application with Django Debug Toolbar, rewrote critical ORM queries using select_related and prefetch_related, introduced Redis caching for hot data paths, and reduced average response time by 30%.",
      },
      {
        title: "Remote Client Communication & Requirement Clarity",
        problem: "Working remotely with international clients meant requirements were sometimes ambiguous, leading to rework and delivery delays.",
        solution: "Introduced structured requirement documentation, API contract-first design using OpenAPI specs, and weekly sync calls to align expectations — cutting mid-sprint scope changes significantly.",
      },
    ],
    keyLearnings: [
      "How to systematically identify and resolve Django ORM performance bottlenecks in production.",
      "Managing a full SDLC independently — from requirement gathering to production support.",
      "Effective remote collaboration patterns with asynchronous communication and contract-first API design.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "TECHONFY IT LTD",
    period: "Apr 2024 – Sep 2024",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    tech: ["HTML/CSS", "JavaScript", "Git", "REST APIs", "CI/CD", "AWS/GCP", "Unit Testing"],
    responsibilities: [
      "Engineered and maintained scalable production web applications within an Agile environment, collaborating with senior developers to deliver high-quality software solutions for 10+ clients.",
      "Architected database schemas and developed full-stack features, including secure authentication, REST API integrations, and automated unit testing.",
      "Managed version control (Git), rigorous code reviews, and CI/CD workflows, streamlining automated deployment pipelines to AWS/GCP.",
      "Participated in sprint planning, daily standups, retrospectives, and pair programming sessions to accelerate learning and contribute to team goals.",
    ],
    impact: [
      { metric: "10+", label: "Client Projects Delivered" },
      { metric: "20%", label: "Post-Release Bugs ↓" },
      { metric: "AWS/GCP", label: "Cloud Deployments" },
      { metric: "Agile", label: "Sprint-Based Delivery" },
    ],
    challenges: [
      {
        title: "Learning Production Standards as a First-Time Engineer",
        problem: "Transitioning from personal projects to production codebases with strict code review, testing requirements, and CI/CD pipelines was an immediate steep learning curve.",
        solution: "Adopted a growth mindset — studying senior engineers' code reviews, writing unit tests for every feature, and proactively asking for feedback on architecture decisions to internalize production-grade standards quickly.",
      },
      {
        title: "Reducing Post-Release Bug Rate Across Client Projects",
        problem: "Several client projects had a pattern of bugs surfacing post-deployment, damaging client confidence and consuming engineering time on hotfixes.",
        solution: "Introduced automated unit testing for authentication and API integration layers and tightened the pre-deployment review checklist, contributing to a 20% reduction in post-release reported bugs.",
      },
    ],
    keyLearnings: [
      "How to write production-quality code with tests, reviews, and CI/CD from day one.",
      "The value of Agile practices — sprint planning, standups, and retrospectives — in structuring collaborative work.",
      "Building confidence through code review feedback loops and learning to give and receive technical critique professionally.",
    ],
  },
];

// ─── Data ─────────────────────────────────────────────────────────────────────

const DATA = {
  name: "SHAMIUL SHAKIB",
  title: "SOFTWARE ENGINEER",
  tagline: "Building systems that scale.",
  profile: [
    { label: "2+ YRS PRODUCTION EXPERIENCE", color: "var(--text-primary)", bar: "var(--accent)" },
    { label: "B.SC. CSE & DIPLOMA GRAPHIC DESIGN", color: "var(--text-secondary)", bar: "var(--border-hover)" },
    { label: "SPECIALIZED: AI-POWERED WEB APPS", color: "var(--yellow)", bar: "var(--yellow)" },
    { label: "HIGH-TRAFFIC SYSTEM DESIGN ARCHITECTURE", color: "var(--yellow)", bar: "var(--yellow)" },
  ],
  expertise: {
    LANGUAGES: "Python / JavaScript / TypeScript / C / C++ / Dart / SQL",
    FRAMEWORKS: "React.js / Next.js / Node.js / NestJS / Express.js / Django / FastAPI / Tailwind CSS",
    DATABASES: "MySQL / MongoDB / PostgreSQL",
    DEVOPS: "Docker / Linux / Git / CI/CD / GitHub Actions / VPS Management / Cloud Fundamentals",
  },
  education: [
    { 
      institution: "BANGLADESH UNIVERSITY OF BUSINESS AND TECHNOLOGY (BUBT)",
      degree: "B.Sc. in Computer Science & Engineering (Evening) [CGPA: 3.43/4.00]",
      period: "Jan 2024 – Present",
      location: "Rupnogor Road, Mirpur, Dhaka",
      coursework: "DSA · Probability & Statistics · Competitive Programming · Computer Networking · System Design · OOP"
    },
    { 
      institution: "GRAPHIC ARTS INSTITUTE (GAI)",
      degree: "Diploma in Engineering (Graphic Design & Software Tech) [CGPA: 3.60/4.00]",
      period: "Jun 2020 – Dec 2024",
      location: "Satmosjid Road, Mohammadpur, Dhaka",
      coursework: "Web Development · JS · TS · Python · React · Node.js · Django · REST API · UI Design · Figma · Photoshop"
    },
  ],
  references: [
    {
      name: "Md. Faisal Amir Mostafa",
      role: "Senior Software Architect, W3 Engineers Ltd.",
      phone: "+880 1758-522846",
      email: "faisalamirmostafa@gmail.com",
      location: "Dhaka, Bangladesh"
    },
    {
      name: "Mohammad Faisal",
      role: "Co-founder & CEO, RajTech BD Ltd.",
      phone: "01758-522846",
      email: "rajtechbdt@gmail.com",
      website: "rajtechbd.com",
      location: "Mirpur-12, Dhaka",
      address: "Block-C, Road No. 5, House No. 13, 1st Floor, Mirpur-12, Dhaka, Bangladesh"
    }
  ],
  projects: [
    { name: "GITRABBIT", desc: "AI CODE REVIEW PLATFORM", tech: "Enterprise SaaS", meta: "Auto Pull-Request Reviews", icon: "🐇" },
    { name: "IDEA2SYSTEM", desc: "AI-POWERED SOFTWARE BLUEPRINT GENERATOR", tech: "NestJS / Docker / PostgreSQL", meta: "Idea to Blueprint", icon: "🧠" },
    { name: "TOYGALAXY", desc: "E-COMMERCE PLATFORM", tech: "Django / JavaScript / TailwindCSS", meta: "2,000+ daily users", icon: "◫" },
    { name: "RINORS", desc: "MULTI-VENDOR E-COMMERCE", tech: "Next.js / T3 Stack / TypeScript", meta: "10,000+ monthly users", icon: "❖" },
    { name: "AINOS", desc: "AI-POWERED FULL-STACK SAAS", tech: "NestJS / React / Prisma", meta: "Secure Payments", icon: "◈" },
  ],
  connect: {
    phone: "+880 1771 659336",
    email: "DEV.SHAKIB@OUTLOOK.COM",
    github: "github.com/shakib5560",
    linkedin: "linkedin.com/in/sheikh-shamiul-834878206/",
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
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
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
  const full = DATA.tagline;

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
          className="responsive-nav"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4.5rem", flexWrap: "wrap", gap: "1rem" }}
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
            <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>PORTFOLIO_2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
            {["projects", "connect"].map(id => (
              <a key={id} href={`#${id}`}
                style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{id}</a>
            ))}
            {/* Resume Download */}
            <motion.a
              href="https://drive.google.com/file/d/1Jn4_iphYPWSUnNVAdTsfC8B3NSKQ3mKj/view?usp=sharing"
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
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              RESUME
            </motion.a>
            <ThemeToggle />
          </div>
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
              <Image src="/profile.png" alt="Shamiul Shakib" width={200} height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.05) brightness(1.02)" }}
                priority
              />
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "radial-gradient(circle, transparent 55%, rgba(0,0,0,0.65) 100%)"
              }} />
            </div>
            <div style={{
              position: "absolute", bottom: "12px", right: "-14px",
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

function ProfileExpertise() {
  return (
    <motion.section
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max grid-cols-1-2" style={{ gap: 0 }}>
        <div className="mobile-border-none mobile-padding-y" style={{ paddingRight: "4rem", borderRight: "1px solid var(--border)" }}>
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
        <div className="mobile-border-none mobile-padding-y" style={{ paddingLeft: "4rem" }}>
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
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="EDUCATION" /></motion.div>
        <div className="grid-cols-1-2" style={{ gap: "2.5rem", marginTop: "1rem" }}>
          {DATA.education.map((edu, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1}
              style={{ paddingLeft: "16px", borderLeft: "2px solid var(--border)", transition: "border-color 0.2s" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              whileHover={{ borderColor: "var(--accent)" } as any}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <p style={{ fontSize: "13px", letterSpacing: "0.06em", fontWeight: 500, color: "var(--accent)" }}>&gt; {edu.institution}</p>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", flexShrink: 0, textAlign: "right", marginLeft: "12px" }}>{edu.period}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{edu.degree}</p>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", flexShrink: 0, textAlign: "right", marginLeft: "12px" }}>{edu.location}</span>
              </div>
              <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-muted)" }}>
                <span style={{ color: "var(--text-primary)" }}>Coursework:</span> {edu.coursework}
              </p>
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
      style={{ borderBottom: "1px solid var(--border)", padding: "4rem 0" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="REFERENCES" /></motion.div>
        <div className="grid-cols-1-2" style={{ gap: "2rem", marginTop: "2rem" }}>
          {DATA.references.map((ref, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1}
              style={{ paddingLeft: "16px", borderLeft: "2px solid var(--border)", transition: "border-color 0.2s" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              whileHover={{ borderColor: "var(--accent)" } as any}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                <p style={{ fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500, color: "var(--accent)" }}>&gt; {ref.name.toUpperCase()}</p>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", flexShrink: 0 }}>{ref.phone}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{ref.role}</p>
                <span style={{ fontSize: "12px", color: "var(--text-muted)", flexShrink: 0, textAlign: "right", marginLeft: "12px" }}>{ref.location}</span>
              </div>
              <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span><span style={{ color: "var(--text-primary)" }}>Email:</span> {ref.email}</span>
                {ref.website && <span><span style={{ color: "var(--text-primary)" }}>Website:</span> {ref.website}</span>}
                {ref.address && <span><span style={{ color: "var(--text-primary)" }}>Address:</span> {ref.address}</span>}
              </p>
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
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="KEY PROJECTS" /></motion.div>
        <div className="responsive-projects-grid" style={{ gap: "1px", background: "var(--border)" }}>
          {DATA.projects.map((proj, i) => (
            <TransitionLink
              key={i}
              href={`/projects/${proj.name.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <motion.div
                variants={fadeUp} custom={i + 1}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                animate={proj.name === "GITRABBIT" ? { boxShadow: ["inset 0 0 0 1px transparent", "inset 0 0 0 1px var(--accent)", "inset 0 0 0 1px transparent"] } : {}}
                transition={proj.name === "GITRABBIT" ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                style={{ background: proj.name === "GITRABBIT" ? "var(--surface)" : "var(--bg)", padding: "2rem", position: "relative", overflow: "hidden", cursor: "pointer", height: "100%" }}
              >
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div style={{ position: "absolute", inset: 0, background: "var(--accent-dim)", zIndex: 0 }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "24px", color: "var(--border-hover)" }}>{proj.icon}</span>
                      {proj.name === "GITRABBIT" && (
                        <motion.span
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ fontSize: "9px", letterSpacing: "0.15em", padding: "3px 6px", background: "var(--accent)", color: "var(--bg)", fontWeight: 700 }}
                        >
                          CASE STUDY
                        </motion.span>
                      )}
                    </div>
                    <motion.span style={{ fontSize: "12px", letterSpacing: "0.12em", color: "var(--text-muted)" }}
                      animate={{ color: hovered === i ? "var(--accent)" : "var(--text-muted)" }}
                    >{proj.tech}</motion.span>
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-primary)", marginBottom: "8px" }}>{proj.name}</h3>
                  <p style={{ fontSize: "13px", letterSpacing: "0.05em", color: "var(--text-secondary)", marginBottom: "16px" }}>{proj.desc}</p>
                  {proj.meta && (
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", padding: "4px 10px", border: "1px solid var(--border)", color: "var(--yellow)" }}>
                      {proj.meta}
                    </span>
                  )}
                  <motion.span style={{ position: "absolute", bottom: "20px", right: "20px", fontSize: "16px", color: "var(--accent)" }}
                    initial={{ opacity: 0, x: -4 }} animate={{ opacity: hovered === i ? 1 : 0, x: hovered === i ? 0 : -4 }}
                  >↗</motion.span>
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
    { label: DATA.connect.phone, icon: "☏", href: `tel:${DATA.connect.phone.replace(/\s/g, "")}` },
    { label: DATA.connect.email, icon: "✉", href: `mailto:${DATA.connect.email.toLowerCase()}` },
    { label: "GITHUB", icon: "⌥", href: `https://${DATA.connect.github}` },
    { label: "LINKEDIN", icon: "⌘", href: `https://${DATA.connect.linkedin}` },
  ];
  return (
    <motion.section
      id="connect"
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max">
        <motion.div variants={fadeUp} custom={0}><SectionLabel label="CONNECT" /></motion.div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "12px", marginBottom: "30px" }}>
          {links.map((link, i) => (
            <motion.a key={i} href={link.href} target="_blank" rel="noopener noreferrer" variants={fadeUp} custom={i + 1}
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
        <motion.div variants={fadeUp} custom={5} style={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.hackerrank.com/profile/dev_shakib6" target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "12px", padding: "14px 32px",
              border: "1px solid var(--border)", color: "var(--text-muted)",
              fontSize: "13px", letterSpacing: "0.15em", textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            <span style={{ color: "var(--accent)" }}>◈</span>
            PROBLEM SOLVING PROFILE: {DATA.connect.hackerrank.toUpperCase()}
          </a>
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
      <span style={{ color: "var(--border-hover)", fontSize: "18px" }}>✦</span>
      <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>BUILT WITH TYPESCRIPT</span>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Ticker />
        <ProfileExpertise />
        <Projects />
        <ExperienceSection />
        <EducationSection />
        <Ticker reversed />
        <References />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
