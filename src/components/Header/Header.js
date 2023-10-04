import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img 
          src={logo}
          className='logo'
        ></img>
        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
