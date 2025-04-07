import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { joinWaitlist } from "@/app/actions";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    jobSearch: false,
    jobPosting: false,
    careerGrowth: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await joinWaitlist({ email, interests });

      if (result.success) {
        toast.success("Thanks for joining our waitlist!", {
          description: "We'll keep you updated on our progress.",
        });
        setEmail("");
        setInterests({
          jobSearch: false,
          jobPosting: false,
          careerGrowth: false,
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
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
        <Label>What interests you?</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="jobSearch"
              checked={interests.jobSearch}
              onCheckedChange={(checked) =>
                setInterests({ ...interests, jobSearch: checked as boolean })
              }
            />
            <Label htmlFor="jobSearch">Finding Jobs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="jobPosting"
              checked={interests.jobPosting}
              onCheckedChange={(checked) =>
                setInterests({ ...interests, jobPosting: checked as boolean })
              }
            />
            <Label htmlFor="jobPosting">Posting Jobs</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="careerGrowth"
              checked={interests.careerGrowth}
              onCheckedChange={(checked) =>
                setInterests({ ...interests, careerGrowth: checked as boolean })
              }
            />
            <Label htmlFor="careerGrowth">Career Growth</Label>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Join Waitlist
      </Button>
    </form>
  );
}
