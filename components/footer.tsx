import { Layout, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  product: [
    { label: "Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Help Center", href: "/help" },
    { label: "Pricing", href: "/pricing" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background/80 border-t backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-16 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand and Newsletter Section */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <Layout className="text-primary h-6 w-6" />
              <span className="after:bg-primary relative text-xl font-bold after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:transition-all group-hover:after:w-full">
                AlignDesk
              </span>
            </Link>
            <p className="text-muted-foreground mt-6 max-w-sm text-sm leading-relaxed">
              Find remote customer service jobs that match your timezone. Join
              thousands of professionals working from anywhere.
            </p>
            <div className="mt-8">
              <form className="flex max-w-sm flex-col gap-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Subscribe to our newsletter..."
                    className="bg-background/80 focus:border-primary/20 focus:ring-primary/10 h-11 rounded-full pr-12 backdrop-blur-sm transition-all"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute top-1/2 right-1.5 h-8 w-8 -translate-y-1/2 rounded-full"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground text-xs">
                  Get weekly updates about remote job opportunities.
                </p>
              </form>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-foreground text-sm font-semibold">Company</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">Product</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">Connect</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} AlignDesk
              </p>
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ for remote workers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
