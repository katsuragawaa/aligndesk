"use client";

import { joinWaitlist } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type EmployerWaitlistFormProps = {
  onSubmit?: (result: boolean) => void;
};

export function EmployerWaitlistForm({ onSubmit }: EmployerWaitlistFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    jobTitle: "",
    interests: {
      talentAcquisition: false,
      remoteHiring: false,
      employerBranding: false,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await joinWaitlist();

      if (result.success) {
        toast.success("Welcome to the future of hiring!", {
          description:
            "You're now on our exclusive employer waitlist. Get ready for early access and special features!",
        });
        setFormData({
          companyName: "",
          email: "",
          jobTitle: "",
          interests: {
            talentAcquisition: false,
            remoteHiring: false,
            employerBranding: false,
          },
        });
        onSubmit?.(true);
      } else {
        throw new Error(result.error);
      }
    } catch {
      toast.error("Oops! Something went wrong", {
        description: "Please try again in a moment.",
      });
      onSubmit?.(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold">
          Transform Your Hiring Process
        </h2>
        <div className="text-primary mb-4 flex items-center justify-center gap-2 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Early Access • Premium Features • Priority Support</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm font-medium">
              Company Name
            </Label>
            <div className="relative">
              <Building2 className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                id="companyName"
                type="text"
                placeholder="Enter your company name"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your work email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-sm font-medium">
              Your Role
            </Label>
            <Input
              id="jobTitle"
              type="text"
              placeholder="e.g. HR Manager, Hiring Manager"
              value={formData.jobTitle}
              onChange={(e) =>
                setFormData({ ...formData, jobTitle: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium">
            What interests you most?
          </Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="talentAcquisition"
                checked={formData.interests.talentAcquisition}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    interests: {
                      ...formData.interests,
                      talentAcquisition: checked as boolean,
                    },
                  })
                }
                className="size-4"
              />
              <Label htmlFor="talentAcquisition" className="text-sm">
                Streamlined Talent Acquisition
              </Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="remoteHiring"
                checked={formData.interests.remoteHiring}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    interests: {
                      ...formData.interests,
                      remoteHiring: checked as boolean,
                    },
                  })
                }
                className="size-4"
              />
              <Label htmlFor="remoteHiring" className="text-sm">
                Remote Hiring Solutions
              </Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="employerBranding"
                checked={formData.interests.employerBranding}
                onCheckedChange={(checked) =>
                  setFormData({
                    ...formData,
                    interests: {
                      ...formData.interests,
                      employerBranding: checked as boolean,
                    },
                  })
                }
                className="size-4"
              />
              <Label htmlFor="employerBranding" className="text-sm">
                Employer Branding Tools
              </Label>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 w-full rounded-full bg-gradient-to-r transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Join the Employer Waitlist"
          )}
        </Button>

        <p className="mt-4 text-center text-xs text-gray-500">
          By joining, you agree to receive updates about our employer solutions.
          Your data is secure with us.
        </p>
      </form>
    </div>
  );
}
