"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Building2, 
  Stethoscope, 
  Wrench, 
  Users,
  Camera,
  Search,
  Play
} from "lucide-react";

const categories = [
  { id: 'procedures', label: 'Procedures', icon: Stethoscope },
  { id: 'facility', label: 'Clinic', icon: Building2 },
  { id: 'team', label: 'Team', icon: Users },
];

const galleryItems = {
  procedures: [
    { label: 'Root Canal Treatment', desc: '4 Month Follow-up', src: '/images/gallery/4 month root canal.webp' },
    { label: 'Aesthetic Makeover', desc: 'Full Smile Rehabilitation', src: '/images/gallery/aesthetic makeover.webp' },
    { label: 'Ceramic Inlay', desc: 'Precision Restorative', src: '/images/gallery/ceramic inlay.webp' },
    { label: 'Teeth Correction', desc: 'Orthodontic Results', src: '/images/gallery/teeth correction.webp' },
    { label: 'Smile Design', desc: 'Veneers & Aesthetics', src: '/images/gallery/veneers.jpg' },
    { label: 'Endodontic Care', desc: 'Root Canal Procedure', src: '/images/gallery/root canal.jpg' },
    { label: 'Re-RCT', desc: 'Complex Retreatments', src: '/images/gallery/re-rct.jpg' },
    { label: 'Mucocele Removal', desc: 'Minor Oral Surgery', src: '/images/gallery/mucocele.jpg' },
    { label: 'Crowding Correction', desc: 'Alignment Progress', src: '/images/gallery/crowding.jpg' },
  ],
  facility: [
    { label: 'Virtue Dental Clinic', desc: 'Clinic — Pala Bypass Road', src: '/images/gallery/holy family.jpg' },
  ],
  team: [
    { label: 'Dr. Abhijit Sajo Sebastian', desc: 'Chief Endodontist', src: '/images/gallery/dr.bijo kurian.webp' },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('procedures');

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-serif text-foreground mb-6"
          >
            Clinical <br />
            <span className="italic text-primary">Case Gallery.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Visualizing our commitment to clinical excellence and patient transformations.
          </motion.p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar pb-4 sm:pb-0 mb-12">
          <div className="flex gap-2 p-2 bg-muted/50 rounded-[2rem] mx-auto min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 outline-none ${
                  activeTab === cat.id 
                  ? 'text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/50'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems[activeTab as keyof typeof galleryItems].map((item, idx) => (
              <motion.div
                key={`${activeTab}-${item.label}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative glass-card rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-xl font-serif mb-1">{item.label}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                    <div className="mt-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Feature Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-12 rounded-[3rem] bg-foreground text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="flex-1 z-10">
            <h3 className="text-3xl sm:text-4xl font-serif mb-6">Patient Stories. <br /><span className="text-primary italic">Transformations in Motion.</span></h3>
            <p className="text-white/60 mb-8 leading-relaxed max-w-lg">
              Watch our latest clinical reels showcasing the precision and artistry behind every smile we restore at Virtue Dental Clinic.
            </p>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary/90 transition-all">
                  <Play className="w-4 h-4 fill-current" /> Watch Reels
               </button>
            </div>
          </div>
          <div className="flex-1 w-full relative group">
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
               <video 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                poster="/images/gallery/smiles.webp"
                muted
                loop
                autoPlay
               >
                 <source src="/images/gallery/smiles1.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-2xl">
                     <Play className="w-6 h-6 fill-current" />
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
