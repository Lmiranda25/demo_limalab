import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import { POSTS } from '@/data/contenido'
import { asset } from '@/lib/site'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'
import { useTitle } from '@/lib/useTitle'

export default function Blog() {
  useTitle('Blog de salud')
  return (
    <>
      <PageHeader
        breadcrumb="Blog"
        eyebrow="Blog de salud"
        title={<>Consejos para tu <span className="gradient-text">bienestar</span></>}
        subtitle="Información confiable sobre prevención, análisis y cuidado de tu salud."
      />

      <section className="container-x py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {POSTS.map((p) => (
            <motion.article key={p.slug} variants={fadeUp} whileHover={{ y: -6 }} className="card group flex flex-col overflow-hidden">
              <Link to={`/blog/${p.slug}`} className="block overflow-hidden">
                <img
                  src={asset(p.imagen)}
                  alt={p.titulo}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <span className="chip self-start bg-brand-gradient-soft text-brand-blue-dark">
                  {p.categoria}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  <Link to={`/blog/${p.slug}`} className="hover:text-brand-blue-dark">
                    {p.titulo}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{p.resumen}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink/40">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {new Date(p.fecha).toLocaleDateString('es-PE')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {p.lectura}
                  </span>
                </div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-dark"
                >
                  Leer más <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  )
}
