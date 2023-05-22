import React from 'react'
import './works.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import projects from '../../assets/projects.json'
import Links from '../../components/links/Links'

const Works = () => {
  return (
    <div className='works_wrapper'>
        {/* Navigation Section */}
        <Navigation />

        <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>LATELY AT TECHWORKS</h3>
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

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Works