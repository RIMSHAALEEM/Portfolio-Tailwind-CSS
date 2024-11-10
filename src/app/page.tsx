import React from 'react'
import  Hero from '@/app/components/hero'
import Feature from '@/app/components/feature'
import Services from '@/app/components/Services'
import Navbar from "@/app/components/Navbar"
import Footer from '@/app/components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home
