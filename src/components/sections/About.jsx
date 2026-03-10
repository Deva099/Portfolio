import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "../../data/aboutData";

const About = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">

      {/* Background Handled Globally - Local subtle glow for depth if needed (Original removed for consistency) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Removed conflicting background blobs to let global background show */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image with Glow */}
            <div className="relative group w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-linear-to-r from-teal-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src={PROFILE_DATA.image}
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{PROFILE_DATA.name}</h3>
                  <p className="text-teal-400 font-medium">{PROFILE_DATA.role}</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {PROFILE_DATA.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</p>
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
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
                  {PROFILE_DATA.aboutMe.heading}
                </span>
              </motion.h2>

              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                {PROFILE_DATA.ctaButtons.primary}
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
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
