"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Quote, MapPin } from "lucide-react";

const credentials = [
  { label: "BDS", detail: "Sri Balaji Dental College and Hospital, Chennai · 2010" },
  { label: "MDS", detail: "Orthodontics & Dentofacial Orthopedics · 2015" },
  { label: "Specialization", detail: "Expert in Braces, Aligners & Dentofacial Orthopedics" },
  { label: "Reg. No.", detail: "9451 — Kerala State Dental Council" },
];

const visiting = [
  "Mar Sleeva Medicity, Palai (Cherpunkal)",
  "Sunrise Hospital, Erattupetta",
];

export default function Practitioner() {
  return (
    <section id="practitioner" className="py-24 relative overflow-hidden" style={{ background: "#FAFAF7" }}>
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,197,71,0.06) 0%, transparent 70%)", transform: "translate(-30%, -50%)" }} />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,106,45,0.05) 0%, transparent 70%)", transform: "translate(30%, -50%)" }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.12)", color: "#2D6A2D" }}
          >
            <Award className="w-4 h-4" /> Medical Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif mb-8 leading-tight tracking-tight"
            style={{ color: "#1A1F16" }}
          >
            Specialist-led.{" "}
            <span className="italic" style={{ color: "#2D6A2D" }}>Precision-driven.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#6B7160" }}
          >
            Smile Architects is led by Dr. Jeo Tom Charls — an MDS Orthodontist with over 15 years of clinical expertise in complex dentofacial corrections.
          </motion.p>
        </div>

        {/* Doctor card */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-12 gap-0 overflow-hidden"
            style={{
              borderRadius: "3rem",
              boxShadow: "0 40px 80px rgba(45,106,45,0.1), 0 0 0 1px rgba(45,106,45,0.06)",
              background: "#FFFFFF"
            }}
          >
            {/* Image — 5 cols */}
            <div className="md:col-span-5 relative min-h-[500px] md:min-h-0">
              <img
                src="/images/gallery/doctor pic.png"
                alt="Dr. Jeo Tom Charls"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
                style={{ filter: "grayscale(10%)" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,31,22,0.85) 0%, rgba(26,31,22,0.2) 50%, transparent 100%)" }} />

              {/* Mobile name overlay */}
              <div className="absolute bottom-10 left-10 right-10 md:hidden">
                <div className="flex items-center gap-2.5 mb-2">
                  <Star className="w-4 h-4 fill-current" style={{ color: "#E8C547" }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(232,197,71,0.8)" }}>MDS Orthodontist</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-1">Dr. Jeo Tom Charls</h3>
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>Chief Dental Surgeon & Orthodontist</p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 left-10 backdrop-blur-md px-5 py-4 rounded-2xl flex items-center gap-4"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.3)" }}>
                  <Award className="w-6 h-6" style={{ color: "#2D6A2D" }} />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#2D6A2D" }}>Experience</div>
                  <div className="text-sm font-bold" style={{ color: "#1A1F16" }}>15+ Clinical Years</div>
                </div>
              </motion.div>
            </div>

            {/* Content — 7 cols */}
            <div className="md:col-span-7 p-10 sm:p-16 flex flex-col justify-center">
              {/* Desktop name */}
              <div className="hidden md:block mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 fill-current" style={{ color: "#E8C547" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: "#C9A227" }}>Elite Clinical Specialist</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif mb-2 tracking-tight" style={{ color: "#1A1F16" }}>
                  Dr. Jeo Tom Charls
                </h3>
                <p className="text-lg font-medium" style={{ color: "#6B7160" }}>Chief Dental Surgeon & Orthodontist</p>
              </div>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {credentials.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-2xl"
                    style={{
                      background: "rgba(45,106,45,0.06)",
                      border: "1px solid rgba(45,106,45,0.12)",
                      boxShadow: "0 2px 8px rgba(45,106,45,0.05)"
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(232,197,71,0.18)", border: "1px solid rgba(232,197,71,0.35)" }}>
                      <GraduationCap className="w-5 h-5" style={{ color: "#2D6A2D" }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A227" }}>{c.label}</span>
                      <p className="text-sm font-bold mt-1 leading-snug" style={{ color: "#1A1F16" }}>{c.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visiting */}
              <div className="p-5 rounded-[1.5rem] mb-8"
                style={{ background: "rgba(45,106,45,0.05)", border: "1px solid rgba(45,106,45,0.1)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: "#2D6A2D" }}>
                  <MapPin className="w-3.5 h-3.5" style={{ color: "rgba(45,106,45,0.4)" }} /> Institutional Affiliations
                </p>
                <ul className="space-y-3">
                  {visiting.map(v => (
                    <li key={v} className="text-sm font-medium flex items-center gap-3" style={{ color: "#6B7160" }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#E8C547" }} />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="relative pl-8" style={{ borderLeft: "3px solid #E8C547" }}>
                <Quote className="w-6 h-6 mb-3" style={{ color: "rgba(232,197,71,0.5)" }} />
                <p className="text-lg italic font-serif leading-relaxed max-w-md" style={{ color: "#1A1F16" }}>
                  &ldquo;Sculpting smiles and architecting confidence through precision orthodontics and biomimetic care.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
