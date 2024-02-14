import React, { useEffect, useState } from 'react'
import { ColorRing, Oval, TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  if (!localStorage.getItem('authToken')) {
    window.location.href = '/login';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('authToken')
    navigate('/login')
  }

  return (
    <div>
      {isLoading ? (
        <div className='flex justify-center mt-10 md:mt-28'>
          <Oval
            visible={true}
            height="50"
            width="50"
            
            color='#000'
            />
        </div>
      ) : (
        <>
          login user
          <div>Content loaded after 3 seconds...</div>
          <button onClick={handleLogout}>logout</button>

        </>
      )}
    </div>
  )
}

export default Home
