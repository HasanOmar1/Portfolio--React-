import React from 'react'
import './about.css'

export default function About() {
  return (
    <section id='about' className='about-me'>
        <h1>About Me</h1>
        <div className="about-info">
            <h3>
            Hello , my name is <span className='about-spans' id='name'>Hasan </span>
            and im <span className='about-spans' id='old'>21</span> years old
             </h3>
            <h3>
            I live in a small beautiful village north of 
            <span className='about-spans' id='country'> Israel</span>
            </h3>
            <h3>
                Im a
                <span className='about-spans'> Gamer </span>
                and a <span className='about-spans'>Full Stack Developer</span>
            </h3>
            <h3>
                I have been gaming for more than <span className='about-spans'>10</span> years
            </h3>
            <h3>
            I have recently <span className='about-spans'>Joined</span> the programming club 🐱‍👤
            </h3>
        </div>

    </section>
  )
}
