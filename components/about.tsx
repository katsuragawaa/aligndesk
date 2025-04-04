import { cn } from "@/lib/utils";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ArrowRight, CheckCircle2, Target } from "lucide-react";
import { Button } from "./ui/button";

export function About() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-background/50 border-foreground/5 dark:bg-background/30 dark:border-foreground/5 relative overflow-hidden border backdrop-blur-sm">
            <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:250%_250%] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]" />
            <CardContent className="relative space-y-6 py-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <CheckCircle2 className="size-5" />
                </div>
                <CardTitle className="text-2xl font-bold">Key Features</CardTitle>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Smart Job Matching</h3>
                  <p className="text-muted-foreground">
                    Our advanced algorithm matches you with remote customer service roles that align with your timezone, skills, and preferences.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Weekly Job Alerts</h3>
                  <p className="text-muted-foreground">
                    Stay updated with personalized job opportunities delivered straight to your inbox every Monday.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Global Opportunities</h3>
                  <p className="text-muted-foreground">
                    Access remote customer service positions from companies worldwide, with flexible timezone requirements.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="group rounded-full">
                <span className="flex items-center gap-1.5">
                  Learn More
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border-foreground/5 dark:bg-background/30 dark:border-foreground/5 relative overflow-hidden border backdrop-blur-sm">
            <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:250%_250%] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]" />
            <CardContent className="relative space-y-6 py-8">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <Target className="size-5" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We're on a mission to revolutionize remote customer service hiring by connecting talented professionals with companies that value their timezone flexibility and expertise.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Our Values</h3>
                  <ul className="text-muted-foreground list-inside list-disc space-y-1">
                    <li>Empowering remote work opportunities</li>
                    <li>Prioritizing work-life balance</li>
                    <li>Fostering global connections</li>
                    <li>Ensuring fair and transparent hiring</li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" className="group rounded-full">
                <span className="flex items-center gap-1.5">
                  Join Our Mission
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 