import React from 'react'
import './whatwedo.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import directors from '../../assets/directors.json'

const WhatWeDo = () => {
  return (
    <div className='whatwedo_wrapper'>
        {/* Navigation Section */}
        <Navigation />

        {/* Hero Section */}
        <div className='whatwedo_hero_wrapper'>
            <div className='whatwedo_hero_sectionOne'>
                <h1>
                    Helping hand for <br />
                    people and brands <br />
                    through every step <br />
                    of their journey.
                </h1>
            </div>

            <div className='whatwedo_hero_sectionTwo'>
                <div className='border_dec' />
                <p>
                    TechWorks is a leading agency that specializes in delivering innovative solutions to help businesses achieve their goals. Our services include Software Development, Sales, Project Management, CRM Management, Video & Photo Editing, Audio Editing, and more.
                    <br /> <br />
                    We take pride in our creativity and innovation, which enable us to create scalable solutions that meet the unique needs of our clients. Our mission is to simplify the technological landscape and make it easier for our clients to do business.
                    <br /> <br />
                    At TechWorks, we place a high priority on collaboration and customer satisfaction, working closely with our clients to understand their needs and develop customized solutions that exceed their expectations. With our extensive portfolio and experience, we are well-equipped to tackle any challenge and help our clients adapt to the constantly evolving technological landscape.
                    <br /> <br />
                    As we continue to expand our reach in new markets around the world, we remain committed to our core values of innovation, simplicity, and customer satisfaction. We are excited to partner with you to help your business thrive with cutting-edge solutions that deliver results. 
                </p>
            </div>
            
            <div className='directors_wrapper'>
                {
                    directors.map((director, index) => (
                        <div class="director_card" key={index}>
                            <div className='director_data'>
                                <img class="director_card-img" src={director.thumbnail} alt={director.name} />
                                <div class="director_card-info">
                                    <h2 class="director_text-title">{director.name}</h2>
                                    <p class="director_text-body">{director.role}</p>
                                    <p class="director_text-body">{director.bio}</p>
                                </div>
                            </div>
                              
                        </div>
                    ))
                }
            </div>
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
  )
}

export default WhatWeDo