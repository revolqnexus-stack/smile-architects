"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, ArrowRight, Star, Shield, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "4.9★", label: "Patient Rating" },
  { value: "62+", label: "Procedures" },
];

const badges = [
  { icon: Shield, text: "MDS Orthodontist" },
  { icon: Zap, text: "Clear Aligners" },
  { icon: Star, text: "Sterile OPD" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center overflow-hidden pt-40 pb-24">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Large green orb top-right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,106,45,0.07) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />

      {/* Yellow orb bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,197,71,0.08) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />

      {/* Dot pattern — subtle */}
      <div className="absolute inset-0 dot-pattern opacity-[0.12] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Pill badge */}
            <motion.div variants={item}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 border"
              style={{ background: "rgba(232,197,71,0.12)", borderColor: "rgba(232,197,71,0.35)", color: "#1A1F16" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70"
                  style={{ background: "#2D6A2D" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#2D6A2D" }} />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2D6A2D" }}>
                Pala&apos;s Premier Orthodontic Centre
              </span>
            </motion.div>

            {/* Headline — intentional 2-line layout */}
            <motion.h1 variants={item}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif leading-[0.95] mb-8 tracking-tight"
              style={{ color: "#1A1F16" }}
            >
              Sculpting{" "}
              <em className="font-light not-italic" style={{ color: "#2D6A2D" }}>Smiles,</em>
              <br />
              <span className="font-semibold">Architecting </span>
              <span className="font-light italic" style={{ color: "#2D6A2D" }}>Confidence.</span>
            </motion.h1>

            <motion.p variants={item}
              className="text-lg leading-relaxed mb-12 max-w-lg font-medium"
              style={{ color: "#6B7160" }}
            >
              Led by{" "}
              <span className="font-bold" style={{ color: "#2D6A2D" }}>Dr. Jeo Tom Charls</span>
              {" "}— delivering elite orthodontic precision with an artist&apos;s touch in the heart of Pala.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="https://wa.me/919447125344"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-500"
                  style={{ background: "#2D6A2D", boxShadow: "0 8px 32px rgba(45,106,45,0.25)" }}
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#specialties"
                  className="flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold transition-all duration-500"
                  style={{
                    background: "rgba(232,197,71,0.15)",
                    border: "1.5px solid rgba(232,197,71,0.5)",
                    color: "#1A1F16"
                  }}
                >
                  View Specialties
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item}
              className="flex gap-10 pt-10"
              style={{ borderTop: "1px solid rgba(45,106,45,0.12)" }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="relative">
                  {i > 0 && (
                    <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-px h-8"
                      style={{ background: "rgba(45,106,45,0.12)" }} />
                  )}
                  <div className="text-3xl sm:text-4xl font-serif font-bold leading-none"
                    style={{ color: "#1A1F16" }}>{s.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2"
                    style={{ color: "#2D6A2D" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
            className="lg:col-span-5 relative"
          >
            {/* Yellow accent ring behind image */}
            <div className="absolute -inset-4 rounded-[3.5rem] pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(232,197,71,0.15) 0%, rgba(45,106,45,0.08) 100%)" }} />

            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden"
              style={{ boxShadow: "0 40px 80px rgba(45,106,45,0.15), 0 0 0 1px rgba(255,255,255,0.3)" }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                alt="Smile Architects Dental Clinic"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,31,22,0.5) 0%, transparent 50%)" }} />

              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                {badges.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl backdrop-blur-md text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      color: "#2D6A2D",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: "#2D6A2D" }} />
                    {text}
                  </motion.div>
                ))}
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-1">Smile Architects</div>
                <div className="text-white font-serif text-xl font-medium">Pala, Kottayam</div>
              </div>
            </div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-6 right-0 sm:-right-6 p-5 rounded-[2rem] w-[210px]"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 20px 60px rgba(45,106,45,0.12), 0 0 0 1px rgba(45,106,45,0.06)"
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.3)" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#2D6A2D" }} />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight" style={{ color: "#1A1F16" }}>Pala Town</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest mt-0.5" style={{ color: "#6B7160" }}>Kattakkayam Road</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.1)" }}>
                  <Clock className="w-5 h-5" style={{ color: "#2D6A2D" }} />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight" style={{ color: "#1A1F16" }}>Mon – Sat</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest mt-0.5" style={{ color: "#6B7160" }}>9:30 AM – 8:00 PM</div>
                </div>
              </div>
            </motion.div>

            {/* Yellow decorative ring */}
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
              style={{ border: "2px solid rgba(232,197,71,0.25)" }} />
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(45,106,45,0.1)" }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "#6B7160" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "#2D6A2D", opacity: 0.5 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
