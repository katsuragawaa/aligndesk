import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
  description:
    "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location. Search remote jobs by timezone and find your perfect work schedule.",
  keywords:
    "remote jobs, customer service jobs, work from home, timezone jobs, remote work, flexible hours, international jobs, virtual jobs, remote customer support, work from anywhere",
  metadataBase: new URL("https://aligndesk.com"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "AlignDesk",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  openGraph: {
    title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
    description:
      "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location. Search remote jobs by timezone and find your perfect work schedule.",
    url: "https://aligndesk.com",
    siteName: "AlignDesk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AlignDesk - Remote Customer Service Jobs Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
    description:
      "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.className} selection:bg-primary/10 selection:text-primary min-h-screen antialiased`}
      >
        <Header />
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
