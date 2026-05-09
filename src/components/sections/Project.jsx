import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const Project = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-32 relative text-white overflow-hidden selection:bg-purple-500/30">
      <div className="container mx-auto px-6 relative z-10 max-w-[950px]">

        {/* Premium Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-zinc-400"
            >
              Selected projects that showcase my full-stack development skills.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="group flex items-center gap-3 py-2.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 hover:border-purple-400 hover:bg-white/5 transition-all duration-300 shrink-0 shadow-lg shadow-indigo-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:-translate-y-0.5"
            >
              <span className="font-bold text-xs tracking-widest uppercase text-white">Explore All</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-purple-400" />
            </Link>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-[rgba(255,255,255,0.035)] border border-[rgba(139,92,246,0.18)] backdrop-blur-md rounded-[18px] p-3 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)] hover:-translate-y-1"
            >
              {/* Top: Image Section */}
              <div 
                className="relative w-full h-[125px] overflow-hidden rounded-[14px] bg-zinc-900 border border-white/5 mb-4"
              >
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Middle: Content Section */}
              <div className="flex-grow flex flex-col px-1">
                <h3 className="text-[18px] font-bold mb-2 group-hover:text-purple-400 transition-colors tracking-tight text-white">
                  {project.title}
                </h3>
                
                <p className="text-[13px] text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] md:text-[11px] font-bold tracking-wide text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Action Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-3 px-1">
                 <button 
                   onClick={() => window.open(project.link, '_blank')}
                   className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-[12px] font-semibold transition-all duration-300"
                 >
                   <ExternalLink size={14} />
                   <span>Live Demo</span>
                 </button>
                 
                 <button 
                   onClick={() => window.open(project.github, '_blank')}
                   className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-[12px] font-semibold transition-all duration-300"
                 >
                   <Github size={14} />
                   <span>GitHub</span>
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
