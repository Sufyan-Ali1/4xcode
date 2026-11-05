import WorkGrid from "./WorkGrid";
import { getCaseStudies } from "@/lib/caseStudyApi";
import JsonLd from "@/components/JsonLd";
import worksSchema from "@/data/schema/works.json";

export default async function CaseStudiesDataLoader({ schema = worksSchema }: { schema?: typeof worksSchema }) {
  const caseStudies = await getCaseStudies();
  const rawTemplate = schema["@graph"].find((node) => node["@type"] === "ItemList")?.itemListElement?.[0]?.item;
  const template = rawTemplate && typeof rawTemplate === "object" ? rawTemplate : {};
  const pageSchema = {
    ...schema,
    "@graph": schema["@graph"].map((node) => node["@type"] === "ItemList" ? {
      ...node,
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          ...template,
          name: project.title,
          description: project.excerpt,
          url: `https://www.4xcode.com/work/${project.slug}`,
        },
      })),
    } : node),
  };

  return <><JsonLd data={pageSchema} /><WorkGrid caseStudies={caseStudies} /></>;
}
