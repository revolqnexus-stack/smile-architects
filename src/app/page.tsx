"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Practitioner from "@/components/Practitioner";
import Contact from "@/components/Contact";
import Link from "next/link";
import { Globe, Mail, MessageCircle, Instagram } from "lucide-react";

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
      <footer className="bg-foreground text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 group mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-serif text-xl font-bold transition-transform group-hover:scale-110">
                  V
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-white leading-none tracking-tight">VIRTUE</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mt-1">Dental Clinic</span>
                </div>
              </Link>
              <p className="text-white/60 leading-relaxed max-w-sm mb-10 text-lg">
                At Virtue Dental Clinic, we offer comprehensive dental care with a commitment to excellence. Our state-of-the-art facility and expert team, led by Dr. Abhijit Sajo Sebastian, ensure personalized, painless, and high-quality treatments.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Globe, href: "#", label: "Visit our website" },
                  { Icon: Mail, href: "mailto:abhijitsebastian@gmail.com", label: "Email us" },
                  { Icon: Instagram, href: "https://www.instagram.com/virtuedentalclinic/", label: "Follow us on Instagram" }
                ].map((social, i) => (
                  <Link 
                    key={i}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <social.Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold mb-8">Specialties</h4>
              <ul className="space-y-4">
                {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Root Canal Treatment', 'Dental Implants', 'Crowns & Bridges'].map(item => (
                  <li key={item}>
                    <Link href="#specialties" className="text-white/60 hover:text-primary transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {['About Our Doctors', 'Clinic Gallery', 'Emergency Care', 'Location & Map', 'Book on Practo'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-white/60 hover:text-primary transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
            <p>© 2026 VIRTUE Dental Clinic. All rights reserved.</p>
            <p>Comprehensive Dental Care at Pala Bypass Road, Pala, Kottayam.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <Link 
        href="https://wa.me/+918156822525"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-[#25D366]/20"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </Link>
    </main>
  );
}
