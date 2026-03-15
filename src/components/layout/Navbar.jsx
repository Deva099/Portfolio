import { Button } from "../button/Button";
import { Code, Menu, X, MessageSquare } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { navLinks } from "../../data/navData";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Navbar.jsx
 * A dynamic, responsive navigation bar featuring:
 * - IntersectionObserver for active section highlighting.
 * - Scroll-based hide/show behavior.
 * - Smooth transition from transparent to blurred background on scroll.
 * - Animated brand logo with Framer Motion.
 */
export const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [show, setShow] = useState(true);

  // Track scroll position for hide/show logic and background changes
  const lastScrollY = useRef(0);
  const isAutoScrolling = useRef(false);

  const location = useLocation();

  // Scroll Listener: Handles background opacity and navbar hide/show visibility
  useEffect(() => {

    const handleScroll = () => {

      const currentY = window.scrollY;

      // Update background state when scrolled past a small threshold
      setIsScrolled(currentY > 20);

      // Disable hide/show logic during programmatic auto-scrolling
      if (isAutoScrolling.current) {
        lastScrollY.current = currentY;
        return;
      }

      // Avoid jitter by checking for a minimum scroll delta
      if (Math.abs(currentY - lastScrollY.current) < 10) return;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  // Active Section Observer: Highlights the current section in the navbar based on viewport visibility
  useEffect(() => {

    if (isAutoScrolling.current) return;

    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Offset to trigger highlight at a natural point
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting && !isAutoScrolling.current) {
          setActiveSection(`#${entry.target.id}`);
        }

      });

    }, options);


    // Observe all sections defined in navData
    navLinks.forEach(link => {

      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) observer.observe(element);

    });

    return () => observer.disconnect();

  }, [location.pathname]);


  useEffect(() => {

    if (location.hash) {
      setActiveSection(location.hash);
    }

    else if (location.pathname === "/") {
      setActiveSection("#home");
    }

  }, [location]);


  const handleNavClick = (href) => {

    setIsMobileMenuOpen(false);

    isAutoScrolling.current = true;

    setActiveSection(href);

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 1000);

  };


  return (
    <>

      {/* NAVBAR */}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${show ? "translate-y-0" : "-translate-y-full"}
            ${isScrolled
            ? "bg-black/60 backdrop-blur-[2px] py-1 shadow-lg"
            : "bg-transparent py-3"}`}
      >

        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={() => handleNavClick("#home")}
          >

            {/* Animated Code Icon */}

            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 20, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Code size={25} className="text-yellow-400" />
            </motion.div>

            <span className="bg-linear-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Deva
            </span>

          </Link>


          {/* Desktop Nav */}

          <div className="hidden md:flex items-center gap-3">

            <div className="flex items-center gap-1 rounded-md border border-white/10 bg-black/40 p-1 backdrop-blur-md relative">

              {navLinks.map((link, index) => {

                const isActive =
                  activeSection === link.href ||
                  activeSection === `#${link.href.replace("#", "")}`;

                return (

                  <HashLink
                    key={index}
                    smooth
                    to={`/${link.href}`}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-6 py-1.5 text-[15px] font-medium transition-colors z-10
                    ${isActive ? "text-black" : "text-white hover:text-gray-200"}`}
                  >

                    {isActive && (

                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-[#ebebeb] rounded-md -z-10 shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />

                    )}

                    {link.label}

                  </HashLink>

                )

              })}

            </div>


            <Link to="/contact">

              <button className="group flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#ea5b34] bg-transparent text-[#ea5b34] text-[15px] font-semibold hover:text-[#cbbfff] hover:border-[#ede9ffc8] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-blue-500/10">

                <span>Let's chat</span>

              </button>

            </Link>

          </div>


          {/* Mobile Menu */}

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </nav>


      {/* MOBILE MENU */}

      {isMobileMenuOpen && (

        <div className="fixed top-16 left-0 w-full z-40 bg-black/80 backdrop-blur-lg md:hidden border-t border-white/10">

          <div className="px-6 py-6 flex flex-col gap-2">

            {navLinks.map((link, index) => {

              const isActive =
                activeSection === link.href ||
                activeSection === `#${link.href.replace("#", "")}`;

              return (

                <HashLink
                  key={index}
                  smooth
                  to={`/${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors
                  ${isActive
                      ? "bg-[#ebebeb] text-black"
                      : "text-white hover:bg-white/10"}`}
                >

                  {link.label}

                </HashLink>

              );

            })}


            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>

              <button className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#ea5b34] bg-transparent text-[#ea5b34] text-[16px] font-bold hover:text-blue-500 hover:border-blue-500 transition-all duration-300">

                <MessageSquare size={20} />

                <span>Let's chat</span>

              </button>

            </Link>

          </div>

        </div>

      )}

    </>
  );
};