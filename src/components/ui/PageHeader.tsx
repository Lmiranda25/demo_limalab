import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Blob } from './Decor'

interface Props {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  breadcrumb?: string
}

/** Cabecera de página interna con fondo de marca y migas de pan. */
export default function PageHeader({ eyebrow, title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-mist pt-32 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <Blob className="absolute -right-32 -top-24 h-96 w-96 text-brand-blue/10" color="#0098DA" />
      <Blob className="absolute -left-40 top-10 h-96 w-96 text-brand-green/10" color="#1FA64A" />

      <div className="container-x relative">
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1 text-sm text-ink/50"
        >
          <Link to="/" className="hover:text-brand-blue">
            Inicio
          </Link>
          <ChevronRight size={14} />
          <span className="font-semibold text-ink/70">{breadcrumb}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-3xl"
        >
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink text-balance sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-lg leading-relaxed text-ink/60">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
