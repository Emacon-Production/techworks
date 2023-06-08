import React from 'react'
import './contactus.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

const ContactUs = () => {
  return (
    <div className='contactus_wrapper'>
        {/* Navigation Section */}
        <Navigation />

        {/* Hero Section */}
        <div className='contactus_hero_wrapper'>
            <div className='contactus_hero_sectionOne'>
                <h1>
                    Want us to be a part of your <br />
                    Brand's Growth? <br />
                </h1>
                <h3>We'd love to heare from you!</h3>
            </div>
        </div>

        {/* Contact Form */}
        <div className='contact_form_wraper'>
          <form className='contact_form'>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Full Name</label>
            </div>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Company</label>
            </div>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Email Address</label>
            </div>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Phone Number</label>
            </div>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Subject</label>
            </div>
            <div className="form__group field">
                <textarea type="input" rows="7" className="form__field" placeholder="Name" required="" />
                <label for="name" className="form__label">Message</label>
            </div>
            <Button Placeholder="Send Message" />
          </form>
          
          <div className='footer_address' >
            <p>hello@techworks.works</p>
            <p>+1 (780) 721-4140</p>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
  )
}

export default ContactUs