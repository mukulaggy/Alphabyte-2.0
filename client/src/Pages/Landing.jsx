import React from 'react'
import Hero from '../components/Landing/Hero'
import About from '../components/Landing/About'
import Timeline from '../components/Landing/Timeline'
import Details from '../components/Landing/Details'
import Judges from '../components/Landing/Judges'
import Sponsors from '../components/Landing/Sponsors'
import Testimonials from '../components/Landing/Testimonials'
import FAQ from '../components/Landing/FAQ'
import Footer from '../components/Landing/Footer'

const Landing = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Details/>
      <Timeline/>
      <Judges/>
      <Sponsors/>
      <Testimonials/>
      <FAQ/>
      <Footer/>

      
    </div>
  )
}

export default Landing
