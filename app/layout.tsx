import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedCursor } from "@/components/animations/AnimatedCursor";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nakulmakol.dev"),
  title: {
    default: "Nakul Makol — AI/ML Engineer & Software Developer",
    template: "%s | Nakul Makol",
  },
  description:
    "AI/ML Engineer and Software Developer. Final year ECE student at Thapar Institute, CGPA 8.62. Computer vision, RAG pipelines, and intelligent web applications.",
  authors: [{ name: "Nakul Makol", url: "https://github.com/NakulMakol" }],
  creator: "Nakul Makol",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#14161A" }],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: "#14161A",
          fontFamily: "var(--font-geist-sans, Inter, system-ui, sans-serif)",
          color: "#F3F4F6",
        }}
      >
        <AnimatedCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "bg-[#1C2128] border border-[#2A313C] text-[#F3F4F6] shadow-xl",
              description: "text-[#A1AAB8]",
            },
          }}
        />
      </body>
    </html>
  );
}
