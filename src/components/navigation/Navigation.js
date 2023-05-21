import React from 'react'
import './navigation.css'
import Button from '../Button/Button'

const Navigation = () => {
  return (
    <div className='nav_wrapper'>
        <div className='logo_wrapper'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1684677227/techworks/TECH_WORKS-removebg-preview_i4fwq4.png' alt='Techworks' />
        </div>

        <div className='navlink_wrapper'>
            <p className='navlink'>Home</p>
            <p className='navlink'>What We Do</p>
            <p className='navlink'>Our Services</p>
            <p className='navlink'>Works</p>
            <Button Placeholder="Work With Us"/>
        </div>
    </div>
  )
}

export default Navigation