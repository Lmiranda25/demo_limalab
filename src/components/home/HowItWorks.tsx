import { motion } from 'framer-motion'
import { CalendarCheck, TestTube2, Laptop, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'

const STEPS = [
  {
    icon: CalendarCheck,
    n: '01',
    title: 'Agenda tu cita',
    desc: 'Elige tus análisis y reserva por WhatsApp o desde nuestro cotizador en segundos.',
  },
  {
    icon: TestTube2,
    n: '02',
    title: 'Toma de muestra',
    desc: 'Acude a la sede más cercana o solicita la toma a domicilio. Rápido y seguro.',
  },
  {
    icon: Laptop,
    n: '03',
    title: 'Resultados en línea',
    desc: 'Recibe una notificación y descarga tus resultados desde tu celular o PC.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-mist py-20">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div className="container-x relative">
        <SectionHeading
          center
          eyebrow="Así de fácil"
          title={<>Tus resultados en <span className="gradient-text">3 simples pasos</span></>}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-8 md:grid-cols-3"
        >
          {STEPS.map((s, i) => (
            <motion.div key={s.n} variants={fadeUp} className="relative text-center">
              {/* conector */}
              {i < STEPS.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-brand-blue/30 to-transparent md:block" />
              )}
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white shadow-soft">
                <s.icon size={32} className="text-brand-blue" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/60">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/cotizador" className="btn-primary">
            Empezar ahora <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
