import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
  ],
  Support: [
    { label: "Documentation", href: "/docs" },
    { label: "Contact", href: "/contact" },
    { label: "Status", href: "/status" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="text-lg font-bold tracking-tight text-black dark:text-white">
              MyBrand
            </Link>
            <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Building great products for great people.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-black dark:text-white">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-black/10 pt-8 dark:border-white/10">
          <p className="text-center text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
