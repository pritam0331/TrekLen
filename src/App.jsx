import './App.css'
import Flight from './Components/Flight/Flight'
import Navbar from './Components/Navbar/Navbar'
import Bus from './Components/Bus/Bus'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/bus' element={<Bus/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
