import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_CONTENT } from "../../data/heroData";

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

  const badges = HERO_CONTENT.technologies || [];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center bg-transparent overflow-hidden pt-24 pb-16 selection:bg-indigo-500/30"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Left Column: Glassmorphism Content Area */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Glass Card */}
          <div className="relative pt-8 md:pt-10 lg:pt-12">

            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Recruiter Friendly Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              </span>
              <span className="text-indigo-300 text-sm font-medium tracking-wide">
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            {/* Professional Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              <span className="block text-gray-300 font-light text-2xl sm:text-3xl mb-2">{HERO_CONTENT.titleLine1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-sm">
                {HERO_CONTENT.titleLine2}
              </span>
            </motion.h1>

            {/* Title / Role */}
            <motion.h2 variants={itemVariants} className="flex items-center gap-2 text-lg sm:text-xl text-indigo-200/90 font-medium mb-6">
              <Sparkles className="text-purple-400" size={20} />
              {HERO_CONTENT.role}
            </motion.h2>

            {/* Impactful Tagline */}
            <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10 font-normal">
              {HERO_CONTENT.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto relative group flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] hover:-translate-y-0.5"
              >
                <span>{HERO_CONTENT.primaryButton.label}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <Mail size={18} />
                <span>{HERO_CONTENT.secondaryButton.label}</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image Presentation */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-center relative min-h-[400px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center group">

            {/* Soft Gradient Glow Behind Image */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[60px] opacity-60 z-0 transition-opacity duration-500 group-hover:opacity-80"
            />

            {/* Profile Image with subtle floating animation and 3D hover */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[80%] h-[80%] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent p-[1px] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-[#0c1222] relative group-hover:shadow-inner transition-shadow duration-500">
                <img
                  src={HERO_CONTENT.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Minimal Tech Badges Floating next to image */}
              {badges.slice(0, 3).map((badge, idx) => {
                const positions = [
                  { top: '15%', left: '-10%' },
                  { top: '45%', right: '-12%' },
                  { bottom: '15%', left: '-5%' }
                ];
                return (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (idx * 0.2) }}
                    className="absolute z-20"
                    style={positions[idx]}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-110"
                      title={badge.name}
                    >
                      <span className="text-2xl">{badge.icon}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
