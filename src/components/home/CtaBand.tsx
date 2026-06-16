import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageCircle, FileText } from 'lucide-react'
import { waLink, SITE } from '@/lib/site'
import { DnaStrand } from '@/components/ui/Decor'

export default function CtaBand() {
  return (
    <section className="container-x py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-14 text-center text-white shadow-glow sm:px-16"
      >
        <DnaStrand className="absolute left-6 top-0 h-full w-12 text-white/20" />
        <DnaStrand className="absolute right-6 top-0 h-full w-12 text-white/20" />

        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
          ¿Listo para cuidar tu salud hoy mismo?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/90">
          Agenda tus análisis en minutos y recibe tus resultados en línea. Estamos para ayudarte.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={waLink(`Hola ${SITE.name}, quisiera agendar una cita. 🧪`)}
            target="_blank"
            rel="noreferrer"
            className="btn bg-white text-brand-blue-dark hover:bg-white/90"
          >
            <MessageCircle size={18} /> Agendar por WhatsApp
          </a>
          <Link
            to="/resultados"
            className="btn border-2 border-white/60 text-white hover:bg-white/10"
          >
            <FileText size={18} /> Ver mis resultados
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
