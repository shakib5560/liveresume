"use client";

import { useTransitionNavigation } from "@/components/TransitionProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTransitionNavigation();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-secondary)",
        outline: "none",
        borderRadius: "50%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "var(--border)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
        width: "36px",
        height: "36px",
      }}
      whileHover={{ 
        scale: 1.05, 
        color: "var(--text-primary)", 
        borderColor: "var(--accent)",
        boxShadow: "0 0 15px var(--accent-glow)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div style={{ position: "relative", width: "18px", height: "18px" }}>
        {/* Moon Icon */}
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 90,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Moon size={18} strokeWidth={2.2} />
        </motion.div>

        {/* Sun Icon */}
        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -90,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Sun size={18} strokeWidth={2.2} />
        </motion.div>
      </div>
    </motion.button>
  );
}
