import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, ArrowRight, ShieldCheck, Clock3, Truck } from 'lucide-react'
import { asset } from '@/lib/site'
import { Blob, Bubbles } from '@/components/ui/Decor'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist pt-28 pb-20 lg:pt-36">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <Blob className="absolute -left-32 -top-20 h-[28rem] w-[28rem] text-brand-green/10 opacity-60" color="#1FA64A" />
      <Blob className="absolute -right-40 top-40 h-[32rem] w-[32rem] text-brand-blue/10 opacity-50" color="#0098DA" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        {/* Columna texto */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="section-eyebrow">
            <ShieldCheck size={16} /> Laboratorio clínico certificado
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-[1.85rem] font-extrabold leading-[1.12] text-ink text-balance xs:text-4xl sm:text-5xl lg:text-6xl"
          >
            Tu salud, con <span className="gradient-text">resultados</span> confiables y en línea.
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-lg text-lg leading-relaxed text-ink/60">
            En LimaLab combinamos tecnología confiable con calidez humana en Los Olivos. Recibe tus
            resultados a tiempo. <strong className="text-ink/80">Tu salud es lo primero.</strong>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/resultados" className="btn-primary w-full sm:w-auto">
              <FileText size={18} /> Ver mis resultados
            </Link>
            <Link to="/cotizador" className="btn-outline w-full sm:w-auto">
              Cotizar mi chequeo <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Mini-features */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              [<ShieldCheck key="1" size={18} className="text-brand-green" />, 'Resultados validados'],
              [<Clock3 key="2" size={18} className="text-brand-blue" />, 'Entrega el mismo día'],
              [<Truck key="3" size={18} className="text-brand-green" />, 'Toma a domicilio'],
            ].map(([icon, label], i) => (
              <span key={i} className="inline-flex items-center gap-2 font-semibold text-ink/70">
                {icon}
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Columna imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2.5rem] shadow-glow ring-1 ring-white/40">
              <img
                src={asset('img/photos/scientist.jpg')}
                alt="Especialista de laboratorio analizando muestras"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Tarjeta flotante: resultado listo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-2 bottom-8 w-44 rounded-2xl bg-white/95 p-3 shadow-soft backdrop-blur sm:-left-6 sm:bottom-12 sm:w-52 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-green/15">
                  <FileText size={18} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-xs text-ink/50">Resultado</p>
                  <p className="text-sm font-bold text-ink">Listo para descargar</p>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta flotante: tiempo */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-10 rounded-2xl bg-brand-gradient px-4 py-3 text-white shadow-glow"
            >
              <p className="text-2xl font-extrabold leading-none">24h</p>
              <p className="text-xs opacity-90">o menos</p>
            </motion.div>

            <Bubbles className="pointer-events-none absolute inset-0 text-brand-blue" />
          </div>
        </motion.div>
      </div>

      {/* Onda inferior */}
      <div className="pointer-events-none absolute -bottom-1 left-0 w-full" aria-hidden>
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
