import { Footer } from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
  description: "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location.",
  metadataBase: new URL('https://aligndesk.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
    description: "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location.",
    url: 'https://aligndesk.com',
    siteName: 'AlignDesk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AlignDesk - Find Remote Customer Service Jobs in Your Timezone",
    description: "Discover flexible work-from-home customer service roles with international companies that match your preferred hours and location.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
