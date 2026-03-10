import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline, timelineHeader } from "../../data/timeline";

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="min-h-screen relative py-20 overflow-hidden" ref={containerRef}>

      <div className="container mx-auto px-6 max-w-5xl">

        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {timelineHeader.title}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-white/10 rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Continuous Line (Base) */}
          <div className="absolute left-2.25~ md:left-1/2 top-2 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          {/* Continuous Line (Fill) */}
          <motion.div
            style={{ height }}
            className="absolute left-2.25 md:left-1/2 top-2 w-px bg-linear-to-b from-teal-500 via-purple-500 to-transparent md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-start`}
              >
                {/* Period (Left or Right based on index) */}
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8 md:text-left"} pl-10 md:pl-0`}>
                  <span className="inline-block text-3xl md:text-4xl font-bold text-white/5 select-none absolute -top-4 md:top-0 left-10 md:relative md:left-0 z-0">
                    {item.period.split(" - ")[0]}
                  </span>
                  <div className="relative z-10 pt-2">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-medium text-teal-400 tracking-wider uppercase bg-teal-500/5 px-3 py-1 rounded-full border border-teal-500/10 inline-block mb-1"
                    >
                      {item.period}
                    </motion.span>
                  </div>
                </div>

                {/* Center Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
                  className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full border-4 border-[#020202] bg-zinc-500 z-10 md:-translate-x-1/2 mt-1.5"
                >
                  {/* Active State Dot: Only show if it's the latest item or added dynamically */}
                  {index === 0 && (
                    <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-75" />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? "md:col-start-2 md:pl-8" : "md:row-start-1 md:text-right md:pr-8"} pl-10 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(24, 24, 27, 0.6)" }}
                    transition={{ duration: 0.2 }}
                    className="group relative p-6 md:p-8 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-white/10 transition-colors duration-300"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-teal-200 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-lg text-zinc-400 mb-4 font-medium">{item.company}</p>

                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Minimal Tech Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : "justify-start"}`}>
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="text-[11px] font-medium text-zinc-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
