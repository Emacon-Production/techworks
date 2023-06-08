import React from 'react'
import './softwaresolutions.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import projects from '../../assets/projects.json'
import Links from '../../components/links/Links'

const SoftwareSolutions = () => {
  return (
    <div className='softwaresolutions_wrapper'>
      <Navigation />

      {/* Hero Section */}
      <div className='softwaresolutions_hero_wrapper'>
            <div className='softwaresolutions_hero_sectionOne'>
                <h1>
                    Software <br />
                    Solutions <br />
                </h1>
            </div>

            <div className='softwaresolutions_hero_sectionTwo'>
                <div className='border_dec' />
                <p>
                  As a leading software development agency, we are dedicated to transforming your digital vision into reality. 
                  Our team of skilled developers, designers, and strategists specializes in creating customized software solutions 
                  tailored to your specific needs. From conceptualization to implementation, we offer comprehensive services, including 
                  custom software development, mobile app development, web application development, and more. Leveraging the latest 
                  technologies and industry best practices, we deliver scalable, secure, and high-performing software solutions that 
                  drive your business forward. With a focus on user experience, we ensure that our solutions are intuitive, engaging, a
                  nd aligned with your brand. Whether you're a startup, SME, or enterprise, we are committed to delivering exceptional 
                  results that exceed your expectations. Partner with us to leverage our expertise and unlock the full potential of technology 
                  for your business.
                </p>
            </div>
      </div>

      <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>OUR SOFTWARE PROJECTS</h3>
            </div>

            <div className='home_projects_sectionTwo'>
                {
                    projects.map((project, index) => (
                        <div className={`home_project_wrapper ${index % 2 === 0 ? "" : "odd_project"}`} key={index}>
                            <img 
                                className='home_project_thumbnail' 
                                src={project.thumbnail}
                                alt='Techworks' 
                            />
                            <h2>{project.clientName}</h2>
                            <p>
                                {project.projectDescription}
                            </p>
                            <p>{project.projectType}</p>
                            <Links />
                        </div>
                    )
                )
                }
            </div>
      </div>

      <Footer />
    </div>
  )
}

export default SoftwareSolutions