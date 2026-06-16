import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import { SITE, waLink } from '@/lib/site'
import { useTitle } from '@/lib/useTitle'

export default function Contacto() {
  useTitle('Contacto')
  const [form, setForm] = useState({ nombre: '', telefono: '', mensaje: '' })

  // El formulario no usa backend: arma un mensaje y lo envía por WhatsApp.
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hola ${SITE.name} 👋\nSoy *${form.nombre || 'un paciente'}*.\nTeléfono: ${form.telefono || '—'}\n\n${form.mensaje || 'Quisiera más información.'}`
    window.open(waLink(msg), '_blank')
  }

  const datos = [
    { icon: MapPin, label: 'Dirección', value: SITE.address },
    { icon: Phone, label: 'Teléfono', value: SITE.phoneDisplay },
    { icon: Mail, label: 'Correo', value: SITE.email },
    { icon: Clock, label: 'Horario', value: SITE.hours },
  ]

  return (
    <>
      <PageHeader
        breadcrumb="Contacto"
        eyebrow="Hablemos"
        title={<>Estamos para <span className="gradient-text">ayudarte</span></>}
        subtitle="Escríbenos y te responderemos a la brevedad. Tu salud es nuestra prioridad."
      />

      <section className="container-x grid gap-8 py-12 lg:grid-cols-2">
        {/* Datos + mapa */}
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {datos.map((d) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card flex items-start gap-3 p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-blue">
                  <d.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink/40">{d.label}</p>
                  <p className="font-semibold text-ink">{d.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="card overflow-hidden">
            <iframe
              title="Ubicación LimaLab"
              className="h-64 w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.%20Naranjal%201568%20Los%20Olivos%20Lima%20Peru&output=embed"
            />
          </div>
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <h2 className="font-display text-2xl font-bold text-ink">Envíanos un mensaje</h2>
          <p className="mt-1 text-sm text-ink/60">
            Completa el formulario y continúa la conversación por WhatsApp.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Field
              label="Nombre completo"
              value={form.nombre}
              onChange={(v) => setForm({ ...form, nombre: v })}
              placeholder="Tu nombre"
            />
            <Field
              label="Teléfono"
              value={form.telefono}
              onChange={(v) => setForm({ ...form, telefono: v })}
              placeholder="Tu número de contacto"
            />
            <label className="block">
              <span className="text-sm font-semibold text-ink/70">Mensaje</span>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={4}
                placeholder="¿En qué podemos ayudarte?"
                className="mt-1.5 w-full resize-none rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
              />
            </label>
            <button type="submit" className="btn-primary w-full">
              <Send size={18} /> Enviar mensaje
            </button>
            <a
              href={waLink(`Hola ${SITE.name}, quisiera información. 🧪`)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline w-full"
            >
              <MessageCircle size={18} /> Chatear directo por WhatsApp
            </a>
          </form>
        </motion.div>
      </section>
    </>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink/70">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
      />
    </label>
  )
}
