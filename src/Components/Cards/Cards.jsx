import React from 'react'
import './cards.css'

export default function Cards({title , img , description , site , github }) {
  return (
    <div className="projects-cards">
            <h3>{title}</h3>
            <img className='game-img' src={img} alt={title} />
            <p>{description}</p>
            <div className="links">
            <a className='game-link' target='_blank'  href={site}>Site</a>
            <a className='game-github' target='_blank' href={github}>Github</a>
            </div>
        </div>
  )
}
