import { notFound } from "next/navigation";
import { fetchCaseStudy } from "@/lib/caseStudyApi"; 
import WorkDetailPage from "../../../components/caseStudy/workDetailPage";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
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