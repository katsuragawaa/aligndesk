"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const timezones = [
  { value: "pst", label: "Pacific Time (PT)" },
  { value: "mst", label: "Mountain Time (MT)" },
  { value: "cst", label: "Central Time (CT)" },
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
  { value: "cst", label: "China Standard Time (CST)" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen">
      <section className="grid min-h-[calc(100vh-4rem)] items-start">
        <div className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h1 className="flex w-full flex-col gap-2 text-4xl font-bold tracking-tight sm:text-9xl">
              <span className="pr-40 text-right">FIND THE JOB</span>
              <span className="text-left">THAT FITS YOUR</span>
              <div className="flex items-center gap-20">
                <div className="text-base font-normal tracking-normal">
                  <p>
                    Discover flexible work-from-home{" "}
                    <span className="after:bg-primary text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full">
                      customer service
                    </span>{" "}
                    roles with international companies that match your preferred
                    hours and location.
                  </p>
                </div>
                <span className="text-right whitespace-nowrap">TIME ZONE</span>
              </div>
            </h1>
            <form className="bg-background/80 mt-8 flex w-full items-center gap-4 rounded-full border p-1 shadow-lg backdrop-blur-sm">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  type="text"
                  placeholder="Search jobs by title, category, or company..."
                  className="h-10 border-0 pl-9 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="bg-border h-8 w-px" />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="h-10 w-[200px] justify-between border-0 shadow-none"
                  >
                    {value
                      ? timezones.find((timezone) => timezone.value === value)?.label
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
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === timezone.value ? "opacity-100" : "opacity-0"
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
                size="lg"
                className="h-10 rounded-full px-6"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
