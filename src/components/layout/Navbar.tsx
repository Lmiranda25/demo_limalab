import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import clsx from 'clsx'
import Logo from '@/components/ui/Logo'

const NAV = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Análisis' },
  { to: '/cotizador', label: 'Cotizador' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú móvil al cambiar de ruta.
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/85 shadow-soft backdrop-blur-lg'
          : 'bg-transparent',
      )}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" aria-label="LimaLab inicio" className="shrink-0">
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'text-brand-blue-dark' : 'text-ink/70 hover:text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-gradient"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/resultados" className="btn-primary hidden h-11 sm:inline-flex">
            <FileText size={18} />
            Resultados en línea
          </Link>
          <button
            className="rounded-full p-2 text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/5 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      clsx(
                        'block rounded-xl px-4 py-3 font-semibold',
                        isActive
                          ? 'bg-brand-gradient-soft text-brand-blue-dark'
                          : 'text-ink/80 hover:bg-ink/5',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/resultados" className="btn-primary w-full">
                  <FileText size={18} />
                  Resultados en línea
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
