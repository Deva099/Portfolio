/**
 * ProjectsPage.jsx
 * A dedicated page showcasing all portfolio projects in a high-quality vertical list.
 * Features:
 * - Optimized content visibility for performance.
 * - ProjectRow components with alternating layouts.
 * - Clean, minimal background synchronized with the rest of the site.
 */
const ProjectsPage = () => {
    // Ensure the page starts at the top when navigated to
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-24 relative overflow-hidden text-white">
            {/* Standardized Global Background Handled by Background component in App.jsx */}

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 mb-12 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                {/* Header */}
                <div className="mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
                    >
                        All Projects
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                        className="h-px bg-white/10 origin-left"
                    />
                </div>

                {/* Project List */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectRow key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Footer Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
                    className="h-px bg-white/10 mt-32 origin-left"
                />
            </div>
        </div>
    );
};

// Memoized Row to prevent re-renders
const ProjectRow = memo(({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className="flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-20 items-center"
            style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 600px' }}
        >
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`order-1 ${isEven ? 'md:order-1 md:col-span-7' : 'md:order-2 md:col-span-7'} w-full`}
            >
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-zinc-900 group"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </a>
            </motion.div>

            {/* Text Section */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className={`order-2 ${isEven ? 'md:order-2 md:col-span-5' : 'md:order-1 md:col-span-5'} flex flex-col justify-center`}
            >
                <div className={`flex items-center gap-4 mb-6 text-sm font-mono text-zinc-500 uppercase tracking-widest ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                    <span>0{index + 1}</span>
                    <div className="w-12 h-px bg-white/10" />
                    <span>{project.tags[0]}</span>
                </div>

                <h3 className={`text-3xl md:text-5xl font-bold text-white mb-6 leading-tight ${isEven ? 'text-left' : 'md:text-right'}`}>
                    {project.title}
                </h3>

                <p className={`text-zinc-400 text-lg leading-relaxed mb-8 ${isEven ? 'text-left' : 'md:text-right'}`}>
                    {project.description}
                </p>

                <div className={`flex flex-wrap gap-3 mb-10 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                    {project.tags.slice(1).map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs text-zinc-500 border border-white/10 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={`flex items-center gap-6 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors group/link"
                    >
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowUpRight size={16} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
});

export default ProjectsPage;
