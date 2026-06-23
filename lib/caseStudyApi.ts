function getConfig() {
  const base = (process.env.BLOG_API_BASE ?? "").replace(/\/$/, "");
  const user = process.env.BLOG_API_USERNAME ?? "";
  const pass = process.env.BLOG_API_PASSWORD ?? "";

  const auth =
    user && pass
      ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`
      : "";

  return { base, auth };
}

export interface GarageImage {
  id: number;
  image: string;
  uploaded_at: string;
}

export interface CaseStudyResponse {
  content_type: "case_study" | string;
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: string | null;
  category: string | null;
  meta_title: string | null;
  meta_description: string | null;
  schema: any | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  images: GarageImage[];
}

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  images: GarageImage[];
  date?: string;
  category?: string;
  author?: string;
  content_type?: string;
};

// ==========================================
// Normalisation Utility
// ==========================================

function normaliseCaseStudy(raw: CaseStudyResponse): CaseStudy {
  let image =
    raw?.image ||
    (Array.isArray(raw?.images) && raw.images.length > 0
      ? raw.images[0]?.image
      : "") ||
    "";

  // Cloudinary URLs without file extension need a format appended
  // otherwise Next.js image optimisation can fail
  if (
    image &&
    image.includes("res.cloudinary.com") &&
    !/\.(jpg|jpeg|png|webp|avif|gif|svg)(\?|$)/i.test(image)
  ) {
    image = `${image}.jpg`;
  }

  return {
    id: String(raw?.slug ?? raw?.id ?? ""),
    slug: String(raw?.slug ?? raw?.id ?? ""),
    title: String(raw?.title ?? ""),
    excerpt: String(raw?.excerpt ?? ""),
    content: String(raw?.content ?? ""),
    image,
    images: Array.isArray(raw?.images) ? raw.images : [],
    date: String(raw?.created_at ?? ""),
    category: raw?.category != null ? String(raw.category) : "Case Study",
    author: raw?.author ? String(raw.author) : undefined,
    content_type: String(raw?.content_type ?? "case_study"),
  };
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const { base, auth } = getConfig();

  if (!base) return [];

  try {
    const res = await fetch(`${base}/case-studies/`, {
      method: "GET",
      headers: auth ? { Authorization: auth } : {},
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      console.log("API ERROR (Case Studies):", res.status, err);
      return [];
    }

    const data = await res.json();

    const caseStudiesArray = Array.isArray(data) ? data : [];

    return caseStudiesArray.map(normaliseCaseStudy);
  } catch (error: any) {
    console.error("getCaseStudies error:", error.message);
    return [];
  }
}

export async function fetchCaseStudy(slug: string): Promise<CaseStudy | null> {
  const { base, auth } = getConfig();

  if (!base) {
    return null;
  }

  const url = `${base}/case-studies/${slug}/`;
  const res = await fetch(url, {
    headers: auth ? { Authorization: auth } : {},
    next: { revalidate: 300 },
  });

  if (res.status === 404) return null;
  if (!res.ok)
    throw new Error(`Failed to fetch case study: ${res.status} (url: ${url})`);

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    throw new Error("Case study response is not valid JSON");
  }

  const raw: CaseStudyResponse =
    data && typeof data === "object" && (data as any).data
      ? (data as any).data
      : data;

  return normaliseCaseStudy(raw);
}
