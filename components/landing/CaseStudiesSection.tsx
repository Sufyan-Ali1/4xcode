import { getCaseStudies } from "@/lib/caseStudyApi";
import home from "@/data/home.json";
import CaseStudiesClient from "./CaseStudiesClient";

export default async function CaseStudiesSection({ data = home.work }: { data?: typeof home.work }) {
  const initialData = await getCaseStudies();

  return <CaseStudiesClient initialData={initialData} data={data} />;
}
