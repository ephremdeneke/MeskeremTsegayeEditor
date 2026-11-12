import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/2026-07-08-170844670.mp4"
        autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso" />
      <div className="absolute inset-0 noise opacity-30 mix-blend-overlay" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-caramel tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
        >
          Meski · Video Editor & Storyteller
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-cream text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          EVERY FRAME HAS A STORY.
          <br />
          <span className="italic text-caramel">EVERY STORY DESERVES TO BE TOLD.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-8 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed"
        >
          I'm a creative video editor passionate about transforming ordinary moments into extraordinary visual experiences. Like a perfect cup of coffee, every story deserves care, creativity, and the right blend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#work" className="px-7 py-3.5 bg-caramel text-espresso font-medium rounded-full hover:bg-latte transition-colors flex items-center gap-2">
            <Play size={16} /> EXPLORE MY WORK
          </a>
          <a href="#contact" className="px-7 py-3.5 border border-cream/40 text-cream rounded-full hover:bg-cream/10 transition-colors">
            LET'S CREATE TOGETHER
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12 text-cream/50 text-xs tracking-[0.3em] uppercase"
        >
          Made with creativity & a little coffee.
        </motion.p>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}