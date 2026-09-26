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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AutoTaskXPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden" }}>
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ─── Header ───────────────────────────────────────────────────── */}
        <header style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container-max" style={{ paddingBottom: "2.5rem", paddingTop: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap" as const, gap: "1rem" }}>
              <TransitionLink href="/#projects"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", textDecoration: "none", fontSize: "12px", letterSpacing: "0.15em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >&lt; BACK TO DIRECTORY</TransitionLink>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" as const }}>
                <a href="https://autotaskx.online/" target="_blank" rel="noopener noreferrer"
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
                SYSTEM: LOCALHOST // PATH: ~/projects/autotaskx
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
                <span style={{ color: "var(--text-primary)" }}>AUTO</span>
                <span style={{ color: "var(--accent)", textShadow: "0 0 45px rgba(253,203,110,0.25)" }}>TASKX</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", letterSpacing: "0.12em", color: "var(--text-secondary)", marginBottom: "20px" }}>
                AI-POWERED INDUSTRIAL TEXTILE OPERATING SYSTEM
              </motion.p>
              <motion.p variants={fadeUp} custom={3} style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "620px", marginBottom: "20px" }}>
                Architected and built AutoTaskX, an AI-powered industrial operating system that digitizes textile dyehouses by unifying Kubelka-Munk spectral color formulation, 8K automated fabric defect grading (ASTM D5430), and sub-second machine telemetry using Next.js 16, FastAPI, TimescaleDB, and Redis.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "24px" }}>
                <Badge color="var(--accent)">PRODUCTION DEPLOYED</Badge>
                <Badge color="var(--yellow)">INDUSTRIAL IOT</Badge>
                <Badge color="var(--text-secondary)">AI & COMPUTER VISION</Badge>
              </motion.div>
              <motion.div variants={fadeUp} custom={5} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <a href="https://autotaskx.online/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "var(--accent-dim)", border: "1px solid var(--accent)", color: "var(--accent)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                >↗ LIVE DEMO</a>
                <a href="https://github.com/shakib5560/AutoTaskX" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >⌥ FRONTEND REPO</a>
                <a href="https://github.com/shakib5560/autotaskx-api" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >⌥ BACKEND REPO</a>
              </motion.div>

              <motion.div variants={fadeUp} custom={6} style={{ marginTop: "24px", padding: "16px", border: "1px dashed var(--yellow)", background: "rgba(253, 203, 110, 0.05)", borderRadius: "4px" }}>
                <p style={{ fontSize: "12px", color: "var(--yellow)", letterSpacing: "0.05em", lineHeight: 1.6 }}>
                  <strong>RESTRICTED ACCESS:</strong> If you wish to explore the full source code, review private production modules, or schedule a technical walkthrough, please contact me directly on WhatsApp: <a href="https://wa.me/8801771659336" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>+8801771659336</a>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* ─── Tech Ticker ──────────────────────────────────────────────── */}
        <div className="ticker-container" style={{ overflow: "hidden", width: "100%", maxWidth: "100%", borderBottom: "1px solid var(--border)", padding: "12px 0", background: "var(--surface)" }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", whiteSpace: "nowrap", width: "max-content", animation: "ticker 22s linear infinite" }}>
            {Array.from({ length: 8 }).flatMap((_, idx) =>
              ["NEXT.JS 16", "FASTAPI", "TIMESCALEDB", "REDIS 7.2", "POSTGRESQL", "WEBSOCKETS", "SCIPY", "DOCKER", "✦"].map((t, i) => (
                <span key={`${idx}-${i}`} style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", color: t === "✦" ? "var(--accent)" : "var(--text-muted)" }}>{t}</span>
              ))
            )}
          </div>
        </div>

        {/* ─── Executive Pitch ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="THE CONTEXT" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "20px", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              Textile mills lose hundreds of thousands of dollars each month due to failed dye trials and missed defects.
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "1rem", maxWidth: "800px" }}>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                I designed and developed AutoTaskX to solve this by directly bridging the gap between advanced academic research and industrial manufacturing floors. 
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── The Origin ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="THE ORIGIN: ACADEMIA MEETS INDUSTRY" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Synthesizing Academic Research into Software Architecture
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "850px" }}>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                The genesis of AutoTaskX was highly unconventional. The client approached me not with traditional software wireframes or product specification documents, but with an exhaustive, in-depth academic thesis. This thesis was authored by a brilliant student and researcher at the <strong>Bangladesh University of Textile Engineering (BUTEX)</strong>.
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                The core of the research focused on predicting exact dye formulations via complex non-linear optical equations, and automating fabric defect grading using high-speed optical physics. To accurately translate this vision into reality, I collaborated closely with a highly professional researcher from BUTEX.
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--accent)", lineHeight: 1.8 }}>
                My primary objective was to master these concepts—spending 20 intensive days studying textile chemistry, spectrophotometric reflectance, and ASTM grading standards—and architect a scalable software infrastructure that could execute this academic theory in real-time on a production factory floor.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Core Engineering Challenges ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="KEY ENGINEERING CHALLENGES" /></motion.div>
            
            <div className="grid-cols-1-2" style={{ gap: "2rem", marginTop: "2rem" }}>
              {[
                {
                  title: "Handling Extreme Domain Ambiguity",
                  challenge: "Requirements were rooted in a dense 150+ page BUTEX academic thesis containing chemical kinetic equations, spectrophotometer physics, and international textile standards (ASTM, ISO, AATCC).",
                  solution: "Dedicated 20 full days solely to deep academic domain research. Mastered optical reflectance spectroscopy, Kubelka-Munk theory, and jet dyeing mechanics to break down complex theory into maintainable software microservices."
                },
                {
                  title: "Translating Optical Physics into Matrix Math",
                  challenge: "Matching target shades requires combining multiple dyes such that their combined absorption curve matches 31 individual wavelengths (400nm to 700nm), ensuring concentrations aren't negative.",
                  solution: "Formulated the problem as a Non-Negative Least Squares (NNLS) matrix optimization using `scipy.optimize.nnls`. The system computes exact dye concentration vectors in under 15 milliseconds and includes CIEDE2000 evaluation."
                },
                {
                  title: "Real-Time Edge Computer Vision & WebSockets",
                  challenge: "Defect events from 8K cameras arrive in bursts at 60 meters/minute line speeds. Naive WebSocket servers and concurrent database writes lead to corrupted scores and desynced UI HUDs.",
                  solution: "Implemented an async WebSocket manager backed by a Redis Pub/Sub backplane to sync all HUDs instantly. Used PostgreSQL pessimistic row locking (`with_for_update`) to guarantee ACID consistency when calculating ASTM cut-plans."
                },
                {
                  title: "AST-Constrained Text-to-SQL",
                  challenge: "Managers wanted to ask natural language questions (e.g., \"Show me yesterday's high temp batches\"). Deploying raw LLMs for SQL generation risks accidental data deletion and SQL injections.",
                  solution: "Built a 4-stage safety pipeline: Intent extraction, AST parsing via `sqlglot`, strict read-only enforcement (blocking DDL/DML), and whitelist verification scoped only to safe production tables."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "2rem" }}>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent)", marginBottom: "16px", letterSpacing: "0.05em" }}>{item.title}</p>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "12px" }}>
                    <strong style={{ color: "var(--yellow)" }}>The Challenge:</strong> {item.challenge}
                  </p>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    <strong style={{ color: "var(--accent)" }}>The Solution:</strong> {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── Technical Complexity Breakdown ──────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="TECHNICAL COMPLEXITY BREAKDOWN" /></motion.div>
            
            <motion.div variants={fadeUp} custom={1} style={{ overflowX: "auto", marginTop: "2rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
                <thead>
                  <tr style={{ background: "var(--surface)", borderBottom: "2px solid var(--accent)", textAlign: "left" }}>
                    <th style={{ padding: "16px", fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-primary)" }}>DIMENSION</th>
                    <th style={{ padding: "16px", fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-primary)" }}>TRADITIONAL APPROACH</th>
                    <th style={{ padding: "16px", fontSize: "12px", letterSpacing: "0.1em", color: "var(--text-primary)" }}>AUTOTASKX IMPLEMENTATION</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Color Formulation", "3–5 manual lab dips taking 24–72 hours; visual subjective matching.", "Kubelka-Munk NNLS matrix solver across 31 spectral wavelengths (400–700nm) in <15ms."],
                    ["Color Tolerance", "Simple RGB/HEX distance or legacy CIE76 (inaccurate for human eye).", "Comprehensive CIEDE2000 (ΔE00) + Multi-illuminant metamerism indexing (D65, TL84)."],
                    ["Quality Inspection", "Human inspector on manual perch; optical fatigue; 20-30% missed defects.", "8K GigE line-scan ingestion, sub-25ms ASTM D5430 grading, automated cut relay."],
                    ["Machine Telemetry", "Handwritten operator logs; disconnected machine dial gauges.", "Sub-second PLC telemetry ingestion (Fong’s, Thies) into TimescaleDB hypertables."],
                    ["Multi-Worker Sync", "Single-node in-memory WebSockets (fails when scaled across containers).", "Distributed WebSocket connection manager with Redis Pub/Sub cluster backplane."],
                    ["Database Concurrency", "Naive read-then-write (causes race conditions and corrupted roll scores).", "Pessimistic row locking (`with_for_update`) ensuring atomic penalty accumulation."],
                    ["Query Safety", "Raw LLM Text-to-SQL (vulnerable to prompt injection & drops).", "4-stage AST parsing with sqlglot, whitelist enforcement, read-only sandboxing."]
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "var(--bg)" : "var(--surface)" }}>
                      <td style={{ padding: "16px", fontSize: "12px", fontWeight: 600, color: "var(--accent)" }}>{row[0]}</td>
                      <td style={{ padding: "16px", fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{row[1]}</td>
                      <td style={{ padding: "16px", fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Measurable Outcomes ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="MEASURABLE OUTCOMES" /></motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "1rem" }}>
              {[
                { stat: "60%", label: "Reduction in lab-to-bulk lead time by computing exact dyestuff recipes mathematically." },
                { stat: "25–35%", label: "Reduction in fabric rejection chargebacks through automated ASTM D5430 grading." },
                { stat: "$$$", label: "Significant savings in water, steam, & dyestuff by predicting exact recipe affinity." },
                { stat: "< 1s", label: "Machine telemetry updates and instant alerts for factory floor managers." }
              ].map((result, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ 
                  background: "var(--bg)", border: "1px solid var(--border)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "12px" 
                }}>
                  <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--yellow)" }}>{result.stat}</span>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{result.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── System Design Deep Dive (Interview Talking Points) ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="TECHNICAL DEEP-DIVE Q&A" /></motion.div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2rem" }}>
              {[
                {
                  q: "How did you design for concurrency and real-time performance?",
                  a: "In AutoTaskX, 8K line-scan inspection cameras stream fabric defect events at speeds up to 60 meters per minute. To solve concurrent writes (multiple defect events arriving simultaneously), I utilized PostgreSQL pessimistic row locking (`with_for_update`) within SQLAlchemy AsyncSession to ensure atomic score accumulation. For real-time HUD synchronization across multiple Docker container instances, I implemented a distributed WebSocket manager with a Redis Pub/Sub backplane. Any worker processing a defect publishes to Redis, instantly updating all connected operator HUDs with sub-25ms latency."
                },
                {
                  q: "How did you ensure security when implementing Text-to-SQL for factory managers?",
                  a: "Executing LLM-generated SQL on production machinery databases is dangerous. I built a 4-stage validation pipeline: First, we provide strict schema context to the LLM. Second, before execution, the generated SQL passes through `sqlglot` to parse its Abstract Syntax Tree (AST). Third, we enforce a strict whitelist of allowed tables and explicitly verify that the root AST expression is a read-only `SELECT`. Any query attempting `DROP`, `ALTER`, or accessing system tables is instantly rejected. Finally, the query is executed with scoped read-only credentials, ensuring complete immunity to SQL injection."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--accent)" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px", letterSpacing: "0.02em" }}>{item.q}</h3>
                  <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.8 }}>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
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
