import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header({ onLogout }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/Favourite'}>Favoritos</NavLink>
          </li>
          <li>
            <button onClick={onLogout}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
