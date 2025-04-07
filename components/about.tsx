import { ArrowRight, Globe, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section
      className="relative overflow-hidden py-16"
      aria-label="About AlignDesk"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        <div className="from-background via-background/95 to-primary/10 absolute inset-0 bg-gradient-to-br" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_100%)]" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid gap-8 md:grid-cols-2"
          role="list"
          aria-label="Key features and mission"
        >
          <Card
            className="group bg-background/80 relative overflow-hidden border-none backdrop-blur-sm transition-all hover:shadow-lg"
            role="listitem"
          >
            <CardContent className="flex flex-col gap-8 p-10">
              <div
                className="relative flex size-14 items-center justify-center"
                aria-hidden="true"
              >
                <div className="bg-primary/10 absolute size-full rounded-full transition-transform duration-500 ease-out group-hover:scale-150" />
                <Zap
                  className="text-primary size-8 transition-all duration-500 ease-out group-hover:scale-105"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  Key Features
                </p>
                <h2 className="text-[2.5rem] leading-tight font-normal">
                  Smart Job Matching
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our advanced algorithm matches you with remote customer
                  service roles that align with your timezone, skills, and
                  preferences.
                </p>
              </div>
              <Button
                variant="link"
                className="group hover:text-primary -ml-3 flex w-fit items-center gap-3"
                aria-label="Learn more about our features"
              >
                <span className="text-sm font-medium">Explore Features</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </CardContent>
          </Card>

          <Card
            className="group bg-primary text-primary-foreground relative overflow-hidden border-none transition-all hover:shadow-lg"
            role="listitem"
          >
            <CardContent className="flex flex-col gap-8 p-10">
              <div
                className="relative flex size-14 items-center justify-center"
                aria-hidden="true"
              >
                <div className="bg-primary-foreground/10 absolute size-full rounded-full transition-transform duration-500 ease-out group-hover:scale-150" />
                <Globe
                  className="size-8 transition-all duration-500 ease-out group-hover:scale-105"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-4">
                <p className="text-primary-foreground/80 text-xs font-medium tracking-widest uppercase">
                  Our Mission
                </p>
                <h2 className="text-[2.5rem] leading-tight font-normal">
                  Global Opportunities
                </h2>
                <p className="text-primary-foreground/90 text-base leading-relaxed">
                  We&apos;re on a mission to revolutionize remote customer
                  service hiring by connecting talented professionals with
                  companies worldwide.
                </p>
              </div>
              <Button
                variant="link"
                className="group text-primary-foreground hover:text-primary-foreground/80 -ml-3 flex w-fit items-center gap-3"
                aria-label="Join our mission"
              >
                <span className="text-sm font-medium">Join Our Mission</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
