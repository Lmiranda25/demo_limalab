import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, FileSearch, Loader2, AlertCircle, ShieldCheck, Info } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ResultadoViewer from '@/components/resultados/ResultadoViewer'
import { buscarOrden, type OrdenResultado } from '@/data/resultadosDemo'
import { useTitle } from '@/lib/useTitle'

export default function Resultados() {
  useTitle('Resultados en línea')
  const [orden, setOrden] = useState('')
  const [dni, setDni] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState<OrdenResultado | null>(null)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!orden.trim() || !dni.trim()) {
      setError('Completa el número de orden y tu DNI.')
      return
    }
    setLoading(true)
    // Simula una consulta a servidor (UX realista).
    setTimeout(() => {
      const found = buscarOrden(orden, dni)
      setLoading(false)
      if (found) setResultado(found)
      else setError('No encontramos resultados con esos datos. Verifica e intenta de nuevo.')
    }, 900)
  }

  return (
    <>
      <PageHeader
        breadcrumb="Resultados"
        eyebrow="Consulta en línea"
        title={<>Tus <span className="gradient-text">resultados</span>, cuando los necesites</>}
        subtitle="Ingresa tu número de orden y DNI para ver y descargar tus resultados de forma segura."
      />

      <section className="container-x py-12">
        <AnimatePresence mode="wait">
          {resultado ? (
            <ResultadoViewer key="viewer" data={resultado} onBack={() => setResultado(null)} />
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"
            >
              {/* Formulario */}
              <div className="card p-8">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Lock size={26} />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink">
                  Acceso a resultados
                </h2>
                <p className="mt-1 text-sm text-ink/60">
                  Tus datos están protegidos y son confidenciales.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <Campo
                    label="Número de orden"
                    value={orden}
                    onChange={setOrden}
                    placeholder="Ej. 12345"
                  />
                  <Campo
                    label="DNI del paciente"
                    value={dni}
                    onChange={setDni}
                    placeholder="Ej. 11111111"
                  />

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
                    >
                      <AlertCircle size={16} /> {error}
                    </motion.p>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full">
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Buscando...
                      </>
                    ) : (
                      <>
                        <FileSearch size={18} /> Ver mis resultados
                      </>
                    )}
                  </button>
                </form>

                {/* Aviso demo */}
                <div className="mt-5 flex items-start gap-2 rounded-xl bg-brand-blue/5 px-4 py-3 text-xs text-brand-blue-dark">
                  <Info size={16} className="mt-0.5 shrink-0" />
                  <p>
                    <strong>Demo:</strong> usa la orden <strong>12345</strong> y el DNI{' '}
                    <strong>11111111</strong> para ver un resultado de ejemplo.
                  </p>
                </div>
              </div>

              {/* Panel lateral */}
              <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white shadow-glow">
                <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
                <ShieldCheck size={48} className="relative" />
                <h3 className="relative mt-4 font-display text-2xl font-bold">
                  Seguro, rápido y sin filas
                </h3>
                <ul className="relative mt-5 space-y-3 text-sm text-white/90">
                  {[
                    'Disponible las 24 horas, los 7 días.',
                    'Descarga tus resultados en PDF al instante.',
                    'Comparte fácilmente con tu médico.',
                    'Historial siempre accesible desde tu dispositivo.',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <ShieldCheck size={18} className="mt-0.5 shrink-0 text-white/80" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

function Campo({
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
        className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-mist px-4 py-3 text-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
      />
    </label>
  )
}
