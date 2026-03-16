import React from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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

/**
 * AnimatedRoutes Component
 * Handles the logic for route transitions using AnimatePresence.
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

/**
 * App.jsx
 * The main entry point of the application. 
 * Handles global routing, layout composition, and global providers.
 */
const App = () => {
  return (
    <Router>
      {/* Ensures the page scrolls to the top on every route change */}
      <ScrollToTop />
      
      {/* Provides smooth scrolling behavior across the application */}
      <SmoothScroll>
        <div className='min-h-screen overflow-x-hidden text-white'>
          {/* Global Background Layer */}
          <Background />
          
          {/* Navigation Bar - Fixed at the top */}
          <Navbar />

          <AnimatedRoutes />

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
