import { Layout } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-border/40 border-t"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="AlignDesk home"
            >
              <Layout className="h-5 w-5" aria-hidden="true" />
              <span className="text-lg font-semibold">AlignDesk</span>
            </Link>
            <p className="text-muted-foreground mt-4 hidden max-w-xs text-sm sm:block">
              Find remote customer service jobs that match your timezone and
              work preferences.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-3"
            aria-label="Footer navigation"
          >
            <div>
              <p
                className="mb-3 text-sm font-medium sm:mb-4"
                id="footer-product"
              >
                Product
              </p>
              <ul
                className="space-y-2.5 sm:space-y-3"
                aria-labelledby="footer-product"
              >
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="mb-3 text-sm font-medium sm:mb-4"
                id="footer-resources"
              >
                Resources
              </p>
              <ul
                className="space-y-2.5 sm:space-y-3"
                aria-labelledby="footer-resources"
              >
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-3 text-sm font-medium sm:mb-4" id="footer-legal">
                Legal
              </p>
              <ul
                className="space-y-2.5 sm:space-y-3"
                aria-labelledby="footer-legal"
              >
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground inline-block text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="border-border/40 mt-8 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm sm:text-left">
            © {new Date().getFullYear()} AlignDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
