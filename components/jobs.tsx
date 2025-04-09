"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { WaitlistForm } from "./waitlist-form";

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

type Job = {
  title: string;
  location: string;
  type: string;
  timezone: string;
  posted: string;
  skills: string[];
  salary: string;
  company: string;
  logo: string;
  featured: boolean;
};

function useDialog() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const open = (id: string) => setActiveDialog(id);
  const close = () => setActiveDialog(null);
  const isOpen = (id: string) => activeDialog === id;

  return {
    open,
    close,
    isOpen,
  };
}

export function Jobs() {
  const dialog = useDialog();

  return (
    <section id="jobs" className="relative overflow-hidden py-16 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              We help you to get your dream job
            </h2>
            <WaitlistDialog
              open={dialog.isOpen("header")}
              onOpenChange={(open) =>
                open ? dialog.open("header") : dialog.close()
              }
            >
              <Button
                variant="outline"
                size="sm"
                className="group w-full rounded-full sm:w-auto"
                onClick={() => dialog.open("header")}
              >
                <span className="flex items-center justify-center gap-1.5">
                  View All
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </WaitlistDialog>
          </div>

          <div className="divide-border bg-background/50 divide-y rounded-lg border backdrop-blur-sm">
            {jobs.slice(0, 2).map((job, index) => (
              <JobCard
                key={index}
                job={job}
                showWaitlist={dialog.isOpen(`job-${index}`)}
                setShowWaitlist={(open) =>
                  open ? dialog.open(`job-${index}`) : dialog.close()
                }
                onApplyClick={() => dialog.open(`job-${index}`)}
              />
            ))}

            <div className="group hover:bg-muted/30 relative p-4 transition-colors sm:p-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/5 text-primary ring-primary/10 group-hover:ring-primary/20 rounded-full p-2 ring-2 transition-all duration-300">
                    <Mail className="size-4" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    Weekly Remote Job Alert
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground max-w-md px-2 text-sm leading-relaxed sm:px-0">
                    Get personalized remote customer service opportunities that
                    match your timezone and preferences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5 px-2 text-xs sm:px-0">
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
                <WaitlistDialog
                  open={dialog.isOpen("alert")}
                  onOpenChange={(open) =>
                    open ? dialog.open("alert") : dialog.close()
                  }
                >
                  <Button
                    className="w-full max-w-md cursor-pointer rounded-full"
                    onClick={() => dialog.open("alert")}
                  >
                    Join Waitlist
                  </Button>
                </WaitlistDialog>
                <p className="text-muted-foreground text-xs font-medium">
                  Join 2,000+ professionals who receive our weekly job alerts
                </p>
              </div>
            </div>

            {jobs.slice(2).map((job, index) => (
              <JobCard
                key={index + 2}
                job={job}
                showWaitlist={dialog.isOpen(`job-${index + 2}`)}
                setShowWaitlist={(open) =>
                  open ? dialog.open(`job-${index + 2}`) : dialog.close()
                }
                onApplyClick={() => dialog.open(`job-${index + 2}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type JobCardProps = {
  job: Job;
  showWaitlist: boolean;
  setShowWaitlist: (open: boolean) => void;
  onApplyClick: () => void;
};

function JobCard({
  job,
  showWaitlist,
  setShowWaitlist,
  onApplyClick,
}: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative p-4 transition-colors",
        job.featured
          ? "bg-primary/[0.03] hover:bg-primary/[0.05] border-l-primary border-l-2"
          : "hover:bg-muted/50",
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {job.featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium">
          <div className="bg-primary/[0.08] hover:bg-primary/[0.12] text-primary flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors">
            <span className="bg-primary/80 size-1.5 rounded-full" />
            Featured
          </div>
        </div>
      )}

      <div className="flex flex-col items-start gap-4 sm:flex-row">
        <div
          className={cn(
            "relative h-12 w-12 shrink-0 overflow-hidden rounded-lg",
            job.featured ? "bg-primary/[0.08] p-1.5" : "bg-background p-1",
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

        <div className="w-full flex-1 space-y-3">
          <div>
            <h3
              className={cn(
                "text-base font-medium transition-colors",
                job.featured ? "text-primary" : "group-hover:text-primary",
              )}
            >
              {job.title}
            </h3>
            <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span>{job.company}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3.5" />
                {job.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{job.posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs",
                job.featured
                  ? "bg-primary/[0.08] text-primary"
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
                  ? "bg-primary/[0.08] text-primary"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {job.salary}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-1.5">
              {job.skills
                .slice(0, isExpanded ? undefined : 2)
                .map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={cn(
                      "rounded-full text-xs transition-colors",
                      job.featured
                        ? "bg-primary/[0.08] text-primary hover:bg-primary/[0.12]"
                        : "bg-muted hover:bg-muted/80",
                    )}
                  >
                    {skill}
                  </Badge>
                ))}
              {job.skills.length > 2 && !isExpanded && (
                <Badge
                  variant="secondary"
                  className="bg-muted hover:bg-muted/80 rounded-full text-xs"
                >
                  +{job.skills.length - 2} more
                </Badge>
              )}
            </div>
            <Button
              size="sm"
              variant={job.featured ? "default" : "outline"}
              className="group/btn relative w-full shrink-0 cursor-pointer rounded-full transition-all duration-300 hover:scale-105 sm:w-auto"
              onClick={(e) => {
                e.stopPropagation();
                onApplyClick();
              }}
            >
              <span className="flex items-center justify-center gap-1.5">
                Apply Now
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <WaitlistDialog open={showWaitlist} onOpenChange={setShowWaitlist}>
        <div className="sr-only">Apply Now Dialog</div>
      </WaitlistDialog>
    </div>
  );
}

function WaitlistDialog({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Join Our Waitlist</DialogTitle>
        </DialogHeader>
        <WaitlistForm onSubmit={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
