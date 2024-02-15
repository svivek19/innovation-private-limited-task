import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Navbar from './Component/Navbar'
import Shoe from './pages/Shoes'
import Shirt from './pages/Shirt'
import Watch from './pages/Watch'
import Sunglass from './pages/Sunglass'
import Footer from './Component/Footer';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/shoes' element={<Shoe />} />
          <Route path='/sunglass' element={<Sunglass />} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/watch' element={<Watch />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
