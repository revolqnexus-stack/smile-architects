"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "62",  label: "Treatments" },
  { value: "₹100", label: "Consultation" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Full-bleed background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/images/gallery/hero video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Left gradient overlay — text readable, right side breathes ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(9,14,23,0.92) 0%, rgba(9,14,23,0.75) 40%, rgba(9,14,23,0.10) 70%, transparent 100%)",
        }}
      />
      {/* Mobile: full-width darker overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none md:hidden"
        style={{ background: "rgba(9,14,23,0.88)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 w-full container mx-auto px-6 py-32 md:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl text-center md:text-left mx-auto md:mx-0"
        >

          {/* Label */}
          <motion.div variants={item} className="mb-6">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: "#C9A84C" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#C9A84C" }}
              />
              Pala&apos;s Premier Orthodontic Centre
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif text-white leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            Where Every Smile
            <br />
            <span className="italic font-light" style={{ color: "rgba(255,255,255,0.9)" }}>
              Tells a Story.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="text-base leading-relaxed mb-10 font-medium"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: "38ch" }}
          >
            Led by{" "}
            <span className="font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>
              Dr. Jeo Tom Charls
            </span>{" "}
            — MDS Orthodontist &amp; Dentofacial Orthopedics, Pala.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 mb-12 justify-center md:justify-start"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/919447125344"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
                style={{
                  background: "#C9A84C",
                  color: "#0A0E17",
                  boxShadow: "0 8px 32px rgba(201,168,76,0.35)",
                }}
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#specialties"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-300"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-items-center md:justify-items-start"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-sm font-bold text-white">{s.value}</span>
                <span
                  className="text-[11px] font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating info card — bottom-right, hidden on mobile ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col gap-3 p-5 rounded-[1.75rem] w-[220px]"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        {/* Hours */}
        <div>
          <p
            className="text-[9px] font-bold uppercase tracking-[0.2em] mb-1"
            style={{ color: "#C9A84C" }}
          >
            Opening Hours
          </p>
          <p className="text-white text-sm font-bold leading-tight">Mon – Sat</p>
          <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
            9:30 AM – 8:00 PM
          </p>
        </div>

        <div className="h-px" style={{ background: "rgba(255,255,255,0.12)" }} />

        {/* Tap to call */}
        <Link
          href="tel:+919447125344"
          className="flex items-center justify-center gap-2 py-2.5 rounded-2xl font-bold text-[11px] uppercase tracking-widest transition-all"
          style={{
            background: "#C9A84C",
            color: "#0A0E17",
          }}
        >
          <Phone className="w-3.5 h-3.5" />
          Tap to Call
        </Link>
      </motion.div>
    </section>
  );
}
