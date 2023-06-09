import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import projects from '../../assets/projects.json'
import Links from '../../components/links/Links'
import Footer from '../../components/Footer/Footer'

const CrmSales = () => {
    const CrmSalesProjects = projects.filter(project => project.projectType === "CRM Management & Sales Administration");
  
  return (
    <div className='softwaresolutions_wrapper'>
      <Navigation />

      {/* Hero Section */}
      <div className='softwaresolutions_hero_wrapper'>
            <div className='softwaresolutions_hero_sectionOne'>
                <h1>
                    CRM Management & <br />
                    Sales Administration <br />
                </h1>
            </div>

            <div className='softwaresolutions_hero_sectionTwo'>
                <div className='border_dec' />
                <p>
                    Our CRM and Sales Administration services are designed to streamline and optimize 
                    your customer relationship management processes, enabling you to enhance customer 
                    satisfaction, increase sales, and improve overall business efficiency. We offer a 
                    comprehensive suite of tools and solutions to empower your sales team, automate 
                    repetitive tasks, and provide valuable insights for informed decision-making
                </p>
            </div>
      </div>

      <div className='home_projects_wrapper'>
            <div className='home_projects_sectionOne'>
                <div className='border_dec' />
                <h3>OUR CRM & SALES ADMINISTRATION PROJECTS</h3>
            </div>

            <div className='home_projects_sectionTwo'>
                {
                    CrmSalesProjects.map((project, index) => (
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

export default CrmSales