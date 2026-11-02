"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";
import PrivateRepoModal from "@/components/PrivateRepoModal";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// ─── Helper Components ────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
      <span style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 500 }}>{"// "}</span>
      <span style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

function Badge({ children, color = "var(--accent)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontSize: "10px",
        letterSpacing: "0.12em",
        padding: "3px 10px",
        border: `1px solid ${color}`,
        color,
        background: "transparent",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

// ─── Off-White Page Component ─────────────────────────────────────────────────

export default function OffWhitePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden" }}>
      {/* Background grid */}
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ─── Header & Nav ───────────────────────────────────────────────── */}
        <header style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="container-max" style={{ paddingBottom: "2.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <TransitionLink
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                &lt; BACK TO DIRECTORY
              </TransitionLink>

              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.off---white.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  OFFICIAL STOREFRONT ↗
                </a>
                <ThemeToggle />
              </div>
            </div>

            {/* Hero Section */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeUp} custom={0} style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "8px" }}>
                SYSTEM: LOCALHOST // PATH: ~/projects/off-white
              </motion.p>

              <motion.div variants={fadeUp} custom={1} style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
                  <span style={{ color: "var(--text-primary)" }}>OFF---</span>
                  <span style={{ color: "var(--accent)", textShadow: "0 0 45px rgba(253,203,110,0.25)" }}>WHITE™</span>
                </h1>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    padding: "3px 10px",
                    border: "1px solid var(--yellow)",
                    color: "var(--yellow)",
                    background: "var(--yellow-dim)",
                    fontWeight: 700,
                  }}
                >
                  COLLABORATIVE CONTRIBUTION
                </span>
              </motion.div>

              <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", letterSpacing: "0.12em", color: "var(--text-secondary)", marginBottom: "18px" }}>
                LUXURY STREETWEAR &amp; HIGH-FASHION E-COMMERCE STOREFRONT
              </motion.p>

              <motion.p variants={fadeUp} custom={3} style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "680px", marginBottom: "22px" }}>
                Collaborative frontend development and UI/UX implementation for the iconic high-fashion storefront{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>off---white.com</span>. Focused on landing page content hierarchy, reusable drop modules, component state management, and mobile accessibility while strictly preserving the brand&apos;s signature brutalist design language.
              </motion.p>

              {/* Role Transparency Notice Box */}
              <motion.div
                variants={fadeUp}
                custom={4}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--yellow)",
                  padding: "16px 20px",
                  maxWidth: "760px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ color: "var(--yellow)", fontSize: "14px" }}>⚠</span>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--yellow)", fontWeight: 700 }}>
                    ROLE TRANSPARENCY NOTICE
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "var(--text-primary)" }}>Role: Contributor — Frontend Development &amp; UI/UX Implementation.</strong>{" "}
                  This was a collaborative engineering engagement conducted through DevNest contract workflows. I was a contributing frontend developer focused on improving the existing e-commerce landing page experience, reusable UI components, and component-level data flows—not the founder, platform owner, or sole developer.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} custom={5} style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                <Badge color="var(--accent)">REACT.JS &amp; NEXT.JS</Badge>
                <Badge color="var(--yellow)">CONTRIBUTOR ROLE</Badge>
                <Badge color="var(--text-secondary)">DEVNEST CONTRACT</Badge>
                <Badge color="var(--text-muted)">HIGH-FASHION E-COMMERCE</Badge>
              </motion.div>

              <motion.div variants={fadeUp} custom={6} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://www.off---white.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "var(--bg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent-dim)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                >
                  ↗ VISIT LIVE STOREFRONT
                </a>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  onMouseEnter={() => setGithubHovered(true)}
                  onMouseLeave={() => setGithubHovered(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "11px 22px",
                    border: `1px solid ${githubHovered ? "var(--yellow)" : "var(--border)"}`,
                    background: githubHovered ? "var(--yellow-dim)" : "transparent",
                    color: githubHovered ? "var(--yellow)" : "var(--text-muted)",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ color: githubHovered ? "var(--yellow)" : "var(--text-muted)" }}>
                    {githubHovered ? "🔒" : "⌥"}
                  </span>
                  <span>{githubHovered ? "Private repo" : "GITHUB PROFILE"}</span>
                  {githubHovered && (
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
            </motion.div>
          </div>
        </header>

        {/* ─── Ticker Bar ─────────────────────────────────────────────────── */}
        <div className="ticker-container" style={{ overflow: "hidden", width: "100%", maxWidth: "100%", borderBottom: "1px solid var(--border)", padding: "12px 0", background: "var(--surface)" }}>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", whiteSpace: "nowrap", width: "max-content", animation: "ticker 24s linear infinite" }}>
            {Array.from({ length: 6 }).flatMap((_, idx) =>
              [
                "REACT",
                "NEXT.JS",
                "TYPESCRIPT",
                "TAILWIND CSS",
                "HIGH-FASHION UI",
                "BRUTALIST DESIGN",
                "EDITORIAL MODULES",
                "CONTRIBUTOR",
                "✦",
              ].map((t, i) => (
                <span
                  key={`${idx}-${i}`}
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    color: t === "✦" ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ─── 1. Project Overview ────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="01 // PROJECT OVERVIEW" />
            </motion.div>

            <div className="grid-cols-1-2" style={{ gap: "3rem", alignItems: "start" }}>
              <div>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "20px",
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Enhancing the storefront experience of an international luxury brand.
                </motion.h2>

                <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                  Founded in 2012 by visionary designer Virgil Abloh, <strong style={{ color: "var(--text-primary)" }}>Off-White™</strong> is a globally celebrated luxury fashion house defining modern streetwear culture. Its digital flagship (<a href="https://www.off---white.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>off---white.com</a>) serves millions of global consumers, showcasing high-concept collections, footwear collaborations, runway lookbooks, and time-sensitive product drops.
                </motion.p>

                <motion.p variants={fadeUp} custom={3} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.85 }}>
                  Under a contract engagement via <strong style={{ color: "var(--text-primary)" }}>DevNest</strong>, I joined as a frontend contributor. The objective was clear: rather than rewriting or rebuilding an established enterprise platform, the engineering focus was to elevate the existing customer-facing landing page experience, refine visual content hierarchy, build reusable editorial components, and optimize frontend state management and responsiveness.
                </motion.p>
              </div>

              {/* Specifications Card */}
              <motion.div
                variants={fadeUp}
                custom={3}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>ENTITY &amp; PLATFORM</p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600, margin: 0 }}>Off-White™ Global Flagship</p>
                </div>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>PRIMARY DOMAIN</p>
                  <p style={{ fontSize: "13px", color: "var(--accent)", margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>https://www.off---white.com</p>
                </div>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>ENGAGEMENT TYPE</p>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>DevNest Engineering Contract (Collaborative)</p>
                </div>
                <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>ENGINEERING FOCUS</p>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>Landing Page Experience, UI Components, Mobile UX</p>
                </div>
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>TECHNOLOGY STACK</p>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>React.js · Next.js · TypeScript · Tailwind CSS</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── 2. My Role & Responsibilities ──────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="02 // MY ROLE &amp; RESPONSIBILITIES" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Role: <span style={{ color: "var(--accent)" }}>Contributor — Frontend Development &amp; UI/UX Implementation</span>
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "2.5rem" }}>
              In international software teams, clear role demarcation is paramount. My contributions were focused squarely on frontend delivery, user interface ergonomics, and component implementation within an established, high-traffic commercial codebase.
            </motion.p>

            <div className="grid-cols-1-3" style={{ gap: "1.5rem" }}>
              {[
                {
                  code: "RESP_01",
                  title: "Frontend UI Implementation",
                  desc: "Built and refined user interface components using React, Next.js, and TypeScript, adhering strictly to established design tokens and layout conventions.",
                },
                {
                  code: "RESP_02",
                  title: "Landing Page Usability",
                  desc: "Audited existing landing page sections to eliminate visual clutter, optimize content readability, and clarify discovery paths toward featured apparel and drop collections.",
                },
                {
                  code: "RESP_03",
                  title: "Component Modularity",
                  desc: "Constructed modular, content-driven UI building blocks designed to be easily reconfigured by content and marketing teams for new product drops.",
                },
                {
                  code: "RESP_04",
                  title: "State & Data-Flow",
                  desc: "Implemented clean component-level state management to handle interactive drawer menus, category filters, and image carousel transitions reliably.",
                },
                {
                  code: "RESP_05",
                  title: "Responsive Optimization",
                  desc: "Fine-tuned layout behavior across mobile, tablet, and widescreen breakpoints to guarantee that high-fashion editorial imagery scales seamlessly.",
                },
                {
                  code: "RESP_06",
                  title: "PR Code Reviews & Standards",
                  desc: "Participated in disciplined peer review cycles under DevNest sprint workflows, maintaining high standards for code readability and maintainability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    padding: "22px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontSize: "11px", color: "var(--yellow)", fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
                      [{item.code}]
                    </span>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" }} />
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── 3. The Main Engineering Challenge ─────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="03 // THE ENGINEERING CHALLENGE" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              Elevating an established luxury storefront <br />
              <span style={{ color: "var(--accent)" }}>without disrupting its iconic brand equity.</span>
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: "780px", marginBottom: "2.5rem" }}>
              The primary challenge of this project was distinct from greenfield SaaS development: rather than building from scratch, the team had to improve an already established, globally recognized e-commerce destination with thousands of active daily shoppers and rigid visual branding.
            </motion.p>

            <div className="grid-cols-1-2" style={{ gap: "2rem" }}>
              <motion.div
                variants={fadeUp}
                custom={3}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid #ff5f56",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ color: "#ff5f56", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                    [CHALLENGE_01]
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>Brand Preservation vs. Usability</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                  Off-White&apos;s identity is rooted in Virgil Abloh&apos;s Swiss brutalist typography, industrial Helvetica styling, quotation conventions (&quot;...&quot;), and stark monochrome contrasts. Any change that felt generic or deviated into standard cookie-cutter e-commerce would compromise the brand&apos;s high-fashion prestige. Enhancements had to feel natural, intentional, and brand-native.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--yellow)",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--yellow)", fontSize: "12px", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                    [CHALLENGE_02]
                  </span>
                  <span style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 600 }}>Dynamic Drop Culture &amp; Content Velocity</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.75, margin: 0 }}>
                  High-fashion retail relies heavily on capsule drops and limited seasonal releases. Static or tightly coupled page components required developer intervention for every new banner or editorial lookbook. The landing page needed modular, decoupled UI components that could support fluid layout shifts without visual regressions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── 4. My Contributions ────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="04 // MY CONTRIBUTIONS" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Targeted frontend engineering &amp; landing page refinement.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "2.5rem" }}>
              My engineering efforts centered directly on four core areas of the customer-facing landing page experience:
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  number: "01",
                  title: "Landing Page Visual Hierarchy & Content Restructuring",
                  tag: "CONTENT_STRUCTURE",
                  details: [
                    "Re-organized the landing page layout to balance large-format editorial photography with clear category entry pathways (Men, Women, Eyewear, Footwear, Collaborations).",
                    "Eliminated visual crowding by enforcing systematic vertical rhythm and whitespace around marquee drop teasers.",
                    "Strengthened the call-to-action (CTA) hierarchy without using intrusive buttons that clashed with the minimalist aesthetic.",
                  ],
                },
                {
                  number: "02",
                  title: "Reusable Drop Modules & Content-Driven Components",
                  tag: "COMPONENT_ARCHITECTURE",
                  details: [
                    "Engineered flexible React and Next.js components for seasonal drops, lookbook grids, and spotlight carousels.",
                    "Defined strict TypeScript interfaces for props contracts so merchandising teams could swap image assets, typography strings, and collection tags safely.",
                    "Encapsulated styling logic to ensure consistent behavior across varied photographic dimensions and aspect ratios.",
                  ],
                },
                {
                  number: "03",
                  title: "Component-Level State & Interactive Data Flow",
                  tag: "STATE_MANAGEMENT",
                  details: [
                    "Streamlined client-side state for interactive modules such as mobile menu drawers, category toggles, and image preview modals.",
                    "Isolated state within leaf components to prevent redundant re-renders of heavy editorial imagery elsewhere on the page.",
                    "Implemented keyboard accessible controls (Esc to close, tab trapping in navigation drawers) for enhanced usability.",
                  ],
                },
                {
                  number: "04",
                  title: "Responsive Ergonomics & Mobile Experience",
                  tag: "RESPONSIVE_UX",
                  details: [
                    "Audited and enhanced mobile touch targets, ensuring navigational links met WCAG touch-target sizing standards.",
                    "Prevented layout shifts (CLS) on dynamic image loads through aspect-ratio containers and image load placeholders.",
                    "Tuned responsive typography curves so headlines remained legible and impactful on compact screens.",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    padding: "24px 28px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                        {item.number} {"//"}
                      </span>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                        {item.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontSize: "9.5px",
                        letterSpacing: "0.14em",
                        padding: "3px 8px",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        background: "var(--surface)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      &quot;{item.tag}&quot;
                    </span>
                  </div>

                  <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.8 }}>
                    {item.details.map((detail, di) => (
                      <li key={di} style={{ marginBottom: "6px" }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── 5. UI/UX Improvements ──────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="05 // UI/UX IMPROVEMENTS" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Practical design enhancements for layout, usability &amp; clarity.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "2.5rem" }}>
              In luxury commerce, user experience is not just about utility—it must convey effortless sophistication while guiding visitors intuitively toward checkout.
            </motion.p>

            <div className="grid-cols-1-2" style={{ gap: "2rem" }}>
              {[
                {
                  area: "Typographic Discipline & Hierarchy",
                  before: "Varied font sizing across editorial blocks created visual inconsistency and reduced scannability.",
                  after: "Standardized typographic scales using crisp sans-serif headings, subtle tracking, and consistent quotation treatments.",
                  metric: "Enhanced visual clarity & scannability",
                },
                {
                  area: "Drop & Lookbook Discovery",
                  before: "New capsule drops required multiple clicks to locate and browse on small viewports.",
                  after: "Introduced dedicated spotlight blocks and curated preview carousels directly on the primary landing viewport.",
                  metric: "Streamlined collection discovery paths",
                },
                {
                  area: "Mobile Navigation & Drawer UX",
                  before: "Dense multi-level navigation lists created tap confusion on mobile touchscreens.",
                  after: "Refactored the mobile drawer into categorized accordions with generous 48px touch targets.",
                  metric: "Improved mobile navigation accessibility",
                },
                {
                  area: "Image Loading & Layout Stability",
                  before: "High-resolution photography created noticeable layout shifts during sequential network loads.",
                  after: "Implemented strict container aspect ratios and smooth image transitions to eliminate cumulative layout shifts.",
                  metric: "Zero visual jump on network loading",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "16px" }}>
                    {card.area}
                  </h3>

                  <div style={{ marginBottom: "12px", padding: "10px 14px", background: "var(--bg)", border: "1px solid var(--border)" }}>
                    <p style={{ fontSize: "10.5px", letterSpacing: "0.1em", color: "var(--text-muted)", margin: "0 0 4px", fontWeight: 600 }}>PREVIOUS STATE</p>
                    <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>{card.before}</p>
                  </div>

                  <div style={{ marginBottom: "16px", padding: "10px 14px", background: "var(--accent-dim)", border: "1px solid var(--accent)" }}>
                    <p style={{ fontSize: "10.5px", letterSpacing: "0.1em", color: "var(--accent)", margin: "0 0 4px", fontWeight: 600 }}>IMPLEMENTED IMPROVEMENT</p>
                    <p style={{ fontSize: "12.5px", color: "var(--text-primary)", margin: 0, lineHeight: 1.6 }}>{card.after}</p>
                  </div>

                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "11px" }}>✓</span>
                    <span style={{ fontSize: "11px", color: "var(--text-secondary)", letterSpacing: "0.06em", fontFamily: "'JetBrains Mono', monospace" }}>
                      {card.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── 6. Frontend Implementation ─────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="06 // FRONTEND IMPLEMENTATION" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Modern stack, type-safety, and modular component patterns.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "2.5rem" }}>
              Technical breakdown of the tools and architectural practices used to construct clean, maintainable frontend modules.
            </motion.p>

            <div className="grid-cols-1-3" style={{ gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                {
                  tech: "React & Next.js",
                  role: "Core Framework",
                  desc: "Leveraged React component architecture and Next.js page optimization for fast server rendering and client-side transitions.",
                },
                {
                  tech: "TypeScript",
                  role: "Type Contracts",
                  desc: "Enforced strict interfaces for collection props, media assets, navigation structures, and interactive callback functions.",
                },
                {
                  tech: "Tailwind CSS & Modular CSS",
                  role: "Styling Architecture",
                  desc: "Utilized utility-first styling with scoped design tokens to preserve strict brand colors, typography, and responsive spacing grids.",
                },
              ].map((t, ti) => (
                <motion.div
                  key={ti}
                  variants={fadeUp}
                  custom={ti + 3}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    padding: "20px",
                  }}
                >
                  <p style={{ fontSize: "10.5px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 6px" }}>{t.role}</p>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--accent)", margin: "0 0 10px" }}>{t.tech}</h3>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Code / Component Architecture Spec Box */}
            <motion.div
              variants={fadeUp}
              custom={6}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                padding: "24px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                <span style={{ fontSize: "12px", color: "var(--text-primary)", fontWeight: 600 }}>
                  [ARCHITECTURE_SPEC] // REUSABLE_DROP_MODULE_INTERFACE
                </span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>TYPESCRIPT</span>
              </div>
              <pre
                style={{
                  margin: 0,
                  fontSize: "12px",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  overflowX: "auto",
                }}
              >
{`interface DropBannerModuleProps {
  id: string;
  collectionTitle: string;        // e.g. "FW25 MENSWEAR CAPSULE"
  lookbookTagline?: string;       // e.g. "OFF---WHITE™ C/O VIRGIL ABLOH"
  mediaAssets: {
    desktopUrl: string;
    mobileUrl: string;
    aspectRatio: "16/9" | "4/5" | "1/1";
    altText: string;
  }[];
  cta: {
    label: string;                // e.g. "EXPLORE COLLECTION"
    targetUrl: string;
  };
  editorialPlacement: "hero" | "mid-scroll" | "lookbook-grid";
}`}
              </pre>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── 7. Key Learnings ───────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="container-max" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="07 // KEY LEARNINGS &amp; TAKEAWAYS" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              style={{
                fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Engineering takeaways from high-profile commercial e-commerce.
            </motion.h2>

            <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "2.5rem" }}>
              Contributing to a project with established brand identity and high traffic provided invaluable engineering and collaborative insights:
            </motion.p>

            <div className="grid-cols-1-3" style={{ gap: "1.5rem" }}>
              {[
                {
                  num: "01",
                  title: "Respecting Established Design Systems",
                  text: "Learned how to solve usability and navigation bottlenecks within strict aesthetic constraints, discovering that constraints often drive more disciplined engineering and typography.",
                },
                {
                  num: "02",
                  title: "Engineering for Content Velocity",
                  text: "Experienced firsthand the importance of building truly decoupled, reusable UI modules that allow non-technical merchandisers to assemble new drops without code changes.",
                },
                {
                  num: "03",
                  title: "Collaborative Contract Discipline",
                  text: "Refined peer review and agile collaboration workflows within DevNest, writing predictable, self-documenting TypeScript code that integrates smoothly into large codebases.",
                },
              ].map((learning, li) => (
                <motion.div
                  key={li}
                  variants={fadeUp}
                  custom={li + 3}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", marginBottom: "8px" }}>
                    {learning.num} {"//"}
                  </span>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px" }}>
                    {learning.title}
                  </h3>
                  <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                    {learning.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── Footer Directory Link ──────────────────────────────────────── */}
        <footer style={{ padding: "3rem 0", background: "var(--surface)" }}>
          <div className="container-max" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", margin: "0 0 4px" }}>
                SHAMIUL SHAKIB // PORTFOLIO
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>
                Full-Stack Software Engineer · React / Next.js / NestJS / Python
              </p>
            </div>

            <TransitionLink
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "0.12em",
                fontWeight: 600,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              &lt; RETURN TO ALL PROJECTS
            </TransitionLink>
          </div>
        </footer>
      </div>

      {/* Private Repository Request Modal */}
      <PrivateRepoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName="Off-White™"
        clientOrOrg="DevNest Contract"
      />
    </div>
  );
}
