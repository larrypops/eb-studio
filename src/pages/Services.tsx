"use client";

import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function Services() {
  return (
    <div className="bg-black text-white pt-32 min-h-screen">
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mb-24">
          <motion.label
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block"
          >
            What We Do
          </motion.label>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            We provide professional photography and video services tailored to your needs.
            Whether it is a wedding, ceremony, or personal shoot, we focus on quality and storytelling.
          </motion.p>
        </div>

        <div className="grid gap-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className={`${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                  {service.title}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </motion.p>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="space-y-4 mb-10"
                >
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Includes</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.includes.map((item, i) => (
                      <motion.li variants={fadeInUp} key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle size={16} className="text-zinc-500" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.a
                  variants={fadeInUp}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white border-b-2 border-white/30 pb-2 font-bold uppercase tracking-widest hover:border-white transition-all hover:scale-105 origin-left"
                >
                  Book this Service
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-32 text-center bg-zinc-950 rounded-[3rem] py-24 border border-zinc-900"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">
            Interested in one of our services?
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl shadow-white/5 hover:scale-105"
          >
            Contact us on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
