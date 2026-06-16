import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Check, Trash2, MessageCircle, ShoppingCart, Sparkles, Search } from 'lucide-react'
import clsx from 'clsx'
import Fuse from 'fuse.js'
import PageHeader from '@/components/ui/PageHeader'
import { ANALISIS, PAQUETES } from '@/data/analisis'
import { waLink, SITE } from '@/lib/site'
import { useTitle } from '@/lib/useTitle'

export default function Cotizador() {
  useTitle('Cotizador')
  const [seleccion, setSeleccion] = useState<Set<string>>(new Set())
  const [query, setQuery] = useState('')

  const fuse = useMemo(
    () => new Fuse(ANALISIS, { keys: ['nombre', 'categoria'], threshold: 0.4, ignoreLocation: true }),
    [],
  )
  const listados = query.trim() ? fuse.search(query).map((r) => r.item) : ANALISIS

  function toggle(id: string) {
    setSeleccion((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function addPaquete(ids: string[]) {
    setSeleccion((prev) => new Set([...prev, ...ids]))
  }

  const items = ANALISIS.filter((a) => seleccion.has(a.id))
  const total = items.reduce((s, a) => s + a.precio, 0)

  // Genera el mensaje de WhatsApp con el detalle de la cotización.
  const waMessage = useMemo(() => {
    if (items.length === 0) return ''
    const lineas = items.map((a) => `• ${a.nombre} — S/ ${a.precio}`).join('\n')
    return `Hola ${SITE.name} 👋, quisiera cotizar/agendar estos análisis:\n\n${lineas}\n\n*Total estimado: S/ ${total}*\n\n¿Me ayudan a coordinar? 🧪`
  }, [items, total])

  return (
    <>
      <PageHeader
        breadcrumb="Cotizador"
        eyebrow="Arma tu chequeo"
        title={<>Cotiza y agenda en <span className="gradient-text">2 minutos</span></>}
        subtitle="Elige tus análisis o un paquete, revisa el total y envíanos tu pedido por WhatsApp."
      />

      <section className="container-x grid gap-8 py-12 lg:grid-cols-3">
        {/* Columna selección */}
        <div className="lg:col-span-2">
          {/* Paquetes destacados */}
          <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <Sparkles size={20} className="text-brand-blue" /> Paquetes recomendados
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {PAQUETES.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ y: -4 }}
                className={clsx(
                  'card flex flex-col p-5',
                  p.destacado && 'ring-2 ring-brand-blue',
                )}
              >
                {p.destacado && (
                  <span className="chip mb-2 self-start bg-brand-gradient text-white">Más elegido</span>
                )}
                <h3 className="font-display font-bold text-ink">{p.nombre}</h3>
                <p className="mt-1 flex-1 text-xs text-ink/60">{p.descripcion}</p>
                <div className="mt-3">
                  <span className="text-xs text-ink/40 line-through">S/ {p.precioRegular}</span>
                  <p className="font-display text-2xl font-extrabold gradient-text">S/ {p.precio}</p>
                </div>
                <button
                  onClick={() => addPaquete(p.ids)}
                  className="btn-outline mt-3 h-10 text-sm"
                >
                  <Plus size={16} /> Agregar
                </button>
              </motion.div>
            ))}
          </div>

          {/* Buscador de análisis individuales */}
          <h2 className="mt-10 font-display text-xl font-bold text-ink">Agregar análisis individuales</h2>
          <div className="relative mt-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar análisis..."
              className="w-full rounded-2xl border border-ink/10 bg-mist py-3 pl-11 pr-4 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {listados.map((a) => {
              const active = seleccion.has(a.id)
              return (
                <button
                  key={a.id}
                  onClick={() => toggle(a.id)}
                  className={clsx(
                    'flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-all',
                    active
                      ? 'border-brand-blue bg-brand-blue/5'
                      : 'border-ink/10 bg-white hover:border-brand-blue/40',
                  )}
                >
                  <div>
                    <p className="font-semibold text-ink">{a.nombre}</p>
                    <p className="text-xs text-ink/50">{a.categoria} · S/ {a.precio}</p>
                  </div>
                  <span
                    className={clsx(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full transition',
                      active ? 'bg-brand-gradient text-white' : 'bg-ink/5 text-ink/40',
                    )}
                  >
                    {active ? <Check size={16} /> : <Plus size={16} />}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Columna resumen (sticky) */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24 p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
              <ShoppingCart size={20} className="text-brand-blue" /> Tu cotización
            </h2>

            <div className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-8 text-center text-sm text-ink/40"
                  >
                    Aún no has agregado análisis.
                  </motion.p>
                ) : (
                  items.map((a) => (
                    <motion.div
                      key={a.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center justify-between gap-2 rounded-xl bg-mist px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink">{a.nombre}</p>
                        <p className="text-xs text-ink/50">S/ {a.precio}</p>
                      </div>
                      <button
                        onClick={() => toggle(a.id)}
                        aria-label="Quitar"
                        className="rounded-full p-1.5 text-ink/40 hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={15} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 border-t border-ink/5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-ink/60">Total estimado</span>
                <motion.span
                  key={total}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="font-display text-3xl font-extrabold gradient-text"
                >
                  S/ {total}
                </motion.span>
              </div>
              <p className="mt-1 text-xs text-ink/40">
                {items.length} análisis · precio referencial
              </p>

              <a
                href={items.length ? waLink(waMessage) : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={items.length === 0}
                onClick={(e) => items.length === 0 && e.preventDefault()}
                className={clsx(
                  'btn-primary mt-4 w-full',
                  items.length === 0 && 'pointer-events-none opacity-50',
                )}
              >
                <MessageCircle size={18} /> Enviar por WhatsApp
              </a>
              {items.length > 0 && (
                <button
                  onClick={() => setSeleccion(new Set())}
                  className="btn-ghost mt-2 w-full text-sm"
                >
                  Vaciar selección
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
