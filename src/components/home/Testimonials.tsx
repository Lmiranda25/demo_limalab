import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIOS } from '@/data/contenido'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        <SectionHeading
          center
          eyebrow="Testimonios"
          title={<span className="text-white">Lo que dicen nuestros pacientes</span>}
          className="[&_h2]:text-white"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIOS.map((t) => (
            <motion.figure
              key={t.nombre}
              variants={fadeUp}
              className="flex h-full flex-col rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="text-brand-blue-light" size={28} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                "{t.texto}"
              </blockquote>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-white/10 pt-3">
                <p className="font-bold text-white">{t.nombre}</p>
                <p className="text-xs text-white/50">{t.rol}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
