import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Shamiul Shakib — Software Engineer — Full Stack & AI Systems",
  description: "Solution-focused Full Stack Engineer with 2+ years of experience shipping production web applications and microservices using NestJS, ReactJS, Django, TypeScript, Python & AWS.",
  keywords: ["software engineer", "full-stack developer", "AI systems", "NestJS", "ReactJS", "Django", "Python", "TypeScript", "AWS", "microservices", "REST API", "AutoTaskX", "GitRabbit"],
  authors: [{ name: "Shamiul Shakib" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shamiul Shakib — Software Engineer — Full Stack & AI Systems",
    description: "Solution-focused Full Stack Engineer with 2+ years of experience shipping production web applications and microservices using NestJS, ReactJS, Django, TypeScript, Python & AWS.",
    type: "website",
    siteName: "Shamiul Shakib Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Shamiul Shakib — Software Engineer — Full Stack & AI Systems",
    description: "Solution-focused Full Stack Engineer with 2+ years of experience shipping production web applications and microservices using NestJS, ReactJS, Django, TypeScript, Python & AWS.",
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
