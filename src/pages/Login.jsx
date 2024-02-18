import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {

        toast.success('Login successful', {
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            margin: '10px',
            padding: '4px',
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#222B38',
            borderRadius: '10px'
          }
        });

        navigate('/')
        localStorage.setItem('authToken', data.token);
        setUsername('');
        setPassword('');
      } else {
        setError(data.message || 'Invalid credentials');
        setUsername('');
        setPassword('');
        setTimeout(() => {
          setError('');
        }, 5000);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleHelpClick = (e) => {
    e.preventDefault()
    Swal.fire(`User Name: kminchelle
              Password: 0lelplR`);
  };

  return (
    <div className="w-full mt-10 md:mt-28 max-w-sm mx-auto overflow-hidden rounded-lg shadow-md">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img className="w-28 h-24" src="https://yshop.org/cdn/shop/t/4/assets/logo-image-file.png?v=73107786777602669321430073421" alt="logo" />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center ">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login your account</p>

        <form>
          <div className="w-full mt-4">
            {error && <div className='text-red-500 font-semibold'>{error}</div>}
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg" type="text" placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="w-full mt-4">
            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg" type="password" placeholder="Password" aria-label="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-900 rounded-lg hover:bg-slate-700" onClick={handleHelpClick}>
              Help
            </button>


            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
