import React from 'react'
import './home.css'
import Navigation from '../../components/navigation/Navigation'
import Card from '../../components/card/Card'
import services from '../../assets/services.json'
import workstages from '../../assets/workstages.json'
import Button from '../../components/Button/Button'
import Links from '../../components/links/Links'
import projects from '../../assets/projects.json'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home_wrapper'>
        <Navigation />

        {/* Hero Section */}
        <div className='hero_wrapper'>
            <div className='hero_sectionOne'>
                <h1>
                    A forward-thinking <br />
                    agency that provides <br />
                    innovative solutions that <br />
                    resonate.
                </h1>
            </div>

            <div className='hero_sectionTwo'>
                <h3>
                    We are committed to elevating the products and services of large corporations, small businesses, and funded start-ups around the world. 
                </h3>

                <div className='border_dec' />
            </div>
            
        </div>

        {/* About Section */}
        <div className='about_wrapper' >
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1684681552/techworks/charlesdeluvio-Lks7vei-eAg-unsplash_sgaiwb.jpg' alt='Techworks' />
            <div>
                <div className='about_sectionOne'>
                    <div className='border_dec' />
                    <h3>We create the new</h3>
                </div>
                <p>
                    We help large eminent companies clear hurdles, small businesses grow, and funded 
                    startups seize opportunities by creating functional strategies, products, and 
                    gorgeous designs that resonate.
                </p>
            </div>
        </div>

        {/* Services Section */}
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

        {/* How We Work Section */}
        <div className='how_we_work_wrapper'>
            <div className='how_we_work_sectionOne'>
                <div>
                    <h3>HERE ARE THE STEPS</h3>
                    <h1>
                        How do We <span className='word_emphasy'>Work?</span> <br />
                    </h1>
                </div>
                
                <p>
                    We have a structured work process to ensure that the projects handled can be completed properly
                    and according to your needs. Here are some common stages in the work process that we offer.
                </p>
            </div>

            <div className='how_we_work_sectionTwo'>
                {
                    workstages.map((stage, index) => (
                        <div className='stage_wrapper' key={index}>
                            <div className='stage_icon_wrapper'>
                                <i class={stage.icon}></i>
                            </div>
                            <h2>{stage.name}</h2>
                            <p>
                                {stage.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>

        {/* Projects we've done */}
        <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>LATELY AT TECHWORKS</h3>
            </div>

            <div className='home_projects_sectionTwo'>
                {
                    projects.map((project, index) => 
                    {
                        if(index <= 3) {
                            return (
                                <div className={`home_project_wrapper ${index % 2 === 0 ? "" : "odd_project"}`}>
                                    <img 
                                        className='home_project_thumbnail' 
                                        src={project.thumbnail}
                                        alt='Techworks' 
                                    />
                                    <h2>{project.clientName}</h2>
                                    <p>
                                        {project.projectDescription}
                                    </p>
                                    <p>{project.projectType} | {project.subcategory}</p>
                                    <Links />
                                </div>
                            )
                        }

                        return null;
                    }
                )
                }
            </div>

            <div className='home_projects_sectionThree'>
                <Button Placeholder="View More" type="route" targetLink="/works" />
            </div>
        </div>

        {/* Tell Us More Section */}
        <div className='tell_us_more_wrapper'>
            <div className='border_dec' />
            <h1>Tell us about your next project.</h1>
            <Button Placeholder="Work With Us" type="route" targetLink="/contact-us" />
        </div>

        {/* Footer Section */}
        <Footer />
    </div>
  )
}

export default Home