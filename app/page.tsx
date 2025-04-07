import { Hero } from "@/components/hero";
import { Jobs } from "@/components/jobs";
import { About } from "@/components/about";
import { Help } from "@/components/help";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Jobs />
      <About />
      <Help />
    </main>
  );
}
