
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { serviceMetadata } from "@/data/metadata";
import { serviceSchemas } from "@/data/schema/services";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";

type Props = {
    children: ReactNode;
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    if (
        !Object.prototype.hasOwnProperty.call(serviceSchemas, slug) ||
        !Object.prototype.hasOwnProperty.call(serviceMetadata, slug)
    ) {
        notFound();
    }

    return {
        ...serviceMetadata[slug],
        alternates: {
            canonical: `https://www.4xcode.com/service/${slug}`,
        },
    };
}

export default async function ServiceLayout({
    children,
    params,
}: Props) {
    const { slug } = await params;
    if (!Object.prototype.hasOwnProperty.call(serviceSchemas, slug)) {
        notFound();
    }

    const schema = serviceSchemas[slug];

    return (
        <>
            <JsonLd data={schema} />
            {children}
        </>
    );
}
