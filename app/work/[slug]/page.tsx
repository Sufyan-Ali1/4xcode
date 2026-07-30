import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchCaseStudy } from "@/lib/caseStudyApi"; 
import WorkDetailPage from "../../../components/caseStudy/workDetailPage";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = typeof slug === "string" ? decodeURIComponent(slug) : "";

  const canonicalUrl = `https://www.4xcode.com/work/${cleanSlug}`;

  return {
    title: "Case Studies & Work | Senior Engineering Studio",
    description: "Explore our case studies detailing production systems, AI integration, and enterprise software engineered for modern teams.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function CaseStudySlugPage({ params }: PageProps) {
  const { slug } = await params;

  const cleanSlug = typeof slug === "string" ? decodeURIComponent(slug) : "";
  const study = await fetchCaseStudy(cleanSlug);

  if (!study) {
    notFound();
  }

  return <WorkDetailPage study={study} />;
}