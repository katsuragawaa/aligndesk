import Image from "next/image";

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
          </div>
        </div>
      </section>
    </div>
  );
}
