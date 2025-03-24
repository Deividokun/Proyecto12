import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from '../src/components/header/header'
import Favourite from '../src/pages/favourite/favourite'
import Home from '../src/pages/home/home'
import MovieDetail from '../src/pages/movieDetail/movieDetail'
import Register from '../src/pages/register/register'

function App() {
  const [isRegistered, setIsRegistered] = useState(() => {
    
    return localStorage.getItem('isRegistered') === 'true'
  })
  const navigate = useNavigate()

  useEffect(() => {
   
    localStorage.setItem('isRegistered', isRegistered)
  }, [isRegistered])

  const handleRegister = () => {
    setIsRegistered(true)
    navigate('/')
  }

  const handleLogout = () => {

    localStorage.removeItem('favorites')
    setIsRegistered(false)
    navigate('/register')
  }

  return (
    <div>
      {!isRegistered ? (
        <Register onRegister={handleRegister} />
      ) : (
        <>
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path='/register' element={<Register onRegister={handleRegister} />} />
            <Route path='/' element={<Home />} />
            <Route path='/Favourite' element={<Favourite />} />
            <Route path='/MovieDetail/:id' element={<MovieDetail />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App
