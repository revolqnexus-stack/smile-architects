"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Smile, Microscope, Activity, Baby,
  Scissors, Scan, HeartPulse, ClipboardList, Phone, TrendingUp
} from "lucide-react";

const specialties = [
  { title: "Advanced Orthodontics", description: "Specialized correction of crowding, diastema, and malocclusions using conventional metal, ceramic, and self-ligating brackets.", icon: Activity, highlights: ["Metal & Ceramic", "Self-Ligating", "Skeletal Anchorage"], featured: true },
  { title: "Clear Aligners", description: "Removable, transparent thermoplastic trays (Invisalign) for completely concealed orthodontic alignment and professional aesthetics.", icon: Smile, highlights: ["Invisible", "Removable", "Digital Planning"], featured: true },
  { title: "Growth Modification", description: "Functional appliances to guide skeletal jaw development in growing pediatric patients, preventing future surgical needs.", icon: TrendingUp, highlights: ["Pediatric", "Skeletal Guide", "Preventive"] },
  { title: "Digital Smile Designing", description: "Advanced digital modeling and aesthetic previewing to transform your smile with veneers, laminates, and composite resins.", icon: Scan, highlights: ["DSD", "Veneers", "Laminates"] },
  { title: "Surgical Orthodontics", description: "Presurgical decompensation and coordination with orthognathic surgery for complex dentofacial skeletal corrections.", icon: Scissors, highlights: ["Orthognathic", "Trauma Care", "Complex Cases"] },
  { title: "Root Canal Treatment", description: "Microscopic and rotary endodontic therapy to salvage infected pulpal tissues with precision and comfort.", icon: Microscope, highlights: ["Micro-Endo", "Rotary Systems", "Precision"] },
  { title: "Cosmetic Dentistry", description: "Biomimetic reconstructions and tooth-colored restorations that mirror natural enamel optical properties.", icon: HeartPulse, highlights: ["Biomimetic", "Composites", "Aesthetics"] },
  { title: "Pediatric Dentistry", description: "Gentle interceptive treatments and preventive care designed for children's unique dental development.", icon: Baby, highlights: ["Child Friendly", "Interceptive", "Prevention"] },
  { title: "Impacted Extractions", description: "Minimally invasive surgical removal of impacted third molars and complex dental units.", icon: Stethoscope, highlights: ["Surgical", "Impacted", "Pain Relief"] },
  { title: "Advanced Diagnostics", description: "OPD setting with digital diagnostics and orthodontic adjustment bays for comprehensive clinical analysis.", icon: ClipboardList, highlights: ["Digital X-Ray", "Sterile OPD", "Planning"] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.05, ease: "easeOut" as const }
  }),
};

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 section-warm" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px gold-divider" />

      {/* Green orb */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,106,45,0.05) 0%, transparent 70%)", transform: "translateX(30%)" }} />
      {/* Yellow orb */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,197,71,0.07) 0%, transparent 70%)", transform: "translate(-20%, 20%)" }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ background: "rgba(232,197,71,0.15)", border: "1px solid rgba(232,197,71,0.4)", color: "#1A1F16" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#2D6A2D" }} />
            Clinical Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif mb-8 leading-tight tracking-tight"
            style={{ color: "#1A1F16" }}
          >
            Specialized Care.{" "}
            <span className="italic" style={{ color: "#2D6A2D" }}>Uncompromising Quality.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#6B7160" }}
          >
            A multi-specialty facility delivering approximately 62 distinct dental surgeries and treatments, spanning preventive, restorative, corrective, and surgical dental sciences.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
              className="group flex flex-col cursor-default transition-all duration-500 relative overflow-hidden"
              style={{
                background: "#FFFFFF",
                borderRadius: "2rem",
                border: spec.featured ? "1.5px solid rgba(232,197,71,0.4)" : "1px solid rgba(45,106,45,0.07)",
                boxShadow: spec.featured
                  ? "0 8px 32px rgba(232,197,71,0.1), 0 2px 8px rgba(45,106,45,0.06)"
                  : "0 4px 24px rgba(45,106,45,0.05)",
                padding: "2.5rem",
              }}
            >
              {/* Featured accent bar — real design element */}
              {spec.featured && (
                <div className="absolute top-0 left-0 right-0 h-[5px] rounded-t-[2rem]"
                  style={{ background: "linear-gradient(90deg, #E8C547 0%, #2D6A2D 100%)" }} />
              )}

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0"
                style={spec.featured
                  ? { background: "#2D6A2D", boxShadow: "0 8px 24px rgba(45,106,45,0.25)" }
                  : { background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.1)" }
                }>
                <spec.icon className="w-6 h-6 transition-colors duration-500"
                  style={{ color: spec.featured ? "#FFFFFF" : "#2D6A2D" }} />
              </div>

              {spec.featured && (
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] mb-3 block px-2 py-1 rounded-md w-fit"
                  style={{ background: "rgba(45,106,45,0.08)", color: "#1E4D1E" }}>Signature Care</span>
              )}

              <h3 className="text-xl font-serif mb-3 leading-tight tracking-tight"
                style={{ color: "#1A1F16" }}>{spec.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-8 font-medium"
                style={{ color: "#6B7160" }}>{spec.description}</p>

              <div className="flex flex-wrap gap-2">
                {spec.highlights.map(tag => (
                  <span key={tag}
                    className="px-3 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-[0.15em]"
                    style={{ background: "rgba(232,197,71,0.12)", color: "#1A1F16", border: "1px solid rgba(232,197,71,0.25)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Emergency / Tertiary card */}
          <motion.div
            custom={10}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:col-span-2 flex flex-col sm:flex-row items-center gap-10 relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #2D6A2D 0%, #3D8B3D 100%)",
              borderRadius: "2.5rem",
              padding: "3rem",
              boxShadow: "0 20px 60px rgba(45,106,45,0.25)"
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"
              style={{ background: "rgba(255,255,255,0.04)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "rgba(232,197,71,0.06)", transform: "translate(-20%, 20%)" }} />

            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(232,197,71,0.15)", border: "2px solid rgba(232,197,71,0.3)" }}
            >
              <HeartPulse className="w-10 h-10" style={{ color: "#E8C547" }} />
            </motion.div>

            <div className="relative z-10 text-center sm:text-left">
              <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(232,197,71,0.7)" }}>
                Advanced Care Network
              </div>
              <h3 className="text-3xl font-serif text-white mb-4 tracking-tight">Tertiary Care Pathway</h3>
              <p className="mb-8 text-sm leading-relaxed max-w-md font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                Seamless referral to Mar Sleeva Medicity for complex orthognathic surgeries and advanced surgical infrastructure.
              </p>
              <motion.a
                href="tel:+919447125344"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300"
                style={{ background: "#E8C547", color: "#1A1F16", boxShadow: "0 4px 20px rgba(232,197,71,0.3)" }}
              >
                <Phone className="w-4 h-4" /> Direct Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
