import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Help() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="bg-background/50 border-foreground/5 dark:bg-background/30 dark:border-foreground/5 relative overflow-hidden border backdrop-blur-sm">
          <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:250%_250%] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]" />
          <CardContent className="relative space-y-4 py-8">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-primary/10 text-primary inline-flex items-center gap-2 self-center rounded-full px-4 py-1.5 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                    <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
                  </span>
                  24/7 Support Available
                </div>
                <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tight sm:text-7xl">
                    <span>WE&apos;D </span>
                    <span className="from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-transparent">
                      LIKE
                    </span>
                    <span> & </span>
                    <span className="text-indigo-400">LOVE</span>
                    <span> TO HELP.</span>
                  </h2>
                </div>
              </div>

              <div className="max-w-2xl text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get to know our hiring process before you apply or find
                  answers to any lingering questions, right here, right now.
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Button className="group relative h-12 rounded-full px-8 font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                <div className="flex flex-wrap items-center justify-center gap-8">
                  {["Fast Response", "Expert Team", "Global Support"].map(
                    (item) => (
                      <div
                        key={item}
                        className="text-muted-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
