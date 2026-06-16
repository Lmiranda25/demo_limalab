import { motion } from 'framer-motion'

/** Blob orgánico animado de fondo (decorativo, con gradiente de marca). */
export function Blob({ className = '', color = '#0098DA' }: { className?: string; color?: string }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
      animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.05, 0.98, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        fill={color}
        d="M46.5,-58.6C60,-49.2,70.6,-34.7,73.8,-18.8C77,-2.9,72.7,14.4,64.3,29.2C55.9,44,43.3,56.3,28.3,63.6C13.3,70.9,-4.1,73.2,-20.6,68.7C-37.1,64.2,-52.7,52.9,-62.3,37.8C-71.9,22.7,-75.5,3.8,-71.3,-12.9C-67.1,-29.6,-55.2,-44.1,-41,-53.4C-26.8,-62.7,-10.4,-66.8,4.8,-72.6C20,-78.4,40,-68,46.5,-58.6Z"
        transform="translate(100 100)"
      />
    </motion.svg>
  )
}

/** Patrón decorativo de "burbujas" flotantes para fondos de sección. */
export function Bubbles({ className = '' }: { className?: string }) {
  const items = [
    { x: 10, y: 80, r: 6, d: 0 },
    { x: 30, y: 60, r: 4, d: 1.2 },
    { x: 55, y: 85, r: 8, d: 0.6 },
    { x: 75, y: 55, r: 5, d: 1.8 },
    { x: 90, y: 75, r: 3, d: 0.9 },
    { x: 45, y: 40, r: 4, d: 2.2 },
  ]
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden preserveAspectRatio="none">
      {items.map((b, i) => (
        <motion.circle
          key={i}
          cx={b.x}
          cy={b.y}
          r={b.r}
          fill="currentColor"
          initial={{ opacity: 0.15, y: 0 }}
          animate={{ opacity: [0.15, 0.4, 0.15], y: [-2, -10, -2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: b.d, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

/** Hélice de ADN estilizada en SVG (decorativa). */
export function DnaStrand({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 200" className={className} aria-hidden fill="none">
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 12 + i * 22
        const phase = Math.sin(i * 0.7)
        return (
          <g key={i}>
            <line
              x1={30 + phase * 18}
              y1={y}
              x2={30 - phase * 18}
              y2={y}
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle cx={30 + phase * 18} cy={y} r="3.5" fill="#1FA64A" />
            <circle cx={30 - phase * 18} cy={y} r="3.5" fill="#0098DA" />
          </g>
        )
      })}
    </svg>
  )
}
