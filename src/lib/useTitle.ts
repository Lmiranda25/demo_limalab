import { useEffect } from 'react'
import { SITE } from './site'

/** Actualiza el <title> del documento por página (SEO básico sin librerías extra). */
export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} — Laboratorio Clínico`
  }, [title])
}
