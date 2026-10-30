import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/case-study";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Project not found — Mohit" };
  }

  const title = caseStudy.seoTitle ?? `${caseStudy.title} | Mohit Nagarkar`;
  const description =
    caseStudy.seoDescription ??
    caseStudy.summary;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(`/projects/${caseStudy.slug}/`) },
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Mohit Nagarkar Portfolio",
      url: absoluteUrl(`/projects/${caseStudy.slug}/`),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyView caseStudy={caseStudy} />;
}
