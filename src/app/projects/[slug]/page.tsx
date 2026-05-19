"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS_DATA, ProjectDetails } from "@/data/projects";
import TransitionLink from "@/components/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

// Helper components
function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
      <span style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 500 }}>// </span>
      <span style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function ProjectDetailsPage({ params }: { params: any }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [logLines, setLogLines] = useState<string[]>([]);

  // Resolve params safely for Next.js 14/15/16
  useEffect(() => {
    Promise.resolve(params).then((resolved) => {
      setSlug(resolved.slug);
    });
  }, [params]);

  // Loading console animation simulation
  useEffect(() => {
    if (!slug) return;
    const project = PROJECTS_DATA[slug];
    if (!project) return;

    const lines = [
      `[SYS] INITIALIZING SYSTEM LOAD FOR PATH: ~/projects/${slug}`,
      `[SYS] ESTABLISHING SECURE CONNECTION TO DATABASE... [OK]`,
      `[SYS] RETRIEVING META: ${project.meta}... [OK]`,
      `[SYS] PARSING TECH STACK: ${project.tech.substring(0, 30)}...`,
      `[SYS] GENERATING SCHEMATICS FOR ${project.name}...`,
      `[SYS] BOOTSTRAPPING USER INTERFACE... [OK]`,
      `[SYS] SYSTEM READY.`
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
          setLoadingComplete(true);
        }, 300);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [slug]);

  if (!slug) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
        RESOLVING_URL...
      </div>
    );
  }

  const project = PROJECTS_DATA[slug];

  if (!project) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <p style={{ color: "var(--yellow)", fontSize: "16px", letterSpacing: "0.1em" }}>[ERROR_404] PROJECT NOT FOUND</p>
        <TransitionLink href="/" style={{ color: "var(--accent)", textDecoration: "none", fontSize: "13px", border: "1px solid var(--border)", padding: "10px 20px" }}>
          &lt; RETURN TO DIRECTORY
        </TransitionLink>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative", overflowX: "hidden" }}>
      {/* Grid background */}
      <div className="grid-bg" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />

      <AnimatePresence mode="wait">
        {!loadingComplete ? (
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
                <span style={{ color: "var(--text-muted)", fontSize: "10px", marginLeft: "10px", letterSpacing: "0.05em" }}>SYSTEM_LOADER.SH</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", minHeight: "160px" }}>
                {logLines.map((line, idx) => (
                  <div key={idx} style={{
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    color: line && line.includes("[OK]") ? "var(--accent)" : line && line.includes("ERR") ? "var(--yellow)" : "var(--text-secondary)"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            {/* Header / Nav */}
            <header style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="container-max" style={{ paddingBottom: "2.5rem" }}>
                
                {/* Back link */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
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
                      transition: "color 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    &lt; BACK TO DIRECTORY
                  </TransitionLink>
                  <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    <TransitionLink
                      href="/"
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      HOME
                    </TransitionLink>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Info block */}
                <div className="responsive-hero" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "flex-end" }}>
                  <div>
                    <p style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: "8px" }}>
                      SYSTEM: LOCALHOST // PATH: ~/projects/{slug}
                    </p>
                    <h1 style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, margin: "10px 0 20px 0", letterSpacing: "-0.02em" }}>
                      <span style={{ color: "var(--text-primary)" }}>PROJECT: </span>
                      <span style={{ color: "var(--accent)", textShadow: "0 0 45px rgba(79,255,176,0.25)" }}>{project.name}</span>
                    </h1>
                    <p style={{ fontSize: "13px", letterSpacing: "0.2em", color: "var(--text-secondary)", marginBottom: "20px" }}>
                      {project.desc}
                    </p>
                  </div>

                  {/* Icon details */}
                  <div style={{
                    width: "80px",
                    height: "80px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    color: "var(--accent)",
                    background: "var(--surface)",
                    boxShadow: "0 0 25px var(--accent-dim)"
                  }}>
                    {project.icon}
                  </div>
                </div>

                {/* Project Links / Buttons */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "2.5rem" }}>
                  {typeof project.github === "string" ? (
                    <a
                      href={project.github}
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
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                    >
                      <span style={{ color: "var(--text-muted)" }}>⌥</span>
                      [ CODE_REPOSITORY ]
                    </a>
                  ) : (
                    <>
                      {project.github.frontend && (
                        <a
                          href={project.github.frontend}
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
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                        >
                          <span style={{ color: "var(--text-muted)" }}>⌥</span>
                          [ FRONTEND_REPOSITORY ]
                        </a>
                      )}
                      {project.github.backend && (
                        <a
                          href={project.github.backend}
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
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                        >
                          <span style={{ color: "var(--text-muted)" }}>⌥</span>
                          [ BACKEND_REPOSITORY ]
                        </a>
                      )}
                    </>
                  )}
                  <a
                    href={project.live}
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
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <span style={{ color: "var(--accent)" }}>◈</span>
                    [ LIVE_DEPLOYMENT ]
                  </a>
                </div>

              </div>
            </header>

            {/* Custom Moving Ticker for Project Tech Stack */}
            <div style={{ overflow: "hidden", borderBottom: "1px solid var(--border)", padding: "12px 0" }}>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  animation: "ticker 20s linear infinite"
                }}
              >
                {Array.from({ length: 6 }).map((_, idx) => (
                  <React.Fragment key={idx}>
                    {project.tech.split(" / ").map((t, i) => (
                      <span key={`${idx}-${i}`} style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", color: "var(--text-muted)" }}>
                        {t.toUpperCase()}
                      </span>
                    ))}
                    <span style={{ fontSize: "12px", color: "var(--accent)" }}>✦</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Content Body Grid */}
            <motion.section
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="container-max grid-cols-1-2"
              style={{ gap: 0, borderBottom: "1px solid var(--border)" }}
            >
              {/* Left Column: Details + Challenges */}
              <div className="mobile-border-none mobile-padding-y" style={{ paddingRight: "4rem", borderRight: "1px solid var(--border)" }}>
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel label="PROJECT OVERVIEW" />
                </motion.div>
                
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "var(--text-secondary)",
                    marginBottom: "3.5rem",
                    textAlign: "justify"
                  }}
                >
                  {project.longDescription}
                </motion.p>

                <motion.div variants={fadeUp} custom={2}>
                  <SectionLabel label="CHALLENGES & ARCHITECTURE SOLUTIONS" />
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  {project.problems.map((prob, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 3}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        padding: "20px",
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                        <span style={{ color: "var(--yellow)", fontSize: "12px", fontWeight: 600 }}>[CHALLENGE_{i + 1}]</span>
                        <span style={{ color: "var(--text-primary)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.02em" }}>{prob.title}</span>
                      </div>
                      <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "16px" }}>
                        <span style={{ color: "var(--text-muted)" }}>&gt;_ Problem: </span>
                        {prob.description}
                      </p>
                      <p style={{ fontSize: "12px", lineHeight: 1.7, color: "var(--accent)" }}>
                        <span style={{ color: "var(--text-muted)" }}>&gt;_ Solution: </span>
                        {prob.solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Client Specifications */}
              <div className="mobile-border-none mobile-padding-y" style={{ paddingLeft: "4rem" }}>
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel label="CLIENT SPECIFICATIONS" />
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "3.5rem" }}>
                  <motion.div variants={fadeUp} custom={1}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>CLIENT NAME</p>
                    <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>{project.client.name}</p>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={2}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>INDUSTRY vertical</p>
                    <p style={{ fontSize: "14px", color: "var(--text-primary)" }}>{project.client.industry}</p>
                  </motion.div>

                  <motion.div variants={fadeUp} custom={3}>
                    <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--text-muted)", marginBottom: "4px" }}>ENGAGEMENT DURATION</p>
                    <p style={{ fontSize: "14px", color: "var(--yellow)", fontWeight: 500 }}>{project.client.duration}</p>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} custom={4}>
                  <SectionLabel label="PROJECT DELIVERABLES" />
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {project.client.deliverables.map((deliv, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i + 5}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span style={{ color: "var(--accent)", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>[OK]</span>
                      <span style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-secondary)" }}>{deliv}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Footer */}
            <footer className="container-max" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>© 2026 SHAMIUL SHAKIB</span>
              <span style={{ color: "var(--border-hover)", fontSize: "18px" }}>✦</span>
              <span style={{ fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)" }}>BUILT WITH NEXT.JS</span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
