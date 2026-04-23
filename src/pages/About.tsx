"use client";

import { motion } from "motion/react";
import { STUDIO_INFO } from "@/constants";

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
      delayChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function About() {
  return (
    <div className="bg-black text-white pt-32 min-h-screen">
      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <motion.label
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block"
            >
              The Studio
            </motion.label>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12"
            >
              About {STUDIO_INFO.name}
            </motion.h1>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="whileInView"
              className="space-y-8 text-xl text-gray-400 leading-relaxed font-light"
            >
              <motion.p variants={fadeInUp}>
                Ernest & Bros Studio is a photography and video production team based in Yaounde, Cameroon.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We specialize in capturing weddings, ceremonies, and personal moments through high-quality visuals.
                Our work is focused on storytelling. Every image and every video is created to reflect real emotions
                and meaningful moments.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We believe that memories deserve to be preserved with care, precision, and creativity.
              </motion.p>
            </motion.div>
          </div>

          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img
                src="/images/professional/IMG_4863.jpg"
                alt="About us"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </motion.div>

            <div className="grid gap-16">
              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white border-b border-zinc-800 pb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  To deliver high-quality photography and video services that help people preserve their
                  most important moments.
                </p>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white border-b border-zinc-800 pb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  To become a trusted name in event photography and visual storytelling, known for excellence
                  and emotional depth.
                </p>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-white border-b border-zinc-800 pb-4">
                  Our Values
                </h2>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-8"
                >
                  {["Quality", "Creativity", "Reliability", "Client satisfaction"].map((val, i) => (
                    <motion.div variants={fadeInUp} key={i} className="flex flex-col">
                      <span className="text-4xl font-bold text-zinc-800 mb-2">0{i + 1}</span>
                      <span className="text-xl font-medium">{val}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
