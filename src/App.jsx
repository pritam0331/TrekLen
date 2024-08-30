import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Train from './Components/Train/Train';
import Home from './Components/Home/Home';
import Flight from './Components/Flight/Flight';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/train" element={<Train />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
