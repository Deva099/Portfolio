import React from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Timeline from '../components/sections/Timeline'
import Skills from '../components/sections/Skills'
import Project from '../components/sections/Project'
import Contact from '../components/sections/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Timeline />
            <Skills />
            <Project />
            <Contact />
        </>
    )
}

export default Home
