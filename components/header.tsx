"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  ExternalLink,
  Info,
  Layout,
  Menu,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EmployerWaitlistDialog } from "./employer-waitlist-dialog";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("jobs");
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="absolute top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <span className="after:bg-primary relative text-xl font-bold after:absolute after:right-0 after:bottom-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full">
              AlignDesk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="#jobs"
              className="after:bg-primary hover:text-primary relative text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
            >
              Jobs
            </Link>
            <EmployerWaitlistDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
            >
              <button className="after:bg-primary hover:text-primary relative cursor-pointer text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full">
                Post a Job
              </button>
            </EmployerWaitlistDialog>
            <Link
              href="#about"
              className="after:bg-primary hover:text-primary relative text-sm font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader className="text-left">
                    <div className="flex items-center gap-2 px-4">
                      <Layout className="text-primary h-6 w-6" />
                      <DrawerTitle className="text-xl font-bold">
                        AlignDesk
                      </DrawerTitle>
                    </div>
                    <p className="text-muted-foreground px-4 pt-2 text-sm">
                      Find remote customer service jobs in your timezone
                    </p>
                  </DrawerHeader>
                  <Separator className="my-4" />
                  <div className="flex flex-col space-y-2 px-4">
                    <DrawerClose asChild>
                      <Link
                        href="#jobs"
                        className="bg-muted/50 hover:bg-muted hover:text-primary flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all"
                      >
                        <span>Browse Jobs</span>
                        <ExternalLink className="text-muted-foreground h-4 w-4" />
                      </Link>
                    </DrawerClose>
                    <EmployerWaitlistDialog
                      open={isDialogOpen}
                      onOpenChange={setIsDialogOpen}
                    >
                      <DrawerClose asChild>
                        <button className="bg-muted/50 hover:bg-muted hover:text-primary flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all">
                          <span>Post a Job</span>
                          <ExternalLink className="text-muted-foreground h-4 w-4" />
                        </button>
                      </DrawerClose>
                    </EmployerWaitlistDialog>
                    <DrawerClose asChild>
                      <Link
                        href="#about"
                        className="bg-muted/50 hover:bg-muted hover:text-primary flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all"
                      >
                        <span>About Us</span>
                        <ExternalLink className="text-muted-foreground h-4 w-4" />
                      </Link>
                    </DrawerClose>
                  </div>
                  <DrawerFooter className="mt-6">
                    <p className="text-muted-foreground text-center text-xs">
                      © 2024 AlignDesk. All rights reserved.
                    </p>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>

      {/* Modern Minimalistic Mobile Bottom Navigation */}
      <div
        className={`fixed right-0 bottom-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
          isScrollingDown ? "translate-y-full" : "translate-y-0"
        } md:hidden`}
      >
        <div className="border-t bg-white/80 backdrop-blur-md">
          <nav className="mx-auto flex h-16 max-w-md items-center justify-around px-6">
            <Link
              href="#jobs"
              className={`group flex min-w-[72px] flex-col items-center gap-1 p-2 transition-colors ${
                activeTab === "jobs"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setActiveTab("jobs")}
              aria-label="Browse Jobs"
              aria-current={activeTab === "jobs" ? "page" : undefined}
            >
              <div className="relative">
                <Briefcase className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium tracking-wide">
                Jobs
              </span>
            </Link>

            <button
              onClick={() => {
                setIsDialogOpen(true);
                setActiveTab("post");
              }}
              className={`group flex min-w-[72px] flex-col items-center gap-1 p-2 transition-colors ${
                activeTab === "post"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label="Post a Job"
              aria-current={activeTab === "post" ? "page" : undefined}
            >
              <div className="relative">
                <PlusCircle className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium tracking-wide">
                Post
              </span>
            </button>

            <Link
              href="#about"
              className={`group flex min-w-[72px] flex-col items-center gap-1 p-2 transition-colors ${
                activeTab === "about"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setActiveTab("about")}
              aria-label="About Us"
              aria-current={activeTab === "about" ? "page" : undefined}
            >
              <div className="relative">
                <Info className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium tracking-wide">
                About
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
