import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectDetailsView from "./ProjectDetailsView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];
  if (!project) {
    return {
      title: "Project Not Found — Shamiul Shakib",
    };
  }

  return {
    title: `${project.name} — Shamiul Shakib`,
    description: `${project.desc}. ${project.tech}`,
    openGraph: {
      title: `${project.name} — Shamiul Shakib`,
      description: project.desc,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.name} — Shamiul Shakib`,
      description: project.desc,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailsView slug={slug} />;
}
