import { Button } from "../button/Button";
import { Code, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { navLinks } from "../../data/navData";
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const isAutoScrolling = useRef(false);
  const location = useLocation();

  // Scroll Handler for Navbar Hide/Show ONLY (No layout thrashing)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide/Show Navbar Logic
      if (isAutoScrolling.current) {
        lastScrollY.current = currentY;
        return;
      }

      if (Math.abs(currentY - lastScrollY.current) < 10) return;

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

  // IntersectionObserver for Active Section Tracking (Performant)
  useEffect(() => {
    // If auto-scrolling (clicking link), don't let observer interfere immediately
    if (isAutoScrolling.current) return;

    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Active when element is in top part of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAutoScrolling.current) {
          // Ensure we only update if not currently auto-scrolling
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, options);

    // Observe all sections
    navLinks.forEach(link => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]); // Re-run if path changes


  // Handle Initial Hash on Load/Route Change
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    if (location.hash) {
      setActiveSection(location.hash);
    } else if (location.pathname === '/') {
      // Default to home if no hash
      setActiveSection("#home");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [location]);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    isAutoScrolling.current = true;
    setActiveSection(href); // Immediate UI update

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 1000);
  };


  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out
        ${show
            ? "translate-y-0"
            : "-translate-y-full"}
          bg-white/0 backdrop-blur-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] `}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold" onClick={() => handleNavClick("#home")}>
            <Code size={25} className="text-yellow-400" />
            <span className="bg-linear-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Deva
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md relative">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href;
                return (
                  <HashLink
                    key={index}
                    smooth
                    to={`/${link.href}`}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-5 py-2 text-sm rounded-full transition-colors z-10 ${isActive ? "text-black font-medium" : "text-white hover:text-white/80"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute inset-0 bg-white rounded-full -z-10"
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
              <Button size="sm" className="px-5 py-2.5 rounded-full border border-white/20 bg-black/40 text-white font-medium transition-all duration-300 hover:bg-white hover:text-black hover:border-white">
                Let's chat
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-black/60 backdrop-blur-lg md:hidden">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <HashLink
                key={index}
                smooth
                to={`/${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-lg"
              >
                {link.label}
              </HashLink>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button>
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
