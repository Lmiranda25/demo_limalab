import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({ eyebrow, title, subtitle, center, className = '' }: Props) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-ink/60">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
