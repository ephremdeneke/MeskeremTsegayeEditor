import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-sm bg-black rounded-lg overflow-hidden shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-espresso/70 text-cream flex items-center justify-center hover:bg-espresso"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <video
              src={project.video}
              controls
              autoPlay
              preload="metadata"
              className="w-full aspect-[9/16] bg-black"
            />
            <div className="p-6 bg-espresso text-cream">
              <p className="text-caramel text-xs tracking-[0.3em] uppercase mb-1">{project.category}</p>
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <p className="text-cream/70 text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}