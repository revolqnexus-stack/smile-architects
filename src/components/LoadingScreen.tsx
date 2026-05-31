"use client"; 
  
 import { motion, AnimatePresence } from "framer-motion"; 
 import Image from "next/image"; 
 import { useEffect, useState } from "react"; 
  
 export default function LoadingScreen() { 
   const [isVisible, setIsVisible] = useState(true); 
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [phase, setPhase] = useState(0); 
  
   useEffect(() => { 
     const t1 = setTimeout(() => setPhase(1), 800); 
     const t2 = setTimeout(() => setPhase(2), 1600); 
     const t3 = setTimeout(() => setIsVisible(false), 3400); 
     return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); }; 
   }, []); 
  
   return ( 
     <AnimatePresence> 
       {isVisible && ( 
         <motion.div 
           initial={{ opacity: 1 }} 
           exit={{  
             opacity: 0, 
             scale: 1.04, 
             transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
           }} 
           className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden" 
           style={{ background: "#0a0f0c" }} 
         > 
           {/* Noise texture overlay */} 
           <div 
             className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, 
               backgroundSize: "128px", 
             }} 
           /> 
  
           {/* Deep green spotlight from top */} 
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ duration: 2.5 }} 
             className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(29,178,51,0.07) 0%, transparent 100%)", 
             }} 
           /> 
  
           {/* Bottom vignette */} 
           <div 
             className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(29,178,51,0.04) 0%, transparent 60%)", 
             }} 
           /> 
  
           {/* Rotating outer arc */} 
           <motion.div 
             initial={{ rotate: 0, opacity: 0 }} 
             animate={{ rotate: 360, opacity: 0.4 }} 
             transition={{  
               rotate: { duration: 12, repeat: Infinity, ease: "linear" }, 
               opacity: { duration: 1.5, delay: 0.3 } 
             }} 
             className="absolute z-10" 
             style={{ width: 220, height: 220 }} 
           > 
             <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"> 
               <circle 
                 cx="110" cy="110" r="105" 
                 stroke="url(#arcGrad)" 
                 strokeWidth="0.75" 
                 strokeDasharray="4 12" 
                 strokeLinecap="round" 
               /> 
               <defs> 
                 <linearGradient id="arcGrad" x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse"> 
                   <stop offset="0%" stopColor="#1DB233" stopOpacity="0" /> 
                   <stop offset="40%" stopColor="#1DB233" stopOpacity="1" /> 
                   <stop offset="100%" stopColor="#1DB233" stopOpacity="0" /> 
                 </linearGradient> 
               </defs> 
             </svg> 
           </motion.div> 
  
           {/* Counter-rotating inner arc */} 
           <motion.div 
             initial={{ rotate: 0, opacity: 0 }} 
             animate={{ rotate: -360, opacity: 0.25 }} 
             transition={{ 
               rotate: { duration: 18, repeat: Infinity, ease: "linear" }, 
               opacity: { duration: 1.5, delay: 0.6 } 
             }} 
             className="absolute" 
             style={{ width: 175, height: 175 }} 
           > 
             <svg viewBox="0 0 175 175" fill="none"> 
               <circle 
                 cx="87.5" cy="87.5" r="83" 
                 stroke="#1DB233" 
                 strokeWidth="0.5" 
                 strokeDasharray="1 20" 
                 strokeLinecap="round" 
               /> 
             </svg> 
           </motion.div> 
  
           {/* Center glow */} 
           <motion.div 
             initial={{ opacity: 0, scale: 0.5 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ duration: 1.8, ease: "easeOut" }} 
             className="absolute rounded-full pointer-events-none" 
             style={{ 
               width: 180, 
               height: 180, 
               background: "radial-gradient(circle, rgba(29,178,51,0.06) 0%, transparent 70%)", 
               filter: "blur(20px)", 
             }} 
           /> 
  
           {/* Main content */} 
           <div className="relative flex flex-col items-center"> 
  
             {/* Logo */} 
             <motion.div 
               initial={{ scale: 0, opacity: 0 }} 
               animate={{ scale: 1, opacity: 1 }} 
               transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }} 
               className="relative mb-10" 
               style={{ 
                 width: 80, 
                 height: 80, 
                 borderRadius: "50%", 
                 background: "linear-gradient(145deg, #141a15 0%, #0e1410 100%)", 
                 boxShadow: "0 0 0 1px rgba(29,178,51,0.15), 0 0 40px rgba(29,178,51,0.08), 0 20px 40px rgba(0,0,0,0.5)", 
                 display: "flex", 
                 alignItems: "center", 
                 justifyContent: "center", 
               }} 
             > 
               {/* Inner ring */} 
               <div 
                 className="absolute inset-0 rounded-full" 
                 style={{ 
                   background: "linear-gradient(135deg, rgba(29,178,51,0.1) 0%, transparent 50%)", 
                 }} 
               /> 
               <Image 
                 src="/logo.png" 
                 alt="Smile Architects Dental Clinic" 
                 width={52} 
                 height={52} 
                 className="object-contain relative z-10" 
                 priority 
               /> 
             </motion.div> 
  
             {/* SMILE wordmark — letter by letter */} 
             <div className="flex items-end gap-[0.06em] mb-3"> 
               {"SMILE".split("").map((letter, i) => ( 
                 <motion.span 
                   key={i} 
                   initial={{ opacity: 0, y: 16 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   transition={{  
                     duration: 0.5,  
                     delay: 0.6 + i * 0.07, 
                     ease: [0.22, 1, 0.36, 1] 
                   }} 
                   style={{ 
                     fontFamily: "var(--font-serif)", 
                     fontSize: "2.4rem", 
                     fontWeight: 700, 
                     letterSpacing: "0.18em", 
                     color: "#f5f5f0", 
                     lineHeight: 1, 
                     textShadow: "0 0 30px rgba(29,178,51,0.15)", 
                   }} 
                 > 
                   {letter} 
                 </motion.span> 
               ))} 
             </div> 
  
             {/* Animated divider */} 
             <motion.div 
               initial={{ scaleX: 0, opacity: 0 }} 
               animate={{ scaleX: 1, opacity: 1 }} 
               transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }} 
               className="mb-3 origin-center" 
               style={{ 
                 width: 160, 
                 height: 1, 
                 background: "linear-gradient(90deg, transparent 0%, rgba(29,178,51,0.5) 30%, rgba(29,178,51,0.5) 70%, transparent 100%)", 
               }} 
             /> 
  
             {/* Subtitle */} 
             <motion.div 
               initial={{ opacity: 0, letterSpacing: "0.2em" }} 
               animate={{ opacity: 1, letterSpacing: "0.42em" }} 
               transition={{ duration: 1, delay: 1.4, ease: "easeOut" }} 
               style={{ 
                 fontSize: "0.6rem", 
                 fontWeight: 600, 
                 textTransform: "uppercase", 
                 color: "rgba(29,178,51,0.65)", 
                 letterSpacing: "0.42em", 
                 marginBottom: "0.25rem", 
               }} 
             > 
               Architects 
             </motion.div> 
  
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ duration: 0.8, delay: 1.7 }} 
               style={{ 
                 fontSize: "0.55rem", 
                 fontWeight: 400, 
                 textTransform: "uppercase", 
                 color: "rgba(255,255,255,0.18)", 
                 letterSpacing: "0.25em", 
                 marginBottom: "2.5rem", 
               }} 
             > 
               Pala · Kottayam · Kerala 
             </motion.div> 
  
             {/* Loading bar */} 
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 2 }} 
               className="relative overflow-hidden rounded-full" 
               style={{ 
                 width: 120, 
                 height: 1.5, 
                 background: "rgba(255,255,255,0.06)", 
               }} 
             > 
               <motion.div 
                 initial={{ x: "-100%" }} 
                 animate={{ x: "0%" }} 
                 transition={{ duration: 1.2, delay: 2, ease: [0.22, 1, 0.36, 1] }} 
                 className="absolute inset-0 rounded-full" 
                 style={{ 
                   background: "linear-gradient(90deg, transparent, rgba(29,178,51,0.8), rgba(29,178,51,1))", 
                 }} 
               /> 
               {/* Shimmer */} 
               <motion.div 
                 initial={{ x: "-200%" }} 
                 animate={{ x: "300%" }} 
                 transition={{ duration: 0.8, delay: 3, ease: "easeOut" }} 
                 className="absolute inset-0 rounded-full" 
                 style={{ 
                   background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)", 
                   width: "40%", 
                 }} 
               /> 
             </motion.div> 
           </div> 
         </motion.div> 
       )} 
     </AnimatePresence> 
   ); 
 }