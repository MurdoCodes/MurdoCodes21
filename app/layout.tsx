import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Lidel Kim B Daddie | MurdoCodes Portfolio",
  description:
    "MurdoCodes Portfolio: 5+ yrs AI-first Full Stack Dev. Building scalable SaaS, React Native apps & Puppeteer automation with TypeScript & Node.js.",
  openGraph: {
    title: "Lidel Kim B Daddie | MurdoCodes Portfolio",
    description:
      "AI-first Full Stack Developer specializing in SaaS, automation & AI-powered apps.",
    type: "profile",
    url: "https://murdocodes.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">{children}</body>
    </html>
  );
}
