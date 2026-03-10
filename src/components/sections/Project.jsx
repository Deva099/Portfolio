import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const Project = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* Simple, Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 relative">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Latest Work
            </h2>
            <p className="text-lg text-zinc-400">
              A collection of my most recent frontend & fullstack projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="group flex items-center justify-between gap-4 py-3 px-6 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shrink-0"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Minimal Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-900 border border-white/10 mb-6">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                        {tag}{i < Math.min(project.tags.length - 1, 2) ? ' •' : ''}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 line-clamp-2 pr-8">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;
