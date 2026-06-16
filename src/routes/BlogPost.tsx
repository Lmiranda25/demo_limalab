import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, MessageCircle } from 'lucide-react'
import { POSTS } from '@/data/contenido'
import { asset, waLink, SITE } from '@/lib/site'
import { useTitle } from '@/lib/useTitle'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  useTitle(post?.titulo)

  if (!post) return <NotFound />

  return (
    <article className="pb-12">
      {/* Hero del post */}
      <div className="relative h-[42vh] min-h-[320px] overflow-hidden">
        <img src={asset(post.imagen)} alt={post.titulo} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
        <div className="container-x absolute inset-x-0 bottom-0 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <span className="chip bg-white/20 text-white backdrop-blur">{post.categoria}</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              {post.titulo}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {new Date(post.fecha).toLocaleDateString('es-PE')}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.lectura}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-x mt-10 max-w-3xl">
        <Link to="/blog" className="btn-ghost mb-6">
          <ArrowLeft size={18} /> Volver al blog
        </Link>

        <p className="text-lg font-medium leading-relaxed text-ink/80">{post.resumen}</p>
        <p className="mt-6 leading-relaxed text-ink/70">{post.contenido}</p>

        <div className="mt-10 rounded-3xl bg-brand-gradient-soft p-7 text-center">
          <h3 className="font-display text-xl font-bold text-ink">¿Necesitas hacerte un análisis?</h3>
          <p className="mt-2 text-ink/60">Agenda hoy y recibe tus resultados en línea.</p>
          <a
            href={waLink(`Hola ${SITE.name}, leí su blog y quiero agendar un análisis. 🧪`)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-5"
          >
            <MessageCircle size={18} /> Agendar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
