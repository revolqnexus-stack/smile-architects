"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Smile, 
  Microscope, 
  Activity, 
  Baby, 
  Scissors, 
  Scan, 
  ShieldCheck,
  HeartPulse,
  Syringe,
  ClipboardList
} from "lucide-react";

const specialties = [
  {
    title: "General Dentistry",
    description: "Routine checkups, professional cleanings, fillings, and preventive care to maintain your oral health.",
    icon: Stethoscope,
    highlights: ["Checkups", "Cleanings", "Fillings"]
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile makeovers with professional teeth whitening, veneers, and aesthetic contouring.",
    icon: Smile,
    highlights: ["Whitening", "Veneers", "Smile Makeover"]
  },
  {
    title: "Orthodontics",
    description: "Corrective alignment procedures for malocclusions using modern braces and clear aligner systems.",
    icon: Activity,
    highlights: ["Braces", "Clear Aligners", "Malocclusion"]
  },
  {
    title: "Root Canal Treatment",
    description: "Painless endodontic therapy to save native teeth, eliminating infection and preserving natural structure.",
    icon: Microscope,
    highlights: ["Painless RCT", "Endodontics", "Pulp Therapy"]
  },
  {
    title: "Dental Implants",
    description: "Permanent bio-compatible replacements for missing teeth with a natural look and feel.",
    icon: Scan,
    highlights: ["Single Tooth", "Full Mouth", "Bio-compatible"]
  },
  {
    title: "Crowns & Bridges",
    description: "Durable prosthetic restorations for damaged or missing teeth, restoring function and aesthetics.",
    icon: ShieldCheck,
    highlights: ["Crowns", "Bridges", "Restorations"]
  },
  {
    title: "Gum Treatments",
    description: "Advanced periodontal therapy for soft-tissue health, including scaling, polishing, and gum disease care.",
    icon: HeartPulse,
    highlights: ["Periodontics", "Scaling", "Polishing"]
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle, specialized dental care designed specifically for children's oral health and preventive needs.",
    icon: Baby,
    highlights: ["Child Friendly", "Fluoride", "Prevention"]
  },
  {
    title: "Wisdom Tooth Extraction",
    description: "Safe surgical removal of wisdom teeth to prevent crowding, infection, and long-term complications.",
    icon: Scissors,
    highlights: ["Surgical Removal", "Crowding", "Infection"]
  },
  {
    title: "Diagnostics & Consultation",
    description: "In-house digital X-ray services and comprehensive specialist consultations for accurate treatment plans.",
    icon: ClipboardList,
    highlights: ["Digital X-Ray", "Consultation", "Planning"]
  }
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Clinical Excellence. <br />
            <span className="italic text-primary">Specialist Care.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Led by Dr. Abhijit Sajo Sebastian, we provide a comprehensive spectrum of 
            10 advanced dental specialties focused on painless, patient-centric excellence 
            in Pala, Kottayam.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <spec.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">{spec.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {spec.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {spec.highlights.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary/50 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Emergency Card Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="xl:col-span-2 p-8 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-primary/20"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 animate-pulse">
              <HeartPulse className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Emergency Dental Care</h3>
              <p className="text-white/80 mb-6 leading-relaxed max-w-lg">
                Immediate diagnostics for acute pain or trauma. Our team provides responsive emergency support during clinic working hours.
              </p>
              <a 
                href="tel:+918156822525" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
              >
                Call for Emergency
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
