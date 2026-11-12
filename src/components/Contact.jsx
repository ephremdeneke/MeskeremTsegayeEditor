import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Instagram, Youtube, Music2, Dribbble, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const socials = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Music2, label: 'TikTok', href: '#' },
    { icon: Dribbble, label: 'Behance', href: '#' },
  ]

  return (
    <section id="contact" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-caramel tracking-[0.35em] text-xs uppercase mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            HAVE A STORY? LET'S MAKE IT BEAUTIFUL.
          </h2>
          <p className="text-coffee/80 leading-relaxed mb-8">
            Whether it's a brand film, a music video, or a personal project — I'd love to hear about it.
            Drop a message and let's start brewing something unforgettable.
          </p>

          <div className="space-y-4 text-espresso">
            <a href="mailto:hello@meski.studio" className="flex items-center gap-3 hover:text-caramel transition-colors">
              <Mail size={18} className="text-caramel" /> hello@meski.studio
            </a>
            <a href="https://wa.me/0000000000" className="flex items-center gap-3 hover:text-caramel transition-colors">
              <MessageCircle size={18} className="text-caramel" /> WhatsApp
            </a>
          </div>

          <div className="flex gap-3 mt-8">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-coffee/20 flex items-center justify-center text-coffee hover:bg-espresso hover:text-cream hover:border-espresso transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-latte/30 border border-coffee/10 rounded-sm p-8 space-y-5"
        >
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-coffee/70 mb-2">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-cream border border-coffee/20 rounded-sm px-4 py-3 text-espresso focus:outline-none focus:border-caramel transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-coffee/70 mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-cream border border-coffee/20 rounded-sm px-4 py-3 text-espresso focus:outline-none focus:border-caramel transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-coffee/70 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-cream border border-coffee/20 rounded-sm px-4 py-3 text-espresso focus:outline-none focus:border-caramel transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-espresso text-cream rounded-full font-medium hover:bg-coffee transition-colors flex items-center justify-center gap-2"
          >
            <Send size={16} /> {sent ? 'Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}