import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import Fuse from 'fuse.js'
import clsx from 'clsx'
import PageHeader from '@/components/ui/PageHeader'
import AnalisisCard from '@/components/catalogo/AnalisisCard'
import { ANALISIS, CATEGORIAS } from '@/data/analisis'
import { stagger } from '@/lib/motion'
import { useTitle } from '@/lib/useTitle'

export default function Catalogo() {
  useTitle('Catálogo de análisis')
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<string | null>(null)
  const [soloAyunas, setSoloAyunas] = useState(false)

  const fuse = useMemo(
    () =>
      new Fuse(ANALISIS, {
        keys: ['nombre', 'descripcion', 'categoria'],
        threshold: 0.38,
        ignoreLocation: true,
      }),
    [],
  )

  const resultados = useMemo(() => {
    let base = query.trim() ? fuse.search(query).map((r) => r.item) : ANALISIS
    if (cat) base = base.filter((a) => a.categoria === cat)
    if (soloAyunas) base = base.filter((a) => a.ayunas)
    return base
  }, [query, cat, soloAyunas, fuse])

  return (
    <>
      <PageHeader
        breadcrumb="Análisis"
        eyebrow="Catálogo"
        title={<>Nuestros <span className="gradient-text">análisis clínicos</span></>}
        subtitle="Más de 200 pruebas disponibles. Busca, filtra y agenda en segundos."
      />

      <section className="container-x py-12">
        {/* Buscador + filtros */}
        <div className="card sticky top-20 z-30 flex flex-col gap-4 p-5 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar análisis (ej. glucosa, tiroides...)"
              className="w-full rounded-2xl border border-ink/10 bg-mist py-3.5 pl-12 pr-10 text-ink outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink/40 hover:bg-ink/5"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <label className="flex cursor-pointer items-center gap-2 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-ink/70">
            <input
              type="checkbox"
              checked={soloAyunas}
              onChange={(e) => setSoloAyunas(e.target.checked)}
              className="h-4 w-4 accent-brand-blue"
            />
            <SlidersHorizontal size={16} /> En ayunas
          </label>
        </div>

        {/* Chips de categoría */}
        <div className="mt-6 flex flex-wrap gap-2">
          <CatChip active={cat === null} onClick={() => setCat(null)}>
            Todos
          </CatChip>
          {CATEGORIAS.map((c) => (
            <CatChip key={c} active={cat === c} onClick={() => setCat(cat === c ? null : c)}>
              {c}
            </CatChip>
          ))}
        </div>

        {/* Resultados */}
        <p className="mt-6 text-sm text-ink/50">
          {resultados.length} análisis encontrado{resultados.length !== 1 && 's'}
        </p>

        <AnimatePresence mode="popLayout">
          {resultados.length > 0 ? (
            <motion.div
              key="grid"
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {resultados.map((a) => (
                <AnalisisCard key={a.id} a={a} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 rounded-3xl bg-mist py-16 text-center"
            >
              <p className="text-lg font-semibold text-ink">Sin resultados</p>
              <p className="mt-1 text-ink/50">
                No encontramos análisis con esos criterios. Prueba con otra palabra.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

function CatChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-full px-4 py-2 text-sm font-semibold transition-all',
        active
          ? 'bg-brand-gradient text-white shadow-glow'
          : 'bg-mist text-ink/60 hover:bg-ink/5 hover:text-ink',
      )}
    >
      {children}
    </button>
  )
}
