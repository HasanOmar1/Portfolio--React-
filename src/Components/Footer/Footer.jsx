import React from 'react'
import './footer.css'
import { SiGmail } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";





export default function Footer() {
  return (
    <footer>
        <h3 id='socials-h3'>Social Media:</h3>
        <div className="social-media">
            <div className="email-container ">
            <SiGmail className='icons'/>
            <p>r3domar1@gmail.com</p>
            </div>
            <div className="discord-container ">
            <BsDiscord className='icons'/>
            <p>vramv</p>
            </div>
            <div className="instagram-container">
            <a href="https://www.instagram.com/hasanomar99" target='_blank'><FiInstagram className='icons link'/></a>
            </div>
            <div className="github-container">
            <a href="https://github.com/hasanomar1" target='_blank'><FaGithub className='icons link'/></a>
            </div>

            <div className="copy-right">
                <p>Copyright - Hasan ©</p>
            </div>
        </div>
    </footer>
  )
}
