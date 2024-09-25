import Footer from './components/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import './style/global.css'
function App() {
  

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default App
