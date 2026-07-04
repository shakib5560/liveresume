"use client";

import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface TransitionContextType {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
  theme: "dark",
  toggleTheme: () => {},
});

export const useTransitionNavigation = () => useContext(TransitionContext);

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [animationState, setAnimationState] = useState<"idle" | "closing" | "opening">("idle");
  const targetHref = useRef<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    setTimeout(() => {
      if (savedTheme === "light") {
        setTheme("light");
        document.documentElement.classList.add("light");
      } else {
        setTheme("dark");
        document.documentElement.classList.remove("light");
      }
    }, 0);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const navigateTo = (href: string) => {
    if (animationState !== "idle") return;
    targetHref.current = href;
    setAnimationState("closing");
  };

  // When pathname changes, trigger opening animation
  useEffect(() => {
    if (animationState === "closing") {
      setTimeout(() => setAnimationState("opening"), 0);
    }
  }, [pathname, animationState]);

  const handleClosingComplete = () => {
    if (targetHref.current) {
      router.push(targetHref.current);
      targetHref.current = null;
    }
  };

  const handleOpeningComplete = () => {
    setAnimationState("idle");
  };

  const colCount = 5;
  const cols = Array.from({ length: colCount });

  const colVariants = {
    initial: { x: "100vw" },
    idle: { x: "100vw", transition: { duration: 0 } },
    closing: (i: number) => ({
      x: "0vw",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
        delay: i * 0.05,
      },
    }),
    opening: (i: number) => ({
      x: "-100vw",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: (colCount - 1 - i) * 0.05, // staggered in reverse
      },
    }),
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning: animationState !== "idle", theme, toggleTheme }}>
      {children}

      {/* Shutter Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          zIndex: 9999,
          pointerEvents: animationState !== "idle" ? "auto" : "none",
        }}
      >
        {cols.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={colVariants}
            initial="initial"
            animate={animationState}
            onAnimationComplete={() => {
              if (animationState === "closing" && i === colCount - 1) {
                handleClosingComplete();
              } else if (animationState === "opening" && i === 0) {
                handleOpeningComplete();
              }
            }}
            style={{
              flex: 1,
              height: "100vh",
              background: "var(--bg)",
              borderRight: i < colCount - 1 ? "1px solid var(--accent)" : "none",
              boxShadow: i < colCount - 1 ? "0 0 15px rgba(79, 255, 176, 0.15)" : "none",
            }}
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
}
