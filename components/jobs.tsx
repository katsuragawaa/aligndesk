"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const jobs = [
  {
    title: "Remote Customer Support Specialist",
    location: "Americas",
    type: "Remote",
    timezone: "UTC-8 to UTC-4",
    posted: "2h ago",
    skills: [
      "Customer Support",
      "Zendesk",
      "Live Chat",
      "Timezone Flexibility",
    ],
    salary: "$45,000 - $65,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: true,
  },
  {
    title: "EMEA Customer Success Manager",
    location: "Europe",
    type: "Remote",
    timezone: "UTC to UTC+3",
    posted: "5h ago",
    skills: ["Customer Success", "Account Management", "CRM", "EMEA Coverage"],
    salary: "$60,000 - $80,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: false,
  },
  {
    title: "APAC Technical Support Engineer",
    location: "Asia-Pacific",
    type: "Remote",
    timezone: "UTC+7 to UTC+11",
    posted: "1d ago",
    skills: ["Technical Support", "Troubleshooting", "APAC Hours", "Jira"],
    salary: "$50,000 - $70,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: false,
  },
  {
    title: "Global Customer Experience Lead",
    location: "Worldwide",
    type: "Remote",
    timezone: "Flexible Shifts",
    posted: "3d ago",
    skills: [
      "Team Leadership",
      "24/7 Operations",
      "Global Coverage",
      "Remote Management",
    ],
    salary: "$80,000 - $120,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: true,
  },
  {
    title: "Customer Support Team Lead",
    location: "North America",
    type: "Remote",
    timezone: "UTC-7 to UTC-4",
    posted: "1d ago",
    skills: [
      "Team Management",
      "Customer Support",
      "Process Improvement",
      "Training",
    ],
    salary: "$65,000 - $85,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: false,
  },
  {
    title: "Technical Support Specialist",
    location: "Europe",
    type: "Remote",
    timezone: "UTC+0 to UTC+2",
    posted: "2d ago",
    skills: [
      "Technical Support",
      "Product Knowledge",
      "Problem Solving",
      "Documentation",
    ],
    salary: "$55,000 - $75,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: false,
  },
  {
    title: "Customer Success Representative",
    location: "Asia-Pacific",
    type: "Remote",
    timezone: "UTC+8 to UTC+11",
    posted: "4d ago",
    skills: [
      "Customer Success",
      "Onboarding",
      "Product Training",
      "APAC Markets",
    ],
    salary: "$50,000 - $70,000",
    company: "Microsoft",
    logo: "/companies/logo-microsoft-512.png",
    featured: false,
  },
];

export function Jobs() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Remote Jobs
            </h2>
            <Button variant="outline" size="sm" className="group rounded-full">
              <span className="flex items-center gap-1.5">
                View All
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>

          <div className="divide-border bg-background/50 divide-y rounded-lg border backdrop-blur-sm">
            {jobs.slice(0, 2).map((job, index) => (
              <JobCard key={index} job={job} />
            ))}

            <div className="group hover:bg-muted/30 relative p-6 transition-colors">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/5 text-primary ring-primary/10 group-hover:ring-primary/20 rounded-full p-2 ring-2 transition-all duration-300">
                    <Mail className="size-4" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Weekly Remote Job Alert
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                    Get personalized remote customer service opportunities that
                    match your timezone and preferences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 text-xs">
                    <div className="bg-muted text-muted-foreground rounded-full px-3 py-1">
                      Curated for your timezone
                    </div>
                    <div className="bg-muted text-muted-foreground rounded-full px-3 py-1">
                      Every Monday
                    </div>
                    <div className="bg-muted text-muted-foreground rounded-full px-3 py-1">
                      Free forever
                    </div>
                  </div>
                </div>
                <form
                  onSubmit={handleSubscribe}
                  className="mt-1 flex w-full max-w-md flex-col gap-2 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-muted bg-background/80 focus:border-primary/20 focus:ring-primary/10 h-10 rounded-full pr-12 backdrop-blur-sm transition-all duration-300 focus:ring-1"
                      required
                    />
                    <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1">
                      <Button
                        type="submit"
                        size="icon"
                        className="size-7 rounded-full"
                      >
                        <Send className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </form>
                <p className="text-muted-foreground text-xs font-medium">
                  Join 2,000+ professionals who receive our weekly job alerts
                </p>
              </div>
            </div>

            {jobs.slice(2).map((job, index) => (
              <JobCard key={index + 2} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  return (
    <div
      className={cn(
        "group relative cursor-pointer p-4 transition-colors",
        job.featured
          ? "before:bg-primary/10 hover:before:bg-primary/20 before:pointer-events-none before:absolute before:-inset-px before:rounded-lg"
          : "hover:bg-muted/50",
      )}
    >
      {job.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium">
          <div className="bg-primary/10 text-primary flex items-center gap-1 rounded-full px-2 py-0.5">
            <span className="relative flex size-1.5">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-primary relative inline-flex size-1.5 rounded-full"></span>
            </span>
            Featured
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={cn(
            "relative h-12 w-12 shrink-0 overflow-hidden rounded-lg p-1",
            job.featured ? "bg-primary/5" : "bg-background",
          )}
        >
          <Image
            src={job.logo}
            alt={job.company}
            className="h-full w-full object-contain"
            width={48}
            height={48}
          />
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h3
              className={cn(
                "text-base font-medium transition-colors",
                job.featured ? "text-primary" : "group-hover:text-primary",
              )}
            >
              {job.title}
            </h3>
            <div className="text-muted-foreground flex items-center gap-3 text-sm">
              <span>{job.company}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3.5" />
                {job.location}
              </span>
              <span>•</span>
              <span>{job.posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs",
                job.featured
                  ? "bg-primary/5 text-primary"
                  : "bg-muted text-muted-foreground",
              )}
            >
              <Clock className="size-3.5" />
              <span>{job.timezone}</span>
            </div>
            <div
              className={cn(
                "rounded-full px-2.5 py-1 text-xs",
                job.featured
                  ? "bg-primary/5 text-primary"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {job.salary}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {job.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className={cn(
                    "rounded-full text-xs transition-colors",
                    job.featured
                      ? "bg-primary/5 text-primary hover:bg-primary/10"
                      : "bg-muted hover:bg-muted/80",
                  )}
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <Button
              size="sm"
              variant={job.featured ? "default" : "outline"}
              className="group/btn relative shrink-0 rounded-full transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span className="flex items-center gap-1.5">
                Apply Now
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
