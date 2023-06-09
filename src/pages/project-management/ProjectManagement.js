import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import projects from '../../assets/projects.json'
import Links from '../../components/links/Links'
import Footer from '../../components/Footer/Footer'

const ProjectManagement = () => {
    const ProjectManagementProjects = projects.filter(project => project.projectType === "Project Management");
  
  return (
    <div className='softwaresolutions_wrapper'>
      <Navigation />

      {/* Hero Section */}
      <div className='softwaresolutions_hero_wrapper'>
            <div className='softwaresolutions_hero_sectionOne'>
                <h1>
                    Project <br />
                    Management <br />
                </h1>
            </div>

            <div className='softwaresolutions_hero_sectionTwo'>
                <div className='border_dec' />
                <p>
                    Our project management services provide comprehensive solutions to help you 
                    successfully plan, execute, and deliver your projects on time and within budget. 
                    With our expertise in project management methodologies and industry best practices, 
                    we ensure that your projects are efficiently managed from initiation to closure, 
                    resulting in successful outcomes. At the core of our services is a team of highly 
                    skilled and experienced project managers who are adept at leading diverse teams and 
                    driving project success. Our project managers possess strong leadership skills, 
                    excellent communication abilities, and a keen eye for detail, enabling them to 
                    effectively coordinate all project activities and ensure seamless collaboration among 
                    stakeholders.
                </p>
            </div>
      </div>

      <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>OUR PROJECT MANAGEMENT PROJECTS</h3>
            </div>

            <div className='home_projects_sectionTwo'>
                {
                    ProjectManagementProjects.map((project, index) => (
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

export default ProjectManagement