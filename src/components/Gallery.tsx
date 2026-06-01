"use client";

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
    <section id="gallery" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #1A1F16 8%, #1A1F16 92%, #FAFAF7 100%)" }}>
      {/* Green glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(45,106,45,0.15) 0%, transparent 70%)" }} />
      {/* Yellow glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,197,71,0.06) 0%, transparent 70%)" }} />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(232,197,71,0.1)", border: "1px solid rgba(232,197,71,0.25)", color: "#E8C547" }}
          >
            Clinical Gallery
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-serif mb-5 leading-tight" style={{ color: "#FAFAF7" }}>
            Our results.{" "}
            <span className="italic" style={{ color: "#E8C547" }}>Your confidence.</span>
          </h2>
          <p className="leading-relaxed" style={{ color: "rgba(250,250,247,0.5)" }}>
            A selection of clinical cases treated at Smile Architects, showcasing our commitment to orthodontic precision and aesthetic excellence.
          </p>
        </div>

        {/* Grid — aspect-ratio based, no fixed row heights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden ${
                i === 0 ? 'row-span-2 aspect-[3/4]' :
                i === 3 ? 'row-span-2 aspect-[3/4]' :
                i === 6 ? 'col-span-2 aspect-[16/7]' :
                'aspect-square'
              }`}
              style={{
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay — pure Tailwind group-hover, no inline JS */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(26,31,22,0.85) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm font-bold uppercase tracking-widest mb-1">{image.title}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#E8C547" }}>Clinical Case</p>
              </div>
              {/* Yellow dot accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "#E8C547" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
