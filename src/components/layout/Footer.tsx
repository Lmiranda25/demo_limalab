import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white/80">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo className="h-14 w-auto" variant="white" animated={false} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {SITE.description} {SITE.tagline}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-blue"
            >
              <Facebook size={18} />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-green"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Inicio', '/'],
              ['Análisis', '/catalogo'],
              ['Cotizador', '/cotizador'],
              ['Resultados en línea', '/resultados'],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Empresa</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Nosotros', '/nosotros'],
              ['Sedes', '/nosotros#sedes'],
              ['Blog', '/blog'],
              ['Contacto', '/contacto'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-green-light" />
              {SITE.address}
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-brand-green-light" />
              {SITE.phoneDisplay}
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-brand-green-light" />
              {SITE.email}
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-brand-green-light" />
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
          <p>
            Hecho con dedicación. <span className="text-white/40">Sitio demostrativo.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
