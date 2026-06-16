import type { Sede, Post, Testimonio } from '@/types'

export const SEDES: Sede[] = [
  {
    id: 'naranjal',
    nombre: 'Sede Los Olivos',
    direccion: 'Av. Naranjal N°1568, Urb. Parque El Naranjal 2da Et.',
    ciudad: 'Los Olivos, Lima',
    telefono: '+51 948 734 978',
    horario: 'Lun–Sáb 7:00 a.m. – 8:00 p.m.',
    mapsQuery: 'Av. Naranjal 1568 Los Olivos Lima Peru',
  },
]

export const TESTIMONIOS: Testimonio[] = [
  {
    nombre: 'María Fernández',
    rol: 'Paciente',
    texto:
      'Resultados listos el mismo día y los recibí en mi correo. La atención fue rapidísima y el personal muy amable.',
    rating: 5,
  },
  {
    nombre: 'Dr. Carlos Rivas',
    rol: 'Médico referente',
    texto:
      'Confío en LimaLab para mis pacientes. Reportes claros, confiables y entregados a tiempo.',
    rating: 5,
  },
  {
    nombre: 'Lucía Ramos',
    rol: 'Paciente',
    texto:
      'Me hicieron el chequeo preventivo a un precio justo y el personal de Los Olivos fue muy amable. Lo recomiendo.',
    rating: 5,
  },
  {
    nombre: 'Jorge Medina',
    rol: 'Paciente',
    texto:
      'Pedí mi paquete por WhatsApp y me atendieron en minutos. Excelente servicio de principio a fin.',
    rating: 5,
  },
]

export const POSTS: Post[] = [
  {
    slug: 'ayunas-analisis',
    titulo: '¿Por qué algunos análisis requieren ayuno?',
    resumen:
      'Te explicamos qué pruebas necesitan ayuno, por cuánto tiempo y cómo prepararte correctamente.',
    categoria: 'Preparación',
    fecha: '2026-05-28',
    lectura: '4 min',
    imagen: 'img/photos/bloodtest.jpg',
    contenido:
      'El ayuno es importante porque ciertos componentes de la sangre, como la glucosa y los lípidos, se ven afectados por los alimentos que consumimos. Para análisis como glucosa en ayunas y perfil lipídico se recomienda un ayuno de 8 a 12 horas. Durante ese periodo puedes beber agua, pero evita café, jugos, alcohol y cigarrillos. Un ayuno adecuado garantiza resultados precisos y evita repetir la toma de muestra.',
  },
  {
    slug: 'chequeo-anual',
    titulo: 'La importancia del chequeo médico anual',
    resumen:
      'Un chequeo preventivo a tiempo puede detectar enfermedades silenciosas antes de que avancen.',
    categoria: 'Prevención',
    fecha: '2026-05-15',
    lectura: '5 min',
    imagen: 'img/photos/microscope.jpg',
    contenido:
      'Muchas enfermedades como la diabetes, la hipertensión o el colesterol alto no presentan síntomas en sus etapas iniciales. Un chequeo anual con análisis básicos permite detectarlas temprano, cuando son más fáciles de tratar. Recomendamos al menos un hemograma, glucosa, perfil lipídico y examen de orina una vez al año, o con mayor frecuencia según indicación médica.',
  },
  {
    slug: 'vitamina-d',
    titulo: 'Vitamina D: el nutriente que muchos descuidan',
    resumen:
      'Su déficit es más común de lo que crees. Conoce por qué medir tus niveles es clave para tu salud.',
    categoria: 'Bienestar',
    fecha: '2026-04-30',
    lectura: '3 min',
    imagen: 'img/photos/samples.jpg',
    contenido:
      'La vitamina D es esencial para la salud ósea, el sistema inmune y el estado de ánimo. Su déficit se asocia a fatiga, dolores musculares y mayor riesgo de infecciones. Una simple prueba de sangre (25-OH vitamina D) permite conocer tus niveles y corregirlos a tiempo con ayuda profesional.',
  },
]
