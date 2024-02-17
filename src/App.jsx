import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './Component/Navbar';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CheckoutForm from './pages/CheckoutForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/shoppingcart' element={<Cart />} />
            <Route path='/checkout' element={<CheckoutForm />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
