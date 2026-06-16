import { motion } from 'framer-motion'
import { Clock, Droplet, Star, MessageCircle } from 'lucide-react'
import type { Analisis } from '@/types'
import { waLink, SITE } from '@/lib/site'
import { fadeUp } from '@/lib/motion'

export default function AnalisisCard({ a }: { a: Analisis }) {
  const msg = waLink(
    `Hola ${SITE.name}, quiero agendar el análisis "${a.nombre}" (S/ ${a.precio}). ¿Cómo procedo? 🧪`,
  )
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="card group flex h-full flex-col p-6 transition-shadow hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="chip bg-brand-gradient-soft text-brand-blue-dark">{a.categoria}</span>
        {a.popular && (
          <span className="chip bg-amber-100 text-amber-700">
            <Star size={12} className="fill-amber-500 text-amber-500" /> Popular
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink">{a.nombre}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{a.descripcion}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1">
          <Clock size={13} /> {a.tiempo}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1">
          <Droplet size={13} /> {a.ayunas ? 'Requiere ayuno' : 'Sin ayuno'}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
        <div>
          <span className="text-xs text-ink/50">Desde</span>
          <p className="font-display text-2xl font-extrabold text-ink">
            S/ {a.precio}
          </p>
        </div>
        <a href={msg} target="_blank" rel="noreferrer" className="btn-outline h-10 px-4 text-sm">
          <MessageCircle size={16} /> Agendar
        </a>
      </div>
    </motion.article>
  )
}
