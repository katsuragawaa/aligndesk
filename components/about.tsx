import { ArrowRight, Globe, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <Card className="group relative overflow-hidden border-none bg-white transition-all hover:shadow-lg">
            <CardContent className="flex flex-col gap-8 p-10">
              <div className="relative flex size-14 items-center justify-center">
                <div className="absolute size-full rounded-full bg-neutral-900/[0.03] transition-transform duration-500 ease-out group-hover:scale-150" />
                <Zap
                  className="size-8 text-neutral-900 transition-all duration-500 ease-out group-hover:scale-105"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                  Key Features
                </p>
                <h2 className="text-[2.5rem] leading-tight font-normal text-neutral-900">
                  Smart Job Matching
                </h2>
                <p className="text-base leading-relaxed text-neutral-600">
                  Our advanced algorithm matches you with remote customer
                  service roles that align with your timezone, skills, and
                  preferences.
                </p>
              </div>
              <Button
                variant="link"
                className="group -ml-3 flex w-fit items-center gap-3 text-neutral-900 hover:text-neutral-600"
              >
                <span className="text-sm font-medium">Explore Features</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-none bg-neutral-900 transition-all hover:shadow-lg">
            <CardContent className="flex flex-col gap-8 p-10">
              <div className="relative flex size-14 items-center justify-center">
                <div className="absolute size-full rounded-full bg-white/[0.03] transition-transform duration-500 ease-out group-hover:scale-150" />
                <Globe
                  className="size-8 text-white transition-all duration-500 ease-out group-hover:scale-105"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                  Our Mission
                </p>
                <h2 className="text-[2.5rem] leading-tight font-normal text-white">
                  Global Opportunities
                </h2>
                <p className="text-base leading-relaxed text-neutral-300">
                  We're on a mission to revolutionize remote customer service
                  hiring by connecting talented professionals with companies
                  worldwide.
                </p>
              </div>
              <Button
                variant="link"
                className="group -ml-3 flex w-fit items-center gap-3 text-white hover:text-neutral-300"
              >
                <span className="text-sm font-medium">Join Our Mission</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
