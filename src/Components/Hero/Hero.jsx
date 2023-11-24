import React from 'react'
import './hero.css'
import '../../assets/cat.jpg'

export default function Hero() {
  return (
    <main id='home' className='welcome-page'>
        <h1 className='welcome-title'>
          <span id='welcome-word'>WELCOME</span>
           TO MY 
           <span id='welcome-word'>PORTFOLIO</span></h1>
        <div className='avatar'></div>
    </main>
  )
}
