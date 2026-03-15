import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { skillsData, skillsHeader } from "../../data/skillsData";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function Skills() {
    const icons = [
        { Icon: FaReact, color: "text-teal-400", size: "text-6xl", pos: "top-10 left-10", duration: 12, range: [-15, 15], delay: 0 },
        { Icon: FaNodeJs, color: "text-green-400", size: "text-5xl", pos: "top-40 right-20", duration: 15, range: [-25, 25], delay: 2 },
        { Icon: FaJs, color: "text-yellow-400", size: "text-4xl", pos: "bottom-20 left-1/4", duration: 18, range: [-20, 20], delay: 4 },
        { Icon: FaHtml5, color: "text-orange-400", size: "text-5xl", pos: "bottom-40 right-1/4", duration: 14, range: [-30, 30], delay: 1 },
        { Icon: FaCss3Alt, color: "text-blue-400", size: "text-6xl", pos: "top-1/2 right-10", duration: 16, range: [-10, 10], delay: 3 }
    ];

    return (
        <section id="skills" className="min-h-screen text-white py-32 relative overflow-hidden flex flex-col justify-center">
            {/* Background Handled Globally by Background.jsx */}

            {/* Floating Tech Icons Layer */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
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
                {/* Minimal Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        {skillsHeader.title}
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
                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => {
                        const themes = [
                            { accent: "teal", color: "#2dd4bf", bg: "bg-teal-500/5", border: "border-teal-500/10", hoverBorder: "group-hover:border-teal-500/50", glow: "shadow-teal-500/20" },
                            { accent: "indigo", color: "#6366f1", bg: "bg-indigo-500/5", border: "border-indigo-500/10", hoverBorder: "group-hover:border-indigo-500/50", glow: "shadow-indigo-500/20" },
                            { accent: "orange", color: "#f97316", bg: "bg-orange-500/5", border: "border-orange-500/10", hoverBorder: "group-hover:border-orange-500/50", glow: "shadow-orange-500/20" }
                        ];
                        return <SpotlightCard key={index} category={category} index={index} theme={themes[index % themes.length]} />;
                    })}
                </div>
            </div>
        </section>
    );
}

// Robust Spotlight Card
const SpotlightCard = ({ category, index, theme }) => {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className={`group relative h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 border-2 bg-zinc-900/40 ${theme.border} ${theme.hoverBorder} hover:bg-zinc-900/60 hover:shadow-2xl ${theme.glow} hover:scale-[1.02]`}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Gradient - Refined to match theme */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-1"
                style={{
                    background: useMotionTemplate`radial-gradient(
                        400px circle at ${mouseX}px ${mouseY}px,
                        ${theme.color}20,
                        transparent 80%
                    )`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Category Title */}
                <div className="mb-8 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">{category.description}</p>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3 content-start">
                    {category.skills.map((skill, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/pill"
                        >
                            <skill.icon 
                                className={`text-xl transition-colors group-hover/pill:scale-110`}
                                style={{ color: theme.color }}
                            />
                            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};