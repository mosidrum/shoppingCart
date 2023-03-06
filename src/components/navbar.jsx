import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <div className="navlink">
          <Link to='/' className='navlink'>Home</Link>
          <Link to='/shop' className='navlink'>Collection</Link>
          <Link to='/contact' className='navlink'>Contact Us</Link>
        </div>
        <div className="shoplink">
        <Link to='/shop'>Shop</Link>
        <Link to='/cart'> <ShoppingCart size={32} /></Link>
        </div>
      </div>
    </div>
  )
}


