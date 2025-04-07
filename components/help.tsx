import {
  ChevronRight,
  HelpCircle,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const helpTopics = [
  {
    icon: Users,
    title: "Hiring Process",
    description: "Learn about our application steps and timeline",
  },
  {
    icon: MessageCircle,
    title: "Common Questions",
    description: "Find answers to frequently asked questions",
  },
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get started with your application quickly",
  },
];

export function Help() {
  return (
    <section
      id="help"
      className="relative overflow-hidden py-16"
      aria-label="Help and support section"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="bg-background/50 border-foreground/5 dark:bg-background/30 dark:border-foreground/5 relative overflow-hidden border backdrop-blur-sm">
          <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:250%_250%] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]" />
          <CardContent className="relative space-y-8 py-8">
            <div className="flex flex-col items-center space-y-6">
              <div
                className="bg-primary/10 text-primary inline-flex items-center gap-2 self-center rounded-full px-4 py-1.5 text-sm font-medium"
                role="status"
                aria-label="Support availability"
              >
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
              <div className="max-w-2xl text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get to know our hiring process before you apply or find
                  answers to any lingering questions, right here, right now.
                </p>
              </div>
            </div>

            <div
              className="grid gap-4 md:grid-cols-3"
              role="list"
              aria-label="Help topics"
            >
              {helpTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card
                    key={index}
                    className="group border-foreground/5 relative cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg"
                    role="listitem"
                  >
                    <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div
                            className="bg-primary/10 text-primary rounded-lg p-2"
                            aria-hidden="true"
                          >
                            <Icon className="size-5" />
                          </div>
                          <ChevronRight
                            className="size-5 transition-transform duration-300"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{topic.title}</h3>
                          <p className="text-muted-foreground mt-1 text-sm">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-2 pt-4">
              <HelpCircle
                className="text-muted-foreground size-4"
                aria-hidden="true"
              />
              <span className="text-muted-foreground text-sm">
                Can&apos;t find what you&apos;re looking for?{" "}
                <Button
                  variant="link"
                  className="text-primary h-auto p-0 text-sm font-medium"
                  aria-label="Contact support team"
                >
                  Contact Support
                </Button>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
