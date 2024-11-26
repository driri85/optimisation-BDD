import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Builder from './pages/Builder.jsx'
import Detail from './pages/Detail.jsx'
import Error from './pages/Error.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/builder", element: <Builder />},
  {path: "/detail/:id", element: <Detail />},
  {path: "*", element: <Error />},
])

export default function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
      <Footer /> {/*Test avec un footer global si ok et le temps supprimer tous les autres footers */}
    </>
  )
}
