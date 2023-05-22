import React from 'react'
import './navigation.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav_wrapper'>
        <Link to="/" className='logo_wrapper'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1684677227/techworks/TECH_WORKS-removebg-preview_i4fwq4.png' alt='Techworks' />
        </Link>

        <div className='navlink_wrapper'>
            <Link to="/" className='navlink'>Home</Link>
            <Link to="/about" className='navlink'>What We Do</Link>
            <Link to="/services" className='navlink'>Our Services</Link>
            <Link to="/works" className='navlink'>Works</Link>
            <Button Placeholder="Work With Us" type="route" targetLink="/contact-us" />
        </div>
    </div>
  )
}

export default Navigation