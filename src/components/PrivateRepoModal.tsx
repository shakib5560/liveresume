"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, MessageCircle, Mail, X } from "lucide-react";

interface PrivateRepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  clientOrOrg?: string;
}

export default function PrivateRepoModal({
  isOpen,
  onClose,
  projectName,
  clientOrOrg,
}: PrivateRepoModalProps) {
  // Close on ESC key and prevent body scroll when modal is active
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const whatsappMessage = encodeURIComponent(
    `Hi Shamiul, I visited your portfolio and would like to request an invitation/read access to the private repository for ${projectName}.`
  );
  const whatsappUrl = `https://wa.me/8801771659336?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(
    `Private Repository Access Request — ${projectName}`
  );
  const emailBody = encodeURIComponent(
    `Hi Shamiul,\n\nI would like to request an invitation/access to review the private repository for ${projectName}.\n\nMy GitHub Username: \nOrganization / Purpose: \n\nThank you!`
  );
  const emailUrl = `mailto:dev.shakib@outlook.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10, 14, 20, 0.78)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "540px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
              borderRadius: "4px",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* Terminal Window Header Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                background: "var(--surface-2)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#ff5f56",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  ~/security/access-control/repo-permissions
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    padding: "2px 7px",
                    border: "1px solid var(--yellow)",
                    color: "var(--yellow)",
                    background: "var(--yellow-dim)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  RESTRICTED ACCESS
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "2px",
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "26px 28px" }}>
              {/* Status Header */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "18px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: 0,
                    background: "var(--yellow-dim)",
                    border: "1px solid var(--yellow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--yellow)",
                    borderRadius: "3px",
                  }}
                >
                  <Lock size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      margin: "0 0 4px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Private Repository // Invitation Required
                  </h3>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--accent)",
                      fontFamily: "'JetBrains Mono', monospace",
                      margin: 0,
                    }}
                  >
                    PROJECT: {projectName} {clientOrOrg ? `(${clientOrOrg})` : ""}
                  </p>
                </div>
              </div>

              {/* Context Explanation */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                }}
              >
                The codebase for <strong style={{ color: "var(--text-primary)" }}>{projectName}</strong> is maintained under a private repository due to commercial client agreements, intellectual property protection, and non-disclosure requirements.
              </p>

              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--accent)",
                  padding: "12px 16px",
                  marginBottom: "22px",
                }}
              >
                <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 600, margin: "0 0 4px" }}>
                  HOW TO REQUEST ACCESS:
                </p>
                <p style={{ fontSize: "12.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  If you are an engineering manager, recruiter, or collaborator evaluating my work, you can ask <strong style={{ color: "var(--text-primary)" }}>Shamiul Shakib</strong> directly to send you a repository invitation or temporary read access.
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 18px",
                    background: "#25D366",
                    color: "#0a1f11",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: "12.5px",
                    letterSpacing: "0.04em",
                    borderRadius: "2px",
                    transition: "transform 0.15s ease, opacity 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.92";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <MessageCircle size={18} />
                    <span>Ask Shamiul on WhatsApp (+880 1771-659336)</span>
                  </div>
                  <span style={{ fontSize: "14px" }}>→</span>
                </a>

                {/* Email Action Button */}
                <a
                  href={emailUrl}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "11px 18px",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.04em",
                    borderRadius: "2px",
                    transition: "all 0.15s ease",
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
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Mail size={16} />
                    <span>Send Request via Email (dev.shakib@outlook.com)</span>
                  </div>
                  <span style={{ fontSize: "12px" }}>✉</span>
                </a>
              </div>

              {/* Dismiss Bar */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Direct: +880 1771-659336
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    padding: "5px 14px",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.15s ease",
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
                  CLOSE [ESC]
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
