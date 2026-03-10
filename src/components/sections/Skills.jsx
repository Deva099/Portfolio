import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { skillsData, skillsHeader } from "../../data/skillsData";

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen text-white py-32 relative overflow-hidden flex flex-col justify-center">

            {/* Background Details - Subtle & Clean - Updated to transparent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />


            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* Minimal Header */}
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        {skillsHeader.title.replace(skillsHeader.accentTitle, '')} <span className="text-zinc-500">{skillsHeader.accentTitle}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg leading-relaxed"
                    >
                        {skillsHeader.description}
                    </motion.p>
                </div>

                {/* Spotlight Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skillsData.map((category, index) => (
                        <SpotlightCard key={index} category={category} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

// Robust Spotlight Card
const SpotlightCard = ({ category, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cardRef = React.useRef(null);
    const [rect, setRect] = React.useState(null);

    // Cache rect on mouse enter to avoid reflows during move
    const handleMouseEnter = () => {
        if (cardRef.current) {
            setRect(cardRef.current.getBoundingClientRect());
        }
    };

    function handleMouseMove({ clientX, clientY }) {
        if (!rect) return;
        mouseX.set(clientX - rect.left);
        mouseY.set(clientY - rect.top);
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative h-full bg-zinc-900/40 border border-white/10 rounded-2xl p-8 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient - Fixed Syntax */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(45, 212, 191, 0.15),
                        transparent 80%
                    )`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Category Title */}
                <div className="mb-8 pb-4 border-b border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-zinc-500">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3 content-start">
                    {category.skills.map((skill, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/pill"
                        >
                            <skill.icon className="text-lg text-zinc-500 group-hover/pill:text-teal-400 transition-colors" />
                            <span className="text-sm font-medium text-zinc-300 group-hover/pill:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
