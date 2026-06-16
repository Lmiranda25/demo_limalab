import { motion } from 'framer-motion'
import { Microscope, Laptop, HeartPulse, Award, Truck, Clock3 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'

const FEATURES = [
  {
    icon: Microscope,
    title: 'Tecnología de punta',
    desc: 'Equipos automatizados de última generación para resultados precisos y confiables.',
  },
  {
    icon: Laptop,
    title: 'Resultados en línea',
    desc: 'Consulta y descarga tus resultados desde cualquier dispositivo, las 24 horas.',
  },
  {
    icon: Clock3,
    title: 'Entrega rápida',
    desc: 'Muchos análisis listos el mismo día. Sin esperas innecesarias.',
  },
  {
    icon: Truck,
    title: 'Toma a domicilio',
    desc: 'Llevamos el laboratorio a tu hogar u oficina con total seguridad.',
  },
  {
    icon: Award,
    title: 'Calidad certificada',
    desc: 'Procesos con control de calidad y personal altamente capacitado.',
  },
  {
    icon: HeartPulse,
    title: 'Atención humana',
    desc: 'Te acompañamos en cada paso con calidez y profesionalismo.',
  },
]

export default function Features() {
  return (
    <section className="container-x py-20">
      <SectionHeading
        center
        eyebrow="¿Por qué elegirnos?"
        title={<>Razones para confiar en <span className="gradient-text">LimaLab</span></>}
        subtitle="Cuidamos cada detalle para que tu experiencia sea simple, rápida y confiable."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="card group p-7 transition-shadow hover:shadow-glow"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient-soft text-brand-blue transition-transform group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
              <f.icon size={26} />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
