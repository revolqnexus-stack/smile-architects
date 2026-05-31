"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop", alt: "Aesthetic Smile Makeover", title: "Aesthetic Makeover" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", alt: "Precision Orthodontics", title: "Specialized Braces" },
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2074&auto=format&fit=crop", alt: "Clear Aligner Therapy", title: "Clear Aligners" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", alt: "Modern Clinical Diagnostics", title: "Digital Diagnostics" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", alt: "Patient Consultation", title: "Specialist Care" },
  { src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop", alt: "Premium Clinic Environment", title: "Sterile OPD" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop", alt: "Restorative Excellence", title: "Smile Design" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", alt: "Medical Leadership", title: "Expert Guidance" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 relative overflow-hidden bg-muted/20">
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Clinical Gallery
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-5 leading-tight">
            Our results.{" "}
            <span className="italic text-primary">Your confidence.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A selection of clinical cases treated at Smile Architects, showcasing our commitment to orthodontic precision and aesthetic excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-xl shadow-primary/5 bg-white"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white text-sm font-bold uppercase tracking-widest mb-1">{image.title}</p>
                <p className="text-white/60 text-xs">Clinical Case</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
