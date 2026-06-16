// Configuración central del sitio. Cambia aquí los datos de contacto reales.
export const SITE = {
  name: 'LimaLab',
  tagline: 'Tu salud es lo primero',
  description:
    'Laboratorio clínico en Los Olivos. Resultados confiables, rápidos y atención cercana.',
  // Teléfono en formato internacional sin signos para los enlaces wa.me
  whatsapp: '51948734978',
  phoneDisplay: '+51 948 734 978',
  email: 'contacto@limalab.pe',
  address: 'Av. Naranjal N°1568, Urb. Parque El Naranjal 2da Et., Los Olivos, Lima',
  hours: 'Lun a Sáb: 7:00 a.m. – 8:00 p.m.',
  social: {
    facebook: 'https://www.facebook.com/laboratorioclinicolimalab',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com',
  },
}

// Construye un enlace de WhatsApp con mensaje pre-llenado.
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

// Helper para rutas de assets respetando el base de Vite (GitHub Pages).
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}
