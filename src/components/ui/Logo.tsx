import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  /** 'color' usa morado+teal (sobre fondo claro). 'white' es monocromo blanco. */
  variant?: 'color' | 'white'
  animated?: boolean
}

/**
 * Logo LimaLab recreado en SVG vectorial a partir del logo original:
 * isotipo de microscopio + "LIMA" en morado sobre "LAB" en teal,
 * con la bajada "LABORATORIO CLÍNICO".
 */
export default function Logo({ className = '', variant = 'color', animated = true }: LogoProps) {
  const purple = variant === 'white' ? '#ffffff' : '#8E6BA8'
  const teal = variant === 'white' ? '#ffffff' : '#3E9B9B'
  const sub = variant === 'white' ? 'rgba(255,255,255,0.85)' : '#6B6B7B'
  const stroke = variant === 'white' ? '#ffffff' : '#3A3A52'

  const Scope = animated ? motion.g : 'g'
  const scopeProps = animated
    ? {
        initial: { y: -1 },
        animate: { y: [-1, 1.5, -1] },
        transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' as const },
      }
    : {}

  return (
    <svg
      viewBox="0 0 240 96"
      className={className}
      role="img"
      aria-label="LimaLab — Laboratorio Clínico"
      fill="none"
    >
      {/* Isotipo: microscopio de línea */}
      <Scope
        {...(scopeProps as object)}
        fill="none"
        stroke={stroke}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ocular con punto morado */}
        <circle cx="46" cy="20" r="6" />
        <circle cx="46" cy="20" r="2.4" fill={purple} stroke="none" />
        {/* tubo óptico */}
        <line x1="42" y1="25" x2="30" y2="48" />
        <line x1="50" y1="25" x2="38" y2="48" />
        {/* objetivo */}
        <line x1="27" y1="47" x2="41" y2="47" />
        {/* brazo curvo / platina */}
        <path d="M18 44 a22 22 0 0 0 34 10" />
        <line x1="22" y1="42" x2="14" y2="56" />
        {/* punto teal en la platina */}
        <circle cx="34" cy="62" r="3.2" fill={teal} stroke="none" />
        {/* columna */}
        <line x1="34" y1="65" x2="34" y2="74" />
        {/* base */}
        <line x1="14" y1="78" x2="54" y2="78" />
        <path d="M26 78 a8 8 0 0 1 16 0" />
      </Scope>

      {/* "LIMA" en morado */}
      <text
        x="72"
        y="44"
        fontFamily="Plus Jakarta Sans, Poppins, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="1"
        fill={purple}
      >
        LIMA
      </text>
      {/* "LAB" en teal */}
      <text
        x="72"
        y="80"
        fontFamily="Plus Jakarta Sans, Poppins, sans-serif"
        fontWeight="800"
        fontSize="38"
        letterSpacing="1"
        fill={teal}
      >
        LAB
      </text>
      {/* bajada */}
      <text
        x="158"
        y="74"
        fontFamily="Poppins, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="1.5"
        fill={sub}
      >
        LABORATORIO
      </text>
      <text
        x="158"
        y="85"
        fontFamily="Poppins, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="1.5"
        fill={sub}
      >
        CLÍNICO
      </text>
    </svg>
  )
}
