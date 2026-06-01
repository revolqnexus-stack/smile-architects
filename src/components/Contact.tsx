"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Info, Mail } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: (
      <>
        Smile Architects Dental Clinic,<br />
        Kattakkayam Road, Near Federal Bank,<br />
        Pala Town, Kottayam, Kerala — 686575
      </>
    ),
    action: { label: "Get Directions", href: "https://maps.app.goo.gl/5DS1k9PnA9vQbMU2A", external: true },
  },
  {
    icon: Phone,
    title: "Connect with Us",
    content: (
      <>
        <Link href="tel:+919447125344" className="font-semibold text-foreground hover:text-primary transition-colors block">
          +91 94471 25344
        </Link>
        <Link href="https://wa.me/919447125344" className="text-primary font-bold hover:underline flex items-center gap-1.5 mt-1">
          <MessageCircle className="w-3.5 h-3.5" /> Chat on WhatsApp
        </Link>
        <Link href="mailto:jeotomcharls@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 mt-1 text-sm">
          <Mail className="w-3.5 h-3.5" /> jeotomcharls@gmail.com
        </Link>
      </>
    ),
    action: null,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: (
      <>
        Monday – Saturday<br />
        <span className="font-semibold text-foreground">09:30 AM – 08:00 PM</span><br />
        <span className="text-destructive text-sm italic mt-1 inline-block">Closed on Sundays</span>
      </>
    ),
    action: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#F5F2E8" }}>
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px gold-divider" />

      {/* Green orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,106,45,0.06) 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ background: "rgba(45,106,45,0.06)", border: "1px solid rgba(45,106,45,0.12)", color: "#2D6A2D" }}>
              Connect With Us
            </div>
            <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight tracking-tight" style={{ color: "#1A1F16" }}>
              In the heart of{" "}
              <span className="italic" style={{ color: "#2D6A2D" }}>Pala Town.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-16 font-medium" style={{ color: "#6B7160" }}>
              Smile Architects is positioned along Kattakkayam Road, a highly accessible commercial corridor. Our central positioning minimizes travel friction for patients requiring recurring orthodontic adjustments.
            </p>

            <div className="space-y-10">
              {contactInfo.map(({ icon: Icon, title, content, action }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(45,106,45,0.08)", border: "1px solid rgba(45,106,45,0.06)" }}>
                    <Icon className="w-6 h-6" style={{ color: "#2D6A2D" }} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 tracking-tight" style={{ color: "#1A1F16" }}>{title}</h4>
                    <div className="text-sm leading-relaxed font-medium" style={{ color: "#6B7160" }}>{content}</div>
                    {action && (
                      <Link
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        className="inline-flex items-center gap-2 mt-4 text-[11px] font-bold uppercase tracking-widest hover:translate-x-1 transition-transform"
                        style={{ color: "#2D6A2D" }}
                      >
                        <MapPin className="w-3.5 h-3.5" /> {action.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-6 rounded-[2rem] flex items-start gap-4"
              style={{ background: "rgba(232,197,71,0.1)", border: "1px solid rgba(232,197,71,0.3)" }}
            >
              <Info className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#C9A227" }} />
              <p className="text-sm leading-relaxed font-medium" style={{ color: "#6B7160" }}>
                Prior appointment recommended. Affordable consultation at ₹100. Seamless referral pathway to Mar Sleeva Medicity for tertiary care.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16"
            style={{
              background: "#FFFFFF",
              borderRadius: "3.5rem",
              boxShadow: "0 40px 80px rgba(45,106,45,0.08), 0 0 0 1px rgba(45,106,45,0.05)"
            }}
          >
            {/* Yellow top accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[3.5rem]"
              style={{ background: "linear-gradient(90deg, #E8C547 0%, #2D6A2D 100%)" }} />

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-[8rem] pointer-events-none"
              style={{ background: "rgba(45,106,45,0.02)" }} />

            <h3 className="text-4xl sm:text-5xl font-serif mb-4 tracking-tight" style={{ color: "#1A1F16" }}>
              Priority Inquiry
            </h3>
            <p className="font-medium text-lg mb-14 leading-relaxed" style={{ color: "#6B7160" }}>
              Leave your details for a specialized clinical analysis.
            </p>

            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.25em] ml-1" style={{ color: "#2D6A2D" }}>
                    Patient Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-6 py-4 rounded-[1.25rem] focus:outline-none transition-all text-sm font-medium"
                    style={{
                      background: "rgba(45,106,45,0.04)",
                      border: "1.5px solid rgba(45,106,45,0.1)",
                      color: "#1A1F16"
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "#2D6A2D";
                      e.currentTarget.style.boxShadow = "0 0 0 4px rgba(45,106,45,0.06)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = "rgba(45,106,45,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.25em] ml-1" style={{ color: "#2D6A2D" }}>
                    Primary Contact
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-[1.25rem] focus:outline-none transition-all text-sm font-medium"
                    style={{
                      background: "rgba(45,106,45,0.04)",
                      border: "1.5px solid rgba(45,106,45,0.1)",
                      color: "#1A1F16"
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "#2D6A2D";
                      e.currentTarget.style.boxShadow = "0 0 0 4px rgba(45,106,45,0.06)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = "rgba(45,106,45,0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.25em] ml-1" style={{ color: "#2D6A2D" }}>
                  Treatment of Interest
                </label>
                <div className="relative">
                  <select
                    className="w-full px-6 py-4 rounded-[1.25rem] focus:outline-none appearance-none text-sm font-medium"
                    style={{
                      background: "rgba(45,106,45,0.04)",
                      border: "1.5px solid rgba(45,106,45,0.1)",
                      color: "#1A1F16"
                    }}
                  >
                    <option>Orthodontic Braces</option>
                    <option>Clear Aligners / Invisalign</option>
                    <option>Digital Smile Designing</option>
                    <option>Growth Modification</option>
                    <option>Root Canal Treatment</option>
                    <option>Cosmetic Veneers</option>
                    <option>Wisdom Tooth Extraction</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#2D6A2D", opacity: 0.5 }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-[0.25em] ml-1" style={{ color: "#2D6A2D" }}>
                  Message or Symptoms
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your requirements for our specialist..."
                  className="w-full px-6 py-4 rounded-[1.25rem] focus:outline-none transition-all resize-none text-sm font-medium"
                  style={{
                    background: "rgba(45,106,45,0.04)",
                    border: "1.5px solid rgba(45,106,45,0.1)",
                    color: "#1A1F16"
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = "#2D6A2D";
                    e.currentTarget.style.boxShadow = "0 0 0 4px rgba(45,106,45,0.06)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = "rgba(45,106,45,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 rounded-[1.25rem] font-bold flex items-center justify-center gap-4 group transition-all duration-500 text-white"
                style={{ background: "#2D6A2D", boxShadow: "0 8px 32px rgba(45,106,45,0.25)" }}
              >
                Submit Clinical Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>

              {/* Or WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{ background: "rgba(45,106,45,0.1)" }} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6B7160" }}>or</span>
                <div className="flex-1 h-px" style={{ background: "rgba(45,106,45,0.1)" }} />
              </div>

              <Link
                href="https://wa.me/919447125344"
                target="_blank"
                className="w-full py-5 rounded-[1.25rem] font-bold flex items-center justify-center gap-3 transition-all duration-300 text-white"
                style={{
                  background: "#25D366",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.25)"
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </Link>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
