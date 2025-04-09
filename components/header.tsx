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
import { ArrowRight, Layout, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EmployerWaitlistDialog } from "./employer-waitlist-dialog";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className="absolute top-0 z-50 w-full bg-transparent backdrop-blur-sm">
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
                      <Button
                        variant="outline"
                        asChild
                        className="group w-full justify-between"
                      >
                        <Link href="#jobs">
                          <span>Browse Jobs</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      </Button>
                    </DrawerClose>
                    <EmployerWaitlistDialog
                      open={isDialogOpen}
                      onOpenChange={setIsDialogOpen}
                    >
                      <DrawerClose asChild>
                        <Button
                          variant="outline"
                          className="group w-full justify-between"
                        >
                          <span>Post a Job</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Button>
                      </DrawerClose>
                    </EmployerWaitlistDialog>
                    <DrawerClose asChild>
                      <Button
                        variant="outline"
                        asChild
                        className="group w-full justify-between"
                      >
                        <Link href="#about">
                          <span>About Us</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>
                      </Button>
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
    </>
  );
}
