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
        <h1 className="text-[15vw] md:text-[20vw] font-black text-white/3 text-center leading-none tracking-tighter">
          {footerData.brand.logo}
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">

          {/* Left: CTA */}
          <div className="space-y-8 max-w-lg">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
              {footerData.cta.title.replace(footerData.cta.highlightWord, '')} <br /> {footerData.cta.title.includes('together.') ? "Let's work" : ''} <span className="text-zinc-500">{footerData.cta.highlightWord}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors"
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
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Minimal Nav */}
          <div className="flex flex-col items-start md:items-end gap-2">
            {footerData.navigation.map((item, i) => (
              <HashLink
                key={i}
                smooth
                to={item.href}
                className="text-2xl md:text-3xl font-bold text-zinc-600 hover:text-white transition-colors tracking-tight"
              >
                {item.label}
              </HashLink>
            ))}
          </div>

        </div>

        {/* Minimal Bottom Info */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono uppercase tracking-wider">
          <p>© {currentYear} {PERSONAL_INFO.fullName}.</p>
          <p>Local Time: {formattedTime}</p>
          <div className="flex gap-6">
            {footerData.legal.map((item, i) => (
              <Link key={i} to={item.href} className="hover:text-zinc-400 transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
