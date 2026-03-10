import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-400">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                        <p>
                            Your privacy is important to me. This Privacy Policy explains how I handle the information you provide through this portfolio website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Information Collection</h2>
                        <p>
                            When you use the contact form on this website, I collect your name and email address. This information is purely used to respond to your inquiries. I do not use this data for marketing purposes or share it with third parties.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
                        <p>
                            This website is designed to be minimal and does not use tracking cookies for mass surveillance or behavioral advertising.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                        <p>
                            If you have any questions about this policy, feel free to reach out via the contact form.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PrivacyPolicy;
