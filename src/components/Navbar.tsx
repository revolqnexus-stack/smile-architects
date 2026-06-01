"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: 'Specialties', href: '#specialties' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Doctor',      href: '#practitioner' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 20));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(l => {
      const el = document.getElementById(l.href.replace('#', ''));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50">

        {/* Glass background — always present, opacity animates in */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: bgOpacity }}
        >
          {/* Frosted glass layer */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(250,250,247,0.72)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
            }}
          />
          {/* Subtle green-tinted inner glow */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(45,106,45,0.04) 0%, transparent 100%)",
            }}
          />
          {/* Bottom border with gold shimmer */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: scrolled
                ? "linear-gradient(90deg, transparent 0%, rgba(232,197,71,0.5) 30%, rgba(45,106,45,0.3) 70%, transparent 100%)"
                : "transparent",
              transition: "background 0.4s ease",
            }}
          />
          {/* Outer shadow */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: "0 8px 32px rgba(45,106,45,0.08), 0 2px 8px rgba(0,0,0,0.04)",
            }}
          />
        </motion.div>

        <div className="relative container mx-auto px-6 flex items-center justify-between" style={{ height: "80px" }}>

          {/* Logo — larger, vertically centered */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative"
              style={{ width: "160px", height: "72px" }}
            >
              <Image
                src="/logo.png"
                alt="Smile Architects Dental Clinic Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[12px] font-bold uppercase tracking-[0.18em] py-1 group"
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: isActive ? '#2D6A2D' : 'rgba(26,31,22,0.5)' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2D6A2D'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isActive ? '#2D6A2D' : 'rgba(26,31,22,0.5)'}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] rounded-full"
                    style={{ background: "#E8C547" }}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/919447125344"
                target="_blank"
                className="px-7 py-3 rounded-full text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all"
                style={{
                  background: "linear-gradient(135deg, #2D6A2D 0%, #3D8B3D 100%)",
                  boxShadow: "0 4px 20px rgba(45,106,45,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
            style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.1)" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileMenuOpen
                  ? <X className="w-4 h-4" style={{ color: "#2D6A2D" }} />
                  : <Menu className="w-4 h-4" style={{ color: "#2D6A2D" }} />
                }
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm"
              style={{ background: "rgba(26,31,22,0.25)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                background: "rgba(250,250,247,0.96)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "-8px 0 40px rgba(45,106,45,0.12)",
                borderLeft: "1px solid rgba(45,106,45,0.08)"
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "1px solid rgba(45,106,45,0.08)" }}>
                <div className="relative" style={{ width: "120px", height: "48px" }}>
                  <Image src="/logo.png" alt="Smile Architects" fill sizes="120px" className="object-contain object-left" />
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.1)" }}
                >
                  <X className="w-4 h-4" style={{ color: "#2D6A2D" }} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-4 space-y-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 px-4 rounded-2xl transition-all group"
                      style={{ color: "#1A1F16" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(45,106,45,0.05)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                    >
                      <span className="text-base font-bold uppercase tracking-widest" style={{ color: "#1A1F16" }}>
                        {item.label}
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: "rgba(45,106,45,0.3)" }} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 pb-6 pt-4 space-y-3"
                style={{ borderTop: "1px solid rgba(45,106,45,0.08)" }}>
                <Link
                  href="tel:+919447125344"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-colors"
                  style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.12)", color: "#2D6A2D" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" /> Call Specialist
                </Link>
                <Link
                  href="https://wa.me/919447125344"
                  target="_blank"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold uppercase tracking-[0.15em] text-[11px] text-white transition-all"
                  style={{
                    background: "linear-gradient(135deg, #2D6A2D 0%, #3D8B3D 100%)",
                    boxShadow: "0 4px 16px rgba(45,106,45,0.25)"
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Booking
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
