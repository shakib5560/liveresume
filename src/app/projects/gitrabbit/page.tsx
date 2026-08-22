"use client";

import React from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";

// ─── Variants ────────────────────────────────────────────────────────────────

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

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
      <span style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 500 }}>{"// "}</span>
      <span style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" as const }}>{label}</span>
    </div>
  );
}

function Badge({ children, color = "var(--accent)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      fontSize: "10px", letterSpacing: "0.12em",
      padding: "3px 10px",
      border: `1px solid ${color}`,
      color,
      whiteSpace: "nowrap" as const,
    }}>{children}</span>
  );
}

function FlowStep({ label, isLast = false }: { label: string; isLast?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "6px" }}>
      <div style={{
        padding: "10px 18px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        fontSize: "12px", letterSpacing: "0.1em",
        color: "var(--text-secondary)",
        whiteSpace: "nowrap" as const,
        textAlign: "center" as const,
        minWidth: "160px",
      }}>{label}</div>
      {!isLast && (
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: "2px" }}>
          <div style={{ width: "1px", height: "12px", background: "var(--border)" }} />
          <span style={{ color: "var(--accent)", fontSize: "10px" }}>▼</span>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GitRabbitPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden" }}>
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── Header ───────────────────────────────────────────────────── */}
        <header style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container-max" style={{ paddingBottom: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap" as const, gap: "1rem" }}>
              <TransitionLink href="/"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", textDecoration: "none", fontSize: "12px", letterSpacing: "0.15em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >&lt; BACK TO DIRECTORY</TransitionLink>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
                <a href="https://www.gitrabbit.co/" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >LIVE DEMO</a>
                <ThemeToggle />
              </div>
            </div>

            {/* Hero */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeUp} custom={0} style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "8px" }}>
                SYSTEM: LOCALHOST // PATH: ~/projects/gitrabbit
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
                <span style={{ color: "var(--text-primary)" }}>GIT</span>
                <span style={{ color: "var(--accent)", textShadow: "0 0 45px rgba(253,203,110,0.25)" }}>RABBIT.CO</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", letterSpacing: "0.12em", color: "var(--text-secondary)", marginBottom: "20px" }}>
                AI-POWERED CODE INTELLIGENCE FOR MODERN ENGINEERING TEAMS
              </motion.p>
              <motion.p variants={fadeUp} custom={3} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "620px", marginBottom: "20px" }}>
                GitRabbit.co aims to go beyond conventional AI code-review tools. Instead of reviewing code line-by-line in isolation, it is being built to understand the entire codebase, architecture, framework behavior, and potential production impact of every code change.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "24px" }}>
                <Badge color="var(--accent)">ONGOING DEVELOPMENT</Badge>
                <Badge color="var(--yellow)">SAAS PRODUCT</Badge>
                <Badge color="var(--text-secondary)">AI DEVELOPER INFRASTRUCTURE</Badge>
              </motion.div>
              <motion.div variants={fadeUp} custom={5} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <a href="https://www.gitrabbit.co/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "var(--accent-dim)", border: "1px solid var(--accent)", color: "var(--accent)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                >↗ LIVE DEMO</a>
                <a href="https://github.com/shakib5560/gitrabbit2.0" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >⌥ GITHUB</a>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* ─── Tech Ticker ──────────────────────────────────────────────── */}
        <div style={{ overflow: "hidden", borderBottom: "1px solid var(--border)", padding: "12px 0", background: "var(--surface)" }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", whiteSpace: "nowrap", width: "max-content", animation: "ticker 22s linear infinite" }}>
            {Array.from({ length: 8 }).flatMap((_, idx) =>
              ["NEXT.JS", "TYPESCRIPT", "OPENAI", "GITHUB APIS", "FASTAPI", "REDIS", "POSTGRESQL", "AI ORCHESTRATION", "✦"].map((t, i) => (
                <span key={`${idx}-${i}`} style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", color: t === "✦" ? "var(--accent)" : "var(--text-muted)" }}>{t}</span>
              ))
            )}
          </div>
        </div>

        {/* ─── Market Opportunity ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="MARKET OPPORTUNITY" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "20px", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              The AI code review market is projected to reach approximately <span style={{ color: "var(--accent)" }}>$420M by 2026</span>.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem", maxWidth: "720px" }}>
              While generalist incumbents currently dominate, significant market share is available for specialized platforms offering deep framework integration, in-browser collaboration, and precise architectural analysis.
            </motion.p>
          </div>
        </motion.section>

        {/* ─── Video Section ────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 500 }}>{"// "}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.18em" }}>PRODUCT INTRODUCTION</span>
              <div style={{ flex: 1, height: "1px", background: "var(--border)", marginLeft: "12px" }} />
              <Badge color="var(--accent)">DEMO VIDEO</Badge>
            </div>
            <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "28px", letterSpacing: "0.05em" }}>
              An introduction to the GitRabbit.co product vision — what we&apos;re building and why it matters.
            </p>
            <div style={{
              position: "relative", borderRadius: "2px", overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(253,203,110,0.06), 0 0 0 1px var(--border)",
              background: "#000", maxWidth: "860px", margin: "0 auto",
            }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
                <iframe
                  src="https://www.youtube.com/embed/JGCwlSpg1Pc?rel=0&modestbranding=1&color=white"
                  title="GitRabbit.co — Product Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 18px", borderTop: "1px solid var(--border)", background: "var(--surface)", flexWrap: "wrap" as const, gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>🐇</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.06em" }}>GITRABBIT.CO</p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>AI-POWERED CODE INTELLIGENCE</p>
                  </div>
                </div>
                <a href="https://www.youtube.com/watch?v=JGCwlSpg1Pc" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-muted)", textDecoration: "none", border: "1px solid var(--border)", padding: "5px 12px", background: "var(--bg)", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  WATCH ON YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── The Problem ──────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="THE PROBLEM" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              Existing code review evaluates the change.<br />
              <span style={{ color: "var(--accent)" }}>GitRabbit.co is being built to understand the system around it.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "680px", marginBottom: "3rem" }}>
              Modern software teams work with large, interconnected codebases, complex pull requests, framework-specific architecture constraints, hidden service dependencies, and an increasing volume of AI-generated code — code that may compile and pass CI but introduce deeper architectural, performance, or security problems.
            </motion.p>
            <div className="grid-cols-1-2" style={{ gap: "1px", background: "var(--border)" }}>
              <motion.div variants={fadeUp} custom={3} style={{ background: "var(--surface)", padding: "2rem" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--text-muted)", marginBottom: "16px" }}>TRADITIONAL REVIEW</p>
                {["Diff → Review", "Review → Comments", "Comments → (Maybe) Fixed", "Context: the changed lines only"].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>—</span>
                    <span style={{ fontSize: "13px", color: i === 3 ? "var(--text-muted)" : "var(--text-secondary)" }}>{step}</span>
                  </div>
                ))}
                <div style={{ marginTop: "20px", padding: "10px 14px", border: "1px solid var(--border)", background: "var(--bg)" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: "4px" }}>PROBLEM SCOPE</p>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Evaluates the change. Misses the system.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} custom={4} style={{ background: "var(--surface)", padding: "2rem", borderLeft: "2px solid var(--accent)" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "16px" }}>GITRABBIT.CO APPROACH</p>
                {["Repository Context", "Architecture Map", "Dependency Graph", "Multi-Model AI Analysis", "Zero-Noise Validation", "Actionable Engineering Insights"].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "10px" }}>▸</span>
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{step}</span>
                  </div>
                ))}
                <div style={{ marginTop: "20px", padding: "10px 14px", border: "1px solid var(--accent)", background: "var(--accent-dim)" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "4px" }}>GOAL SCOPE</p>
                  <p style={{ fontSize: "12px", color: "var(--text-primary)" }}>Understands the system. Surfaces what matters.</p>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} custom={5} style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
              {["AI-Generated Code", "Hidden Dependencies", "N+1 Queries", "Architectural Anti-Patterns", "Async/Sync Violations", "Framework Misuse", "Performance Bottlenecks", "Security Risks", "Context Switching"].map((tag, i) => (
                <span key={i} style={{ fontSize: "11px", letterSpacing: "0.1em", padding: "4px 10px", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{tag}</span>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Competitive Comparison ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="COMPETITIVE LANDSCAPE" /></motion.div>
            <motion.div variants={fadeUp} custom={1} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
                AI Code Review, <span style={{ color: "var(--accent)" }}>Reimagined</span>
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Where GitRabbit.co goes beyond traditional AI review tools.
              </p>
            </motion.div>

            {/* Three-card comparison */}
            <motion.div variants={fadeUp} custom={2} className="mobile-stack-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr 1fr", gap: "1px", background: "var(--border)", marginBottom: "1px" }}>
              {/* CodeRabbit */}
              <div style={{ background: "var(--surface)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                  <div style={{ width: "40px", height: "40px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "var(--bg)" }}>🐰</div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.04em" }}>CodeRabbit</p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>AI-powered PR review</p>
                  </div>
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--border-hover)" }} />
              </div>

              {/* GitRabbit — highlighted center */}
              <div style={{ background: "var(--surface-2)", padding: "1.75rem", borderLeft: "2px solid var(--accent)", borderRight: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                  <div style={{ width: "40px", height: "40px", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "var(--accent-dim)" }}>🐇</div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em" }}>
                      <span style={{ color: "var(--text-primary)" }}>Git</span><span style={{ color: "var(--accent)" }}>Rabbit</span>
                      <span style={{ fontSize: "10px", color: "var(--accent)", marginLeft: "6px", border: "1px solid var(--accent)", padding: "1px 6px", letterSpacing: "0.1em" }}>+</span>
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>AI code review that teams experience together.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", marginTop: "4px" }}>
                  <span style={{ color: "var(--accent)" }}>Review</span>
                  <span style={{ color: "var(--text-muted)" }}>→</span>
                  <span style={{ color: "var(--accent)" }}>Collaborate</span>
                  <span style={{ color: "var(--text-muted)" }}>→</span>
                  <span style={{ color: "var(--accent)" }}>Resolve</span>
                </div>
              </div>

              {/* GitHub Copilot */}
              <div style={{ background: "var(--surface)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                  <div style={{ width: "40px", height: "40px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", background: "var(--bg)" }}>🐙</div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.04em" }}>GitHub Copilot</p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>AI-assisted development & review</p>
                  </div>
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--border-hover)" }} />
              </div>
            </motion.div>

            {/* VS Comparison rows */}
            <motion.div variants={fadeUp} custom={3} style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)" }}>
              {[
                {
                  traditional: { icon: "🔍", label: "Traditional tools", sub: "Review-focused" },
                  gitrabbit: { label: "GitRabbit.co", sub: "Review + ", highlight: "Real-Time Team Collaboration", icon: "👥" },
                },
                {
                  traditional: { icon: "💬", label: "Traditional tools", sub: "Feedback across separate workflows" },
                  gitrabbit: { label: "GitRabbit.co", sub: "AI review + live team discussion in ", highlight: "one workspace", icon: "🗨️" },
                },
                {
                  traditional: { icon: "🔎", label: "Traditional tools", sub: "Find issues" },
                  gitrabbit: { label: "GitRabbit.co", sub: "", highlight: "Understand → Discuss → Resolve", icon: "✅" },
                },
              ].map((row, i) => (
                <div key={i} className="vs-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1.15fr auto 48px", alignItems: "center", background: "var(--surface)", padding: "1.25rem 1.5rem", gap: "1rem" }}>
                  {/* Traditional */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "36px", height: "36px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, background: "var(--bg)" }}>{row.traditional.icon}</div>
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)" }}>{row.traditional.label}</p>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{row.traditional.sub}</p>
                    </div>
                  </div>
                  {/* VS badge */}
                  <div style={{ padding: "3px 10px", border: "1px solid var(--border)", fontSize: "10px", letterSpacing: "0.12em", color: "var(--text-muted)", textAlign: "center" }}>VS</div>
                  {/* GitRabbit */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "36px", height: "36px", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0, background: "var(--accent-dim)" }}>🐇</div>
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)" }}>{row.gitrabbit.label}</p>
                      <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                        {row.gitrabbit.sub}<span style={{ color: "var(--accent)" }}>{row.gitrabbit.highlight}</span>
                      </p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="vs-arrow" style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--border-hover)", fontSize: "12px" }}>
                    <span style={{ display: "block", width: "40px", borderTop: "1px dashed var(--border-hover)" }} />→
                  </div>
                  {/* Icon */}
                  <div style={{ width: "36px", height: "36px", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", background: "var(--bg)" }}>{row.gitrabbit.icon}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── AI Pipeline ──────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="HOW IT WORKS" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
              The AI Pipeline
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 0 }}>
              {["Repository", "Codebase Indexing", "Repository / Dependency Graph", "Multi-Model AI Orchestration", "Validation & Zero-Noise Filtering", "Architectural + Performance Analysis", "Actionable Engineering Insights", "Optional AI Resolution"].map((step, i, arr) => (
                <FlowStep key={i} label={step} isLast={i === arr.length - 1} />
              ))}
            </motion.div>
            <div className="grid-cols-1-2" style={{ gap: "1px", background: "var(--border)", marginTop: "3rem" }}>
              {[
                { title: "REASONING MODELS", color: "var(--accent)", uses: ["Multi-file bug detection", "Logical refactoring", "Architectural analysis", "Complex dependency reasoning"] },
                { title: "HIGH-CONTEXT MODELS", color: "var(--yellow)", uses: ["Large repository compression", "PR diff analysis", "Verbose log processing", "Context summarization & briefs"] },
              ].map((model, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 3} style={{ background: "var(--bg)", padding: "2rem" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: model.color, fontWeight: 600, marginBottom: "14px" }}>{model.title}</p>
                  {model.uses.map((u, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                      <span style={{ color: model.color, fontSize: "10px", flexShrink: 0, marginTop: "3px" }}>▸</span>
                      <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{u}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={5} style={{ marginTop: "1px", background: "var(--bg)", border: "1px solid var(--border)", borderTop: "none", padding: "20px 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "16px" }}>
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", fontWeight: 600, marginBottom: "6px" }}>FILTERING LAYER — ZERO-NOISE POLICY</p>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Suppresses stylistic preferences, nitpicks & low-value suggestions. Surfaces only high-severity, actionable, technically justified issues.</p>
              </div>
              <Badge color="var(--accent)">ZERO NOISE</Badge>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Framework Intelligence ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="FRAMEWORK INTELLIGENCE" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
              Deep Framework Understanding
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              Instead of treating every project as generic source code, GitRabbit.co is designed to develop deep, framework-specific intelligence — understanding how modern frameworks actually behave.
            </motion.p>
            <div className="grid-cols-1-2" style={{ gap: "1px", background: "var(--border)" }}>
              {[
                { name: "Next.js", icon: "▲", color: "var(--accent)", rules: ["App Router behavior", "Server vs Client boundaries", "Hydration-related problems", "Data-fetching architecture", "Server Component misuse"] },
                { name: "FastAPI", icon: "⚡", color: "var(--yellow)", rules: ["Async architecture validation", "Dependency injection patterns", "Pydantic validation review", "Blocking synchronous operations", "API-layer design analysis"] },
                { name: "NestJS", icon: "🐈", color: "#ea2845", rules: ["Module boundary enforcement", "Dependency injection cycles", "Decorator validation", "Middleware execution tracking", "Exception filter analysis"] },
              ].map((fw, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 3} style={{ background: "var(--surface)", padding: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" as const }}>
                    <span style={{ fontSize: "20px", color: fw.color }}>{fw.icon}</span>
                    <p style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--text-primary)" }}>{fw.name}</p>
                    <Badge color="var(--text-muted)">SUPPORTED</Badge>
                  </div>
                  {fw.rules.map((rule, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                      <span style={{ color: fw.color, fontSize: "10px", flexShrink: 0, marginTop: "3px" }}>▸</span>
                      <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{rule}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} custom={6} style={{ marginTop: "1px", padding: "14px 20px", border: "1px dashed var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.08em" }}>
              + More frameworks planned: Django REST · Laravel · Ruby on Rails · Spring Boot
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Full Codebase Context ────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="FULL-CODEBASE CONTEXT" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
              Beyond the Diff
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              GitRabbit.co is being designed to move beyond analyzing only the changed PR diff. The system aims to understand the full repository — how a seemingly small change in one module could affect another service or component elsewhere.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} style={{ padding: "2rem", border: "1px solid var(--border)", background: "var(--bg)", marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: "20px" }}>REPOSITORY CONTEXT MODEL</p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1px", background: "var(--border)" }}>
                {[
                  { label: "Repository", sub: "Root context", color: "var(--accent)" },
                  { label: "Files", sub: "Source units", color: "var(--text-secondary)" },
                  { label: "Modules", sub: "Feature groups", color: "var(--text-secondary)" },
                  { label: "Services", sub: "Domain layers", color: "var(--text-secondary)" },
                  { label: "Dependencies", sub: "Import graph", color: "var(--yellow)" },
                  { label: "Data Flow", sub: "State & I/O", color: "var(--yellow)" },
                  { label: "Architecture", sub: "System design", color: "var(--accent)" },
                  { label: "PR Change", sub: "The actual diff", color: "var(--text-muted)" },
                ].map((node, i) => (
                  <div key={i} style={{ background: "var(--surface)", padding: "14px 16px", flex: "1 1 120px", minWidth: "120px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: node.color, letterSpacing: "0.06em" }}>{node.label}</p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{node.sub}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "16px", padding: "10px 14px", border: "1px solid var(--accent)", background: "var(--accent-dim)" }}>
                <p style={{ fontSize: "12px", color: "var(--accent)" }}>
                  Result: AI reasoning that understands <em>where the change lives</em> within the broader system — not just what changed.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Zero Noise ───────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="ZERO-NOISE REVIEW" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
              Review Less. <span style={{ color: "var(--accent)" }}>Catch More.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              GitRabbit.co is built around a strict <strong style={{ color: "var(--text-primary)" }}>Zero-Noise Policy</strong> — the goal is not to overwhelm developers with hundreds of suggestions, but to surface only what genuinely matters in production.
            </motion.p>
            <div className="grid-cols-1-2" style={{ gap: "1px", background: "var(--border)" }}>
              <motion.div variants={fadeUp} custom={3} style={{ background: "var(--surface)", padding: "2rem" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "14px" }}>FILTERED OUT — NOISE</p>
                {["Stylistic preferences", "Minor nitpicks", "Low-value suggestions", "Subjective opinions", "Formatting inconsistencies", "Comment conventions"].map((n, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>✗</span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "line-through" }}>{n}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} custom={4} style={{ background: "var(--surface)", padding: "2rem", borderLeft: "2px solid var(--accent)" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: "14px" }}>SURFACED — ENGINEERING INTELLIGENCE</p>
                {["Production-impacting bugs", "Security-relevant problems", "Architectural violations", "Performance bottlenecks", "Scalability risks", "Dangerous data-access patterns"].map((n, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "10px" }}>▸</span>
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{n}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── Architectural Auditing ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="ARCHITECTURAL AUDITING" /></motion.div>
            <motion.div variants={fadeUp} custom={1} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" as const }}>
              <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                A Virtual Staff Engineer
              </h2>
              <Badge color="var(--yellow)">PRODUCT VISION</Badge>
            </motion.div>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "640px" }}>
              The goal is not to replace engineers — it is to give every team the architectural oversight of a senior engineer, available on every pull request. GitRabbit.co is designed to reason about long-term system quality, not just whether code passes CI.
            </motion.p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "var(--border)" }}>
              {[
                { code: "01", issue: "Blocking sync operation in async FastAPI route", detail: "Detected synchronous database call inside async endpoint — causes thread starvation under load." },
                { code: "02", issue: "Incorrect state pattern in Next.js Server Component", detail: "useState hook used inside a Server Component boundary — invalid and causes hydration failures." },
                { code: "03", issue: "Poor separation of responsibilities", detail: "Business logic and data access mixed inside a single route handler — reduces testability and reuse." },
                { code: "04", issue: "Architectural coupling between services", detail: "Service A directly imports and calls Service B internals — breaks modular boundaries and increases risk." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 3} style={{ background: "var(--bg)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--yellow)", fontWeight: 600, flexShrink: 0, marginTop: "2px" }}>[ARC_{item.code}]</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "4px" }}>{item.issue}</p>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── Performance Intelligence ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="PERFORMANCE INTELLIGENCE" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", letterSpacing: "-0.02em" }}>
              Algorithmic & Infrastructure Analysis
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              Better algorithms mean lower compute requirements, better scalability, and lower infrastructure cost. GitRabbit.co aims to identify computational and data-access inefficiencies before they reach production.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} style={{ display: "flex", gap: "1px", background: "var(--border)", marginBottom: "1.5rem" }}>
              <div style={{ flex: 1, background: "var(--surface)", padding: "20px" }}>
                <div style={{ marginBottom: "8px" }}>
                  <Badge color="var(--text-muted)">DETECTED</Badge>
                </div>
                <p style={{ fontSize: "24px", fontWeight: 700, color: "#ff7675", letterSpacing: "-0.02em", marginBottom: "6px" }}>O(N²)</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Brute-force nested-loop approach — performance degrades quadratically as input grows.</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", padding: "0 16px", background: "var(--bg)" }}>
                <span style={{ color: "var(--accent)", fontSize: "18px" }}>→</span>
              </div>
              <div style={{ flex: 1, background: "var(--surface)", padding: "20px", borderLeft: "2px solid var(--accent)" }}>
                <div style={{ marginBottom: "8px" }}>
                  <Badge color="var(--accent)">SUGGESTION</Badge>
                </div>
                <p style={{ fontSize: "24px", fontWeight: 700, color: "var(--accent)", letterSpacing: "-0.02em", marginBottom: "6px" }}>O(N)</p>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Hash-map based approach — linear time, scales efficiently regardless of input size.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
              {["N+1 Queries", "Unpaginated Data Fetching", "Unnecessary DB Calls", "Memory-Heavy Loops", "Repeated Computations", "Resource Leaks", "Blocking I/O", "Scalability Bottlenecks"].map((tag, i) => (
                <span key={i} style={{ fontSize: "11px", letterSpacing: "0.1em", padding: "4px 10px", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{tag}</span>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Engineering Workspace Vision ─────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="ENGINEERING WORKSPACE" /></motion.div>
            <motion.div variants={fadeUp} custom={1} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" as const }}>
              <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                Next-Generation Workspace
              </h2>
              <Badge color="var(--yellow)">ROADMAP VISION</Badge>
            </motion.div>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "600px" }}>
              GitRabbit.co&apos;s long-term vision extends beyond code review into a collaborative AI-native engineering environment. These capabilities represent the product roadmap — not currently implemented.
            </motion.p>
            <div className="grid-cols-1-2" style={{ gap: "1px", background: "var(--border)" }}>
              {[
                { icon: "⬛", label: "Cloud IDE", desc: "Inspect and modify AI-flagged issues directly inside the browser — no context switching.", planned: true },
                { icon: "⟳", label: "Live Pair Programming", desc: "Teams collaborate around AI-detected problems inside a shared real-time environment.", planned: true },
                { icon: "◈", label: "One-Click AI Resolution", desc: "Detect → Explain → Generate Fix → Run Tests → Review → Commit to Branch.", planned: true },
                { icon: "⚡", label: "Enterprise Governance", desc: "Organization-wide architectural consistency rules, custom policies, and large-repository analysis.", planned: true },
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 3} style={{ background: "var(--bg)", padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <span style={{ fontSize: "22px", color: "var(--border-hover)" }}>{feature.icon}</span>
                    {feature.planned && <Badge color="var(--text-muted)">PLANNED</Badge>}
                  </div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px", letterSpacing: "0.04em" }}>{feature.label}</p>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7 }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>


        {/* ─── Product Potential ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="WHY IT COULD MATTER" /></motion.div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1px", background: "var(--border)" }}>
              {[
                { icon: "⚡", title: "Developer Productivity", desc: "Reduce the amount of manual investigation required during code review." },
                { icon: "◈", title: "Engineering Quality", desc: "Catch deeper problems before they reach production." },
                { icon: "▲", title: "Framework Intelligence", desc: "Analysis tailored to how modern frameworks actually behave." },
                { icon: "⬛", title: "Enterprise Engineering", desc: "Help teams maintain architectural consistency across large repositories." },
                { icon: "◬", title: "Infrastructure Efficiency", desc: "Identify inefficient algorithms and data-access patterns earlier." },
                { icon: "🐇", title: "AI-Native Development", desc: "Part of the workflow where AI writes code and specialized AI validates it." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ flex: "1 1 280px", background: "var(--bg)", padding: "1.5rem" }}>
                  <span style={{ fontSize: "18px", color: "var(--border-hover)", marginBottom: "10px", display: "block" }}>{item.icon}</span>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>{item.title}</p>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── Roadmap ──────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="ROADMAP" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
              Product Phases
            </motion.h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "var(--border)" }}>
              {[
                { phase: "01", title: "Foundation", status: "IN PROGRESS", statusColor: "var(--accent)", items: ["Repository ingestion", "Codebase indexing", "PR analysis", "Multi-model orchestration", "Initial framework intelligence", "Zero-noise filtering"] },
                { phase: "02", title: "Code Intelligence", status: "PLANNED", statusColor: "var(--yellow)", items: ["Full-codebase context", "Dependency graph", "Architectural analysis", "Big-O detection", "Performance analysis", "Advanced framework rules"] },
                { phase: "03", title: "Engineering Workspace", status: "VISION", statusColor: "var(--text-muted)", items: ["Cloud IDE", "AI-assisted fixes", "Test execution", "Branch integration", "Collaborative review", "Live pair programming"] },
                { phase: "04", title: "Enterprise Intelligence", status: "VISION", statusColor: "var(--text-muted)", items: ["Org-wide code intelligence", "Architectural governance", "Large-repo analysis", "Engineering analytics", "Custom rules", "Enterprise integrations"] },
              ].map((phase, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 2} style={{ background: "var(--surface)", padding: "1.5rem 2rem", display: "flex", gap: "2rem", flexWrap: "wrap" as const, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, minWidth: "140px" }}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>PHASE</p>
                    <p style={{ fontSize: "28px", fontWeight: 700, color: "var(--border-hover)", lineHeight: 1, marginBottom: "8px" }}>{phase.phase}</p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "6px" }}>{phase.title}</p>
                    <Badge color={phase.statusColor}>{phase.status}</Badge>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", flex: 1 }}>
                    {phase.items.map((item, j) => (
                      <span key={j} style={{ fontSize: "11px", letterSpacing: "0.08em", padding: "4px 10px", border: "1px solid var(--border)", color: "var(--text-secondary)", background: "var(--bg)" }}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── Final Positioning ────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="THE MISSION" /></motion.div>
            <motion.div variants={fadeUp} custom={1} style={{ maxWidth: "700px" }}>
              <h2 style={{ fontSize: "clamp(1.3rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.35, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                AI can generate code.<br />
                <span style={{ color: "var(--accent)" }}>GitRabbit.co aims to help engineers understand whether that code belongs in the system.</span>
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                GitRabbit.co is not just an AI code reviewer. It is an ongoing attempt to build a <strong style={{ color: "var(--text-primary)" }}>code intelligence and engineering workspace</strong> that understands software at multiple levels.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "2rem" }}>
                {["Code", "Context", "Architecture", "Performance", "Collaboration", "Resolution"].map((item, i) => (
                  <span key={i} style={{ fontSize: "12px", letterSpacing: "0.1em", padding: "5px 12px", border: `1px solid ${i === 0 || i === 5 ? "var(--accent)" : "var(--border)"}`, color: i === 0 || i === 5 ? "var(--accent)" : "var(--text-secondary)" }}>{item}</span>
                ))}
              </div>
              <div style={{ padding: "20px", border: "1px solid var(--border)", background: "var(--bg)" }}>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px", letterSpacing: "0.1em" }}>THE LONG-TERM GOAL</p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Help engineering teams move from <span style={{ color: "var(--text-muted)" }}>&quot;Does this code work?&quot;</span> to{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 600 }}>&quot;Does this code belong in the system?&quot;</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Project Status ───────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" as const }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px var(--accent)", flexShrink: 0 }} />
              <p style={{ fontSize: "14px", letterSpacing: "0.15em", fontWeight: 600, color: "var(--text-primary)" }}>ONGOING · LARGE-SCALE SAAS PROJECT</p>
            </motion.div>
            <motion.p variants={fadeUp} custom={1} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "2rem" }}>
              GitRabbit.co is an ongoing product initiative focused on building an AI-native engineering intelligence platform. The current implementation and roadmap will continue evolving as the product architecture, AI capabilities, and developer experience mature.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const }}>
              <a href="https://www.gitrabbit.co/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "var(--accent-dim)", border: "1px solid var(--accent)", color: "var(--accent)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              >↗ VIEW LIVE DEMO</a>
              <a href="https://github.com/shakib5560/gitrabbit2.0" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >⌥ BACKEND REPO</a>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Technical Deep Dive ───────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max">
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="TECHNICAL DEEP DIVE" /></motion.div>
            <motion.div variants={fadeUp} custom={1} style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.9rem)", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: "10px" }}>
                How I Built the System
              </h2>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "680px" }}>
                GitRabbit Backend v2 is a production-grade microservices architecture built for scalability, database isolation, and independent deployability — each service owns its own domain, schema, and runtime.
              </p>
            </motion.div>

            {/* Microservices Service Cards */}
            <motion.div variants={fadeUp} custom={2} style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>MICROSERVICES ARCHITECTURE</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "var(--border)" }}>
                {[
                  { service: "Auth + Realtime", framework: "NestJS v11", port: ":3000", db: "auth_db · PostgreSQL", orm: "Prisma v5", icon: "🔐", items: ["JWT Auth", "Refresh Tokens", "RBAC Guards", "Socket.IO WebSocket", "User Management"] },
                  { service: "AI / LLM Service", framework: "FastAPI", port: ":8000", db: "ai_db · PostgreSQL", orm: "SQLAlchemy + Alembic", icon: "🤖", items: ["OpenAI API", "Anthropic API", "Conversation Models", "Token Usage Tracking", "Async Processing"] },
                  { service: "Blog Service", framework: "Fastify v4", port: ":4000", db: "blog_db · PostgreSQL", orm: "Prisma v5", icon: "📝", items: ["Post / Category / Tag", "Comment System", "JWT Verification", "Auth Decorator", "Slug-based Routing"] },
                  { service: "API Gateway", framework: "Nginx", port: ":80", db: "—", orm: "—", icon: "🌐", items: ["/api/auth/* routing", "/api/ai/* routing", "/api/blog/* routing", "WebSocket Upgrade", "Internal Proxy"] },
                ].map((svc, i) => (
                  <div key={i} style={{ background: "var(--surface)", padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "20px" }}>{svc.icon}</span>
                      <div>
                        <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.04em" }}>{svc.service}</p>
                        <p style={{ fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em", marginTop: "2px" }}>{svc.framework} · {svc.port}</p>
                      </div>
                    </div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "10px", padding: "6px 10px", background: "var(--bg)", border: "1px solid var(--border)" }}>
                      {svc.db} · {svc.orm}
                    </div>
                    {svc.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                        <span style={{ color: "var(--accent)", fontSize: "9px" }}>▸</span>
                        <span style={{ fontSize: "11px", color: "var(--text-secondary)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nginx Routing Table */}
            <motion.div variants={fadeUp} custom={3} className="mobile-scroll-x" style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1.5rem", marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "12px", fontFamily: "'JetBrains Mono', monospace" }}>NGINX ROUTING TABLE</p>
              <div style={{ minWidth: "600px" }}>
              {[
                { method: "ANY", path: "/api/auth/*",  target: "auth-service:3000", type: "REST" },
                { method: "WS",  path: "/socket.io/*", target: "auth-service:3000", type: "WebSocket" },
                { method: "ANY", path: "/api/ai/*",    target: "ai-service:8000",   type: "REST" },
                { method: "ANY", path: "/api/blog/*",  target: "blog-service:4000", type: "REST" },
              ].map((route, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0", borderBottom: i < 3 ? "1px solid var(--border)" : "none", flexWrap: "wrap" as const }}>
                  <span style={{ fontSize: "10px", padding: "2px 8px", background: route.type === "WebSocket" ? "rgba(253,203,110,0.12)" : "var(--accent-dim)", border: "1px solid var(--border)", color: "var(--accent)", minWidth: "50px", textAlign: "center" as const }}>{route.method}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-primary)", flex: 1, minWidth: "140px", fontFamily: "'JetBrains Mono', monospace" }}>{route.path}</span>
                  <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>→</span>
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontFamily: "'JetBrains Mono', monospace" }}>{route.target}</span>
                  <span style={{ fontSize: "10px", padding: "2px 8px", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{route.type}</span>
                </div>
              ))}
              </div>
            </motion.div>

            {/* Multi-Agent AI Workflow */}
            <motion.div variants={fadeUp} custom={4} style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>MULTI-AGENT AI WORKFLOW</p>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)", padding: "1.5rem" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Rather than sending a PR diff to a single model, GitRabbit.co orchestrates <strong style={{ color: "var(--text-primary)" }}>multiple specialized AI agents</strong> that analyze code from different perspectives simultaneously — then synthesize results through a validation layer before surfacing insights.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "1px", background: "var(--border)" }}>
                  {[
                    { step: "01", agent: "Repo Ingestion Agent",    role: "Clones & indexes the full repository. Builds dependency graph and module map.", model: "Custom Parser" },
                    { step: "02", agent: "Architecture Agent",       role: "Detects framework patterns, architectural violations, and anti-patterns across the codebase.", model: "OpenAI GPT-4o" },
                    { step: "03", agent: "Security & Perf Agent",    role: "Scans for N+1 queries, async/sync violations, injection risks, and auth gaps.", model: "Anthropic Claude" },
                    { step: "04", agent: "Context Retrieval (RAG)",  role: "Queries Vector DB to find semantically similar code patterns across the full codebase.", model: "Embeddings + pgvector" },
                    { step: "05", agent: "Synthesis & Filter Agent", role: "Merges agent outputs. Applies Zero-Noise Policy — surfaces only high-signal findings.", model: "OpenAI GPT-4o" },
                    { step: "06", agent: "Response Formatter",       role: "Generates line-by-line review comments, severity labels, and actionable fix suggestions.", model: "Output Layer" },
                  ].map((agent, i) => (
                    <div key={i} style={{ background: "var(--bg)", padding: "1rem 1.25rem", display: "flex", gap: "1.25rem", alignItems: "flex-start", flexWrap: "wrap" as const }}>
                      <span style={{ fontSize: "11px", color: "var(--border-hover)", letterSpacing: "0.1em", minWidth: "24px", flexShrink: 0, paddingTop: "2px" }}>{agent.step}</span>
                      <div style={{ flex: 1, minWidth: "180px" }}>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>{agent.agent}</p>
                        <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{agent.role}</p>
                      </div>
                      <span style={{ fontSize: "10px", padding: "3px 10px", border: "1px solid var(--accent)", color: "var(--accent)", background: "var(--accent-dim)", whiteSpace: "nowrap" as const, flexShrink: 0 }}>{agent.model}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vector DB / RAG Pipeline */}
            <motion.div variants={fadeUp} custom={5} style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>VECTOR DATABASE & RAG PIPELINE</p>
              <div className="mobile-stack-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
                <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>Codebase Embedding Flow</p>
                  {[
                    "Repository cloned & chunked by file/function",
                    "Each chunk embedded via OpenAI text-embedding-3",
                    "Vectors stored in PostgreSQL + pgvector extension",
                    "Indexed by file path, language, and module type",
                    "Re-indexed on each new commit to stay current",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ color: "var(--accent)", fontSize: "9px", paddingTop: "4px", flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "var(--surface)", padding: "1.5rem" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>RAG Query Flow</p>
                  {[
                    "PR diff extracted and embedded at review time",
                    "Similarity search against codebase vector store",
                    "Top-K relevant code chunks retrieved (k=10)",
                    "Injected as context into AI agent prompt",
                    "Agent reasons about change in full codebase context",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ color: "var(--yellow)", fontSize: "9px", paddingTop: "4px", flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--surface)", padding: "1rem 1.5rem", border: "1px solid var(--border)", borderTop: "none", display: "flex", gap: "1.5rem", flexWrap: "wrap" as const, alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>VECTOR STORE:</span>
                {["PostgreSQL + pgvector", "OpenAI Embeddings", "Cosine Similarity", "Top-K Retrieval", "Chunk-level Indexing"].map((tag) => (
                  <span key={tag} style={{ fontSize: "10px", padding: "3px 10px", border: "1px solid var(--border)", color: "var(--text-muted)" }}>{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Database Isolation */}
            <motion.div variants={fadeUp} custom={6} style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>DATABASE ISOLATION STRATEGY</p>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1.5rem" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem", borderLeft: "2px solid var(--yellow)", paddingLeft: "14px" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Key principle:</strong> Each service exclusively owns its own PostgreSQL instance. No service ever directly queries another service&apos;s database. Cross-service identity is passed via JWT payload only.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "var(--border)" }}>
                  {[
                    { db: "auth_db",  service: "auth-service", port: "5433", orm: "Prisma v5",            migration: "prisma migrate deploy", volume: "auth-db-data" },
                    { db: "ai_db",    service: "ai-service",   port: "5434", orm: "SQLAlchemy + Alembic", migration: "alembic upgrade head",  volume: "ai-db-data" },
                    { db: "blog_db",  service: "blog-service", port: "5435", orm: "Prisma v5",            migration: "prisma migrate deploy", volume: "blog-db-data" },
                  ].map((db, i) => (
                    <div key={i} style={{ background: "var(--bg)", padding: "1.25rem" }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.08em", marginBottom: "10px" }}>{db.db}</p>
                      {([["Service", db.service], ["Port", db.port], ["ORM", db.orm], ["Migration", db.migration], ["Volume", db.volume]] as [string,string][]).map(([label, val]) => (
                        <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", gap: "8px" }}>
                          <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", flexShrink: 0 }}>{label}</span>
                          <span style={{ fontSize: "10px", color: "var(--text-secondary)", textAlign: "right" as const }}>{val}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Full Tech Stack Table */}
            <motion.div variants={fadeUp} custom={7} style={{ marginBottom: "2rem" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>FULL TECHNOLOGY STACK</p>
              <div className="mobile-scroll-x" style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
                <div style={{ minWidth: "600px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", background: "var(--surface-2)", padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>
                  {["Layer", "Technology", "Version", "Status"].map((h) => (
                    <span key={h} style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--text-muted)" }}>{h}</span>
                  ))}
                </div>
                {[
                  { layer: "Auth / Realtime",      tech: "NestJS",                  ver: "v11",    status: "✅" },
                  { layer: "AI / LLM",             tech: "FastAPI",                 ver: "0.110",  status: "✅" },
                  { layer: "Blog",                 tech: "Fastify",                 ver: "v4",     status: "✅" },
                  { layer: "Language (Auth/Blog)",  tech: "TypeScript",              ver: "v5",     status: "✅" },
                  { layer: "Language (AI)",         tech: "Python",                  ver: "3.11",   status: "✅" },
                  { layer: "Database",              tech: "PostgreSQL",              ver: "15",     status: "✅" },
                  { layer: "ORM (Auth/Blog)",       tech: "Prisma",                  ver: "v5",     status: "✅" },
                  { layer: "ORM (AI)",              tech: "SQLAlchemy + Alembic",    ver: "2.x",   status: "✅" },
                  { layer: "Vector DB",             tech: "pgvector (PostgreSQL)",   ver: "0.5+",  status: "🚧" },
                  { layer: "Embeddings",            tech: "OpenAI text-embedding-3", ver: "Latest", status: "🚧" },
                  { layer: "LLM Providers",         tech: "OpenAI + Anthropic",      ver: "Latest", status: "🚧" },
                  { layer: "Realtime",              tech: "Socket.IO",               ver: "v4",     status: "✅" },
                  { layer: "API Gateway",           tech: "Nginx",                   ver: "latest", status: "✅" },
                  { layer: "Cache / Broker",        tech: "Redis",                   ver: "v7",     status: "⏳" },
                  { layer: "Containerization",      tech: "Docker + Compose",        ver: "v3",     status: "✅" },
                ].map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", padding: "9px 16px", borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "var(--surface)" : "var(--bg)" }}>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{row.layer}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-primary)", fontWeight: 600 }}>{row.tech}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-secondary)" }}>{row.ver}</span>
                    <span style={{ fontSize: "12px" }}>{row.status}</span>
                  </div>
                ))}
                </div>
              </div>
              <div style={{ padding: "8px 12px", background: "var(--surface)", border: "1px solid var(--border)", borderTop: "none", fontSize: "10px", color: "var(--text-muted)", display: "flex", gap: "16px" }}>
                <span>✅ Active</span><span>🚧 In Progress</span><span>⏳ Provisioned, not integrated</span>
              </div>
            </motion.div>

            {/* Architecture Principles */}
            <motion.div variants={fadeUp} custom={8}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--accent)", marginBottom: "1rem" }}>ARCHITECTURE PRINCIPLES</p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "1px", background: "var(--border)" }}>
                {[
                  { title: "Database per Service",    desc: "Each service has its own PostgreSQL instance — zero cross-DB queries permitted." },
                  { title: "Loose Coupling",          desc: "Services communicate via HTTP/WebSocket, never through shared databases." },
                  { title: "Independent Deployment",  desc: "Each service has its own Dockerfile and can be rebuilt and deployed independently." },
                  { title: "Stateless Services",      desc: "No in-memory session state. JWT is self-contained and verifiable by any downstream service." },
                  { title: "Reproducible Migrations", desc: "Prisma and Alembic migrations run automatically on every container start." },
                  { title: "Security by Default",     desc: "bcrypt-hashed passwords, secrets in env vars, databases fully isolated per service." },
                ].map((p, i) => (
                  <div key={i} style={{ flex: "1 1 280px", background: "var(--surface)", padding: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent)", display: "block", flexShrink: 0 }} />
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)" }}>{p.title}</p>
                    </div>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.65, paddingLeft: "12px" }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Footer ───────────────────────────────────────────────────── */}
        <footer className="container-max" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <TransitionLink href="/" style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >&lt; BACK TO DIRECTORY</TransitionLink>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>© 2026 SHAMIUL SHAKIB</span>
        </footer>

      </div>
    </div>
  );
}
