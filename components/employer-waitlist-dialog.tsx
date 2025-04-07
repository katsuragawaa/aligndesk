"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmployerWaitlistForm } from "./employer-waitlist-form";

type EmployerWaitlistDialogProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EmployerWaitlistDialog({
  children,
  open,
  onOpenChange,
}: EmployerWaitlistDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">
            Join Our Employer Waitlist
          </DialogTitle>
        </DialogHeader>
        <EmployerWaitlistForm onSubmit={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
