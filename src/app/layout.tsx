import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
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
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 animate-blob rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/20" />
          <div className="absolute top-1/3 -right-24 h-72 w-72 animate-blob rounded-full bg-fuchsia-400/20 blur-3xl [animation-delay:5s] dark:bg-fuchsia-600/20" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 animate-blob rounded-full bg-cyan-400/20 blur-3xl [animation-delay:10s] dark:bg-cyan-500/20" />
        </div>
        <Nav />
        <main className="relative flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
