"use client"; 
 
 import { motion, AnimatePresence } from "framer-motion"; 
 import Image from "next/image"; 
 import { useEffect, useState } from "react"; 
 
 export default function LoadingScreen() { 
   const [isVisible, setIsVisible] = useState(true); 
 
   useEffect(() => { 
     const timer = setTimeout(() => setIsVisible(false), 3200); 
     return () => clearTimeout(timer); 
   }, []); 
 
   return ( 
     <AnimatePresence> 
       {isVisible && ( 
         <motion.div 
           initial={{ opacity: 1 }} 
           exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }} 
           className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden" 
           style={{ background: "#FAFAF8" }} 
         > 
           {/* Soft radial background glow */} 
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} 
             animate={{ opacity: 1, scale: 1 }} 
             transition={{ duration: 2, ease: "easeOut" }} 
             className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: 
                 "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,210,190,0.18) 0%, transparent 70%)", 
             }} 
           /> 
 
           {/* Floating ambient circles */} 
           {[ 
             { size: 320, x: "-20%", y: "-30%", delay: 0 }, 
             { size: 200, x: "70%", y: "60%", delay: 0.4 }, 
             { size: 140, x: "80%", y: "10%", delay: 0.8 }, 
             { size: 90, x: "10%", y: "70%", delay: 0.6 }, 
           ].map((circle, i) => ( 
             <motion.div 
               key={i} 
               initial={{ opacity: 0, scale: 0.6 }} 
               animate={{ opacity: 1, scale: 1 }} 
               transition={{ duration: 2.5, delay: circle.delay, ease: "easeOut" }} 
               className="absolute rounded-full pointer-events-none" 
               style={{ 
                 width: circle.size, 
                 height: circle.size, 
                 left: circle.x, 
                 top: circle.y, 
                 background: 
                   "radial-gradient(circle, rgba(150,195,168,0.12) 0%, transparent 70%)", 
                 filter: "blur(30px)", 
               }} 
             /> 
           ))} 
 
           {/* Main content */} 
           <div className="relative flex flex-col items-center"> 
 
             {/* Outer ring pulse */} 
             <div className="relative flex items-center justify-center mb-8"> 
               <motion.div 
                 initial={{ scale: 0.7, opacity: 0 }} 
                 animate={{ scale: [0.7, 1.15, 1], opacity: [0, 0.3, 0] }} 
                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} 
                 className="absolute rounded-full border" 
                 style={{ 
                   width: 140, 
                   height: 140, 
                   borderColor: "rgba(100,160,120,0.3)", 
                 }} 
               /> 
               <motion.div 
                 initial={{ scale: 0.7, opacity: 0 }} 
                 animate={{ scale: [0.7, 1.25, 1.1], opacity: [0, 0.15, 0] }} 
                 transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeOut" }} 
                 className="absolute rounded-full border" 
                 style={{ 
                   width: 170, 
                   height: 170, 
                   borderColor: "rgba(100,160,120,0.15)", 
                 }} 
               /> 
 
               {/* Logo container */} 
               <motion.div 
                 initial={{ scale: 0.5, opacity: 0, rotate: -8 }} 
                 animate={{ scale: 1, opacity: 1, rotate: 0 }} 
                 transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }} 
                 className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-xl" 
                 style={{ 
                   background: "linear-gradient(135deg, #ffffff 0%, #f0f7f3 100%)", 
                   boxShadow: 
                     "0 20px 60px rgba(100,160,120,0.2), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)", 
                 }} 
               > 
                 <Image 
                   src="/images/logo.png" 
                   alt="Virtue Dental Clinic" 
                   fill 
                   className="object-contain p-3" 
                   priority 
                 /> 
               </motion.div> 
             </div> 
 
             {/* Clinic name */} 
             <div className="flex flex-col items-center gap-1 mb-10"> 
               <motion.div 
                 initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }} 
                 animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }} 
                 transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }} 
                 className="overflow-hidden" 
               > 
                 <span 
                   className="block text-4xl font-bold tracking-[0.25em] uppercase" 
                   style={{ 
                     color: "#1a2e22", 
                     fontFamily: "Georgia, 'Times New Roman', serif", 
                     textShadow: "0 1px 2px rgba(0,0,0,0.06)", 
                   }} 
                 > 
                   VIRTUE 
                 </span> 
               </motion.div> 
 
               <motion.div 
                 initial={{ opacity: 0, scaleX: 0 }} 
                 animate={{ opacity: 1, scaleX: 1 }} 
                 transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }} 
                 className="w-full h-px origin-center" 
                 style={{ background: "linear-gradient(90deg, transparent, rgba(100,160,120,0.6), transparent)" }} 
               /> 
 
               <motion.span 
                 initial={{ opacity: 0, y: 10 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }} 
                 className="text-xs font-semibold uppercase tracking-[0.45em] mt-1" 
                 style={{ color: "rgba(100,160,120,0.9)" }} 
               > 
                 Dental Clinic 
               </motion.span> 
             </div> 
 
             {/* Tagline */} 
             <motion.p 
               initial={{ opacity: 0, y: 8 }} 
               animate={{ opacity: 1, y: 0 }} 
               transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }} 
               className="text-xs tracking-widest mb-10" 
               style={{ color: "rgba(80,100,88,0.55)", letterSpacing: "0.2em" }} 
             > 
               YOUR SMILE · OUR PRIORITY 
             </motion.p> 
 
             {/* Animated progress dots */} 
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 1.8 }} 
               className="flex gap-2" 
             > 
               {[0, 1, 2].map((i) => ( 
                 <motion.div 
                   key={i} 
                   animate={{ 
                     scale: [1, 1.5, 1], 
                     opacity: [0.3, 1, 0.3], 
                   }} 
                   transition={{ 
                     duration: 1.2, 
                     repeat: Infinity, 
                     delay: i * 0.2, 
                     ease: "easeInOut", 
                   }} 
                   className="rounded-full" 
                   style={{ 
                     width: 5, 
                     height: 5, 
                     background: "rgba(100,160,120,0.8)", 
                   }} 
                 /> 
               ))} 
             </motion.div> 
           </div> 
         </motion.div> 
       )} 
     </AnimatePresence> 
   ); 
 }
