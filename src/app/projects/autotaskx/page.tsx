"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";
import PrivateRepoModal from "@/components/PrivateRepoModal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [backendHovered, setBackendHovered] = useState(false);

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
                >LIVE PLATFORM</a>
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
                INDUSTRIAL TEXTILE OS & ENTERPRISE ERP INTEROPERABILITY GATEWAY
              </motion.p>
              <motion.p variants={fadeUp} custom={3} style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: "780px", marginBottom: "22px" }}>
                Architected an end-to-end industrial software ecosystem combining <strong>Textile OS</strong>—a high-density, multi-window web operating environment engineered in <strong>Next.js 16</strong> and <strong>React 19</strong>—with a high-throughput enterprise integration gateway built in <strong>FastAPI (Python 3.12, AsyncIO)</strong>. Backed by <strong>PostgreSQL 16</strong>, <strong>TimescaleDB hypertables</strong>, and <strong>Redis 7.2 Pub/Sub</strong>, the platform unifies mathematical dye formulation (Kubelka-Munk NNLS), 8K optical inspection (ASTM D5430), sub-second jet vessel telemetry, and real-time bi-directional synchronization across <strong>SAP S/4HANA</strong>, <strong>Datatex NOW MES</strong>, and <strong>Infor ION</strong>.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "24px" }}>
                <Badge color="var(--accent)">PRODUCTION DEPLOYED</Badge>
                <Badge color="var(--yellow)">TEXTILE OS (NEXT.JS 16 / REACT 19)</Badge>
                <Badge color="var(--text-secondary)">FASTAPI (PYTHON 3.12, ASYNCIO)</Badge>
                <Badge color="var(--accent)">SAP &amp; DATATEX ERP GATEWAY</Badge>
                <Badge color="var(--yellow)">TIMESCALEDB HYPERTABLES</Badge>
                <Badge color="var(--text-secondary)">CIEDE2000 &amp; ASTM D5430</Badge>
                <Badge color="var(--accent)">BTMA / BGMEA / DIFE ENGINE</Badge>
              </motion.div>
              <motion.div variants={fadeUp} custom={5} style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
                <a href="https://autotaskx.online/" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", background: "var(--accent-dim)", border: "1px solid var(--accent)", color: "var(--accent)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                >↗ LIVE PLATFORM</a>
                <a href="https://github.com/shakib5560/AutoTaskX" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >⌥ FRONTEND REPO</a>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  onMouseEnter={() => setBackendHovered(true)}
                  onMouseLeave={() => setBackendHovered(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    border: `1px solid ${backendHovered ? "var(--yellow)" : "var(--border)"}`,
                    background: backendHovered ? "var(--yellow-dim)" : "transparent",
                    color: backendHovered ? "var(--yellow)" : "var(--text-muted)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ color: backendHovered ? "var(--yellow)" : "var(--text-muted)" }}>
                    {backendHovered ? "🔒" : "⌥"}
                  </span>
                  <span>{backendHovered ? "Private repo" : "BACKEND REPO"}</span>
                  {backendHovered && (
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.1em",
                        padding: "1px 6px",
                        background: "var(--yellow)",
                        color: "#121214",
                        fontWeight: 700,
                        borderRadius: "2px",
                        marginLeft: "4px",
                      }}
                    >
                      REQUEST ACCESS
                    </span>
                  )}
                </button>
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
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", whiteSpace: "nowrap", width: "max-content", animation: "ticker 28s linear infinite" }}>
            {Array.from({ length: 6 }).flatMap((_, idx) =>
              [
                "NEXT.JS 16",
                "FASTAPI (PYTHON 3.12)",
                "REACT 19",
                "POSTGRESQL 16",
                "TIMESCALEDB HYPERTABLES",
                "REDIS 7.2 PUB/SUB",
                "SAP S/4HANA (RFC/BAPI)",
                "DATATEX NOW MES (EDI XML)",
                "INFOR ION BUS",
                "MQTT V5 & OPC UA",
                "KUBELKA-MUNK NNLS",
                "ASTM D5430 HUD",
                "BTMA / BGMEA / DIFE ENGINE",
                "WEBSOCKETS",
                "DOCKER",
                "✦"
              ].map((t, i) => (
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
              Textile mills lose hundreds of thousands of dollars each month due to failed dye trials, shopfloor data fragmentation, and missed defects.
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "1rem", maxWidth: "850px" }}>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                I designed and developed AutoTaskX to solve this by directly bridging the gap between advanced academic research and mission-critical vertical textile manufacturing operations. The platform replaces isolated terminals and physical clipboards with an industrial multi-window operating system, synchronized in real time with enterprise ERP backbones and high-speed dyeing vessels.
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

        {/* ─── Architectural Topology & Serving Ecosystem ───────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="SYSTEMS ARCHITECTURE & SERVING TOPOLOGY" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              High-Throughput Distributed Industrial Architecture
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "820px", marginBottom: "2.5rem" }}>
              AutoTaskX operates as a synchronized industrial pipeline. The browser-based <strong>Textile OS</strong> client interfaces over persistent WebSockets with an asynchronous <strong>FastAPI</strong> microservices tier, which orchestrates time-series telemetry persistence, computational colorimetry solvers, and bidirectional transactional gateways into corporate ERP ledgers.
            </motion.p>

            {/* Architecture Stack Blueprint */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  layer: "TIER 01 // OPERATOR CONTROL ROOM & SHOPFLOOR CLIENT",
                  tech: "Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · HTML5 WebSockets",
                  details: "Textile OS Multi-Window Desktop Engine · Spectro Formulation Studio · 8K Fabric HUD · Vessel Telemetry Monitor · Shift Logbook · Unix Virtual File System (VFS)",
                  accent: "var(--accent)"
                },
                {
                  layer: "TIER 02 // HIGH-FREQUENCY SERVING & REAL-TIME BROKER",
                  tech: "FastAPI (Python 3.12, AsyncIO) · Uvicorn/Gunicorn · Redis 7.2 Pub/Sub Cluster · Pydantic v2",
                  details: "Sub-25ms WebSocket Connection Manager · Asynchronous Task Queues · Token Bucket Rate Limiters · AST-Constrained SQL Parser · Mutual TLS 1.3 / AES-256-GCM",
                  accent: "var(--yellow)"
                },
                {
                  layer: "TIER 03 // MILL STATE VAULT & TELEMETRY HYPERTABLES",
                  tech: "PostgreSQL 16 (Relational Mill Vault) · TimescaleDB (Time-Series Hypertables) · SQLAlchemy AsyncSession",
                  details: "ACID State Persistence · Row-Level Pessimistic Locking (`with_for_update`) · Automated Chunk Compression for 124ms PLC Sensor Streams & ASTM Defect Passports",
                  accent: "var(--text-primary)"
                },
                {
                  layer: "TIER 04 // ENTERPRISE INTEROPERABILITY & STATUTORY ENGINE",
                  tech: "SAP S/4HANA (RFC / BAPI / OData v4) · Datatex NOW MES (EDI XML) · Infor ION · MQTT v5 · OPC UA",
                  details: "Shopfloor-to-Ledger Bi-Directional Synchronizer (SAP MM, SAP QM, SAP PP) · Bangladesh Multi-Association Verification Engine (BTMA, BGMEA, BKMEA, DIFE)",
                  accent: "var(--accent)"
                },
                {
                  layer: "TIER 05 // PHYSICAL DYEHOUSE SENSORS & MACHINE INTERFACES",
                  tech: "Fong's & Thies Jet Vessels · Stenter Inspection Perches · Spectrophotometers (400–700nm) · Auto Dispensers",
                  details: "Industrial PLC Modbus/TCP relays · Automated Take-up Doffer Cut Solenoids · Chemical Valve Actuators · 8K GigE Optical Line-Scan Cameras",
                  accent: "var(--text-muted)"
                }
              ].map((tier, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx + 2} style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: `4px solid ${tier.accent}`,
                  padding: "1.25rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.16em", color: tier.accent, fontWeight: 700 }}>{tier.layer}</span>
                    <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{tier.tech}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{tier.details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── System 1: Textile OS ─────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="SYSTEM 1 // INDUSTRIAL WEB-BASED TEXTILE OS" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.3rem, 3.2vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Textile OS: High-Density Control Room Desktop Environment
            </motion.h2>

            {/* The Challenge */}
            <motion.div variants={fadeUp} custom={2} style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "1.75rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ color: "var(--yellow)", fontSize: "14px" }}>⚠</span>
                <span style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--yellow)", fontWeight: 700, textTransform: "uppercase" }}>THE OPERATIONAL CHALLENGE</span>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Textile dyehouse control rooms suffer from extreme software and hardware fragmentation. Operators juggle physical clipboards, detached machine dial gauges, legacy spectrophotometer desktop software, and isolated inspection perches. This manual friction causes shift-handover delays, uncalibrated batch dosing, and delayed defect mitigation.
              </p>
            </motion.div>

            {/* Architecture & Engineering Details */}
            <motion.div variants={fadeUp} custom={3} style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--accent)", marginBottom: "14px", letterSpacing: "0.05em" }}>
                Engineering Solution &amp; Multi-Window Architecture
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "850px" }}>
                Architected <strong>Textile OS</strong>—a purpose-built, high-density web operating system engineered with Next.js 16 and React 19 specifically for mill control room touchscreen consoles and desktop workstations.
              </p>
            </motion.div>

            {/* Grid of OS Pillars */}
            <div className="grid-cols-1-2" style={{ gap: "1.5rem" }}>
              {[
                {
                  title: "Multi-Window Operating Environment",
                  badge: "NEXT.JS 16 & REACT 19",
                  color: "var(--accent)",
                  desc: "Engineered a full desktop window management layer supporting concurrent industrial applications. Features dynamic Z-index stacking coordinates, smooth pointer-captured dragging, edge-boundary resizing with aspect-ratio locking, window minimization to the system taskbar, and persistent desktop layout state across operator browser sessions."
                },
                {
                  title: "Hierarchical Virtual File System (VFS)",
                  badge: "UNIX PATH ARCHITECTURE",
                  color: "var(--yellow)",
                  desc: "Structured on a Unix-standard path convention (`/home/operator/Desktop`, `/Documents`, `/Recipes`). Supports asynchronous file creation, batch recipe storage, ASTM quality passports, and operator-level permissions, interfacing directly with mill persistence backends without requiring external operating system privileges."
                },
                {
                  title: "Role-Guarded Node Security & Polling Health",
                  badge: "MILL-ISOLATED GUARDS",
                  color: "var(--accent)",
                  desc: "Enforces mill-isolated session guards (`mill_id`), persistent session restoration, and live hardware node status telemetry. Displays active node connectivity, buffer saturation rates, and sub-20ms PLC polling health directly in the system status tray."
                },
                {
                  title: "Real-Time Hardware Stream Manager",
                  badge: "CIPHER VALIDATION",
                  color: "var(--yellow)",
                  desc: "Centralized configuration console for hardware link credentials, cryptographic cipher negotiation, and operator node privileges. Connects direct sensor streams to front-end visualization canvases with requestAnimationFrame rendering loops to avoid UI jank."
                }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx + 4} style={{
                  background: "var(--bg)", border: "1px solid var(--border)", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "12px"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>{item.title}</span>
                    <Badge color={item.color}>{item.badge}</Badge>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Industrial Application Suite */}
            <motion.div variants={fadeUp} custom={8} style={{ marginTop: "2.5rem" }}>
              <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>INDUSTRIAL SUITE</span>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginTop: "4px" }}>
                  Unified Mission-Critical Control Applications
                </h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                {[
                  {
                    name: "Spectro Formulation Studio",
                    spec: "31-Point Reflectance (400–700nm)",
                    detail: "Ingests raw spectrophotometer spectral curves, computes perceptual CIEDE2000 tolerances (ΔE00), and dispatches automated dosing formulations to chemical dispensers."
                  },
                  {
                    name: "8K Optical Fabric Inspection HUD",
                    spec: "ASTM D5430 Defect Stream",
                    detail: "Real-time fabric inspection HUD capturing warp/weft defects at 60 m/min, linking penalty scores directly to sub-25ms automated take-up doffer cut relays."
                  },
                  {
                    name: "Vessel PLC Telemetry Monitor",
                    spec: "Fong's & Thies Jet Vessels",
                    detail: "Real-time sensor stream curves tracking temperature, pressure, pH, and liquor ratios with sub-second alerting and historical hypertable trend comparison."
                  },
                  {
                    name: "Daily Shift Logbook & Audit Trail",
                    spec: "Direct VFS Persistence",
                    detail: "Structured digital logbook capturing shift handovers, operator overrides, chemical batch numbers, and audit events saved directly to `/home/operator/Documents/ShiftLogs`."
                  },
                  {
                    name: "System Config & Hardware Stream Manager",
                    spec: "Cryptographic Node Gateway",
                    detail: "Operator node credentials management, Mutual TLS cipher validation, and live PLC/SCADA connection health monitoring."
                  }
                ].map((app, i) => (
                  <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "1.25rem" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--accent)", marginBottom: "4px" }}>{app.name}</div>
                    <div style={{ fontSize: "10px", color: "var(--yellow)", letterSpacing: "0.1em", marginBottom: "8px" }}>{app.spec}</div>
                    <p style={{ fontSize: "11.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{app.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── System 2: Enterprise Interoperability & Mill ERP Gateway ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}><SectionLabel label="SYSTEM 2 // ENTERPRISE INTEROPERABILITY & MILL ERP GATEWAY" /></motion.div>
            <motion.h2 variants={fadeUp} custom={1} style={{ fontSize: "clamp(1.3rem, 3.2vw, 2rem)", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              High-Performance FastAPI Mill ERP Gateway &amp; Serving Architecture
            </motion.h2>

            {/* The Challenge */}
            <motion.div variants={fadeUp} custom={2} style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "1.75rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ color: "var(--yellow)", fontSize: "14px" }}>⚠</span>
                <span style={{ fontSize: "12px", letterSpacing: "0.15em", color: "var(--yellow)", fontWeight: 700, textTransform: "uppercase" }}>THE INTEGRATION CHALLENGE</span>
              </div>
              <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Physical dyehouse hardware (automated chemical dispensers, stenter perches, and high-pressure jet vessels) traditionally operates in complete isolation from enterprise management systems (SAP, Datatex, Infor). Plant accountants and supply chain managers rely on manual, end-of-day clipboard data entry, resulting in massive stock discrepancies, unaccounted chemical waste, and delayed shipment approvals.
              </p>
            </motion.div>

            {/* Asynchronous FastAPI Architecture */}
            <motion.div variants={fadeUp} custom={3} style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--accent)", marginBottom: "14px", letterSpacing: "0.05em" }}>
                Asynchronous FastAPI Serving Architecture
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "850px" }}>
                Designed and implemented a high-performance, asynchronous integration gateway powered by <strong>FastAPI (Python 3.12, AsyncIO)</strong> that serves as the bi-directional intelligence bridge between physical shopfloor machinery and corporate ERP ledgers.
              </p>
            </motion.div>

            {/* Bi-Directional Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "2.5rem" }}>
              {[
                {
                  title: "Chemical Dispensing & Stock Ledger",
                  protocol: "SAP MM / Datatex Dyes Integration",
                  accent: "var(--accent)",
                  description: "Employs asynchronous FastAPI background workers to automatically debit chemical stock (reactive dyestuffs, sodium hydrosulfite, soda ash) the millisecond automated dispensers release raw batches, eliminating inventory drift and eradicating manual transcription errors."
                },
                {
                  title: "ASTM D5430 Fabric Roll Passports",
                  protocol: "SAP QM / Inspection Lots",
                  accent: "var(--yellow)",
                  description: "Generates and streams cryptographic roll passports with Grade A/B/Reject status directly into enterprise Quality Management inspection lots upon perch completion. Eliminates quarantined warehouse bottlenecks by enabling real-time commercial dispatch."
                },
                {
                  title: "Vessel PLC Run Cycles & Thermal Profiling",
                  protocol: "SAP PP / Mill MES Scheduling",
                  accent: "var(--text-primary)",
                  description: "Streams high-frequency, 124ms isothermal cycle curves, cooling ramp rates, and batch execution receipts into central enterprise production planning modules, ensuring exact utility accounting and line balance synchronization."
                }
              ].map((channel, idx) => (
                <motion.div key={idx} variants={fadeUp} custom={idx + 4} style={{
                  background: "var(--surface)", border: "1px solid var(--border)", borderLeft: `3px solid ${channel.accent}`, padding: "1.5rem"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>{channel.title}</span>
                    <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: channel.accent, fontWeight: 600 }}>{channel.protocol}</span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{channel.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Multi-Protocol Adapters & Regulatory Compliance */}
            <div className="grid-cols-1-2" style={{ gap: "2rem" }}>
              {/* Adapters */}
              <motion.div variants={fadeUp} custom={7} style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "1.75rem" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent)", marginBottom: "16px", letterSpacing: "0.08em" }}>
                  MULTI-PROTOCOL GATEWAY HUB
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { name: "Datatex NOW MES", desc: "Native textile manufacturing integration via EDI XML and HTTPS REST endpoints." },
                    { name: "SAP S/4HANA Enterprise", desc: "Bi-directional bridge supporting SAP RFC, BAPIs, and OData v4 web services." },
                    { name: "Infor M3 Fashion & Apparel", desc: "Real-time lot traceability bus built atop Infor ION messaging infrastructure." },
                    { name: "Industrial IoT Brokers", desc: "Lightweight telemetry ingestion using MQTT v5 and OPC UA protocols for plant SCADA networks." }
                  ].map((p, i) => (
                    <div key={i} style={{ borderBottom: i === 3 ? "none" : "1px solid var(--border)", paddingBottom: i === 3 ? 0 : "10px" }}>
                      <span style={{ fontSize: "11.5px", fontWeight: 600, color: "var(--yellow)" }}>{p.name}: </span>
                      <span style={{ fontSize: "11.5px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Statutory Compliance Engine */}
              <motion.div variants={fadeUp} custom={8} style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "1.75rem" }}>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--yellow)", marginBottom: "16px", letterSpacing: "0.08em" }}>
                  STATUTORY INDUSTRIAL COMPLIANCE ENGINE
                </p>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "14px" }}>
                  Implemented an intelligent compliance verification layer specifically tailored for Bangladesh’s export-oriented textile ecosystem:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { org: "BTMA (Bangladesh Textile Mills Association)", rule: "Verifies spinning, weaving, and wet-processing factory membership credentials." },
                    { org: "BGMEA & BKMEA Associations", rule: "Cross-checks woven and knitwear apparel licenses, recognizing that primary dyeing mills belong to BTMA without redundant BGMEA membership." },
                    { org: "DIFE Inspection Licensing", rule: "Validates Department of Inspection for Factories and Establishments statutory safety compliance." },
                    { org: "Automated Desk Audit Queues", rule: "Provides graceful fallback queues for human officer review when external government registries require verification." }
                  ].map((c, j) => (
                    <div key={j} style={{ borderBottom: j === 3 ? "none" : "1px solid var(--border)", paddingBottom: j === 3 ? 0 : "8px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--accent)" }}>{c.org}: </span>
                      <span style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{c.rule}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── Core Engineering Challenges ───────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
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
                },
                {
                  title: "High-Frequency Multi-Window Control Room Rendering",
                  challenge: "Concurrently displaying 8K defect inspection canvases, live Fong's PLC thermal curves, and spectrophotometric formulations across multiple draggable windows caused UI micro-stutters and high CPU overhead on shopfloor workstations.",
                  solution: "Engineered a decoupled rendering architecture in Next.js 16 and React 19. Telemetry data is buffered via WebSockets and flushed to visual canvas components using `requestAnimationFrame`, preventing DOM re-render thrashing while preserving 60fps window dragging and stacking."
                },
                {
                  title: "Distributed Bi-Directional ERP Transactional Consistency",
                  challenge: "Transient network partitions between mill-floor dispensing valves and corporate SAP/Datatex servers risked double-debiting raw dye inventory or dropping batch consumption receipts.",
                  solution: "Architected a Transactional Outbox pattern in PostgreSQL 16 managed by asynchronous FastAPI background workers. Every dispensing event writes an immutable dispatch record; background workers poll outbox tables using idempotent transaction keys and exponential backoff retry policies."
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
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "750px" }}>
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
                    ["Control Room UX", "4+ disconnected hardware terminals, legacy desktop software, paper clipboards.", "Next.js 16 / React 19 Textile OS multi-window desktop with Unix VFS and status telemetry."],
                    ["ERP Inventory Sync", "End-of-day clipboard entry into SAP; unaccounted chemical drift & stockouts.", "FastAPI asynchronous background workers auto-debiting SAP MM & Datatex Dyes at batch release."],
                    ["Inspection Lots (QM)", "Physical paper grading slips stapled to finished fabric rolls.", "Cryptographic ASTM roll passports auto-streamed directly into SAP QM inspection lots."],
                    ["Multi-Worker Sync", "Single-node in-memory WebSockets (fails when scaled across containers).", "Distributed WebSocket connection manager with Redis Pub/Sub cluster backplane."],
                    ["Database Concurrency", "Naive read-then-write (causes race conditions and corrupted roll scores).", "Pessimistic row locking (`with_for_update`) ensuring atomic penalty accumulation."],
                    ["Query Safety", "Raw LLM Text-to-SQL (vulnerable to prompt injection & drops).", "4-stage AST parsing with sqlglot, whitelist enforcement, read-only sandboxing."],
                    ["Statutory Compliance", "Manual paper binder audits across trade associations taking days.", "Automated verification engine cross-checking BTMA, BGMEA, BKMEA, and DIFE registries."]
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
                { stat: "0%", label: "Manual clipboard transcription eliminated between shopfloor dispensers and SAP MM / Datatex ledgers." },
                { stat: "< 25ms", label: "FastAPI serving architecture delivers sub-25ms round-trip latency across WebSockets and ERP queues." },
                { stat: "4-in-1", label: "Consolidated disconnected terminals and clipboards into a unified Next.js 16 / React 19 Textile OS desktop." },
                { stat: "60%", label: "Reduction in lab-to-bulk lead time by computing exact dyestuff recipes mathematically." },
                { stat: "25–35%", label: "Reduction in fabric rejection chargebacks through automated ASTM D5430 grading." },
                { stat: "Seconds", label: "Mill compliance verification time slashed from days to seconds across BTMA, BGMEA, BKMEA, and DIFE." },
                { stat: "$$$", label: "Significant operational savings in water, steam, & dyestuff by predicting exact recipe affinity." },
                { stat: "< 1s", label: "Machine telemetry updates and instant automated alerts for factory floor managers." }
              ].map((result, i) => (
                <motion.div key={i} variants={fadeUp} custom={i + 1} style={{ 
                  background: "var(--bg)", border: "1px solid var(--border)", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "12px" 
                }}>
                  <span style={{ fontSize: "2.3rem", fontWeight: 700, color: "var(--yellow)" }}>{result.stat}</span>
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
                },
                {
                  q: "How does the FastAPI ERP Gateway guarantee zero inventory drift between physical dispensing valves and enterprise ledgers (SAP/Datatex)?",
                  a: "Physical dyehouse environments experience transient network partitions between shopfloor dispensing valves and corporate ERP servers. To prevent double-debiting or dropped consumption records, I architected a Transactional Outbox pattern in PostgreSQL 16. When an automated dispenser actuates, the consumption event is committed atomically alongside the batch state in PostgreSQL. Asynchronous FastAPI background workers read this outbox queue and dispatch payloads to SAP MM (via RFC/BAPI) or Datatex NOW MES (via EDI XML) using idempotent transaction keys (`sha256(batch_id + valve_id + timestamp)`). If an ERP endpoint is unreachable, the gateway retries with exponential jitter while preserving ordering in a Dead Letter Queue (DLQ), ensuring complete financial and stock ledger reconciliation without human clipboard intervention."
                },
                {
                  q: "How is Textile OS architected in Next.js 16 and React 19 to handle multi-window windowing and high-frequency industrial telemetry without UI degradation?",
                  a: "In industrial control rooms, operators require simultaneous visibility into spectrophotometer formulation curves, 8K fabric inspection perches, and vessel thermal streams. Building a multi-window manager in React 19 required solving DOM thrashing and telemetry update bottlenecks. I separated the window layout state (Z-indices, dragging boundaries, dimensions) from high-frequency telemetry streams. Sensor curves and defect feeds bypass React component tree reconciliation: incoming WebSocket payloads are buffered in memory and rendered directly into Canvas elements using `requestAnimationFrame`. Desktop state transitions (minimizing, maximizing, restoring) utilize React 19 concurrent transitions and persist to a Unix-standard Virtual File System (VFS), maintaining smooth 60fps interaction even during burst telemetry."
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

      {/* Private Repository Request Modal */}
      <PrivateRepoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName="AutoTaskX (Backend API & Telemetry Engine)"
        clientOrOrg="Industrial IoT Platform"
      />
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
