import React from 'react'
import './register.css'
const Register = ({ onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister()
  }

  return (
    <div className='formOut'>
      <h1>
        Si quieres ver todos los personajes de tu serie favorita, registrate!!
      </h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          placeholder='Enter your name'
          className='input'
          type='text'
          required
        />
        <input
          placeholder='*********'
          className='input'
          type='password'
          required
        />
        <button type='submit'>Registrate</button>
      </form>
    </div>
  )
}

export default Register
