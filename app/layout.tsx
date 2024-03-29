import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs + Sanity + Shadcn/UI",
  description: "Testing frameworks and optimizations for quickly build websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="max-w-2xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
