import { motion } from 'framer-motion'
import Counter from '@/components/ui/Counter'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'

const STATS = [
  { to: 100, suffix: '+', label: 'Análisis disponibles' },
  { to: 24, suffix: 'h', label: 'Entrega de resultados' },
  { to: 5000, suffix: '+', label: 'Pacientes atendidos' },
  { to: 99, suffix: '%', label: 'Satisfacción' },
]

export default function Stats() {
  return (
    <section className="container-x -mt-10 relative z-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 rounded-3xl border border-ink/5 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="text-center">
            <p className="font-display text-3xl font-extrabold gradient-text sm:text-4xl">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm font-medium text-ink/60">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
