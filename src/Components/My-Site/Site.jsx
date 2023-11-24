import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Hero from "../../Components/Hero/Hero.jsx"
import About from "../../Components/About/About.jsx"
import Projects from "../../Components/Projects/Projects.jsx"
import Form from "../../Components/Form/Form.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

export default function Site() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Projects />
      <Form />
      <Footer />
    </>
  )
}
