import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "../../data/aboutData";

const About = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center py-24 overflow-hidden selection:bg-indigo-500/30">

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Profile Image with Premium Styling */}
            <div className="relative group w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src={PROFILE_DATA.image}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60" />

                {/* Name Overlay - Professional Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-xl">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{PROFILE_DATA.name}</h3>
                  <p className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em] mt-1.5">{PROFILE_DATA.role}</p>
                </div>
              </div>
            </div>

            {/* Stats Grid - Enhanced with Glassmorphism & Purple Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PROFILE_DATA.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="group/stat p-6 rounded-2xl bg-white/5 border border-purple-500/10 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/40 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
                >
                  <h4 className="text-2xl font-bold text-white mb-1 group-hover/stat:text-purple-400 transition-colors">{stat.value}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Bio & Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-10 tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  {PROFILE_DATA.aboutMe.heading}
                </span>
              </motion.h2>

              <div className="space-y-8 text-zinc-300 text-lg leading-[1.8] tracking-wide font-normal">
                {PROFILE_DATA.aboutMe.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Premium Styled */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] active:scale-95 shadow-lg">
                {PROFILE_DATA.ctaButtons.primary}
              </button>
              <button className="px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 active:scale-95">
                {PROFILE_DATA.ctaButtons.secondary}
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
