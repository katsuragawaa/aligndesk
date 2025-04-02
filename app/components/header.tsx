import Link from "next/link";
import { Layout } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Layout className="h-6 w-6" />
          <span className="after:bg-primary relative text-xl font-bold after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full">
            AlignDesk
          </span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            href="/jobs"
            className="after:bg-primary hover:text-primary relative text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
          >
            Jobs
          </Link>
          <Link
            href="/companies"
            className="after:bg-primary hover:text-primary relative text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
          >
            Companies
          </Link>
          <Link
            href="/about"
            className="after:bg-primary hover:text-primary relative text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
