import React from 'react'
import web from './images/home_dis.svg'
import Common from './Common'

const Home = () => {
  return (
    <>
        <Common 
        name="Grow Your Bussiness With" 
        imgSrc={web}
        visit="/services"
        btnName= "Get Started"

        />
    </>
  )
}

export default Home