import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="py-28 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 noise opacity-20 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-14">
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl">KIND WORDS FROM THE OTHER SIDE OF THE FRAME.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-cream/5 border border-cream/10 rounded-sm p-8 hover:border-caramel/40 transition-colors"
            >
              <Quote size={28} className="text-caramel mb-4" />
              <p className="text-cream/85 leading-relaxed italic font-serif text-lg mb-6">"{t.text}"</p>
              <div>
                <p className="font-medium text-cream">{t.name}</p>
                <p className="text-cream/50 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}