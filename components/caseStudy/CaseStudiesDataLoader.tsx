// components/work/CaseStudiesDataLoader.tsx
import React from "react";
import WorkGrid from "./WorkGrid";
import { getCaseStudies } from "@/lib/caseStudyApi";

export default async function CaseStudiesDataLoader() {
  // Safe backend server execution container
  const caseStudies = await getCaseStudies();

  return <WorkGrid caseStudies={caseStudies} />;
}
