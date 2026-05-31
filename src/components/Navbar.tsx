"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(253, 252, 248, 0)", "rgba(253, 252, 248, 0.9)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    ["rgba(229, 225, 211, 0)", "rgba(229, 225, 211, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ 
        backgroundColor,
        borderBottom: `1px solid ${borderOpacity}`
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold transition-transform group-hover:scale-110">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-foreground leading-none tracking-tight">VIRTUE</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mt-1">Dental Clinic</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {['Specialties', 'Gallery', 'Practitioner', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="tel:+918156822525" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary font-medium hover:bg-primary/5 transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> Call Us
            </Link>
            <Link 
              href="https://wa.me/+918156822525" 
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" /> Book Now
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 pt-2">
              {['Specialties', 'Gallery', 'Practitioner', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-serif font-bold text-foreground py-3 border-b border-border/50 last:border-0 flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-active:bg-primary group-active:text-white transition-colors">
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              ))}
              <div className="grid grid-cols-1 gap-3 pt-6">
                <Link 
                  href="tel:+918156822525" 
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-secondary text-primary font-bold active:scale-95 transition-transform"
                >
                  <Phone className="w-5 h-5" /> Call Specialist
                </Link>
                <Link 
                  href="https://wa.me/+918156822525" 
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Booking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
