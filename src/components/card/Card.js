import React from 'react'
import './card.css'
import Button from '../Button/Button'
import Links from '../links/Links'

const Card = ({ name, description, routeName, thumbnail }) => {
  return (
    <div class="card">
        <img className='img' src={thumbnail} alt='' />
        <span>{ name }</span>
        <p class="info">{ description }</p>
        {/* <button>Learn More</button> */}
        <div className='card_btn'>
            <Links Placeholder="Learn More" targetLink={routeName} />
        </div>
        
    </div>
  )
}

export default Card