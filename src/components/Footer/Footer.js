import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_wrapper'>
        <div className='footer_sectionOne'>
            <div className='footer_logo_tagline'>
                <img 
                    src='https://res.cloudinary.com/emacon-production/image/upload/v1684677695/techworks/TECH_WORKS-removebg-preview_i4fwq4.png'
                    alt='Techworks'
                />

                <h1>
                    We <br/>
                    Create <br />
                    The <br />
                    New <br />
                </h1>
            </div>

            <div className='footer_links_address'>
                <div className='footer_links' >
                    <h3>Links</h3>
                    <Link to="/" className='footer_link' >Home</Link>
                    <Link to="/about" className='footer_link' >What We Do</Link>
                    <Link to="/services" className='footer_link' >Our Services</Link>
                    <Link to="/works" className='footer_link' >Works</Link>
                    <Link to="/contact-us" className='footer_link' >Work With Us</Link>
                </div>

                <div className='footer_address' >
                    <h3>Contact</h3>
                    <p>hello@techworks.works</p>
                    <p>+1 (780) 721-4140</p>
                </div>
            </div>
        </div>

        <div className='border_dec' />

        <div className='footer_sectionTwo'>
            <p>
                {`© ${new Date().getFullYear()} - Techworks.`}
            </p>
        </div>
    </div>
  )
}

export default Footer