import { joinWaitlist } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type WaitlistFormProps = {
  onSubmit?: (result: boolean) => void;
};

export function WaitlistForm({ onSubmit }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    jobSearch: false,
    jobPosting: false,
    careerGrowth: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await joinWaitlist();

      if (result.success) {
        toast.success("Welcome to the future of career growth!", {
          description:
            "You're now on our exclusive waitlist. Get ready for early access and special perks!",
        });
        setEmail("");
        setInterests({
          jobSearch: false,
          jobPosting: false,
          careerGrowth: false,
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
          Join the Future of Career Growth
        </h2>
        <div className="text-primary mb-4 flex items-center justify-center gap-2 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Early Access • Exclusive Content • Special Offers</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Your Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <Label className="text-sm font-medium">
            What interests you most?
          </Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="jobSearch"
                checked={interests.jobSearch}
                onCheckedChange={(checked) =>
                  setInterests({ ...interests, jobSearch: checked as boolean })
                }
                className="size-4"
              />
              <Label htmlFor="jobSearch" className="text-sm">
                Finding Your Dream Job
              </Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="jobPosting"
                checked={interests.jobPosting}
                onCheckedChange={(checked) =>
                  setInterests({ ...interests, jobPosting: checked as boolean })
                }
                className="size-4"
              />
              <Label htmlFor="jobPosting" className="text-sm">
                Posting Jobs & Finding Talent
              </Label>
            </div>
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-50">
              <Checkbox
                id="careerGrowth"
                checked={interests.careerGrowth}
                onCheckedChange={(checked) =>
                  setInterests({
                    ...interests,
                    careerGrowth: checked as boolean,
                  })
                }
                className="size-4"
              />
              <Label htmlFor="careerGrowth" className="text-sm">
                Career Development & Growth
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
            "Join the Waitlist Now"
          )}
        </Button>

        <p className="mt-4 text-center text-xs text-gray-500">
          By joining, you agree to receive updates and exclusive offers. We
          respect your privacy.
        </p>
      </form>
    </div>
  );
}
