import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <img
                src="https://picsum.photos/seed/portraitmeski/700/900"
                alt="Meski portrait"
                loading="lazy"
                className="w-full h-[520px] object-cover rounded-sm shadow-soft"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-caramel/60 hidden md:block" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7"
          >
            <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">About Me</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              A LITTLE ABOUT THE CREATIVE BEHIND THE FRAMES.
            </h2>
            <p className="text-coffee/90 leading-relaxed mb-5">
              I'm Meski — a video editor and visual storyteller drawn to the quiet poetry of everyday moments.
              My work lives at the intersection of cinematic craft and emotional truth, blending rhythm, color,
              and sound into stories that linger long after the screen fades to black.
            </p>
            <p className="text-coffee/90 leading-relaxed mb-5">
              My creative journey began with a curiosity for how images could move people. Over the years I've
              edited commercials, music videos, documentaries, and social content — each project teaching me
              that the best edits feel invisible, letting the story breathe.
            </p>
            <p className="text-coffee/90 leading-relaxed mb-8">
              Coffee is my quiet companion through it all. The ritual of brewing slows me down, sharpens my
              focus, and reminds me that great things — like a perfect cup — take patience, passion, and the
              right blend.
            </p>

            <blockquote className="border-l-2 border-caramel pl-6 italic font-serif text-xl text-espresso">
              "Creativity is like coffee. It takes passion, patience, and the perfect blend to create something unforgettable."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}