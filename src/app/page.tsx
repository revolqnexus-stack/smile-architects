"use client"; 
  
 import Navbar from "@/components/Navbar"; 
 import Hero from "@/components/Hero"; 
 import Specialties from "@/components/Specialties"; 
 import Gallery from "@/components/Gallery"; 
 import Practitioner from "@/components/Practitioner"; 
 import Contact from "@/components/Contact"; 
 import Link from "next/link"; 
 import Image from "next/image"; 
 import { motion } from "framer-motion"; 
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
       <footer className="relative overflow-hidden" style={{ background: "#0F172A" }}> 
  
         {/* Background glows */} 
         <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
           style={{ background: "radial-gradient(circle, rgba(30,77,43,0.1) 0%, transparent 70%)" }} /> 
         <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" 
           style={{ background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)" }} /> 
  
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
                         (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; 
                         (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; 
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
                       style={{ color: "rgba(255,255,255,0.4)" }} 
                       onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"} 
                       onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"} 
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
                       style={{ color: "rgba(255,255,255,0.4)" }} 
                       onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#FFFFFF"} 
                       onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"} 
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
  
       {/* ── Floating WhatsApp ─────────────────────── */} 
       <motion.div 
         initial={{ scale: 0, opacity: 0 }} 
         animate={{ scale: 1, opacity: 1 }} 
         transition={{ delay: 1.2, type: "spring", stiffness: 200 }} 
         className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50" 
       > 
         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }} className="animate-glow"> 
           <Link href="https://wa.me/919447125344" aria-label="Contact us on WhatsApp" 
             className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl" 
             style={{ boxShadow: "0 8px 32px rgba(37,211,102,0.35)" }}> 
             <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" /> 
           </Link> 
         </motion.div> 
       </motion.div> 
     </main> 
   ); 
 } 
