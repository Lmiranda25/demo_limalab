import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { asset } from '@/lib/site'
import { useTitle } from '@/lib/useTitle'

export default function NotFound() {
  useTitle('Página no encontrada')
  return (
    <section className="container-x grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <motion.img
          src={asset('img/isotipo.svg')}
          alt=""
          className="mx-auto h-28 w-auto"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <p className="mt-6 font-display text-7xl font-extrabold gradient-text">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-ink">Página no encontrada</h1>
        <p className="mx-auto mt-2 max-w-md text-ink/60">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link to="/" className="btn-primary mt-6">
          <Home size={18} /> Volver al inicio
        </Link>
      </div>
    </section>
  )
}
