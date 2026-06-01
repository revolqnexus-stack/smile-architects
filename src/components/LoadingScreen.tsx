"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#FAFAF7" }}
        >
          <div className="relative flex flex-col items-center px-6 w-full max-w-xs">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6"
            >
              <Image
                src="/logo.png"
                alt="Smile Architects Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Green-to-gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-28 mb-6"
              style={{ background: "linear-gradient(90deg, #2D6A2D, #E8C547, #2D6A2D)" }}
            />

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h1
                className="font-serif font-medium mb-1.5 text-center w-full"
                style={{
                  color: "#2D6A2D",
                  fontSize: "clamp(0.85rem, 4vw, 1.25rem)",
                  letterSpacing: "0.2em"
                }}
              >
                SMILE ARCHITECTS
              </h1>
              <p className="text-[9px] uppercase tracking-[0.35em] font-semibold text-center" style={{ color: "#E8C547" }}>
                Advanced Dental Care
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
