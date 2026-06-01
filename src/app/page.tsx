"use client"; 
  
 import React from "react";
 import Navbar from "@/components/Navbar"; 
 import Hero from "@/components/Hero"; 
 import Specialties from "@/components/Specialties"; 
 import Gallery from "@/components/Gallery"; 
 import Practitioner from "@/components/Practitioner"; 
 import Contact from "@/components/Contact"; 
 import Link from "next/link"; 
 import Image from "next/image"; 
 import { motion, AnimatePresence } from "framer-motion"; 
 import { Globe, Mail, MessageCircle } from "lucide-react"; 
  
 const footerSpecialties = [ 
   'Orthodontics', 'Aesthetic Dentistry', 'Clear Aligners', 
   'Smile Designing', 'Dental Surgeries', 'Pediatric Dentistry' 
 ]; 
  
 const footerLinks = [ 
   { label: 'Our Medical Leadership', href: '#practitioner' }, 
   { label: 'Clinical Gallery',       href: '#gallery' }, 
   { label: 'Services & Fees',        href: '#specialties' }, 
   { label: 'Location & Map',         href: 'https://maps.app.goo.gl/5DS1k9PnA9vQbMU2A' }, 
   { label: 'Contact Us',             href: '#contact' }, 
 ]; 
  
 const RevolqIcon = ({ className }: { className?: string }) => ( 
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" 
     strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}> 
     <path d="M6 19L6 5" /> 
     <path d="M6 5L14 5C16.2091 5 18 6.79086 18 9C18 11.2091 16.2091 13 14 13L6 13" /> 
     <path d="M12 13L18 19" /> 
   </svg> 
 ); 
  
 const socials = [ 
   { Icon: Globe,      href: '#',                           label: 'Website'   }, 
   { Icon: Mail,       href: 'mailto:jeotomcharls@gmail.com', label: 'Email'   }, 
   { Icon: MessageCircle, href: 'https://wa.me/919447125344', label: 'WhatsApp' }, 
   { Icon: RevolqIcon, href: 'https://revol-q.vercel.app',  label: 'Revolq'   }, 
 ]; 
  
 export default function Home() { 
   return ( 
     <main className="flex min-h-screen flex-col"> 
       <Navbar /> 
       <Hero /> 
       <Specialties /> 
       <Gallery /> 
       <Practitioner /> 
       <Contact /> 
  
       {/* ── Footer ───────────────────────────────── */} 
       <footer className="relative overflow-hidden" style={{ background: "#1A1F16" }}> 
  
         {/* Background glows */} 
         <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
           style={{ background: "radial-gradient(circle, rgba(45,106,45,0.12) 0%, transparent 70%)" }} /> 
         <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" 
           style={{ background: "radial-gradient(circle, rgba(232,197,71,0.06) 0%, transparent 70%)" }} /> 

         {/* Yellow top accent */}
         <div className="absolute top-0 left-0 right-0 h-px"
           style={{ background: "linear-gradient(90deg, transparent 0%, rgba(232,197,71,0.4) 30%, rgba(45,106,45,0.4) 70%, transparent 100%)" }} /> 
  
         <div className="relative container mx-auto px-6 pt-20 pb-10"> 
           <div className="grid lg:grid-cols-4 gap-14 mb-16"> 
  
             {/* Brand col */} 
             <div className="lg:col-span-2"> 
               <Link href="/" className="inline-block mb-8"> 
                 <motion.div whileHover={{ scale: 1.05 }} className="relative w-24 h-24"> 
                   <Image src="/logo.png" alt="Smile Architects Dental Clinic" 
                     fill sizes="96px" className="object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]" /> 
                 </motion.div> 
               </Link> 
  
               <p className="leading-relaxed max-w-sm mb-4 text-sm font-medium tracking-tight" style={{ color: "rgba(255,255,255,0.5)" }}> 
                 Premier multi-specialty dental facility in Pala, Kottayam. 
                 Led by Dr. Jeo Tom Charls — delivering excellence in Orthodontics & Dentofacial Orthopedics. 
               </p> 
               <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-10" style={{ color: "rgba(255,255,255,0.3)" }}> 
                 KSDC Reg. No. 9451 
               </p> 
  
               <div className="flex gap-4"> 
                 {socials.map(({ Icon, href, label }) => ( 
                   <motion.div key={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}> 
                     <Link href={href} 
                       target={href.startsWith('http') ? "_blank" : undefined} 
                       aria-label={label} 
                       className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" 
                       style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }} 
                       onMouseEnter={e => { 
                         (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.15)"; 
                         (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; 
                       }} 
                       onMouseLeave={e => { 
                         (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; 
                         (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; 
                       }} 
                     > 
                       <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} /> 
                     </Link> 
                   </motion.div> 
                 ))} 
               </div> 
             </div> 
  
             {/* Specialties */} 
             <div> 
               <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" 
                 style={{ color: "rgba(255,255,255,0.6)" }}> 
                 Specialties 
               </h4> 
               <ul className="space-y-3"> 
                 {footerSpecialties.map(item => ( 
                   <li key={item}> 
                     <Link href="#specialties" 
                       className="text-sm transition-colors duration-200" 
                       style={{ color: "rgba(255,255,255,0.55)" }} 
                       onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"} 
                       onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"} 
                     > 
                       {item} 
                     </Link> 
                   </li> 
                 ))} 
               </ul> 
             </div> 
  
             {/* Quick links */} 
             <div> 
               <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6" 
                 style={{ color: "rgba(255,255,255,0.6)" }}> 
                 Quick Links 
               </h4> 
               <ul className="space-y-3"> 
                 {footerLinks.map(({ label, href }) => ( 
                   <li key={label}> 
                     <Link href={href} 
                       target={href.startsWith('http') ? "_blank" : undefined} 
                       className="text-sm transition-colors duration-200" 
                       style={{ color: "rgba(255,255,255,0.55)" }} 
                       onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"} 
                       onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"} 
                     > 
                       {label} 
                     </Link> 
                   </li> 
                 ))} 
               </ul> 
             </div> 
           </div> 
  
           {/* Bottom bar */} 
           <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" 
             style={{ borderTop: "1px solid rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}> 
             <div className="flex flex-col sm:flex-row items-center gap-4"> 
               <p>© 2026 Smile Architects Dental Clinic. All rights reserved.</p> 
               <span className="hidden sm:block w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} /> 
               <Link href="https://revol-q.vercel.app" target="_blank" 
                 className="flex items-center gap-1.5 transition-colors duration-200 group" 
                 onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"} 
                 onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)"} 
               > 
                 Powered by <span className="font-bold tracking-wider">REVOLQ</span> 
               </Link> 
             </div> 
             <p>Kattakkayam Road, Near Federal Bank, Pala, Kottayam — 686575</p> 
           </div> 
         </div> 
       </footer> 
  
       {/* ── Floating buttons ─────────────────────── */}
       <FloatingButtons />
     </main>
   );
 }

 function FloatingButtons() {
   const [showTop, setShowTop] = React.useState(false);

   React.useEffect(() => {
     const onScroll = () => setShowTop(window.scrollY > 400);
     window.addEventListener('scroll', onScroll, { passive: true });
     return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

   return (
     <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-3">

       {/* Scroll to top */}
       <AnimatePresence>
         {showTop && (
           <motion.button
             initial={{ opacity: 0, scale: 0.6, y: 12 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.6, y: 12 }}
             transition={{ type: "spring", stiffness: 300, damping: 22 }}
             whileHover={{ scale: 1.1, y: -2 }}
             whileTap={{ scale: 0.93 }}
             onClick={scrollToTop}
             aria-label="Scroll to top"
             className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
             style={{
               background: "rgba(250,250,247,0.92)",
               backdropFilter: "blur(12px)",
               WebkitBackdropFilter: "blur(12px)",
               border: "1.5px solid rgba(232,197,71,0.45)",
               boxShadow: "0 4px 20px rgba(45,106,45,0.15), 0 0 0 1px rgba(255,255,255,0.4)"
             }}
           >
             {/* Arrow up SVG */}
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9 14V4" stroke="#2D6A2D" strokeWidth="2" strokeLinecap="round"/>
               <path d="M4.5 8.5L9 4L13.5 8.5" stroke="#2D6A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </motion.button>
         )}
       </AnimatePresence>

       {/* WhatsApp — proper SVG logo */}
       <motion.div
         initial={{ scale: 0, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
         whileHover={{ scale: 1.08 }}
         whileTap={{ scale: 0.93 }}
         style={{ filter: "drop-shadow(0 8px 24px rgba(37,211,102,0.4))" }}
       >
         <Link
           href="https://wa.me/919447125344"
           target="_blank"
           aria-label="Contact us on WhatsApp"
           className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
           style={{ background: "#25D366" }}
         >
           {/* Official WhatsApp SVG */}
           <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 48 48"
             className="w-8 h-8 sm:w-9 sm:h-9"
             fill="white"
           >
             <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.2 1.6 1.7-6-.4-.6C8.2 29.8 7.4 27 7.4 24 7.4 14.8 14.8 7.4 24 7.4S40.6 14.8 40.6 24 33.2 40 24 40zm10.9-14.4c-.6-.3-3.5-1.7-4-1.9-.5-.2-.9-.3-1.3.3-.4.6-1.5 1.9-1.8 2.3-.3.4-.7.4-1.3.1-.6-.3-2.5-.9-4.7-2.9-1.7-1.6-2.9-3.5-3.2-4.1-.3-.6 0-.9.3-1.2.3-.3.6-.7.9-1 .3-.3.4-.6.6-1 .2-.4.1-.7 0-1-.1-.3-1.3-3.1-1.8-4.2-.5-1.1-.9-.9-1.3-.9h-1.1c-.4 0-1 .1-1.5.7-.5.6-2 2-2 4.8s2.1 5.6 2.4 6c.3.4 4.1 6.3 10 8.8 1.4.6 2.5 1 3.3 1.2 1.4.4 2.7.4 3.7.2 1.1-.2 3.5-1.4 4-2.8.5-1.4.5-2.5.3-2.8-.1-.2-.5-.4-1.1-.6z"/>
           </svg>
         </Link>
       </motion.div>
     </div>
   );
 }
