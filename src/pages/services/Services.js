import React from 'react'
import './services.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'
import services from '../../assets/services.json'

const Services = () => {
  return (
    <div className='services_wrapper'>
        {/* Navigation Section */}
        <Navigation />

        <div className='home_services_wrapper' >
            <div className='home_services_sectionOne'>
                <h1>
                    What <span className='word_emphasy'>Services</span> <br />
                    We're Offering
                </h1>
                <p>
                    We provide services that can assist businesses in improving their online visibility 
                    and reputation, expanding market reach, and increasing turn over through innovative 
                    strategies. The following are the services we offer:
                </p>
            </div>

            <div className='home_services_sectionTwo' >
                {
                    services.map((service, index) => (
                        <Card 
                            key={index}
                            name={service.name}
                            description={service.description}
                            routeName={service.targetLink}
                            thumbnail={service.thumbnail}
                        />
                    ))
                }
            </div>
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
  )
}

export default Services