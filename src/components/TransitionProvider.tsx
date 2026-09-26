"use client";

import React, { createContext, useContext, useState, useEffect, Suspense, useSyncExternalStore } from "react";
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

function subscribeReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function LoadingBar({ isRouting }: { isRouting: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (isRouting) {
      const startTimeout = setTimeout(() => {
        setVisible(true);
        setProgress(15);
      }, 0);

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.random() * 10;
        });
      }, 500);

      return () => {
        clearTimeout(startTimeout);
        clearInterval(interval);
      };
    } else if (visible) {
      const finishTimeout = setTimeout(() => {
        setProgress(100);
      }, 0);
      timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setProgress(0);
        }, 300);
      }, 300);

      return () => {
        clearTimeout(finishTimeout);
        clearTimeout(timeout);
      };
    }
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
        overflow: "hidden",
        maxWidth: "100%",
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

function NavigationEvents({ setIsRouting }: { setIsRouting: (val: boolean) => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRouting(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname, searchParams, setIsRouting]);

  return null;
}

let themeListeners: Array<() => void> = [];

function subscribeTheme(callback: () => void) {
  themeListeners.push(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === "theme") callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    themeListeners = themeListeners.filter((l) => l !== callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as "dark" | "light") || "dark";
}

function getThemeServerSnapshot(): "dark" | "light" {
  return "dark";
}

function emitThemeChange() {
  for (const listener of themeListeners) {
    listener();
  }
}

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const [isRouting, setIsRouting] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    emitThemeChange();
  };

  const navigateTo = (href: string) => {
    if (typeof window !== "undefined") {
      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
        setIsRouting(true);
      }
    }
    router.push(href);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning: isRouting, theme, toggleTheme }}>
      <Suspense fallback={null}>
        <NavigationEvents setIsRouting={setIsRouting} />
      </Suspense>
      <LoadingBar isRouting={isRouting} />
      {children}
    </TransitionContext.Provider>
  );
}
