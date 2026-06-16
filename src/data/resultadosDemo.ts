// Datos DEMO de resultados. En producción esto vendría de un sistema real.
// Credenciales de prueba: orden "12345" + DNI "11111111".

export interface Parametro {
  nombre: string
  valor: string
  unidad: string
  referencia: string
  estado: 'normal' | 'alto' | 'bajo'
}

export interface ResultadoExamen {
  nombre: string
  parametros: Parametro[]
}

export interface OrdenResultado {
  orden: string
  dni: string
  paciente: string
  edad: number
  sexo: string
  fecha: string
  medico: string
  estado: 'Validado' | 'En proceso'
  examenes: ResultadoExamen[]
}

export const ORDENES_DEMO: OrdenResultado[] = [
  {
    orden: '12345',
    dni: '11111111',
    paciente: 'Juan Pérez García',
    edad: 34,
    sexo: 'Masculino',
    fecha: '08/06/2026',
    medico: 'Dra. Ana Salazar',
    estado: 'Validado',
    examenes: [
      {
        nombre: 'Hemograma completo',
        parametros: [
          { nombre: 'Hemoglobina', valor: '15.2', unidad: 'g/dL', referencia: '13.5 – 17.5', estado: 'normal' },
          { nombre: 'Hematocrito', valor: '45', unidad: '%', referencia: '41 – 53', estado: 'normal' },
          { nombre: 'Leucocitos', valor: '11.8', unidad: '10³/µL', referencia: '4.0 – 10.0', estado: 'alto' },
          { nombre: 'Plaquetas', valor: '260', unidad: '10³/µL', referencia: '150 – 400', estado: 'normal' },
        ],
      },
      {
        nombre: 'Perfil lipídico',
        parametros: [
          { nombre: 'Colesterol total', valor: '210', unidad: 'mg/dL', referencia: '< 200', estado: 'alto' },
          { nombre: 'HDL', valor: '52', unidad: 'mg/dL', referencia: '> 40', estado: 'normal' },
          { nombre: 'LDL', valor: '135', unidad: 'mg/dL', referencia: '< 100', estado: 'alto' },
          { nombre: 'Triglicéridos', valor: '120', unidad: 'mg/dL', referencia: '< 150', estado: 'normal' },
        ],
      },
      {
        nombre: 'Glucosa',
        parametros: [
          { nombre: 'Glucosa en ayunas', valor: '92', unidad: 'mg/dL', referencia: '70 – 100', estado: 'normal' },
        ],
      },
    ],
  },
]

export function buscarOrden(orden: string, dni: string): OrdenResultado | null {
  return (
    ORDENES_DEMO.find(
      (o) => o.orden === orden.trim() && o.dni === dni.trim(),
    ) ?? null
  )
}
