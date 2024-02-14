import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
        console.log('Login successful');
        localStorage.setItem('authToken', data.token); 
        setUsername('')
        setPassword('')
      } else {
        setError(data.message || 'Invalid credentials');
        setUsername('')
        setPassword('')
        setTimeout(() => {
          setError('');
        }, 3000); 
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className='text-red-500'>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>



  );
};

export default LoginForm;
