"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

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

function LoadingBar({ isRouting }: { isRouting: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (isRouting) {
      setVisible(true);
      setProgress(15);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.random() * 10;
        });
      }, 500);
    } else if (visible) {
      setProgress(100);
      timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setProgress(0);
        }, 300);
      }, 300);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRouting, visible]);

  if (!visible && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transformOrigin: "left",
        transform: `scaleX(${progress / 100})`,
        backgroundColor: "var(--accent)",
        transition: isReducedMotion
          ? "none"
          : `transform ${isRouting ? "0.5s ease" : "0.3s ease-out"}, opacity 0.3s ease ${
              isRouting ? "0s" : "0.3s"
            }`,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          boxShadow: "0 0 10px var(--accent), 0 0 5px var(--accent)",
          transform: "rotate(3deg) translate(0px, -4px)",
          opacity: 1,
        }}
      />
    </div>
  );
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    setIsRouting(false);
  }, [pathname, searchParams]);

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
    if (typeof window !== "undefined") {
      const url = new URL(href, window.location.href);
      if (url.pathname !== pathname || url.search !== searchParams.toString()) {
        setIsRouting(true);
      }
    }
    router.push(href);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning: isRouting, theme, toggleTheme }}>
      <LoadingBar isRouting={isRouting} />
      {children}
    </TransitionContext.Provider>
  );
}
