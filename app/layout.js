import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dummy Website",
  description: "This is a dummy description for a dummy website.",
  openGraph: {
    title: "Dummy Website",
    description: "This is a description of the dummy website for Open Graph.",
    url: "https://dummywebsite.com",
    siteName: "Dummy Website",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dummyTwitterHandle",
    title: "Dummy Website",
    description: "This is a description of the dummy website for Twitter.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
