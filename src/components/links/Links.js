import React from 'react'
import './links.css'
import { Link } from 'react-router-dom'

const Links = ({ Placeholder, targetLink }) => {
  return (
    <Link to={targetLink} className='link_wrapper'>
        <p>Learn More</p>
        <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
    </Link>
  )
}

export default Links