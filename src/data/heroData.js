import profileImg from '../assets/img/profile.png';

export const HERO_CONTENT = {
    badge: "Open to Opportunities",
    titleLine1: "Hi, I'm",
    titleLine2: "Dibakar Pradhan",
    role: "B.Tech Student | Full Stack Developer | React & Node.js",
    tagline: "I build clean, responsive, and scalable web applications using React, Node.js, JavaScript, APIs, and modern frontend tools.",
    technologies: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
        { name: "APIs", icon: "🔗", color: "text-cyan-400" }
    ],
    avatar: profileImg,
    primaryButton: {
        label: "View Projects",
    },
    secondaryButton: {
        label: "Contact Me",
    }
};
