import React, { useEffect } from 'react'
import Contact from '../components/sections/Contact'
import { motion } from 'framer-motion'

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-20 min-h-screen flex flex-col"
        >
            <div className="flex-grow">
                <Contact />
            </div>
        </motion.div>
    )
}

export default ContactPage
