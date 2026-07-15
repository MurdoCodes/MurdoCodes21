import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Geist({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Geist({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MurdoCodes | AI-First Full Stack Developer Portfolio",
  description:
    "MurdoCodes Portfolio: 5+ yrs AI-first Full Stack Dev. Building scalable SaaS, React Native apps & Puppeteer automation with TypeScript & Node.js.",
  openGraph: {
    title: "Lidel Kim Bautista Daddie | MurdoCodes Portfolio",
    description:
      "AI-first Full Stack Developer specializing in SaaS, automation & AI-powered apps.",
    type: "profile",
    url: "https://murdocodes.com",
    images: ["/og-image.jpg"], // Replace with your actual OG image path
  },
  twitter: {
    card: "summary_large_image",
    title: "Lidel Kim Bautista Daddie | MurdoCodes",
    description:
      "AI-first Full Stack Developer specializing in SaaS, automation & AI-powered apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const personSchema = {
     "@context": "https://schema.org",
     "@type": "Person",
     name: "Lidel Kim Bautista Daddie",
     alternateName: "MurdoCodes",
     jobTitle: "Full Stack Developer",
     url: "https://murdocodes.com",
     sameAs: [
       "https://github.com/MurdoCodes",
       "LinkedIn	https://www.linkedin.com/in/lidel-kim-daddie/",
     ],
     knowsAbout: [
       "TypeScript",
       "React",
       "Next.js",
       "Node.js",
       "React Native",
       "Puppeteer",
       "AI Integration",
       "SaaS Development",
       "AWS",
       "Firebase",
     ],
     address: {
       "@type":
         "49A Diamond Street, Pag-Ibig Height Catalunan Grande, Davao City, Philippines",
       addressCountry: "PH",
     },
   };
  
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
