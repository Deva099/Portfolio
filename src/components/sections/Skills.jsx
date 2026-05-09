import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { skillsData, skillsHeader } from "../../data/skillsData";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Skills() {
    const icons = [
        { Icon: FaReact, color: "text-blue-400", size: "text-6xl", pos: "top-10 left-10", duration: 12, range: [-15, 15], delay: 0 },
        { Icon: FaNodeJs, color: "text-green-400", size: "text-5xl", pos: "top-40 right-20", duration: 15, range: [-25, 25], delay: 2 },
        { Icon: FaJs, color: "text-yellow-400", size: "text-4xl", pos: "bottom-20 left-1/4", duration: 18, range: [-20, 20], delay: 4 },
        { Icon: FaHtml5, color: "text-orange-400", size: "text-5xl", pos: "bottom-40 right-1/4", duration: 14, range: [-30, 30], delay: 1 },
        { Icon: FaCss3Alt, color: "text-blue-500", size: "text-6xl", pos: "top-1/2 right-10", duration: 16, range: [-10, 10], delay: 3 }
    ];

    return (
        <section id="skills" className="min-h-screen text-white py-32 relative overflow-hidden flex flex-col justify-center selection:bg-indigo-500/30">
            {/* Floating Tech Icons Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
                {icons.map((item, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            y: [0, item.range[0], item.range[1], 0],
                            x: [0, 10, -10, 0],
                            rotate: [0, 8, -8, 0]
                        }}
                        transition={{ 
                            duration: item.duration, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: item.delay 
                        }}
                        className={`absolute ${item.pos} ${item.color} ${item.size} blur-[0.5px]`}
                    >
                        <item.Icon />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section Header */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
                    >
                        <span className="text-white">{skillsHeader.title}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                            {skillsHeader.accentTitle}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        {skillsHeader.description}
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {skillsData.map((category, index) => {
                        const themes = [
                            { accent: "blue", color: "#60a5fa", border: "border-blue-500/10", hoverBorder: "group-hover:border-blue-500/30", glow: "shadow-blue-500/10" },
                            { accent: "indigo", color: "#818cf8", border: "border-indigo-500/10", hoverBorder: "group-hover:border-indigo-500/30", glow: "shadow-indigo-500/10" },
                            { accent: "purple", color: "#a78bfa", border: "border-purple-500/10", hoverBorder: "group-hover:border-purple-500/30", glow: "shadow-purple-500/10" }
                        ];
                        return <SpotlightCard key={index} category={category} index={index} theme={themes[index % themes.length]} />;
                    })}
                </div>
            </div>
        </section>
    );
}

const SpotlightCard = ({ category, index, theme }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cardRef = React.useRef(null);
    const [rect, setRect] = React.useState(null);

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`group relative flex flex-col rounded-[2rem] p-8 overflow-hidden transition-all duration-500 border bg-zinc-900/40 backdrop-blur-sm ${theme.border} ${theme.hoverBorder} hover:shadow-2xl ${theme.glow} h-full`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`radial-gradient(
                        400px circle at ${mouseX}px ${mouseY}px,
                        ${theme.color}15,
                        transparent 80%
                    )`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Category Header */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{category.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-medium">{category.description}</p>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-3 mt-auto">
                    {category.skills.map((skill, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-zinc-800/30 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group/pill shadow-sm"
                        >
                            <skill.icon 
                                className="text-lg transition-all duration-300 group-hover/pill:scale-110"
                                style={{ color: theme.color }}
                            />
                            <span className="text-xs font-bold text-zinc-400 group-hover/pill:text-white uppercase tracking-widest transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};