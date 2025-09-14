import React from 'react'
import TopBar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Workers from '../components/Workers'
import Footer from '../components/Footer'
import TestimonialSection from '../components/TestimonialSection '
import ContactForm from '../components/ContactForm'
import LatestProjects from '../components/LatestProjects'

const Home = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Hero/>
        <Services/>
        <Workers/>
        <LatestProjects/>
                <TestimonialSection/>
                <ContactForm/>

        <Footer/>
        
        
    </div>
  )
}

export default Home