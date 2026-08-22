import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Shamiul Shakib — Software Engineer",
  description: "Full Stack & AI Software Engineer with 2+ years of experience. Specializing in NestJS, TypeScript, Python, scalable REST/GraphQL APIs, microservices, and AI-powered web applications.",
  keywords: ["software engineer", "full-stack developer", "AI engineer", "NestJS", "Next.js", "Python", "TypeScript", "microservices", "GraphQL", "REST API"],
  authors: [{ name: "Shamiul Shakib" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shamiul Shakib — Software Engineer",
    description: "Full Stack & AI Software Engineer with 2+ years of experience. NestJS, TypeScript, Python, microservices, AI/LLM systems.",
    type: "website",
    siteName: "Shamiul Shakib Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Shamiul Shakib — Software Engineer",
    description: "Full Stack & AI Software Engineer. NestJS, TypeScript, Python, microservices, AI/LLM systems.",
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
