import './App.css'
import Header from './Components/Header/Header'
import pageRoutes from './Routes'
import { useRoutes } from 'react-router-dom'
function App() {
  let router = useRoutes(pageRoutes)
  return (
    <>
    <Header />
    {router}
    </>
  )
}

export default App
