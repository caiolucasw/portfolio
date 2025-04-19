import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import TransitionPage from "@/components/client/ui/TransitionPage";
import PathTransition from "@/components/client/ui/PathTransition";
import Stars from "@/components/client/Stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio's Portfolio",
  description: "Caio's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[1368px] mx-auto h-full">
          <Stars />
          <div className="relative z-10">
            <Header />
            <PathTransition />
            <TransitionPage>
              <main className="pb-3">{children}</main>
            </TransitionPage>
          </div>
        </div>
      </body>
    </html>
  );
}
