"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Subtle Texture/Gradient */}
      <div className="absolute inset-0 ivory-gradient -z-10" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/linen.png")` }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Comprehensive Dental Care in Pala, Kottayam
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 sm:mb-8">
            Your smile. <br />
            <span className="text-primary italic">Our priority.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-lg">
            At Virtue Dental Clinic, we offer comprehensive dental care with a commitment to excellence. Expert team led by Dr. Abhijit Sajo Sebastian, ensuring personalized, painless, high-quality treatments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://wa.me/+918156822525" 
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all text-center shadow-lg shadow-primary/20"
            >
              Book Consultation
            </Link>
            <Link 
              href="#specialties" 
              className="px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-bold hover:bg-secondary transition-all text-center"
            >
              Our Specialties
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-border pt-8">
            <div>
              <div className="text-xl sm:text-2xl font-serif text-foreground">13+</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-bold">Years Experience</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-foreground">4.9/5</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-bold">Patient Rating</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-serif text-foreground">110+</div>
              <div className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-bold">Google Reviews</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] lg:aspect-square mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Placeholder for high-end dental imagery */}
            <div className="w-full h-full bg-secondary flex items-center justify-center relative group">
               <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                alt="Premium Dental Clinic" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
          
          {/* Floating Info Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-4 sm:p-6 rounded-2xl max-w-[240px] sm:max-w-xs shadow-xl border border-white/20 z-20"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Pala Bypass Road</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground">Pala, Kottayam, Kerala</div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Mon - Sat</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground">10:00 AM - 07:00 PM</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
