import React from 'react'
import Footer from '../../components/Footer/Footer'
import Links from '../../components/links/Links'
import Navigation from '../../components/navigation/Navigation'
import projects from '../../assets/projects.json'

const CreativeSolutions = () => {
  const CreativeProjects = projects.filter(project => project.projectType === "Creative Solutions");
  
  return (
    <div className='softwaresolutions_wrapper'>
      <Navigation />

      {/* Hero Section */}
      <div className='softwaresolutions_hero_wrapper'>
            <div className='softwaresolutions_hero_sectionOne'>
                <h1>
                    Creative <br />
                    Solutions <br />
                </h1>
            </div>

            <div className='softwaresolutions_hero_sectionTwo'>
                <div className='border_dec' />
                <p>
                  Our creative service encompasses photography production & editing, video production & editing, and 
                  audio production & editing. With our expertise in these areas, we bring your artistic vision to life 
                  with precision and creativity. Our team of skilled professionals understands the power of visual and 
                  auditory storytelling, enabling us to capture captivating images, create compelling videos, and produce 
                  immersive audio experiences. Whether you need stunning photographs, professionally edited videos, or finely 
                  tuned audio elements, we provide personalized solutions tailored to your unique needs. Partner with us to 
                  elevate your creative projects and leave a lasting impression on your audience.
                </p>
            </div>
      </div>

      <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>OUR CREATIVE PROJECTS</h3>
            </div>

            <div className='home_projects_sectionTwo'>
                {
                    CreativeProjects.map((project, index) => (
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
                            <p>{project.projectType} | {project.subcategory}</p>
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

export default CreativeSolutions