import React from 'react'
import { Instagram, Youtube, Music2, Dribbble } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 py-12 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-cream">Meski</p>
            <p className="text-xs tracking-[0.3em] uppercase text-caramel mt-1">Video Editor · Storyteller</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {['Home','About','Work','Services','Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase() === 'home' ? 'home' : l.toLowerCase() === 'work' ? 'work' : l.toLowerCase()}`} className="hover:text-caramel transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {[Instagram, Youtube, Music2, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-caramel hover:text-caramel transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Meski. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase text-caramel">Crafted with creativity, delivered with passion.</p>
        </div>
      </div>
    </footer>
  )
}