import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import pageRoutes from './Routes'
import { useRoutes } from 'react-router-dom'
function App() {
  let router = useRoutes(pageRoutes)
  return (
    <>
    <Header />
    {router}
    <Footer />
    </>
  )
}

export default App
