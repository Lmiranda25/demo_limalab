import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import AnalisisCard from '@/components/catalogo/AnalisisCard'
import { ANALISIS } from '@/data/analisis'
import { stagger, viewportOnce } from '@/lib/motion'

export default function PopularTests() {
  const populares = ANALISIS.filter((a) => a.popular).slice(0, 6)
  return (
    <section className="container-x py-20">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Los más solicitados"
          title={<>Análisis <span className="gradient-text">populares</span></>}
          subtitle="Los exámenes que más eligen nuestros pacientes, con precios transparentes."
        />
        <Link to="/catalogo" className="btn-ghost shrink-0">
          Ver todo el catálogo <ArrowRight size={18} />
        </Link>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {populares.map((a) => (
          <AnalisisCard key={a.id} a={a} />
        ))}
      </motion.div>
    </section>
  )
}
