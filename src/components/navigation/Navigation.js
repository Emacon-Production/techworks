import React, { useRef, useState } from 'react'
import './navigation.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import menuData from '../../assets/menuData.json'

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
      // user click toogle
      if (toggle_ref.current && toggle_ref.current.contains(e.target)){
          content_ref.current.classList.toggle('active')
      } else {
          // user click outside toggle and content
          if (content_ref.current && !content_ref.current.contains(e.target)){
              content_ref.current.classList.remove('active')
          }
      }
  })
}

const Navigation = () => {
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);

  const setActiveMenu = () => menu_ref.current.classList.add('active');
  const closeMenu = () => menu_ref.current.classList.remove('active');

  return (
    <div className='nav_wrapper'>
        <Link to="/" className='logo_wrapper'>
            <img src='https://res.cloudinary.com/emacon-production/image/upload/v1684677227/techworks/TECH_WORKS-removebg-preview_i4fwq4.png' alt='Techworks' />
        </Link>

        <div className='navlink_wrapper'>
          {
            menuData.map((menu, index) => (
              <React.Fragment key={index}>
                {
                  menu.type === "button" ? <Button Placeholder={menu.menuName} type="route" targetLink={menu.targetRoute} /> : <Link to={menu.targetRoute} className='navlink'>{menu.menuName}</Link>
                }
              </React.Fragment>
            ))
          }
            {/* <Link to="/" className='navlink'>Home</Link>
            <Link to="/about" className='navlink'>What We Do</Link>
            <Link to="/services" className='navlink'>Our Services</Link>
            <Link to="/works" className='navlink'>Works</Link> */}
            
        </div>

        <div className='mobile_menu_wrapper'>
            <i 
              className="bx bx-menu menu__toggle"
              ref={menu_toggle_ref}
              onClick={setActiveMenu}
            />

            <div 
                className="theme-menu"
                ref={menu_ref}
            >
                <img src='https://res.cloudinary.com/emacon-production/image/upload/v1684677227/techworks/TECH_WORKS-removebg-preview_i4fwq4.png' alt='Techworks' />

                <i 
                  className="bx bx-x theme-menu__close"
                  onClick={closeMenu}
                />
                      

                <div className='mobile_menu'>
                  {
                    menuData.map((menu, index) => (
                      <React.Fragment key={index}>
                        {
                          menu.type === "button" ? <Button Placeholder={menu.menuName} type="route" targetLink={menu.targetRoute} /> : <Link to={menu.targetRoute} className='navlink'>{menu.menuName}</Link>
                        }
                      </React.Fragment>
                    ))
                  }
                </div>
                
            </div>
        
        </div>
    </div>
  )
}

export default Navigation