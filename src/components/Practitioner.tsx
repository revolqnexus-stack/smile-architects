"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Quote, MapPin, FlaskConical } from "lucide-react";

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
    <section id="practitioner" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#FFC233]/3 blur-[160px] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Award className="w-4 h-4" /> Medical Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-tight tracking-tight"
          >
            Specialist-led.{" "}
            <span className="italic text-primary">Precision-driven.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
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
            className="grid md:grid-cols-12 gap-0 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] bg-white border border-border/50"
          >
            {/* Image — 5 cols */}
            <div className="md:col-span-5 relative min-h-[500px] md:min-h-0">
              <img
                src="/images/gallery/doctor pic.png"
                alt="Dr. Jeo Tom Charls"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent md:bg-gradient-to-r" />

              {/* Name overlay */}
              <div className="absolute bottom-10 left-10 right-10 md:hidden">
                <div className="flex items-center gap-2.5 mb-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">MDS Orthodontist</span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-1">Dr. Jeo Tom Charls</h3>
                <p className="text-white/60 text-sm font-medium">Chief Dental Surgeon & Orthodontist</p>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 left-10 glass-card px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest">Experience</div>
                  <div className="text-xs font-bold text-foreground">15+ Clinical Years</div>
                </div>
              </motion.div>
            </div>

            {/* Content — 7 cols */}
            <div className="md:col-span-7 p-10 sm:p-16 flex flex-col justify-center">
              {/* Desktop name */}
              <div className="hidden md:block mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Elite Clinical Specialist</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif text-foreground mb-2 tracking-tight">Dr. Jeo Tom Charls</h3>
                <p className="text-muted-foreground/80 text-lg font-medium">Chief Dental Surgeon & Orthodontist</p>
              </div>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {credentials.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-5 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 border border-primary/5">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/60">{c.label}</span>
                      <p className="text-sm text-foreground font-bold mt-1 leading-snug">{c.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visiting */}
              <div className="p-6 bg-muted/40 rounded-[2rem] mb-12 border border-border/30">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Institutional Affiliations
                </p>
                <ul className="space-y-3">
                  {visiting.map(v => (
                    <li key={v} className="text-sm text-muted-foreground font-medium flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="relative pl-8 border-l-2 border-primary/10">
                <Quote className="absolute -top-2 -left-4 w-7 h-7 text-primary/10" />
                <p className="text-lg italic font-serif text-foreground leading-relaxed max-w-md">
                  "Sculpting smiles and architecting confidence through precision orthodontics and biomimetic care."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
