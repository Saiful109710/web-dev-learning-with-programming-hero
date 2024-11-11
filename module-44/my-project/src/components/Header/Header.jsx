import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
        <h2>Navbar</h2>
        <nav>
          <Link to='/'>Home</Link>
         
          <NavLink to='/'>User</NavLink>
          <NavLink to='/about'>About</NavLink>
          
          <Link to='/posts'>Posts</Link>
          <Link to='/contact'>Contact</Link>
            
           
        </nav>
    </div>
  )
}

export default Header
