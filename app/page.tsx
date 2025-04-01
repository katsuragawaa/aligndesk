import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="grid min-h-[calc(100vh-4rem)] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="flex w-full flex-col gap-2 text-4xl font-bold tracking-tight sm:text-9xl">
            <span className="pr-40 text-right">FIND THE JOB</span>
            <span className="text-left">THAT FITS YOUR</span>
            <span className="text-right">TIME ZONE</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg sm:text-xl">
            Streamline your workspace alignment and boost productivity with our
            intuitive desk management solution.
          </p>
        </div>
      </section>
    </div>
  );
}
