// CaseStudiesSection.tsx (SERVER)
import { getCaseStudies } from "@/lib/caseStudyApi";
import CaseStudiesClient from "./CaseStudiesClient";

export default async function CaseStudiesSection() {
  const initialData = await getCaseStudies();

  return <CaseStudiesClient initialData={initialData} />;
}
