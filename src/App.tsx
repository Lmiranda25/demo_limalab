import { createHashRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './routes/Home'
import Catalogo from './routes/Catalogo'
import Resultados from './routes/Resultados'
import Cotizador from './routes/Cotizador'
import Nosotros from './routes/Nosotros'
import Blog from './routes/Blog'
import BlogPost from './routes/BlogPost'
import Contacto from './routes/Contacto'
import NotFound from './routes/NotFound'

// HashRouter: la opción más segura para GitHub Pages (sin configurar 404 / rewrites).
export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'catalogo', element: <Catalogo /> },
      { path: 'resultados', element: <Resultados /> },
      { path: 'cotizador', element: <Cotizador /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'contacto', element: <Contacto /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
