import React from 'react'
import { motion } from 'framer-motion'

export default function CoffeeCorner() {
  return (
    <section className="py-28 bg-latte/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/coffeecupmeski/800/800"
            alt="Coffee cup"
            loading="lazy"
            className="w-full h-[420px] object-cover rounded-sm shadow-soft"
          />
          <div className="absolute -top-8 -left-8 w-24 h-24 border border-caramel/60 hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Coffee Corner</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            GOOD IDEAS START WITH GOOD COFFEE.
          </h2>
          <p className="text-coffee/90 leading-relaxed text-lg mb-6">
            "Some of my best ideas begin with a quiet moment, a good cup of coffee, and a little imagination."
          </p>
          <p className="text-coffee/70 leading-relaxed">
            This corner is a small window into the person behind the timeline — someone who finds inspiration
            in slow mornings, steam rising from a cup, and the gentle hum of a well-loved edit suite.
          </p>
        </motion.div>
      </div>
    </section>
  )
}