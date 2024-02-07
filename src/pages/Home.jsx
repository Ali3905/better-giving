import React from 'react'
import Hero from '../sections/Home/Hero'
import Footer from '../components/Footer'
import HeroBottom from '../components/HeroBottom'
import Testimonials from '../sections/Home/Testimonials'
import Brands from '../sections/Home/Brands'
import Blogs from '../sections/Home/Blogs'
import Video from '../sections/Home/Video'
import Path from '../sections/Home/Path'
import JoinUsBanner from '../components/JoinUsBanner'
import Animation from '../sections/Home/Animation'

const Home = () => {
  return (
    <div>
      <div className='app'>
        <Hero />
        <HeroBottom />
        {/* <Benefits /> */}
        <Path />
        <Brands />
        <Animation />
        <JoinUsBanner />
        <Video />
        <Testimonials />
        <Blogs />
        </div> 
        <Footer />
    </div>
  )
}

export default Home