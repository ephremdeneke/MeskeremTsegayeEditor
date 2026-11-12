import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'THE IDEA', desc: 'Understanding the vision and the story you want to tell.' },
  { n: '02', title: 'THE BREW', desc: 'Planning the creative direction and visual language.' },
  { n: '03', title: 'THE EDIT', desc: 'Transforming raw footage into a cohesive narrative.' },
  { n: '04', title: 'THE PERFECT BLEND', desc: 'Color grading, sound design, and motion polish.' },
  { n: '05', title: 'THE FINAL POUR', desc: 'Delivering the finished masterpiece, ready to share.' },
]

export default function Process() {
  return (
    <section id="process" className="py-28 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-20 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-16">
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Process</p>
          <h2 className="font-serif text-4xl md:text-5xl">FROM THE FIRST IDEA TO THE FINAL FRAME.</h2>
        </div>

        {/* desktop horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-cream/20" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative pt-14"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-caramel text-espresso flex items-center justify-center font-serif text-lg">
                    {s.n}
                  </div>
                  <h3 className="font-serif text-lg text-caramel mb-2 text-center">{s.title}</h3>
                  <p className="text-cream/70 text-sm text-center leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* mobile vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-caramel text-espresso flex items-center justify-center font-serif">
                {s.n}
              </div>
              <div>
                <h3 className="font-serif text-lg text-caramel mb-1">{s.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}