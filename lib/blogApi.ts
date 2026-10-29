export function getConfig() {
  const base = (process.env.BLOG_API_BASE ?? "").replace(/\/$/, "");
  const user = process.env.BLOG_API_USERNAME ?? "";
  const pass = process.env.BLOG_API_PASSWORD ?? "";

  const auth =
    user && pass
      ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`
      : "";

  return { base, auth };
}

export function getGarageBlogConfig() {
  const base = (process.env.Garage_BLOG_API_BASE ?? "").replace(/\/$/, "");
  const user = process.env.BLOG_API_USERNAME ?? "";
  const pass = process.env.BLOG_API_PASSWORD ?? "";

  const auth =
    user && pass
      ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`
      : "";

  return { base, auth };
}

export type BlogImage = {
  id: number;
  image: string;
  uploaded_at?: string;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  meta_title?: string;
  meta_description?: string;
  content?: string;
  image: string;
  images: BlogImage[];
  date?: string;
  category?: string;
  author?: string;
};


function normalise(raw: any): Blog {
  return {
    id: String(raw?.slug ?? raw?.id ?? ""),
    slug: String(raw?.slug ?? raw?.id ?? ""),
    title: String(raw?.title ?? ""),
    meta_title: String(raw?.meta_title ?? "").trim(),
    meta_description: String(raw?.meta_description ?? "").trim(),
    excerpt: String(raw?.excerpt ?? raw?.description ?? ""),
    content: String(raw?.content ?? raw?.body ?? ""),
    image: String(raw?.image ?? ""),
    images: Array.isArray(raw?.images) ? raw.images : [],
    date: String(raw?.created_at ?? raw?.date ?? ""),
    category: String(raw?.category ?? ""),
    author: raw?.author ? String(raw.author) : undefined,
  };
}

export async function getBlogs(): Promise<Blog[]> {
  const { base, auth } = getConfig();

  if (!base) return [];

  try {
    const res = await fetch(`${base}/blogs/`, {
      method: "GET",
      headers: auth ? { Authorization: auth } : {},
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      console.log("API ERROR:", res.status, err);
      return [];
    }

    const data = await res.json();


    const blogsArray = Array.isArray(data) ? data : [];

    return blogsArray.map(normalise);
  } catch (error: any) {
    console.error("getBlogs error:", error.message);
    return [];
  }
}
export async function getGarageBlogs(): Promise<Blog[]> {
  const { base, auth } = getGarageBlogConfig();

  if (!base) return [];

  try {
    const res = await fetch(`${base}/blogs/`, {
      method: "GET",
      headers: auth ? { Authorization: auth } : {},
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      console.log("API ERROR:", res.status, err);
      return [];
    }

    const data = await res.json();


    const blogsArray = Array.isArray(data) ? data : [];

    return blogsArray.map(normalise);
  } catch (error: any) {
    console.error("getBlogs error:", error.message);
    return [];
  }
}



export async function fetchBlog(slug: string): Promise<Blog | null> {
  let { base, auth } = getGarageBlogConfig();

  if (base) {
    const url = `${base}/blogs/${slug}/`;

    const res = await fetch(url, {
      headers: auth ? { Authorization: auth } : {},
      next: { revalidate: 300 },
    });

    if (res.ok) {
      const data = await res.json();
      const raw = data?.data ?? data;
      return normalise(raw);
    }
  }
  ({ base, auth } = getConfig());
  if (!base) return null;

  const url = `${base}/blogs/${slug}/`;
  const res = await fetch(url, {
    headers: auth ? { Authorization: auth } : {},
    next: { revalidate: 300 },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Failed to fetch blog: ${res.status}`);
  }

  const data = await res.json();
  const raw = data?.data ?? data;

  return normalise(raw);
}
