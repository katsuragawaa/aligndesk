import { Clock, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardTitle } from "./ui/card";

export function Jobs() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="group hover:border-primary/50 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="from-primary/5 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <CardContent>
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-28 w-40 items-center border-r pr-4">
                <Image
                  src="/companies/logo-microsoft-512.png"
                  alt="Microsoft"
                  className="h-full w-full object-cover"
                  width={512}
                  height={512}
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="group-hover:text-primary text-xl font-semibold transition-colors">
                        Senior User Experience Researcher
                      </CardTitle>
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Posted 10h ago
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pb-2">
                  <div className="flex items-center gap-1.5 text-sm">
                    <MapPin className="text-muted-foreground size-3.5" />
                    <span>San Jose, CA, USA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Globe className="text-muted-foreground size-3.5" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="text-muted-foreground size-3.5" />
                    <span>UTC-7 to UTC-3</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
                  >
                    User Experience
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
                  >
                    UX Research
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer transition-colors"
                  >
                    Product Design
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
