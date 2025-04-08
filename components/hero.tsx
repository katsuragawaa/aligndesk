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

export function Hero() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <section
      className="relative overflow-hidden pt-16 pb-8 sm:pt-24"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="from-background via-background/95 to-primary/20 absolute inset-0 bg-gradient-to-br" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_100%)]" />
        <div className="from-background absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex w-full flex-col">
            <div
              className="bg-primary/10 text-primary inline-flex items-center gap-2 self-center rounded-full px-4 py-1.5 text-sm font-medium"
              role="status"
              aria-label="Hiring status"
            >
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              Now hiring worldwide
            </div>
            <div className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-9xl">
              <h1 className="mr-0 text-center sm:mr-20 sm:text-right lg:mr-40">
                FIND THE JOB
              </h1>
              <h1 className="text-center sm:text-left">THAT FITS YOUR</h1>
              <h1 className="from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-center text-transparent sm:text-right">
                TIME ZONE
              </h1>
            </div>
            <div className="mt-6 max-w-xl self-center text-center sm:mt-8">
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                Discover flexible work-from-home{" "}
                <span className="text-foreground after:bg-primary relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full">
                  customer service
                </span>{" "}
                roles with international companies that match your preferred
                hours and location.
              </p>
            </div>
          </div>

          <form
            className="sm:bg-background/80 sm:focus-within:border-primary/50 sm:focus-within:ring-primary/10 relative flex w-full flex-col items-center gap-6 sm:flex-row sm:gap-4 sm:rounded-full sm:border sm:p-1.5 sm:shadow-lg sm:backdrop-blur-sm sm:transition-all sm:focus-within:ring-4 sm:hover:shadow-xl"
            role="search"
            aria-label="Job search form"
          >
            <div className="relative w-full flex-[2]">
              <Search
                className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Search jobs..."
                className="bg-background/80 h-12 border-none pl-9 text-base shadow-none focus-visible:ring-0 sm:bg-transparent"
                aria-label="Search jobs"
              />
            </div>
            <div
              className="bg-border hidden h-8 w-px sm:block"
              aria-hidden="true"
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  aria-expanded={open}
                  aria-label="Select timezone"
                  className="bg-background/80 hover:bg-primary/5 h-12 w-full justify-between border-none font-normal shadow-none sm:w-64 sm:bg-transparent"
                >
                  {value ? (
                    timezones.find((timezone) => timezone.value === value)
                      ?.label
                  ) : (
                    <span className="text-muted-foreground">
                      Select timezone...
                    </span>
                  )}
                  <ChevronsUpDown
                    className="ml-2 h-4 w-4 shrink-0 opacity-50"
                    aria-hidden="true"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-background sm:bg-background/80 w-[calc(100vw-2rem)] border p-0 shadow-lg backdrop-blur-sm sm:w-64">
                <Command className="bg-transparent">
                  <CommandInput
                    placeholder="Search timezone..."
                    className="border-0 focus-visible:ring-0"
                    aria-label="Search timezone"
                  />
                  <CommandEmpty className="py-6 text-center text-sm">
                    No timezone found.
                  </CommandEmpty>
                  <CommandGroup className="max-h-60 overflow-auto">
                    {timezones.map((timezone) => (
                      <CommandItem
                        key={timezone.value}
                        value={timezone.value}
                        onSelect={(currentValue: string) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpen(false);
                        }}
                        className="hover:bg-primary/5 cursor-pointer"
                        aria-label={`Select ${timezone.label}`}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === timezone.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                          aria-hidden="true"
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
              className="h-12 w-full rounded-full px-8 font-medium shadow-sm hover:shadow-md sm:w-auto"
              aria-label="Search jobs"
            >
              Search
            </Button>
          </form>

          <div
            className="flex flex-col items-center gap-6"
            aria-label="Trusted companies"
          >
            <p className="text-muted-foreground text-sm font-medium">
              Trusted by leading companies worldwide
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-12"
              role="list"
              aria-label="Company logos"
            >
              {["Adobe", "eBay", "Uber", "Microsoft", "Shopify"].map(
                (company) => (
                  <div
                    key={company}
                    className="text-muted-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
                    role="listitem"
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
  );
}
