import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baldev Jew Estcon Pvt. Ltd. | Real Estate Development",
  description: "Baldev Jew Estcon Pvt. Ltd. is a leading real estate developer in Bhubaneswar, creating premium residential and commercial spaces with modern amenities and sustainable design.",
  keywords: "real estate, property development, residential projects, commercial projects, Bhubaneswar, Odisha, Baldev Jew Estcon",
  authors: [{ name: "Baldev Jew Estcon Pvt. Ltd." }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google96cd18bcda13e46b" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
