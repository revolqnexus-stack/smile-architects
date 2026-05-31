"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Quote, Instagram } from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Abhijit Sajo Sebastian",
    role: "Chief Dental Surgeon & Endodontist",
    qualifications: "BDS (2017), MDS — Conservative Dentistry & Endodontics (2022)",
    specialization: "Endodontics, Restorative Dentistry, CBCT Research",
    details: "BDS from AECS Maaruti College of Dental Sciences, Bengaluru (2017). MDS from KLE V.K. Institute of Dental Sciences, Belagavi (2022). Active researcher in modern endodontics with published work on dental file systems and canal shaping using CBCT. Reg. No. 33030, Kerala State Dental Council.",
    memberships: ["KSDC Reg. 33030", "KLE V.K. IDS Alumni"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    instagram: null,
    quote: "Painless, precise endodontics — saving your natural teeth is always the first priority."
  }
];

export default function Practitioner() {
  return (
    <section id="practitioner" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            Clinical Leadership
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Specialist-led. <br />
            <span className="italic text-primary">Research-driven.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Virtue Dental Clinic is led by Dr. Abhijit Sajo Sebastian, a specialist in 
            Conservative Dentistry & Endodontics, bringing post-graduate expertise and 
            published research to every patient in Pala.
          </motion.p>
        </div>

        {/* Single doctor — centered, wider card */}
        <div className="max-w-4xl mx-auto">
          {doctors.map((doc, index) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">MDS Specialist</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">{doc.name}</h3>
                  <p className="text-white/60 text-xs sm:text-sm font-medium">{doc.role}</p>
                </div>
              </div>

              <div className="space-y-6 px-2">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-foreground">{doc.qualifications}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">{doc.specialization}</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {doc.details}
                </p>

                <div className="flex flex-wrap gap-2">
                  {doc.memberships.map(m => (
                    <span key={m} className="px-3 py-1 bg-muted rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-tight border border-border">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Visiting roles */}
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Also Visiting At</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Holy Family Dentcare, Kozhuvanal</li>
                    <li>Mercy Hospital, Pothy</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-border relative">
                  <Quote className="absolute -top-3 -left-2 w-6 h-6 text-primary/10 rotate-180" />
                  <p className="text-sm italic text-foreground font-serif leading-relaxed">
                    "{doc.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
