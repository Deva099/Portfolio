import React, { useEffect } from 'react'
import Contact from '../components/sections/Contact'

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen">
            <Contact />
        </div>
    )
}

export default ContactPage
