import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Shamiul Shakib — Full-Stack Software Engineer (NestJS • React/Next.js • Python/Django)",
  description: "Full-Stack Software Engineer with 2+ years of hands-on experience building production-ready web applications, enterprise SaaS/ERP modules, e-commerce platforms, and AI-powered backend services.",
  keywords: [
    "Shamiul Shakib",
    "Full-Stack Software Engineer",
    "NestJS",
    "React.js",
    "Next.js",
    "Python",
    "Django",
    "FastAPI",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "Docker",
    "AWS",
    "GitRabbit",
    "AutoTaskX",
    "Rinors",
    "Idea2System",
    "ToyGalaxy"
  ],
  authors: [{ name: "Shamiul Shakib" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shamiul Shakib — Full-Stack Software Engineer (NestJS • React/Next.js • Python/Django)",
    description: "Full-Stack Software Engineer with 2+ years of hands-on experience building production-ready web applications, enterprise SaaS/ERP modules, e-commerce platforms, and AI-powered backend services.",
    type: "website",
    siteName: "Shamiul Shakib Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Shamiul Shakib — Full-Stack Software Engineer (NestJS • React/Next.js • Python/Django)",
    description: "Full-Stack Software Engineer with 2+ years of hands-on experience building production-ready web applications, enterprise SaaS/ERP modules, e-commerce platforms, and AI-powered backend services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full">
      <body className="antialiased overflow-x-hidden max-w-full">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
