import { motion } from 'framer-motion'
import { Target, Eye, HeartHandshake, MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import { SEDES } from '@/data/contenido'
import { asset } from '@/lib/site'
import { stagger, fadeUp, viewportOnce } from '@/lib/motion'
import { useTitle } from '@/lib/useTitle'

const VALORES = [
  { icon: Target, title: 'Misión', desc: 'Brindar diagnósticos confiables y oportunos que mejoren la calidad de vida de nuestros pacientes.' },
  { icon: Eye, title: 'Visión', desc: 'Ser el laboratorio clínico de referencia, reconocido por su excelencia, tecnología y trato humano.' },
  { icon: HeartHandshake, title: 'Valores', desc: 'Compromiso, ética, precisión y empatía en cada análisis que realizamos.' },
]

export default function Nosotros() {
  useTitle('Nosotros')
  return (
    <>
      <PageHeader
        breadcrumb="Nosotros"
        eyebrow="Quiénes somos"
        title={<>Cuidamos tu <span className="gradient-text">salud</span> en Los Olivos</>}
        subtitle="En LimaLab unimos experiencia, tecnología y calidez para entregarte resultados en los que puedes confiar."
      />

      {/* Historia con imagen */}
      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] shadow-glow">
            <img
              src={asset('img/photos/team.jpg')}
              alt="Equipo de LimaLab"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Nuestra historia"
            title={<>Experiencia a tu <span className="gradient-text">servicio</span></>}
            subtitle="Nacimos con la convicción de que un buen diagnóstico cambia vidas. Desde entonces, hemos crecido junto a nuestros pacientes, incorporando equipos de última generación y un equipo humano comprometido con la excelencia."
          />
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              [100, '+', 'Análisis'],
              [24, 'h', 'Resultados'],
              [5, 'k+', 'Pacientes'],
            ].map(([n, s, l]) => (
              <Reveal key={l as string}>
                <div className="rounded-2xl bg-mist p-4 text-center">
                  <p className="font-display text-2xl font-extrabold gradient-text">
                    <Counter to={n as number} suffix={s as string} />
                  </p>
                  <p className="text-xs text-ink/60">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misión / Visión / Valores */}
      <section className="container-x py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-3"
        >
          {VALORES.map((v) => (
            <motion.div key={v.title} variants={fadeUp} className="card p-7">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <v.icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Sedes */}
      <section id="sedes" className="relative overflow-hidden bg-mist py-16 scroll-mt-24">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            center
            eyebrow="Dónde estamos"
            title={<>Nuestras <span className="gradient-text">sedes</span></>}
            subtitle="Encuéntranos en el punto más cercano a ti."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {SEDES.map((s) => (
              <motion.div key={s.id} variants={fadeUp} className="card flex flex-col p-6">
                <h3 className="font-display text-lg font-bold text-ink">{s.nombre}</h3>
                <ul className="mt-3 flex-1 space-y-2 text-sm text-ink/60">
                  <li className="flex gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand-green" /> {s.direccion},{' '}
                    {s.ciudad}
                  </li>
                  <li className="flex gap-2">
                    <Phone size={16} className="shrink-0 text-brand-green" /> {s.telefono}
                  </li>
                  <li className="flex gap-2">
                    <Clock size={16} className="mt-0.5 shrink-0 text-brand-green" /> {s.horario}
                  </li>
                </ul>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(s.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline mt-4 h-10 text-sm"
                >
                  Ver en mapa <ExternalLink size={15} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
