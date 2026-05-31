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
           style={{ background: "#090E17" }} 
         > 
           {/* Noise texture overlay */} 
           <div 
             className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, 
               backgroundSize: "128px", 
             }} 
           /> 
  
           {/* Deep forest green spotlight from top */} 
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ duration: 2.5 }} 
             className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(30,77,43,0.07) 0%, transparent 100%)", 
             }} 
           /> 
  
           {/* Bottom gold vignette */} 
           <div 
             className="absolute inset-0 pointer-events-none" 
             style={{ 
               background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(255,194,51,0.04) 0%, transparent 60%)", 
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
                   <stop offset="0%" stopColor="#FFC233" stopOpacity="0" /> 
                   <stop offset="40%" stopColor="#FFC233" stopOpacity="1" /> 
                   <stop offset="100%" stopColor="#FFC233" stopOpacity="0" /> 
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
                 stroke="#FFC233" 
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
               background: "radial-gradient(circle, rgba(255,194,51,0.06) 0%, transparent 70%)", 
               filter: "blur(20px)", 
             }} 
           /> 
  
           {/* Main content */}
           <div className="relative flex flex-col items-center">

             {/* Logo as main animation */}
             <motion.div
               initial={{ scale: 0.3, opacity: 0, rotateY: 180 }}
               animate={{
                 scale: [1, 1.15, 1],
                 opacity: 1,
                 rotateY: [0, 15, -15, 0],
                 rotateZ: [0, 5, -5, 0]
               }}
               transition={{
                 opacity: { duration: 1 },
                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                 rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                 rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" }
               }}
               className="relative mb-12"
               style={{
                 width: 280,
                 height: 280,
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 perspective: "1000px"
               }}
             >
               {/* 3D Floor Shadow */}
               <motion.div
                 animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-4 w-40 h-8 rounded-[100%] blur-xl"
                 style={{ background: "radial-gradient(circle, rgba(0,0,0,0.4) 0%, transparent 70%)" }}
               />

               {/* Pulsing rings around logo */}
               <motion.div
                 animate={{ scale: [1, 2.2], opacity: [0.4, 0] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                 className="absolute inset-0 rounded-full border-2 border-[#FFC233]/20"
               />
               <motion.div
                 animate={{ scale: [1, 2.8], opacity: [0.2, 0] }}
                 transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeOut" }}
                 className="absolute inset-0 rounded-full border border-[#FFC233]/10"
               />

               <Image
                 src="/logo.png"
                 alt="Smile Architects Logo"
                 width={220}
                 height={220}
                 className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(255,194,51,0.25)]"
                 priority
               />
             </motion.div>

             {/* SMILE wordmark */} 
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
               className="flex flex-col items-center"
             >
               <h1 style={{ 
                 fontFamily: "var(--font-serif)", 
                 fontSize: "4rem", 
                 fontWeight: 300, 
                 letterSpacing: "0.4em", 
                 color: "#f5f5f0", 
                 lineHeight: 1, 
                 textShadow: "0 0 60px rgba(255,194,51,0.2)", 
               }}>
                 SMILE
               </h1>
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "120%" }}
                 transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                 style={{ 
                   height: "1px", 
                   background: "linear-gradient(90deg, transparent, rgba(255,194,51,0.4), transparent)", 
                   marginTop: "1.5rem",
                   marginBottom: "0.75rem"
                 }}
               />
               <div style={{ 
                 fontSize: "0.75rem", 
                 fontWeight: 700, 
                 textTransform: "uppercase", 
                 color: "rgba(255,194,51,0.7)", 
                 letterSpacing: "0.8em", 
                 marginLeft: "0.8em"
               }}> 
                 Architects
               </div>
             </motion.div>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 }