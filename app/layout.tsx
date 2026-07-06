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
  metadataBase: new URL("https://hispring.com"),

  title: {
    default: "Hi Spring | Premium Bottled Drinking Water",
    template: "%s | Hi Spring",
  },

  description:
    "Hi Spring is the premium bottled drinking water brand of MGF Industries PLC, delivering hygienically purified, refreshing drinking water for homes, businesses, institutions and export markets.",

  keywords: [
    "Hi Spring",
    "MGF Industries PLC",
    "Premium Drinking Water",
    "Purified Water",
    "Bottled Water Ethiopia",
    "Mineral Water",
    "Water Manufacturer",
    "Water Treatment",
    "Export Water",
    "Ethiopia",
  ],

  authors: [
    {
      name: "MGF Industries PLC",
    },
  ],

  creator: "MGF Industries PLC",

  publisher: "MGF Industries PLC",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Hi Spring | Premium Bottled Drinking Water",

    description:
      "Premium purified bottled drinking water proudly manufactured by MGF Industries PLC.",

    url: "https://hispring.com",

    siteName: "Hi Spring",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logos/logo.PNG",
        width: 1200,
        height: 630,
        alt: "Hi Spring",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Hi Spring | Premium Bottled Drinking Water",

    description:
      "Premium purified bottled drinking water proudly manufactured by MGF Industries PLC.",

    images: ["/logos/logo.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900">

        <AnnouncementBar />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}