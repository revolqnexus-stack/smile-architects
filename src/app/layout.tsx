import type { Metadata } from "next"; 
 import { DM_Sans, DM_Mono, Cormorant_Garamond } from "next/font/google"; 
 import "./globals.css"; 
 import LoadingScreen from "@/components/LoadingScreen"; 
  
 const dmSans = DM_Sans({ 
   variable: "--font-geist-sans", 
   subsets: ["latin"], 
   weight: ["300", "400", "500", "600", "700"], 
 }); 
  
 const dmMono = DM_Mono({ 
   variable: "--font-geist-mono", 
   subsets: ["latin"], 
   weight: ["300", "400", "500"], 
 }); 
  
 const cormorant = Cormorant_Garamond({ 
   variable: "--font-serif", 
   subsets: ["latin"], 
   weight: ["300", "400", "500", "600", "700"], 
   style: ["normal", "italic"], 
 }); 
  
 export const metadata: Metadata = { 
   title: "Smile Architects Dental Clinic – Specialized Orthodontics & Aesthetic Dentistry", 
   description: "Premier multi-specialty dental facility in Pala, Kottayam. Led by Dr. Jeo Tom Charls, MDS Orthodontist. Expert care in braces, aligners, and smile design.", 
   keywords: "Smile Architects Pala, Orthodontist Pala, Dr. Jeo Tom Charls, Dental Clinic Pala, Braces Pala, Clear Aligners Kerala, Smile Design Kottayam", 
   metadataBase: new URL("https://smilearchitects.in/"), 
   alternates: { canonical: "https://smilearchitects.in/" }, 
   openGraph: { 
     title: "Smile Architects Dental Clinic – Pala's Premier Orthodontic Centre", 
     description: "Expert orthodontic and aesthetic dental care in Pala, Kottayam. Led by Dr. Jeo Tom Charls.", 
     url: "https://smilearchitects.in/", 
   }, 
 }; 
  
 export default function RootLayout({ 
   children, 
 }: Readonly<{ children: React.ReactNode }>) { 
   return ( 
     <html 
       lang="en" 
       className={`${dmSans.variable} ${dmMono.variable} ${cormorant.variable} h-full antialiased`} 
     > 
       <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-foreground"> 
         <LoadingScreen /> 
         {children} 
       </body> 
     </html> 
   ); 
 } 
