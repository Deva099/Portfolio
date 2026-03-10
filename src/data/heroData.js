import profileImg from '../assets/img/profile.png';

export const HERO_CONTENT = {
    badge: "Open to Opportunities",
    titleLine1: "Hi, I'm",
    titleLine2: "Deva Pradhan",
    role: "B.Tech Student | Fresher Full Stack Developer",
    tagline: "Passionate about building scalable web applications. Skilled in React, Node.js, JavaScript, APIs, and crafting seamless user experiences.",
    technologies: [
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "JavaScript", icon: "⚡", color: "text-yellow-400" },
        { name: "MongoDB", icon: "🍃", color: "text-emerald-500" },
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
