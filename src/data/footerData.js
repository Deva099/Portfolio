import {
    Linkedin,
    Instagram,
    Twitter,
} from "lucide-react";

export const footerData = {
    brand: {
        logo: "DEVA.",
        video: "https://pixabay.com/videos/download/video-293085_medium.mp4",
    },

    navigation: [
        { label: "Home", href: "/#home" },
        { label: "About", href: "/#about" },
        { label: "Experience", href: "/#timeline" },
        { label: "Skills", href: "/#skills" },
        { label: "Projects", href: "/#projects" },
    ],

    socials: [
        {
            icon: Linkedin,
            href: "https://linkedin.com",
        },
        {
            icon: Instagram,
            href: "https://instagram.com",
        },
        {
            icon: Twitter,
            href: "https://twitter.com",
        },
    ],
    legal: [
        { label: "Legal", href: "/terms" },
        { label: "Privacy", href: "/privacy" }
    ],
    cta: {
        title: "Have a project? Let's work together.",
        highlightWord: "together.",
        buttonLabel: "Get in Touch"
    },
};


export default footerData;
