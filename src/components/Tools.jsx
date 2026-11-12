import React from 'react'
import { motion } from 'framer-motion'
import { tools } from '../data/tools.js'

export default function Tools() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Tools & Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl">THE TOOLS BEHIND THE FRAMES.</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-espresso">{t.name}</span>
                <span className="text-caramel text-sm">{t.level}%</span>
              </div>
              <div className="h-2 bg-coffee/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${t.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.08 }}
                  className="h-full bg-gradient-to-r from-mocha to-caramel rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}