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

// ─── Data ─────────────────────────────────────────────────────────────────────

const DATA = {
  name: "SHAMIUL SHAKIB",
  title: "SOFTWARE ENGINEER",
  tagline: "Building systems that scale.",
  profile: [
    { label: "1.5+ YRS PRODUCTION EXPERIENCE", color: "var(--text-primary)", bar: "var(--accent)" },
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
  experience: [
    {
      role: "Full-Stack Web Developer",
      company: "FREELANCE PROJECTS",
      period: "Jan 2025 – Present",
      points: [
        "Designed, developed, and deployed scalable web applications using Next.js, Nest JS, Django REST Framework, Express.js, and FastAPI.",
        "Built RESTful APIs, implemented secure authentication flows, and optimized performance for production-ready deployments."
      ],
    },
    {
      role: "Backend Engineer (Project-Based)",
      company: "DEVNEXT",
      period: "Jul 2025 – Dec 2025",
      points: [
        "Developed scalable backend systems and designed databases to support high-traffic applications within a collaborative team.",
        "Contributed to system architecture decisions and ensured reliability across production environments."
      ],
    },
    {
      role: "Web Developer Intern",
      company: "TECHONFY IT",
      period: "Jun 2024 – Dec 2024",
      points: [
        "Built production-ready websites and collaborated with the development team to deliver client projects on schedule.",
        "Gained hands-on experience with full-stack workflows, version control, and real-world deployment practices."
      ],
    },
  ],
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
    { name: "AINOS", desc: "AI-POWERED ECOMMERCE PLATFORM", tech: "NestJS / React / PostgreSQL / Prisma / Redis / AI APIs", meta: "Secure Payments", icon: "◈" },
    { name: "TOYGALAXY", desc: "E-COMMERCE PLATFORM", tech: "Django / JavaScript / PostgreSQL / Redis / Tailwind", meta: "2,000+ daily users", icon: "◫" },
    { name: "GYAANBD", desc: "LMS PLATFORM", tech: "Next.js / TypeScript / NestJS / PostgreSQL / i18n", meta: "Multi-language support", icon: "◬" },
    { name: "RINORS", desc: "MULTI-VENDOR E-COMMERCE", tech: "Next.js / T3 Stack / TypeScript / Prisma / PostgreSQL", meta: "10,000+ monthly users", icon: "❖" },
    { name: "GITRABBIT", desc: "AI CODE REVIEW PLATFORM", tech: "Next.js / TypeScript / OpenAI / GitHub APIs", meta: "Auto Pull-Request Reviews", icon: "🐇" },
    { name: "ATLANIA", desc: "AI-POWERED AUTONOMOUS BLOGGING PLATFORM", tech: "Next.js / NestJS / OpenAI / Redis / Tailwind", meta: "AI Auto-SEO & Auto-Images", icon: "🌌" },
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
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4.5rem", flexWrap: "wrap", gap: "1.5rem" }}
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
            <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>PORTFOLIO_2026</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {["projects", "connect"].map(id => (
              <a key={id} href={`#${id}`}
                style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{id}</a>
            ))}
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
                <span style={{ color: "var(--accent)", textShadow: "0 0 50px rgba(79,255,176,0.35)" }}>SHAKIB</span>
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
              border: "1px solid var(--border)", boxShadow: "0 0 70px rgba(79,255,176,0.15), 0 0 0 5px rgba(79,255,176,0.05)",
              position: "relative",
            }}>
              <Image src="/profile.jpg" alt="Shamiul Shakib" width={200} height={200}
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }}
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

// ─── Experience + Education ───────────────────────────────────────────────────

function ExperienceEducation() {
  return (
    <motion.section
      style={{ borderBottom: "1px solid var(--border)" }}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
    >
      <div className="container-max grid-cols-1-2" style={{ gap: 0 }}>
        <div className="mobile-border-none mobile-padding-y" style={{ paddingRight: "4rem", borderRight: "1px solid var(--border)" }}>
          <motion.div variants={fadeUp} custom={0}><SectionLabel label="EXPERIENCE" /></motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {DATA.experience.map((exp, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 1}
                style={{ paddingLeft: "16px", borderLeft: "2px solid var(--border)", transition: "border-color 0.2s" }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                whileHover={{ borderColor: "var(--accent)" } as any}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
                  <p style={{ fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500, color: "var(--accent)" }}>&gt; {exp.company}</p>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", flexShrink: 0 }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "10px" }}>{exp.role}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {exp.points.map((pt, pi) => (
                    <p key={pi} style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-muted)" }}>• {pt}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mobile-border-none mobile-padding-y" style={{ paddingLeft: "4rem" }}>
          <motion.div variants={fadeUp} custom={0}><SectionLabel label="EDUCATION" /></motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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
                style={{ background: "var(--bg)", padding: "2rem", position: "relative", overflow: "hidden", cursor: "pointer", height: "100%" }}
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
                    <span style={{ fontSize: "24px", color: "var(--border-hover)" }}>{proj.icon}</span>
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
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [logLines, setLogLines] = useState<string[]>([]);

  useEffect(() => {
    const wasLoaded = sessionStorage.getItem("home_loaded");
    setTimeout(() => {
      if (wasLoaded === "true") {
        setLoadingComplete(true);
        setHasCheckedSession(true);
      } else {
        setLoadingComplete(false);
        setHasCheckedSession(true);
        setShouldAnimate(true);
      }
    }, 0);
  }, []);


  useEffect(() => {
    if (loadingComplete || !hasCheckedSession) return;

    const lines = [
      "[SYS] INITIATING DIRECTORY SCAN: ~/shakib/portfolio",
      "[SYS] COMPILING STYLESHEETS & GRAPHICS... [OK]",
      "[SYS] LOADING CORE EXPERTISE SCHEMATICS... [OK]",
      "[SYS] RESOLVING EXPORTS: PROJECTS & DATA LAYERS...",
      "[SYS] ESTABLISHING VISITOR HANDSHAKE... [OK]",
      "[SYS] MOUNTING PROFILE INTERFACE MODULES...",
      "[SYS] SYSTEM READY. WELCOME TO THE WORKSPACE."
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const lineToAdd = lines[currentLine];
        setLogLines((prev) => [...prev, lineToAdd]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem("home_loaded", "true");
          setLoadingComplete(true);
        }, 300);
      }
    }, 110);

    return () => clearInterval(interval);
  }, [loadingComplete, hasCheckedSession]);

  if (!hasCheckedSession) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
        <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      </div>
    );
  }

  const showLoader = !loadingComplete && hasCheckedSession;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <AnimatePresence mode="wait">
        {showLoader ? (
          <motion.div
            key="console-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "var(--bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <div style={{
              width: "100%",
              maxWidth: "600px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "25px",
              fontFamily: "'JetBrains Mono', monospace",
              boxShadow: "0 0 40px rgba(0,0,0,0.8)"
            }}>
              <div style={{ display: "flex", gap: "6px", marginBottom: "15px", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f56" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ffbd2e" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#27c93f" }} />
                <span style={{ color: "var(--text-muted)", fontSize: "10px", marginLeft: "10px", letterSpacing: "0.05em" }}>SYSTEM_BOOT.SH</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", minHeight: "160px" }}>
                {logLines.map((line, idx) => (
                  <div key={idx} style={{
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    color: line && line.includes("[OK]") ? "var(--accent)" : "var(--text-secondary)"
                  }}>
                    {line}
                  </div>
                ))}
                <span className="cursor-blink" style={{ color: "var(--accent)", fontSize: "12px" }}>▋</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="page-content"
            initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <Header />
            <Ticker />
            <ProfileExpertise />
            <ExperienceEducation />
            <References />
            <Ticker reversed />
            <Projects />
            <Connect />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
