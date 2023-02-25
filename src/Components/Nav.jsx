import React from 'react';
import logo from '../../src/Assets/logo.png';
import './Nav.css'



const Nav = () => {
  return (
    <nav>
          <div className='nav'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
            </ul>
          </div>
    </nav>
    
  )
}

export default Nav