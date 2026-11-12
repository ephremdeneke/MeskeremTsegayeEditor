import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'
import { categories, projects } from '../data/projects.js'
import VideoModal from './VideoModal.jsx'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Selected Works</p>
            <h2 className="font-serif text-4xl md:text-5xl">FRESHLY EDITED STORIES.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-colors ${
                  active === c
                    ? 'bg-espresso text-cream border-espresso'
                    : 'bg-transparent text-coffee border-coffee/30 hover:border-caramel hover:text-caramel'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm bg-espresso cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-14 h-14 rounded-full bg-caramel flex items-center justify-center shadow-soft">
                    <Play size={20} className="text-espresso ml-0.5" />
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-caramel text-xs tracking-[0.25em] uppercase mb-1">{p.category}</p>
                  <h3 className="font-serif text-xl text-cream leading-tight">{p.title}</h3>
                  <p className="text-cream/70 text-sm mt-1 line-clamp-2">{p.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <VideoModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}