import React from 'react'
import Common from './Common'
// import web from './images/about_dis.jpg'
import web from './images/home_dis.svg'

const About = () => {
  return (
    <>
        <Common 
        name="Welcome to About Us" 
        imgSrc={web}
        visit="/contact"
        btnName= "Contact Us"

        />
    </>
  )
}

export default About