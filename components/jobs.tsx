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

        <Card className="group bg-primary/5 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="from-primary/10 absolute inset-0 bg-gradient-to-r to-transparent opacity-50" />
          <CardContent className="relative py-3">
            <div className="flex flex-col items-center space-y-1.5 text-center">
              <CardTitle className="text-lg font-bold">
                Weekly Remote Job Alert
              </CardTitle>
              <p className="text-muted-foreground max-w-lg text-xs">
                Receive the latest remote customer service opportunities aligned
                with your timezone, delivered to your inbox every Monday.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="mt-0.5 flex w-full max-w-md gap-1.5"
              >
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="gap-2">
                  Subscribe
                  <Send className="size-4" />
                </Button>
              </form>
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
    <Card className="group hover:border-primary/50 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
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
                  className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
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
