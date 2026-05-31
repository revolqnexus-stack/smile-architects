"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant, fast loading duration for a premium experience
    const timer = setTimeout(() => setIsVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)"
          }}
        >
          <div className="relative flex flex-col items-center">
            
            {/* Elegant Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative mb-8"
            >
              <Image
                src="/logo.png"
                alt="Smile Architects Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Elegant Gold Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-32 bg-[#D4AF37] mb-8"
            />

            {/* Premium Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-2xl tracking-[0.4em] text-[#1E4D2B] font-medium mb-2">
                SMILE ARCHITECTS
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">
                Advanced Dental Care
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
