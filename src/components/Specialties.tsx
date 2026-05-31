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
    <section id="specialties" className="py-48 relative overflow-hidden">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
              className={`group bg-white p-10 flex flex-col cursor-default transition-all duration-500 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 ${spec.featured ? 'ring-1 ring-primary/20' : ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${spec.featured ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white border border-primary/10'}`}>
                <spec.icon className="w-6 h-6" />
              </div>
              {spec.featured && (
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60 mb-4 block">Signature Care</span>
              )}
              <h3 className="text-2xl font-serif text-foreground mb-4 leading-tight tracking-tight">{spec.title}</h3>
              <p className="text-sm text-muted-foreground/90 leading-relaxed flex-1 mb-8 font-medium tracking-tight">{spec.description}</p>
              <div className="flex flex-wrap gap-2.5">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-primary/5 rounded-full text-primary text-[8px] font-bold uppercase tracking-[0.15em]">
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
            className="xl:col-span-2 bg-primary p-12 flex flex-col sm:flex-row items-center gap-12 relative overflow-hidden group rounded-[3rem] shadow-2xl shadow-primary/20"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20 shadow-2xl shadow-black/10"
            >
              <HeartPulse className="w-10 h-10 text-white" />
            </motion.div>
            <div className="relative z-10 text-center sm:text-left">
              <h3 className="text-4xl font-serif text-white mb-4 tracking-tight">Tertiary Care Pathway</h3>
              <p className="text-white/80 mb-10 text-base leading-relaxed max-w-md font-medium tracking-tight">
                Seamless referral to Mar Sleeva Medicity for complex orthognathic surgeries and advanced surgical infrastructure.
              </p>
              <motion.a
                href="tel:+919447125344"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary rounded-full font-bold text-sm shadow-xl transition-all duration-300 hover:bg-white/90"
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
