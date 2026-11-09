const slugs = {
  service: [
    "ai-automation",
    "ai-development",
    "custom-software",
    "saas-engineering",
    "web-development",
    "mobile-apps",
    "api-integration",
    "ui-ux-design",
    "cloud-systems",
    "digital-marketing-services",
    "search-engine-optimization-seo",
    "ecommerce-solutions",
  ],
  work: [
    "luxury-transportation-industry",
    "automotive-repair-engine-replacement-industry",
    "how-vogue-technics-transformed-from-manual-garage-operations-to-a-fully-digital-system",
    "from-paid-ads-to-organic-growth-how-we-transformed-a-dubai-childrens-books-store-with-seo",
    "how-we-grew-a-finance-expo-website-from-37-to-629k-visitors-in-just-3-months-a-real-seo-case-study",
    "how-automated-service-reminders-increased-repeat-customers",
    "how-a-uk-garage-reduced-administrative-work-by-60-using-4xcode-garage-software",
  ],
};

const config = {
  siteUrl: "https://4xcode.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  additionalPaths: async () => {
    const paths = [];

    paths.push({ loc: "/", changefreq: "daily", priority: 1.0 });
    paths.push({ loc: "/product/garage-management-system", changefreq: "weekly", priority: 0.8 });

    paths.push({ loc: "/blog", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/about", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/work", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/thank-you", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/contact", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/service", changefreq: "daily", priority: 0.9 });

    slugs.service.forEach((slug) => {
      paths.push({
        loc: `/service/${slug}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    slugs.work.forEach((slug) => {
      paths.push({
        loc: `/work/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });

    const base = (process.env.BLOG_API_BASE ?? "").replace(/\/$/, "");
    const user = process.env.BLOG_API_USERNAME ?? "";
    const pass = process.env.BLOG_API_PASSWORD ?? "";

    const auth =
      user && pass
        ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`
        : "";

    try {
      if (base) {
        const res = await fetch(`${base}/blogs/`, {
          headers: auth ? { Authorization: auth } : {},
        });

        if (res.ok) {
          const data = await res.json();
          const blogs = Array.isArray(data) ? data : [];

          blogs.forEach((blog) => {
            const slug = blog?.slug ?? blog?.id;

            if (slug) {
              paths.push({
                loc: `/blog/${slug}`,
                changefreq: "weekly",
                priority: 0.8,
              });
            }
          });
        }
      }
    } catch (err) {
      console.warn(
        "[next-sitemap] Could not fetch blog slugs:",
        err instanceof Error ? err.message : err
      );
    }

    const garage_blog_base = (
      process.env.Garage_BLOG_API_BASE ?? ""
    ).replace(/\/$/, "");

    try {

      if (garage_blog_base) {
        const res = await fetch(`${garage_blog_base}/blogs/`, {
          headers: auth ? { Authorization: auth } : {},
          cache: "no-store",
        });

        if (!res.ok) {
          console.warn(
            "[next-sitemap] Garage Blog API error:",
            res.status,
            await res.text()
          );
        } else {
          const data = await res.json();
          const blogs = Array.isArray(data) ? data : [];

          blogs.forEach((blog) => {
            const slug = blog?.slug ?? blog?.id;

            if (slug) {
              paths.push({
                loc: `/blog/${slug}`,
                changefreq: "weekly",
                priority: 0.8,
              });
            }
          });
        }
      }
    } catch (err) {
      console.warn(
        "[next-sitemap] Could not fetch Garage blog slugs:",
        err instanceof Error ? err.message : err
      );
    }

    return paths;
  },
};

module.exports = config;