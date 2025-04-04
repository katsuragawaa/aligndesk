import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Jobs />
      <About />
    </main>
  );
}
