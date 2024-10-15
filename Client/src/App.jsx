import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Train from './Components/Train/Train';
import Home from './Components/Home/Home';
import Flight from './Components/Flight/Flight';
import './App.css'
import Bus from './Components/Bus/Bus'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './Components/Login/Login';
import SignupSignin from './Components/Signup/SignupSignin';
import Signin from './Components/Signin/Signin';


function App() {
  return (
    <>      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/train" element={<Train />} />
        <Route path='/bus' element={<Bus/>}></Route>
        <Route path='/signup' element={<SignupSignin/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
