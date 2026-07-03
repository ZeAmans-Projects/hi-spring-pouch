import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hi Spring | Premium Drinking Water",
    template: "%s | Hi Spring",
  },
  description:
    "Hi Spring is a premium drinking water brand by MGF Industries PLC, delivering safe, refreshing, and high-quality hydration for homes, businesses, and export markets.",
  keywords: [
    "Hi Spring",
    "MGF Industries PLC",
    "Drinking Water",
    "Mineral Water",
    "Bottled Water",
    "Ethiopia",
    "Premium Water",
    "Export Water",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full flex flex-col">
  <AnnouncementBar />
  <Navbar />

  <main className="flex-grow">
    {children}
  </main>

  <Footer />
</body>
  </html>
);
}
