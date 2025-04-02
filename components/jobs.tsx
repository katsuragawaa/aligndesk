"use client";

import { Clock, Globe, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
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
  },
  {
    title: "EMEA Customer Success Manager",
    location: "Europe",
    type: "Remote",
    timezone: "UTC to UTC+3",
    posted: "5h ago",
    skills: ["Customer Success", "Account Management", "CRM", "EMEA Coverage"],
  },
  {
    title: "APAC Technical Support Engineer",
    location: "Asia-Pacific",
    type: "Remote",
    timezone: "UTC+7 to UTC+11",
    posted: "1d ago",
    skills: ["Technical Support", "Troubleshooting", "APAC Hours", "Jira"],
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
  },
];

export function Jobs() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden py-2">
      <div className="mx-auto w-full max-w-4xl space-y-2 px-4 sm:px-6 lg:px-8">
        {jobs.slice(0, 2).map((job, index) => (
          <JobCard key={index} job={job} />
        ))}

        <Card className="group border-foreground/5 bg-background dark:bg-background/50 dark:border-foreground/5 hover:shadow-foreground/5 dark:hover:shadow-foreground/5 relative overflow-hidden border transition-all duration-300 hover:shadow-lg">
          <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%)] bg-[length:250%_250%] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]" />
          <CardContent className="relative py-5">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex items-center gap-2">
                <div className="bg-foreground/5 text-foreground ring-foreground/5 group-hover:ring-foreground/10 rounded-full p-2 ring-2 transition-all duration-300">
                  <Send className="size-4" />
                </div>
                <CardTitle className="text-foreground text-xl font-bold tracking-tight">
                  Weekly Remote Job Alert
                </CardTitle>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                  Get personalized remote customer service opportunities that
                  match your timezone and preferences.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 text-xs">
                  <div className="bg-foreground/5 text-foreground ring-foreground/5 group-hover:ring-foreground/10 rounded-full px-3 py-1 ring-1 transition-all duration-300">
                    Curated for your timezone
                  </div>
                  <div className="bg-foreground/5 text-foreground ring-foreground/5 group-hover:ring-foreground/10 rounded-full px-3 py-1 ring-1 transition-all duration-300">
                    Every Monday
                  </div>
                  <div className="bg-foreground/5 text-foreground ring-foreground/5 group-hover:ring-foreground/10 rounded-full px-3 py-1 ring-1 transition-all duration-300">
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
                    className="border-foreground/10 bg-background/80 focus:border-foreground/20 focus:ring-foreground/10 h-10 pr-4 backdrop-blur-sm transition-all duration-300 focus:ring-1"
                    required
                  />
                  <div className="text-foreground absolute top-1/2 right-4 -translate-y-1/2 text-xs font-medium">
                    {email ? "✓" : ""}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground shadow-primary/5 hover:bg-primary/90 hover:shadow-primary/10 h-10 gap-2 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  Subscribe
                  <Send className="size-4" />
                </Button>
              </form>
              <p className="text-muted-foreground text-xs font-medium">
                Join 2,000+ professionals who receive our weekly job alerts
              </p>
            </div>
          </CardContent>
        </Card>

        {jobs.slice(2).map((job, index) => (
          <JobCard key={index + 2} job={job} />
        ))}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: (typeof jobs)[0] }) {
  return (
    <Card className="group hover:border-primary/5 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="from-primary/5 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardContent>
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex h-24 w-32 items-center border-r pr-4">
            <Image
              src="/companies/logo-microsoft-512.png"
              alt="Microsoft"
              className="h-full w-full object-cover"
              width={512}
              height={512}
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <CardTitle className="group-hover:text-primary text-base font-semibold transition-colors">
                {job.title}
              </CardTitle>
              <div className="text-muted-foreground text-xs">
                Posted {job.posted}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-xs">
                <MapPin className="text-muted-foreground size-2.5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <Globe className="text-muted-foreground size-2.5" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <Clock className="text-muted-foreground size-2.5" />
                <span>{job.timezone}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {job.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
