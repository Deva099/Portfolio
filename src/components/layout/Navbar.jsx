import { Code, Menu, X, MessageSquare } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { navLinks } from "../../data/navData";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [show, setShow] = useState(true);

  const lastScrollY = useRef(0);
  const isAutoScrolling = useRef(false);
  const location = useLocation();

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      if (isAutoScrolling.current) {
        lastScrollY.current = currentY;
        return;
      }

      if (Math.abs(currentY - lastScrollY.current) < 10) return;

      setShow(currentY <= lastScrollY.current || currentY <= 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    if (isAutoScrolling.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAutoScrolling.current) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Handle location change
  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        setActiveSection(location.hash);
      } else {
        setActiveSection("#home");
      }
    } else {
      // We are on a standalone page like /contact
      setActiveSection("");
    }
  }, [location]);

  // Nav click
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href) {
      isAutoScrolling.current = true;
      setActiveSection(href);
      setTimeout(() => (isAutoScrolling.current = false), 1000);
    } else {
      setActiveSection("");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${show ? "translate-y-0" : "-translate-y-full"}
          ${isScrolled ? "bg-black/60 backdrop-blur-[2px] py-1 shadow-lg" : "bg-transparent py-3"}`}
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
            <div className="flex items-center gap-1 rounded-md border border-white/10 bg-black/40 p-1 backdrop-blur-md relative">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href;

                return (
                  <HashLink
                    key={idx}
                    smooth
                    to={`/${link.href}`}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-6 py-1.5 text-[15px] font-medium transition-colors z-10
                      ${isActive ? "text-black" : "text-white hover:text-gray-200"}`}
                  >
                    {/* White box highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="activeHighlight"
                        className="absolute inset-0 bg-[#ebebeb] rounded-md -z-10 shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.label}
                  </HashLink>
                );
              })}
            </div>

            {/* Let's Chat button - independent */}
            <Link to="/contact" onClick={() => handleNavClick("")}>
              <button className={`group flex items-center gap-2 px-5 py-2.5 rounded-md border transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-blue-500/10
                ${location.pathname === '/contact' 
                  ? 'bg-[#ebebeb] text-black border-white' 
                  : 'bg-transparent text-[#ea5b34] border-[#ea5b34] hover:text-[#cbbfff] hover:border-[#ede9ffc8]'}`}>
                <span>Let's chat</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full z-40 bg-black/80 backdrop-blur-lg md:hidden border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href;

              return (
                <HashLink
                  key={idx}
                  smooth
                  to={`/${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors
                    ${isActive ? "bg-[#ebebeb] text-black" : "text-white hover:bg-white/10"}`}
                >
                  {link.label}
                </HashLink>
              );
            })}

            {/* Let's Chat button in mobile menu */}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className={`w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-bold transition-all duration-300
                ${location.pathname === '/contact'
                  ? 'bg-[#ebebeb] text-black border-white'
                  : 'bg-transparent text-[#ea5b34] border-[#ea5b34] hover:text-blue-500 hover:border-blue-500'}`}>
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
