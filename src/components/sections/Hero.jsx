import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Github, Linkedin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_CONTENT } from "../../data/heroData";
import { SOCIAL_LINKS, PERSONAL_INFO } from "../../data/personalData";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-transparent overflow-hidden pt-28 pb-16 selection:bg-indigo-500/30"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* Left Column: Content Area */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span className="text-indigo-300 text-[10px] font-bold tracking-[0.2em] uppercase">
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            {/* Professional Headline */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              <span className="block text-zinc-500 font-light text-2xl sm:text-3xl mb-3 tracking-normal">{HERO_CONTENT.titleLine1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-2xl">
                {HERO_CONTENT.titleLine2}
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2 variants={itemVariants} className="flex items-center gap-3 text-lg sm:text-xl text-indigo-100/80 font-medium mb-8">
              <Sparkles className="text-amber-400" size={18} />
              <span className="tracking-wide">{HERO_CONTENT.role}</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-zinc-300/90 text-lg leading-[1.8] max-w-xl mb-12 font-normal tracking-wide">
              {HERO_CONTENT.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 tracking-tight">{HERO_CONTENT.primaryButton.label}</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-zinc-900/50 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl hover:scale-105 active:scale-95"
              >
                <Mail size={20} className="text-indigo-400" />
                <span className="tracking-tight">{HERO_CONTENT.secondaryButton.label}</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-zinc-500">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white transition-all duration-300 hover:-translate-y-1" title="GitHub">
                  <Github size={22} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1" title="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1" title="Resume">
                  <FileText size={22} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-400 transition-all duration-300 hover:-translate-y-1" title="Email">
                  <Mail size={22} />
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-5">
                <div className="h-[1px] w-8 bg-zinc-800" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600 select-none">Connect</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Visual Section */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[550px] perspective-2000">
            {/* Major Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Code Card */}
            <motion.div
              whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
              className="relative z-10 p-8 rounded-2xl bg-[#0d0d0f] border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-50" />
              
              <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/20" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
                <div className="ml-4 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">profile.js</div>
              </div>

              <pre className="font-mono text-[15px] leading-relaxed overflow-x-auto custom-scrollbar selection:bg-indigo-500/30">
                <code className="text-purple-500 font-bold">const</code> <code className="text-blue-500 font-bold">developer</code> <span className="text-zinc-300">=</span> <span className="text-zinc-300">{"{"}</span> <br />
                {"  "} <code className="text-zinc-400">name:</code> <code className="text-emerald-400">"Dibakar Pradhan"</code>,<br />
                {"  "} <code className="text-zinc-400">role:</code> <code className="text-emerald-400">"Full Stack Developer"</code>,<br />
                {"  "} <code className="text-zinc-400">skills:</code> [<code className="text-amber-400">"React"</code>, <code className="text-amber-400">"Node.js"</code>, <code className="text-amber-400">"API"</code>],<br />
                {"  "} <code className="text-zinc-400">passion:</code> <code className="text-emerald-400">"Scalable Apps"</code><br />
                <span className="text-zinc-300">{"}"}</span><span className="text-zinc-300">;</span>
              </pre>

              {HERO_CONTENT.technologies.map((tech, idx) => {
                const positions = [
                  { top: '-5px', right: '15%' },
                  { bottom: '30%', right: '-15px' },
                  { bottom: '-10px', left: '20%' },
                  { top: '35%', left: '-15px' }
                ];
                return (
                  <motion.div
                    key={tech.name}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 1.2 }}
                    className="absolute hidden sm:flex items-center justify-center p-3 rounded-xl bg-zinc-900 border border-white/10 shadow-xl z-20"
                    style={positions[idx]}
                  >
                    <span className="text-xl opacity-80" title={tech.name}>{tech.icon}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Premium Profile Glass Card */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-10 -right-4 lg:-right-10 z-30 group"
            >
              <div className="relative p-2 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-[1.8rem] overflow-hidden border-2 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  <img 
                    src={HERO_CONTENT.avatar} 
                    alt="Profile" 
                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                  />
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Decorative Glow under the card */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-[40px] -z-10 group-hover:bg-indigo-500/40 transition-colors duration-700" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
