"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, ArrowRight, Star, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "4.9★", label: "Patient Rating" },
  { value: "62+", label: "Dental Procedures" },
];

const badges = [
  { icon: Shield, text: "MDS Orthodontist" },
  { icon: Zap, text: "Specialized Aligners" },
  { icon: Star, text: "Modern Sterile OPD" },
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
    <section ref={ref} className="relative min-h-[110vh] flex items-center overflow-hidden pt-40 pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[140px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

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
            {/* Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Pala's Premier Orthodontic Centre
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="text-6xl sm:text-7xl lg:text-8xl font-serif text-foreground leading-[0.95] mb-8 tracking-tight">
              Sculpting <span className="italic font-light">Smiles</span>.{" "}
              <span className="block text-shimmer font-medium">Architecting Confidence.</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-muted-foreground/90 leading-relaxed mb-12 max-w-lg font-medium tracking-tight">
              Led by <span className="text-primary font-bold">Dr. Jeo Tom Charls</span> — delivering elite orthodontic precision with an artist's touch in the heart of Pala.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="https://wa.me/919447125344"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-10 py-5 clay-button text-white rounded-full font-bold shadow-xl shadow-primary/20 transition-all duration-500"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#specialties"
                  className="flex items-center justify-center gap-2 px-10 py-5 clay-card !rounded-full !shadow-sm border border-white/50 text-foreground font-bold transition-all duration-500"
                >
                  View Specialties
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="flex gap-12 pt-10 border-t border-border/50">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-none">{s.value}</div>
                  <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-3">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
            className="lg:col-span-5 relative"
          >
            {/* Main image frame */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)] ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                alt="Smile Architects Dental Clinic"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-40" />

              {/* Badges overlay */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                {badges.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="clay-card flex items-center gap-2.5 px-4 py-2 rounded-2xl text-[10px] font-bold text-foreground uppercase tracking-widest !shadow-sm border-white/40"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: 30 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 -right-4 sm:-right-10 clay-card p-6 rounded-[2.5rem] max-w-[240px] border-white/60 animate-float"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl clay-button !bg-primary/5 flex items-center justify-center flex-shrink-0 !shadow-none border-primary/10">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">Pala Town</div>
                  <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">Kattakkayam Road</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl clay-button !bg-primary/5 flex items-center justify-center flex-shrink-0 !shadow-none border-primary/10">
                  <Clock className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground leading-tight">Mon – Sat</div>
                  <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-0.5">09:30 AM – 8:00 PM</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-primary/10 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border border-accent/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
