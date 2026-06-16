export interface Analisis {
  id: string
  nombre: string
  categoria: Categoria
  descripcion: string
  precio: number
  ayunas: boolean
  tiempo: string // tiempo de entrega de resultados
  preparacion?: string
  popular?: boolean
}

export type Categoria =
  | 'Hematología'
  | 'Bioquímica'
  | 'Hormonas'
  | 'Inmunología'
  | 'Microbiología'
  | 'Perfiles'
  | 'COVID-19'

export interface Sede {
  id: string
  nombre: string
  direccion: string
  ciudad: string
  telefono: string
  horario: string
  mapsQuery: string
}

export interface Post {
  slug: string
  titulo: string
  resumen: string
  contenido: string
  categoria: string
  fecha: string
  lectura: string
  imagen: string
}

export interface Testimonio {
  nombre: string
  rol: string
  texto: string
  rating: number
}
