import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
