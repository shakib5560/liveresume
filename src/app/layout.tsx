import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Shamiul Shakib — Software Engineer",
  description: "Full-stack software engineer specializing in AI-powered web applications, high-traffic system design, and modern web architecture.",
  keywords: ["software engineer", "full-stack developer", "Next.js", "Python", "TypeScript"],
  authors: [{ name: "Shamiul Shakib" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shamiul Shakib — Software Engineer",
    description: "Full-stack software engineer specializing in AI-powered web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
