import React from 'react'
import './contactus.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
  return (
    <div className='contactus_wrapper'>
        {/* Navigation Section */}
        <Navigation />

        {/* Footer Section */}
        <Footer />
    </div>
  )
}

export default ContactUs