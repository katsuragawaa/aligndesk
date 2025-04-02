"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { useState } from "react";

const timezones = [
  { value: "pst", label: "Pacific Time (PT)" },
  { value: "mst", label: "Mountain Time (MT)" },
  { value: "cst-na", label: "Central Time (CT)" },
  { value: "est", label: "Eastern Time (ET)" },
  { value: "gmt", label: "GMT" },
  { value: "cet", label: "Central European Time (CET)" },
  { value: "eet", label: "Eastern European Time (EET)" },
  { value: "aest", label: "Australian Eastern Time (AEST)" },
  { value: "jst", label: "Japan Standard Time (JST)" },
  { value: "sgt", label: "Singapore Time (SGT)" },
  { value: "hkt", label: "Hong Kong Time (HKT)" },
  { value: "ist", label: "India Standard Time (IST)" },
  { value: "nzt", label: "New Zealand Standard Time (NZST)" },
  { value: "brt", label: "Brasília Time (BRT)" },
  { value: "cat", label: "Central African Time (CAT)" },
  { value: "wast", label: "West Africa Standard Time (WAST)" },
  { value: "eat", label: "East Africa Time (EAT)" },
  { value: "msk", label: "Moscow Standard Time (MSK)" },
  { value: "kst", label: "Korea Standard Time (KST)" },
  { value: "cst-cn", label: "China Standard Time (CST)" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden pt-16 md:pt-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-10">
            <div className="flex w-full flex-col items-center">
              <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
                Now hiring worldwide
              </div>
              <h1 className="mt-8 text-center text-4xl font-bold tracking-tight sm:text-6xl">
                FIND THE JOB
                <br />
                THAT FITS YOUR
                <br />
                <span className="from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-transparent">
                  TIME ZONE
                </span>
              </h1>
              <div className="mt-8 max-w-2xl text-center">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Discover flexible work-from-home{" "}
                  <span className="text-foreground after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full">
                    customer service
                  </span>{" "}
                  roles with international companies that match your preferred
                  hours and location.
                </p>
              </div>
            </div>

            <form className="bg-background/80 focus-within:border-primary/50 focus-within:ring-primary/10 relative flex w-full items-center gap-4 rounded-full border p-1.5 shadow-lg backdrop-blur-sm transition-all focus-within:ring-4 hover:shadow-xl">
              <div className="relative flex-[2]">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search jobs by title, category, or company..."
                  className="h-12 border-0 pl-9 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="bg-border h-8 w-px" />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="hover:bg-primary/5 h-12 w-[200px] justify-between border-0 shadow-none"
                  >
                    {value
                      ? timezones.find((timezone) => timezone.value === value)
                          ?.label
                      : "Select timezone..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search timezone..." />
                    <CommandEmpty>No timezone found.</CommandEmpty>
                    <CommandGroup>
                      {timezones.map((timezone) => (
                        <CommandItem
                          key={timezone.value}
                          value={timezone.value}
                          onSelect={(currentValue: string) => {
                            setValue(
                              currentValue === value ? "" : currentValue,
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === timezone.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {timezone.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <Button
                type="submit"
                className="h-12 rounded-full px-8 font-medium shadow-sm hover:shadow-md"
              >
                Search
              </Button>
            </form>

            <div className="flex flex-col items-center gap-6">
              <p className="text-muted-foreground text-sm font-medium">
                Trusted by leading companies worldwide
              </p>
              <div className="flex items-center gap-12">
                {["Adobe", "eBay", "Uber", "Microsoft", "Shopify"].map(
                  (company) => (
                    <div
                      key={company}
                      className="text-muted-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
                    >
                      {company}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
