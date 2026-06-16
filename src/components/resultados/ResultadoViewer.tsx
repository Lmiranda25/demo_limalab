import { motion } from 'framer-motion'
import { Printer, Download, ArrowLeft, CheckCircle2, ArrowUp, ArrowDown } from 'lucide-react'
import clsx from 'clsx'
import type { OrdenResultado, Parametro } from '@/data/resultadosDemo'
import { stagger, fadeUp } from '@/lib/motion'

function EstadoBadge({ estado }: { estado: Parametro['estado'] }) {
  if (estado === 'normal')
    return (
      <span className="chip bg-brand-green/10 text-brand-green-dark">
        <CheckCircle2 size={12} /> Normal
      </span>
    )
  if (estado === 'alto')
    return (
      <span className="chip bg-red-100 text-red-600">
        <ArrowUp size={12} /> Alto
      </span>
    )
  return (
    <span className="chip bg-amber-100 text-amber-700">
      <ArrowDown size={12} /> Bajo
    </span>
  )
}

export default function ResultadoViewer({
  data,
  onBack,
}: {
  data: OrdenResultado
  onBack: () => void
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      {/* Barra de acciones */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="btn-ghost">
          <ArrowLeft size={18} /> Consultar otra orden
        </button>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="btn-outline h-11">
            <Printer size={18} /> Imprimir
          </button>
          <button onClick={() => window.print()} className="btn-primary h-11">
            <Download size={18} /> Descargar PDF
          </button>
        </div>
      </div>

      {/* Hoja de resultado */}
      <div className="card overflow-hidden">
        {/* Encabezado de la hoja */}
        <div className="bg-brand-gradient p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-display text-2xl font-extrabold">LimaLab</p>
              <p className="text-sm text-white/80">Informe de resultados</p>
            </div>
            <span className="chip bg-white/20 text-white">
              <CheckCircle2 size={14} /> {data.estado}
            </span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <Field label="Paciente" value={data.paciente} />
            <Field label="Orden N°" value={data.orden} />
            <Field label="Edad / Sexo" value={`${data.edad} años / ${data.sexo}`} />
            <Field label="Fecha" value={data.fecha} />
          </div>
        </div>

        {/* Exámenes */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-8 p-6 sm:p-8"
        >
          {data.examenes.map((ex) => (
            <motion.div key={ex.nombre} variants={fadeUp}>
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink">
                <span className="h-5 w-1.5 rounded-full bg-brand-gradient" />
                {ex.nombre}
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-ink/5">
                <table className="w-full min-w-[420px] text-sm">
                  <thead className="bg-mist text-left text-xs uppercase tracking-wide text-ink/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Parámetro</th>
                      <th className="px-4 py-3 font-semibold">Resultado</th>
                      <th className="hidden px-4 py-3 font-semibold sm:table-cell">Referencia</th>
                      <th className="px-4 py-3 text-right font-semibold">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {ex.parametros.map((p) => (
                      <tr
                        key={p.nombre}
                        className={clsx(p.estado !== 'normal' && 'bg-red-50/40')}
                      >
                        <td className="px-4 py-3 font-medium text-ink">{p.nombre}</td>
                        <td className="px-4 py-3 font-bold text-ink">
                          {p.valor} <span className="font-normal text-ink/40">{p.unidad}</span>
                        </td>
                        <td className="hidden px-4 py-3 text-ink/50 sm:table-cell">
                          {p.referencia} {p.unidad}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <EstadoBadge estado={p.estado} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-ink/5 bg-mist px-6 py-5 text-xs text-ink/50 sm:px-8">
          <p>
            Validado por <strong className="text-ink/70">{data.medico}</strong>. Este informe es
            una demostración. Los valores fuera de rango deben ser interpretados por un médico.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
      <p className="mt-0.5 font-semibold">{value}</p>
    </div>
  )
}
