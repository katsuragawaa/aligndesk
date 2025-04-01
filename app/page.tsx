import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
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
              <Select>
                <SelectTrigger className="h-10 w-[200px] border-0 shadow-none focus:ring-0">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                  <SelectItem value="cst">Central Time (CT)</SelectItem>
                  <SelectItem value="est">Eastern Time (ET)</SelectItem>
                  <SelectItem value="gmt">GMT</SelectItem>
                  <SelectItem value="cet">
                    Central European Time (CET)
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" size="lg" className="h-10 px-6 rounded-full">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
