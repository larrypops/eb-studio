"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_URL, SERVICES, GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
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
      delayChildren: 0.2,
    },
  },
  viewport: { once: true },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/weddings/IMG_4860.jpg"
            alt="Hero Wedding"
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 uppercase"
          >
            Professional <br />
            <span className="text-zinc-500">Photography & Video</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            We capture your most important moments with clarity, creativity, and lasting quality.
            Weddings, ceremonies, and special events handled with artistic precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/work"
              className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              View Our Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              Contact on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter"
            >
              Capturing Moments <br /> That Last Forever
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.p variants={fadeInUp} className="text-xl leading-relaxed text-gray-700">
                At Ernest & Bros Studio, we specialize in professional photography and video coverage
                for weddings, ceremonies, and special events. Our goal is simple: to create high-quality
                visuals that preserve your memories in the most beautiful and authentic way.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xl leading-relaxed text-gray-700">
                From weddings to personal photo sessions, we deliver images and videos that you can
                cherish for a lifetime. Every frame tells a story, and we are here to make yours
                unforgettable.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
              Portfolio Gallery
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {GALLERY_CATEGORIES.map((cat) => (
                <motion.button
                  variants={fadeInUp}
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat
                      ? "bg-white text-black"
                      : "border border-zinc-800 text-zinc-500 hover:border-zinc-500 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className="relative aspect-square overflow-hidden rounded-xl group cursor-crosshair"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.2em] mb-2 text-zinc-400">{img.category}</p>
                      <h4 className="text-lg font-bold uppercase tracking-tight">{img.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold uppercase tracking-widest">
              Our Services
            </motion.h2>
            <motion.div {...fadeInUp}>
              <Link
                href="/work"
                className="text-zinc-500 hover:text-white underline underline-offset-8 transition-colors uppercase tracking-widest text-sm"
              >
                See All Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                variants={fadeInUp}
                key={service.id}
                className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-12 uppercase tracking-widest">
                Why Work With Us
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid gap-6"
              >
                {[
                  "Professional and reliable team",
                  "High-quality images and videos",
                  "Attention to detail",
                  "Fast communication",
                  "Experience in weddings and events",
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img src="/images/professional/IMG_4864.jpg" alt="Our Team" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-black text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="container mx-auto px-6 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">
            Ready to capture your <br /> special moment?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact us today to discuss your event and get more information. We are excited to hear
            from you!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all scale-100 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}
