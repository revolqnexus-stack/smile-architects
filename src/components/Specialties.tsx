"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Smile, Microscope, Activity, Baby,
  Scissors, Scan, ShieldCheck, HeartPulse, ClipboardList, Phone
} from "lucide-react";

const specialties = [
  { title: "Advanced Orthodontics", description: "Specialized correction of crowding, diastema, and malocclusions using conventional metal, ceramic, and self-ligating brackets.", icon: Activity, highlights: ["Metal & Ceramic", "Self-Ligating", "Skeletal Anchorage"], featured: true },
  { title: "Clear Aligners", description: "Removable, transparent thermoplastic trays (Invisalign) for completely concealed orthodontic alignment and professional aesthetics.", icon: Smile, highlights: ["Invisible", "Removable", "Digital Planning"], featured: true },
  { title: "Growth Modification", description: "Functional appliances to guide skeletal jaw development in growing pediatric patients, preventing future surgical needs.", icon: Baby, highlights: ["Pediatric", "Skeletal Guide", "Preventive"] },
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
    <section id="specialties" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            Clinical Excellence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight tracking-tight"
          >
            Specialized Care.{" "}
            <span className="italic text-primary">Uncompromising Quality.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group clay-card p-8 flex flex-col cursor-default transition-all duration-500 ${spec.featured ? 'ring-2 ring-primary/10' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 clay-button ${spec.featured ? 'bg-primary text-white' : 'bg-white text-primary group-hover:bg-primary group-hover:text-white'}`}>
                <spec.icon className="w-7 h-7" />
              </div>
              {spec.featured && (
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-3">Signature Specialization</span>
              )}
              <h3 className="text-xl font-serif text-foreground mb-3 leading-tight tracking-tight">{spec.title}</h3>
              <p className="text-sm text-muted-foreground/90 leading-relaxed flex-1 mb-6 font-medium">{spec.description}</p>
              <div className="flex flex-wrap gap-2">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-3 py-1 clay-card !rounded-full !bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-widest !shadow-none !border-none">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Emergency card — spans 2 cols */}
          <motion.div
            custom={10}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="xl:col-span-2 clay-card-primary p-10 flex flex-col sm:flex-row items-center gap-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full clay-button !bg-white/10 flex items-center justify-center flex-shrink-0"
            >
              <HeartPulse className="w-10 h-10 text-white" />
            </motion.div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif text-white mb-3 tracking-tight">Tertiary Care Pathway</h3>
              <p className="text-white/70 mb-8 text-sm leading-relaxed max-w-md font-medium">
                Seamless referral to Mar Sleeva Medicity or Sunrise Hospital for complex orthognathic surgeries and advanced surgical infrastructure.
              </p>
              <motion.a
                href="tel:+919447125344"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 clay-button !bg-white !text-primary rounded-full font-bold text-sm shadow-xl hover:bg-secondary hover:!text-white transition-all duration-300"
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
