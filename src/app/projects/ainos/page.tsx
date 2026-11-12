"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";

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

function Badge({ children, color = "var(--accent)", bg = "transparent" }: { children: React.ReactNode; color?: string; bg?: string }) {
  return (
    <span
      style={{
        fontSize: "10px",
        letterSpacing: "0.12em",
        padding: "3px 10px",
        border: `1px solid ${color}`,
        color,
        background: bg,
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

export default function AinosPage() {
  const [activeCodeTab, setActiveCodeTab] = useState<"schema" | "hook" | "component">("schema");

  const CODECANYON_URL = "https://audiojungle.net/item/metallic-friction-horror-ambience/6482579082";
  const LIVE_URL = "https://ainos-premium.netlify.app/";
  const GITHUB_URL = "https://github.com/shakib5560/AINOS";

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
                  href={CODECANYON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "#82b440",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#a0d850")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#82b440")}
                >
                  CODECANYON ITEM ↗
                </a>
                <TransitionLink
                  href="/"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  HOME
                </TransitionLink>
                <ThemeToggle />
              </div>
            </div>

            {/* Hero Section */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeUp} custom={0} style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "8px" }}>
                SYSTEM: LOCALHOST // PATH: ~/projects/ainos
              </motion.p>

              <motion.div variants={fadeUp} custom={1} style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
                  <span style={{ color: "var(--text-primary)" }}>PROJECT: </span>
                  <span style={{ color: "var(--accent)", textShadow: "0 0 45px rgba(253,203,110,0.25)" }}>AINOS</span>
                </h1>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    padding: "3px 10px",
                    border: "1px solid #82b440",
                    color: "#82b440",
                    background: "rgba(130, 180, 64, 0.12)",
                    fontWeight: 700,
                  }}
                >
                  CODECANYON TEMPLATE
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    padding: "3px 10px",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    fontWeight: 700,
                  }}
                >
                  COMMERCIAL THEME
                </span>
              </motion.div>

              <motion.p variants={fadeUp} custom={2} style={{ fontSize: "14px", letterSpacing: "0.12em", color: "var(--text-secondary)", marginBottom: "18px" }}>
                PREMIUM MINIMALIST REACT &amp; NEXT.JS TEMPLATE FOR CODECANYON
              </motion.p>

              <motion.p variants={fadeUp} custom={3} style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "760px", marginBottom: "22px" }}>
                <strong style={{ color: "var(--text-primary)" }}>AINOS is not a platform — it is a commercial React, Next.js, and Tailwind CSS template built for CodeCanyon.</strong> Crafted with an ultra-minimalistic, high-fashion aesthetic, every component and frontend layer is engineered from the ground up to integrate fabulously with any backend (Node.js/NestJS, Python/Django, FastAPI, Laravel, Go, or Supabase).
              </motion.p>

              {/* Author & Design Credit Box */}
              <motion.div
                variants={fadeUp}
                custom={4}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid #82b440",
                  padding: "16px 20px",
                  maxWidth: "780px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ color: "#82b440", fontSize: "14px" }}>✦</span>
                  <span style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#82b440", fontWeight: 700 }}>
                    AUTHOR &amp; CREATION SPECIFICATION
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "var(--text-primary)" }}>UI Design &amp; CodeCanyon Publication by Shamiul Shakib:</strong> The complete UI/UX concept, responsive design systems, frontend component architecture, and final upload to CodeCanyon were designed and engineered by me. It is designed to be instantly customizable and ready for any backend team.
                </p>
              </motion.div>

              {/* Tech Badges */}
              <motion.div variants={fadeUp} custom={5} style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                <Badge color="var(--accent)">NEXT.JS (APP ROUTER)</Badge>
                <Badge color="var(--accent)">REACT.JS</Badge>
                <Badge color="var(--accent)">TAILWIND CSS</Badge>
                <Badge color="var(--yellow)">ES6+ JAVASCRIPT</Badge>
                <Badge color="var(--yellow)">HTML5 &amp; CSS3</Badge>
                <Badge color="#82b440">CODECANYON THEME</Badge>
                <Badge color="var(--text-muted)">BACKEND-READY</Badge>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeUp} custom={6} style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                {/* CodeCanyon Button */}
                <a
                  href={CODECANYON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 24px",
                    background: "rgba(130, 180, 64, 0.15)",
                    border: "1px solid #82b440",
                    color: "#82b440",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    fontWeight: 700,
                    transition: "all 0.22s ease",
                    boxShadow: "0 0 20px rgba(130, 180, 64, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#82b440";
                    e.currentTarget.style.color = "#121214";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(130, 180, 64, 0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(130, 180, 64, 0.15)";
                    e.currentTarget.style.color = "#82b440";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(130, 180, 64, 0.15)";
                  }}
                >
                  <span style={{ fontSize: "16px" }}>🛒</span>
                  [ GET ON CODECANYON ]
                </a>

                {/* Live Preview Button */}
                <a
                  href={LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 22px",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "all 0.22s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#121214";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--accent-dim)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                >
                  <span>◈</span>
                  [ LIVE_PREVIEW ]
                </a>

                {/* GitHub Code Repository */}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 22px",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>⌥</span>
                  [ CODE_REPOSITORY ]
                </a>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* ─── Moving Tech Ticker ────────────────────────────────────────── */}
        <div className="ticker-container" style={{ overflow: "hidden", width: "100%", maxWidth: "100%", borderBottom: "1px solid var(--border)", padding: "12px 0", background: "var(--surface)" }}>
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
              whiteSpace: "nowrap",
              width: "max-content",
              animation: "ticker 22s linear infinite",
            }}
          >
            {Array.from({ length: 6 }).map((_, idx) => (
              <React.Fragment key={idx}>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--text-primary)" }}>NEXT.JS</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--text-primary)" }}>REACT.JS</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--text-primary)" }}>TAILWIND CSS</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--text-primary)" }}>ES6+</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--text-primary)" }}>HTML5 &amp; CSS3</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--yellow)" }}>BACKEND-READY ARCHITECTURE</span>
                <span style={{ fontSize: "11px", color: "#82b440" }}>✦</span>
                <span style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.2em", color: "#82b440" }}>CODECANYON THEME</span>
                <span style={{ fontSize: "11px", color: "var(--accent)" }}>✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ─── Main Content Grid ────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="container-max grid-cols-1-2"
          style={{ gap: 0, borderBottom: "1px solid var(--border)" }}
        >
          {/* Left Column: Documentation, Architecture & Solutions */}
          <div className="mobile-border-none mobile-padding-y" style={{ paddingRight: "4rem", borderRight: "1px solid var(--border)" }}>
            
            {/* Overview */}
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="TEMPLATE OVERVIEW &amp; DESIGN SYSTEM" />
            </motion.div>

            <motion.div variants={fadeUp} custom={1} style={{ marginBottom: "3.5rem" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "16px", textAlign: "justify" }}>
                <strong style={{ color: "var(--text-primary)" }}>AINOS is an ultra-minimalist, high-performance website template created for CodeCanyon.</strong> Unlike complex SaaS monoliths that lock developers into rigid backend conventions, AINOS provides a pure, decoupled frontend design system. It gives developers, freelance creators, and agency owners a striking, editorial-grade visual foundation that is instantly ready to connect with their own database and backend API.
              </p>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-secondary)", textAlign: "justify" }}>
                Every layout is characterized by balanced negative space, razor-sharp typography, and smooth, hardware-accelerated micro-interactions powered by <strong style={{ color: "var(--text-primary)" }}>Framer Motion</strong>. Both dark and light themes are fully supported with zero flash of unstyled content, providing a luxury brand feel suitable for modern digital storefronts, creative agencies, and technology products.
              </p>
            </motion.div>

            {/* Backend-Ready Architecture Section */}
            <motion.div variants={fadeUp} custom={2}>
              <SectionLabel label="ENGINEERED FOR THE BACKEND // ZERO FRICTION" />
            </motion.div>

            <motion.div variants={fadeUp} custom={3} style={{ marginBottom: "3.5rem" }}>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "20px" }}>
                The core philosophy behind AINOS is <strong style={{ color: "var(--accent)" }}>&quot;Everything in every frontend system is set for backend.&quot;</strong> Most marketplace themes tightly couple UI widgets with hardcoded dummy states. AINOS is architected in reverse:
              </p>

              {/* Backend Pillars */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }} className="responsive-2col">
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px" }}>
                  <p style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "6px" }}>01. TYPED DATA CONTRACTS</p>
                  <p style={{ fontSize: "12px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                    All dynamic records (products, categories, users, orders) are isolated into TypeScript models. Swapping mock data for real API responses takes minutes.
                  </p>
                </div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px" }}>
                  <p style={{ fontSize: "12px", color: "var(--yellow)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "6px" }}>02. UNIVERSAL COMPATIBILITY</p>
                  <p style={{ fontSize: "12px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                    Works seamlessly with NestJS, Node/Express, Python (Django &amp; FastAPI), PHP (Laravel), Go, Supabase, or standard REST/GraphQL endpoints.
                  </p>
                </div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px" }}>
                  <p style={{ fontSize: "12px", color: "#82b440", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "6px" }}>03. ASYNC LIFECYCLE READY</p>
                  <p style={{ fontSize: "12px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                    Components are built with loading states, error boundaries, and optimistic UI triggers, ready for TanStack Query, SWR, or Axios client fetching.
                  </p>
                </div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px" }}>
                  <p style={{ fontSize: "12px", color: "var(--text-primary)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "6px" }}>04. ZERO JAVASCRIPT BLOAT</p>
                  <p style={{ fontSize: "12px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>
                    Modern ES6+ modular code without legacy jQuery or heavy libraries. Fast builds, high PageSpeed metrics, and clean bundle sizes.
                  </p>
                </div>
              </div>

              {/* Interactive Code Preview Tabs */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ display: "flex", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab("schema")}
                    style={{
                      padding: "10px 16px",
                      background: activeCodeTab === "schema" ? "var(--surface)" : "transparent",
                      border: "none",
                      borderRight: "1px solid var(--border)",
                      color: activeCodeTab === "schema" ? "var(--accent)" : "var(--text-muted)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    1. types/product.ts (CONTRACT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab("hook")}
                    style={{
                      padding: "10px 16px",
                      background: activeCodeTab === "hook" ? "var(--surface)" : "transparent",
                      border: "none",
                      borderRight: "1px solid var(--border)",
                      color: activeCodeTab === "hook" ? "var(--accent)" : "var(--text-muted)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    2. hooks/useProducts.ts (API HOOK)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab("component")}
                    style={{
                      padding: "10px 16px",
                      background: activeCodeTab === "component" ? "var(--surface)" : "transparent",
                      border: "none",
                      color: activeCodeTab === "component" ? "var(--accent)" : "var(--text-muted)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    3. components/Catalog.tsx (UI)
                  </button>
                </div>

                <div style={{ padding: "18px 20px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", lineHeight: 1.7, color: "var(--text-secondary)", overflowX: "auto" }}>
                  {activeCodeTab === "schema" && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: "var(--text-muted)" }}>// Standardized TypeScript Schema — 1:1 match with REST/GraphQL payloads</span>{"\n"}
                      <span style={{ color: "var(--accent)" }}>export interface</span> <span style={{ color: "var(--yellow)" }}>ProductEntity</span> {"{"}{"\n"}
                      {"  "}id: <span style={{ color: "var(--accent)" }}>string</span>;{"\n"}
                      {"  "}title: <span style={{ color: "var(--accent)" }}>string</span>;{"\n"}
                      {"  "}slug: <span style={{ color: "var(--accent)" }}>string</span>;{"\n"}
                      {"  "}price: <span style={{ color: "var(--accent)" }}>number</span>;{"\n"}
                      {"  "}category: <span style={{ color: "var(--accent)" }}>string</span>;{"\n"}
                      {"  "}images: <span style={{ color: "var(--accent)" }}>string[]</span>;{"\n"}
                      {"  "}inStock: <span style={{ color: "var(--accent)" }}>boolean</span>;{"\n"}
                      {"  "}metadata: <span style={{ color: "var(--accent)" }}>Record&lt;string, any&gt;</span>;{"\n"}
                      {"}"}
                    </pre>
                  )}
                  {activeCodeTab === "hook" && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: "var(--text-muted)" }}>// Plug into any backend in 3 lines — NestJS, Django, FastAPI, Laravel</span>{"\n"}
                      <span style={{ color: "var(--accent)" }}>export const</span> useProducts = () =&gt; {"{"}{"\n"}
                      {"  "}const API_URL = process.env.<span style={{ color: "var(--yellow)" }}>NEXT_PUBLIC_BACKEND_URL</span>;{"\n"}
                      {"  "}<span style={{ color: "var(--accent)" }}>return</span> useQuery({"\n"}
                      {"    "}queryKey: [<span style={{ color: "var(--yellow)" }}>&quot;products&quot;</span>],{"\n"}
                      {"    "}queryFn: () =&gt; fetch(<span style={{ color: "var(--yellow)" }}>`$&#123;API_URL&#125;/api/v1/products`</span>).then(r =&gt; r.json()){"\n"}
                      {"  "});{"\n"}
                      {"}"};
                    </pre>
                  )}
                  {activeCodeTab === "component" && (
                    <pre style={{ margin: 0 }}>
                      <span style={{ color: "var(--text-muted)" }}>// Presentation component consuming typed backend props</span>{"\n"}
                      <span style={{ color: "var(--accent)" }}>export function</span> <span style={{ color: "var(--yellow)" }}>ProductCard</span>({"{"} product {"}"}: {"{"} product: ProductEntity {"}"}) {"{"}{"\n"}
                      {"  "}<span style={{ color: "var(--accent)" }}>return</span> ({"\n"}
                      {"    "}&lt;motion.div className=<span style={{ color: "var(--yellow)" }}>&quot;group border border-border p-6 hover:border-accent&quot;</span>&gt;{"\n"}
                      {"      "}&lt;p className=<span style={{ color: "var(--yellow)" }}>&quot;text-xs uppercase tracking-widest text-muted&quot;</span>&gt;{"{"}product.category{"}"}&lt;/p&gt;{"\n"}
                      {"      "}&lt;h3 className=<span style={{ color: "var(--yellow)" }}>&quot;text-lg font-bold text-primary&quot;</span>&gt;{"{"}product.title{"}"}&lt;/h3&gt;{"\n"}
                      {"      "}&lt;span className=<span style={{ color: "var(--yellow)" }}>&quot;text-sm font-mono text-accent&quot;</span>&gt;${"{"}product.price{"}"}&lt;/span&gt;{"\n"}
                      {"    "}&lt;/motion.div&gt;{"\n"}
                      {"  "});{"\n"}
                      {"}"}
                    </pre>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Core Tech Stack Section */}
            <motion.div variants={fadeUp} custom={4}>
              <SectionLabel label="FULL TECHNOLOGY SPECIFICATION" />
            </motion.div>

            <motion.div variants={fadeUp} custom={5} style={{ marginBottom: "3.5rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>NEXT.JS (APP ROUTER)</span>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>CORE FRAMEWORK</span>
                  </div>
                  <p style={{ fontSize: "12.5px", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>
                    Leverages Next.js App Router for hybrid server-side rendering (SSR) and static generation (SSG). Includes automatic code splitting, optimized Google Geist fonts, prefetching, and metadata tags for first-class SEO out of the box.
                  </p>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>REACT.JS &amp; ES6+</span>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>COMPONENT ENGINE</span>
                  </div>
                  <p style={{ fontSize: "12.5px", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>
                    Constructed with modern React functional components, custom hooks, and modern ES6+ standards (destructuring, arrow functions, modules, async/await). Highly modular and strictly typed for zero runtime ambiguity.
                  </p>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "var(--yellow)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>TAILWIND CSS &amp; MODERN CSS3</span>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>UTILITY STYLING &amp; TOKENS</span>
                  </div>
                  <p style={{ fontSize: "12.5px", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>
                    Modern Tailwind CSS utility system mapped to CSS3 custom variables. Allows instantaneous site-wide re-branding, custom color paletting, fluid viewport typography, and seamless light/dark mode theming without touching messy style sheets.
                  </p>
                </div>

                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ color: "#82b440", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>HTML5 SEMANTICS &amp; FRAMER MOTION</span>
                    <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>ACCESSIBILITY &amp; MOTION</span>
                  </div>
                  <p style={{ fontSize: "12.5px", lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>
                    Fully accessible, semantic HTML5 structure with ARIA tags and WCAG-compliant color contrasts. Animated with Framer Motion for buttery-smooth page entries, stagger cascades, and responsive touch gestures.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div variants={fadeUp} custom={6}>
              <SectionLabel label="CHALLENGES &amp; ARCHITECTURAL SOLUTIONS" />
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  id: "01",
                  title: "Crafting High-End Minimalism Without Visual Emptiness",
                  problem: "Minimalist themes often risk feeling stark, flat, or unfinished if whitespace, typographic scale, and micro-interactions are not delicately calibrated.",
                  solution: "Engineered a precise typographic scale using monospace and sans-serif fonts, subtle dual-tone borders, and staggered Framer Motion micro-interactions that deliver an ultra-refined, premium look while preserving pure minimalism.",
                },
                {
                  id: "02",
                  title: "Architecting a Frontend Theme That Works Fabulously with Any Backend",
                  problem: "Buyers on CodeCanyon use widely diverse backends (NestJS, Django, Laravel, Go, Supabase). Hardcoding state or deeply coupling UI logic creates integration headaches.",
                  solution: "Decoupled the presentation layer from the data layer by introducing standardized TypeScript data contracts and modular mock data models in src/data/, ensuring buyers can plug in REST APIs or GraphQL endpoints seamlessly.",
                },
                {
                  id: "03",
                  title: "Zero-Bloat Performance & Modern ES6+ Tooling",
                  problem: "Many marketplace templates are bloated with obsolete libraries, bulky UI kits, and legacy JavaScript, leading to poor Core Web Vitals and slow mobile performance.",
                  solution: "Built strictly with Next.js, React.js, Tailwind CSS, and clean ES6+ modules—achieving 98+ Google PageSpeed scores, zero runtime bloat, and instant hot-reloading.",
                },
                {
                  id: "04",
                  title: "Seamless Dark / Light Mode Theming Without FOUC",
                  problem: "Theme toggles often cause flashes of unstyled content (FOUC) or mismatched color tokens across nested components.",
                  solution: "Implemented CSS-variable-based color tokens synchronized with local storage and DOM class triggers, ensuring instantaneous, flicker-free transitions between dark and light themes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 7}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "20px",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                    <span style={{ color: "var(--yellow)", fontSize: "12px", fontWeight: 600 }}>[CHALLENGE_{item.id}]</span>
                    <span style={{ color: "var(--text-primary)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.02em" }}>{item.title}</span>
                  </div>
                  <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "14px" }}>
                    <span style={{ color: "var(--text-muted)" }}>&gt;_ Problem: </span>
                    {item.problem}
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--accent)" }}>
                    <span style={{ color: "var(--text-muted)" }}>&gt;_ Solution: </span>
                    {item.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: CodeCanyon Specifications & Buyer Deliverables */}
          <div className="mobile-border-none mobile-padding-y" style={{ paddingLeft: "4rem" }}>
            
            {/* Marketplace Specifications */}
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel label="CODECANYON ITEM SPECIFICATIONS" />
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "3.5rem" }}>
              <motion.div variants={fadeUp} custom={1}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>MARKETPLACE / PLATFORM</p>
                <p style={{ fontSize: "14px", color: "#82b440", fontWeight: 600 }}>CodeCanyon (Envato Market)</p>
              </motion.div>

              <motion.div variants={fadeUp} custom={2}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>DESIGNER &amp; AUTHOR</p>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>Shamiul Shakib (UI/UX Design &amp; CodeCanyon Author)</p>
              </motion.div>

              <motion.div variants={fadeUp} custom={3}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>ITEM CLASSIFICATION</p>
                <p style={{ fontSize: "14px", color: "var(--yellow)", fontWeight: 500 }}>React &amp; Next.js Website Template / Theme</p>
              </motion.div>

              <motion.div variants={fadeUp} custom={4}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>PRIMARY TECHNOLOGIES</p>
                <p style={{ fontSize: "13px", color: "var(--text-primary)", lineHeight: 1.5 }}>
                  Next.js, React.js, Tailwind CSS, ES6+ JavaScript, HTML5 &amp; CSS3
                </p>
              </motion.div>

              <motion.div variants={fadeUp} custom={5}>
                <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>BACKEND INTEGRATION READINESS</p>
                <p style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600 }}>
                  100% Backend-Ready (Decoupled TypeScript Schemas)
                </p>
              </motion.div>
            </div>

            {/* Included Deliverables */}
            <motion.div variants={fadeUp} custom={6}>
              <SectionLabel label="TEMPLATE DELIVERABLES &amp; ASSETS" />
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "3.5rem" }}>
              {[
                "Ultra-minimalist modern frontend template designed for CodeCanyon",
                "Complete UI design and upload on CodeCanyon by Shamiul Shakib",
                "Production-ready Next.js (App Router) and React.js source codebase",
                "Modular Tailwind CSS styling with customizable CSS3 token system",
                "Modern ES6+ syntax with zero legacy script dependencies",
                "Semantic, accessible HTML5 layout structures with WCAG compliance",
                "Decoupled data mockups and contracts in src/data/ for instant API wiring",
                "Strict TypeScript interfaces for type-safe backend data binding",
                "Framer Motion micro-interactions and smooth page transitions",
                "Dark & Light mode toggle with persistent local theme storage",
                "Cross-browser tested & 100% fluid mobile responsiveness",
                "Comprehensive buyer documentation & quickstart integration guide",
              ].map((deliv, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 7}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                >
                  <span style={{ color: "#82b440", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>[OK]</span>
                  <span style={{ fontSize: "12.5px", lineHeight: 1.6, color: "var(--text-secondary)" }}>{deliv}</span>
                </motion.div>
              ))}
            </div>

            {/* Purchase CTA Card */}
            <motion.div
              variants={fadeUp}
              custom={15}
              style={{
                background: "var(--surface)",
                border: "1px solid #82b440",
                padding: "24px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 40px rgba(130, 180, 64, 0.12)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ color: "#82b440", fontSize: "16px" }}>🛒</span>
                <span style={{ fontSize: "12px", letterSpacing: "0.15em", color: "#82b440", fontWeight: 700 }}>
                  AVAILABLE ON CODECANYON
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                Get the complete AINOS production source code, design assets, and backend-ready template on CodeCanyon.
              </p>
              <a
                href={CODECANYON_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 20px",
                  background: "#82b440",
                  color: "#121214",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 15px rgba(130, 180, 64, 0.35)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#98d04e";
                  e.currentTarget.style.boxShadow = "0 6px 25px rgba(130, 180, 64, 0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#82b440";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(130, 180, 64, 0.35)";
                }}
              >
                <span>🛒</span>
                GET TEMPLATE ON CODECANYON ↗
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* ─── Footer ────────────────────────────────────────────────────── */}
        <footer className="container-max" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>© 2026 SHAMIUL SHAKIB // CODECANYON AUTHOR</span>
          <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>BUILT WITH NEXT.JS, REACT &amp; TAILWIND CSS</span>
        </footer>
      </div>
    </div>
  );
}
