"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { STUDIO_INFO, WHATSAPP_URL } from "@/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  viewport: { once: true },
};

export default function Contact() {
  return (
    <div className="bg-black text-white pt-32 min-h-screen">
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            Have a project, event, or photo session in mind?
            Get in touch with us for more details and availability.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="grid gap-12">
            <motion.section variants={staggerContainer} initial="initial" animate="whileInView">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8 border-b border-zinc-900 pb-4">
                Information
              </h3>
              <div className="space-y-10">
                <motion.div variants={fadeInUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Phone size={20} className="text-zinc-400 group-hover:text-inherit" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Phone / WhatsApp</p>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="text-2xl font-medium hover:text-zinc-400 transition-colors">
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Mail size={20} className="text-zinc-400 group-hover:text-inherit" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-2xl font-medium hover:text-zinc-400 transition-colors">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <MapPin size={20} className="text-zinc-400 group-hover:text-inherit" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Location</p>
                    <p className="text-2xl font-medium">{STUDIO_INFO.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-white text-black py-8 rounded-[2rem] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-2xl shadow-white/5"
            >
              <MessageSquare size={24} />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-full"
          >
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-zinc-900 rounded-[3rem] overflow-hidden grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 border border-zinc-800">
              <img
                src="/images/birthday/IMG_4850.jpg"
                alt="Contact location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-12">
                <p className="text-sm tracking-[0.2em] font-bold uppercase text-white/50 italic">
                  Ernest & Bros Studio • Cameroon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
