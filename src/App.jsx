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
