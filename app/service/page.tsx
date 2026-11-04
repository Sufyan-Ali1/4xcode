
import { pageMetadata } from "@/data/metadata";
import servicesSchema from "@/data/schema/service.json";
import JsonLd from "@/components/JsonLd";
import ServicesClient from "./ServiceClient";

export const metadata = pageMetadata.services;

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesClient />
    </>
  );
}
