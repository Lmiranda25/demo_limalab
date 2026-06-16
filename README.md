# LimaLab — Sitio web

Sitio web estático para el **Laboratorio Clínico LimaLab** (Los Olivos, Lima),
construido con **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

🔗 **URL en producción:** https://Lmiranda25.github.io/demo_limalab/

## ✨ Características

- **Home** animada (hero, estadísticas con contador, "por qué elegirnos", cómo funciona, análisis populares, testimonios y CTA).
- **Catálogo de análisis** con buscador (Fuse.js) y filtros por categoría.
- **Resultados en línea** — consulta tipo login (N° de orden + DNI) con visor de resultado e impresión/PDF.
  - 🔑 Demo: orden `12345`, DNI `11111111`.
- **Cotizador** — arma tu chequeo con los paquetes reales de LimaLab (Rutina Básico S/50, Rutina + PSA S/80, Perfil Tiroideo S/120, Perfil Hormonal Femenino S/150), ve el total y envía el pedido por **WhatsApp**.
- **Nosotros / Sede**, **Blog** + detalle de artículo, **Contacto** (formulario que abre WhatsApp + mapa de Av. Naranjal, Los Olivos).
- Botón flotante de WhatsApp, navegación animada y transiciones entre páginas.

## 🛠️ Desarrollo local

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173/demo_limalab/)
npm run build    # compilar para producción (genera /dist)
npm run preview  # previsualizar el build de producción
```

## 🚀 Despliegue a GitHub Pages (manual, sin GitHub Actions)

> El proyecto usa **HashRouter**, por lo que funciona en GitHub Pages sin
> configuración extra de rutas. El `base` de Vite ya está fijado en
> `/demo_limalab/` (debe coincidir con el nombre del repositorio).

### 1) Subir el código al repositorio

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Lmiranda25/demo_limalab.git
git push -u origin main
```

### 2) Publicar el sitio

```bash
npm run deploy
```

Este comando compila el proyecto y publica la carpeta `dist` en la rama
`gh-pages` (usando el paquete `gh-pages`). **No se usa GitHub Actions** — el
despliegue es 100% manual con este comando.

### 3) Activar GitHub Pages

En GitHub: **Settings → Pages → Build and deployment**
- **Source:** *Deploy from a branch*
- **Branch:** `gh-pages` / `/ (root)` → **Save**

En 1–2 minutos el sitio estará disponible en:
**https://Lmiranda25.github.io/demo_limalab/**

> Cada vez que quieras actualizar el sitio: haz tus cambios, `git push` y vuelve a
> ejecutar `npm run deploy`.

## ⚙️ Configuración rápida

- **Datos de contacto / WhatsApp:** edita [`src/lib/site.ts`](src/lib/site.ts)
  (número de WhatsApp `948 734 978`, correo, dirección, redes sociales).
- **Catálogo y paquetes:** [`src/data/analisis.ts`](src/data/analisis.ts).
- **Sede, testimonios y blog:** [`src/data/contenido.ts`](src/data/contenido.ts).
- **Resultados demo:** [`src/data/resultadosDemo.ts`](src/data/resultadosDemo.ts).
- **Colores de marca:** [`tailwind.config.js`](tailwind.config.js)
  (morado `#8E6BA8` = clave `brand.green`, teal `#3E9B9B` = clave `brand.blue`).

## 🖼️ Marca e imágenes

- **Logo LimaLab** recreado en **SVG vectorial** (microscopio + "LIMA" morado /
  "LAB" teal) en [`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx),
  `public/favicon.svg` y `public/img/isotipo.svg`.
- El **logo original** (imagen) está en `public/img/logo-limalab.jpg` y las
  campañas en `public/img/flyers/`.
- Fotos de ambiente con **licencia libre** (Pexels) en `public/img/photos/`
  para que no dependan de terceros.

> ⚠️ Si cambias el nombre del repositorio, actualiza el `base` en
> `vite.config.ts`, el `homepage` en `package.json` y el `href` del favicon en
> `index.html`.
