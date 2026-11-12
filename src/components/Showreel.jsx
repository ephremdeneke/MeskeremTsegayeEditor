import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

export default function Showreel() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  return (
    <section id="showreel" className="py-28 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-20 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-12">
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Showreel</p>
          <h2 className="font-serif text-4xl md:text-6xl">A TASTE OF MY CREATIVITY.</h2>
          <p className="mt-4 text-cream/60 max-w-xl mx-auto">
            A curated glimpse into the stories, rhythms, and worlds I've helped bring to life.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-lg overflow-hidden shadow-soft border border-cream/10"
        >
          <video
            ref={videoRef}
            className="w-full max-w-sm mx-auto aspect-[9/16] object-cover bg-black"
            src="/assets/2026-07-21-154959756.mp4"
            preload="metadata"
            onEnded={() => setPlaying(false)}
            onClick={toggle}
          />
          {!playing && (
            <button
              onClick={toggle}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play showreel"
            >
              <span className="w-24 h-24 rounded-full bg-caramel/90 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <Play size={36} className="text-espresso ml-1" />
              </span>
            </button>
          )}
          {playing && (
            <button
              onClick={toggle}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-espresso/70 backdrop-blur flex items-center justify-center hover:bg-espresso transition-colors"
              aria-label="Pause"
            >
              <Pause size={18} className="text-cream" />
            </button>
          )}
        </motion.div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-cream">Showreel 2026</h3>
            <p className="text-cream/60 text-sm mt-1">Commercials · Music · Documentary · Social</p>
          </div>
          <p className="text-cream/50 text-xs tracking-[0.3em] uppercase">Runtime · 01:30</p>
        </div>
      </div>
    </section>
  )
}