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
  title: "Sanformation",
  description:
    "Explore the future of web development, design, and code with Sanformation.",
  openGraph: {
    title: "Sanformation",
    description:
      "Explore the future of web development, design, and code with Sanformation.",
    url: "https://sanchit.info.np",
    siteName: "Sanformation",
    images: [
      {
        url: "https://sanchit.info.np/public/banner.png",
        width: 1200,
        height: 630,
        alt: "Sanformation Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Sanformation",
    title: "Sanformation",
    description:
      "Explore the future of web development, design, and code with Sanformation.",
    images: ["https://sanchit.info.np/public/banner.png"],
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
