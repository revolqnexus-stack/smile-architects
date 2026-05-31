"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Practitioner from "@/components/Practitioner";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle } from "lucide-react";

const footerSpecialties = ['Orthodontics', 'Aesthetic Dentistry', 'Clear Aligners', 'Smile Designing', 'Dental Surgeries', 'Pediatric Dentistry'];
const footerLinks = [
  { label: 'Our Medical Leadership', href: '#practitioner' },
  { label: 'Clinical Gallery', href: '#gallery' },
  { label: 'Services & Fees', href: '#specialties' },
  { label: 'Location & Map', href: 'https://maps.app.goo.gl/5DS1k9PnA9vQbMU2A' },
  { label: 'Contact Us', href: '#contact' },
];

const RevolqIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 19L6 5" />
    <path d="M6 5L14 5C16.2091 5 18 6.79086 18 9C18 11.2091 16.2091 13 14 13L6 13" />
    <path d="M12 13L18 19" />
  </svg>
);

const socials = [
  { Icon: Globe, href: '#', label: 'Website' },
  { Icon: Mail, href: 'mailto:jeotomcharls@gmail.com', label: 'Email' },
  { Icon: MessageCircle, href: 'https://wa.me/919447125344', label: 'WhatsApp' },
  { Icon: RevolqIcon, href: 'https://revol-q.vercel.app', label: 'Revolq' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Specialties />
      <Gallery />
      <Practitioner />
      <Contact />

      {/* Footer */}
      <footer className="bg-foreground text-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative container mx-auto px-6 pt-20 pb-10">
          <div className="grid lg:grid-cols-4 gap-14 mb-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center group mb-7 w-fit">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 h-28"
                >
                  <Image
                    src="/logo.png"
                    alt="Smile Architects Dental Clinic Logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </motion.div>
              </Link>
              <p className="text-white/50 leading-relaxed max-w-sm mb-8 text-sm">
                Premier multi-specialty dental facility in Pala, Kottayam. Led by Dr. Jeo Tom Charls — MDS Orthodontist and Dentofacial Orthopedics.
              </p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.div key={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={href}
                      target={href.startsWith('http') ? "_blank" : undefined}
                      aria-label={label}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Specialties</h4>
              <ul className="space-y-3">
                {footerSpecialties.map(item => (
                  <li key={item}>
                    <Link href="#specialties" className="text-white/60 hover:text-primary transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={href.startsWith('http') ? "_blank" : undefined}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p>© 2026 SMILE Architects Dental Clinic. All rights reserved.</p>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/10" />
              <Link 
                href="https://revol-q.vercel.app" 
                target="_blank"
                className="hover:text-primary transition-colors flex items-center gap-1.5 group"
              >
                Powered by 
                <span className="text-white/50 group-hover:text-primary font-bold tracking-wider transition-colors">REVOLQ</span>
              </Link>
            </div>
            <p>Kattakkayam Road, Near Federal Bank, Pala, Kottayam — 686575</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="animate-glow"
        >
          <Link
            href="https://wa.me/919447125344"
            aria-label="Contact us on WhatsApp"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
