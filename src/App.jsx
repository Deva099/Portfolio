import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Background from './components/layout/Background'
import SmoothScroll from './components/layout/SmoothScroll'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className='min-h-screen overflow-x-hidden text-white'>
          <Background />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>


          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
