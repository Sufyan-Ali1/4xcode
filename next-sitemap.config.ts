const slugs = {
  service: [
    "ai-development",
    "custom-software",
    "saas-engineering",
    "web-development",
    "mobile-apps",
    "api-integration",
    "automation-systems",
    "ui-ux-design",
    "cloud-systems",
    "seo-digital-marketing",
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
  blog: [
    "independent-garage-management-system",
    "top-10-challenges-uk-garages-face-in-2026",
    "best-saas-garage-management-platform",
    "digital-garage-management-software",
  ],
};

const config = {
  siteUrl: "https://4xcode.com/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async (config: any) => {
    const paths: any[] = [];

    paths.push({ loc: "/blog", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/about", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/work", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/thank-you", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/contact", changefreq: "daily", priority: 0.9 });
    paths.push({ loc: "/service", changefreq: "daily", priority: 0.9 });
    // Loop through services
    slugs.service.forEach((slug) => {
      paths.push({
        loc: `/service/${slug}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });

    // Loop through work
    slugs.work.forEach((slug) => {
      paths.push({
        loc: `/work/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });

    // Loop through blogs
    slugs.blog.forEach((slug) => {
      paths.push({ loc: `/blog/${slug}`, changefreq: "weekly", priority: 0.8 });
    });

    return paths;
  },
};

export default config;
