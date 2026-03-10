import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
                    Terms & Conditions
                </h1>

                <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Ownership</h2>
                        <p>
                            All content on this website, including but not limited to the source code, designs, images, and text, is the property of Deva Pradhan unless otherwise stated. Unauthorized use or reproduction is prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Use of Website</h2>
                        <p>
                            This website is for informational purposes and to showcase my professional work. You are permitted to view the content for personal, non-commercial use.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Disclaimers</h2>
                        <p>
                            While I strive to provide accurate information, I make no warranties regarding the completeness or accuracy of any content on this site. Your use of any information on this website is entirely at your own risk.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                        <p>
                            These terms are governed by the laws applicable in India.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Terms;
