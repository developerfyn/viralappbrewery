import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viral App Brewery | Web & Mobile Development Singapore",
  description: "We build apps that go viral. Web and mobile development for Singapore small businesses. Modern, fast, and affordable.",
  keywords: ["web development", "mobile app", "Singapore", "Next.js", "iOS", "Swift"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
