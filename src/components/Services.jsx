import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="py-28 bg-latte/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl">THE PERFECT BLEND OF CREATIVITY.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-cream border border-coffee/10 rounded-sm p-8 hover:border-caramel hover:shadow-soft transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-espresso text-caramel flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                <p className="text-coffee/80 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}