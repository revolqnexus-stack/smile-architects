import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smile Architects Dental Clinic – Specialized Orthodontics & Aesthetic Dentistry",
  description: "Premier multi-specialty dental facility in Pala, Kottayam. Led by Dr. Jeo Tom Charls, MDS Orthodontist. Expert care in braces, aligners, and smile design.",
  keywords: "Smile Architects Pala, Orthodontist Pala, Dr. Jeo Tom Charls, Dental Clinic Pala, Braces Pala, Clear Aligners Kerala, Smile Design Kottayam",
  metadataBase: new URL("https://smilearchitects.in/"),
  alternates: {
    canonical: "https://smilearchitects.in/",
  },
  openGraph: {
    title: "Smile Architects Dental Clinic – Pala's Premier Orthodontic Centre",
    description: "Expert orthodontic and aesthetic dental care in Pala, Kottayam. Led by Dr. Jeo Tom Charls.",
    url: "https://smilearchitects.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
