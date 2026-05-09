import React, { useState, useEffect } from "react";
import { footerData } from "../../data/footerData";
import { PERSONAL_INFO } from "../../data/personalData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });


  return (
    <footer className="relative bg-transparent text-white pt-32 pb-10 overflow-hidden border-t border-white/5">

      {/* MASSIVE BACKGROUND TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
        <h1 className="text-[15vw] md:text-[18vw] font-black text-white/[0.02] text-center leading-none tracking-tighter">
          {footerData.brand.logo}
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

          {/* Left: CTA */}
          <div className="space-y-8 max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Have a project? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                Let's work together.
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1"
              >
                {footerData.cta.buttonLabel}
              </Link>
              <div className="flex items-center gap-4">
                {footerData.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Minimal Nav */}
          <div className="flex flex-col items-start md:items-end gap-4">
            {footerData.navigation.map((item, i) => (
              <HashLink
                key={i}
                smooth
                to={item.href}
                className="text-xl md:text-2xl font-semibold text-zinc-500 hover:text-purple-400 hover:tracking-wider transition-all duration-300"
              >
                {item.label}
              </HashLink>
            ))}
          </div>

        </div>

        {/* Minimal Bottom Info */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400 font-mono tracking-wide">
          <p className="opacity-80">© {currentYear} {PERSONAL_INFO.fullName}.</p>
          <p className="opacity-80">Local Time: {formattedTime}</p>
          <div className="flex gap-8">
            {footerData.legal.map((item, i) => (
              <Link key={i} to={item.href} className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
