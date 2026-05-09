// Clean dark tech preview images
const imgVoiceAssistance = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"; // Tech circuit / AI
const imgPortfolio = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"; // Clean dashboard/code
const imgEcommerce = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"; // Analytics dashboard
const imgTaskApp = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"; // Clean UI

export const projects = [
  {
    title: "AI Voice Assistant",
    description: "Local-first voice assistant that understands commands and performs desktop actions.",
    image: imgVoiceAssistance,
    tags: ["React", "Node.js", "Python", "Vosk"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern responsive portfolio with dark UI, animations, and clean branding.",
    image: imgPortfolio,
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for products, orders, users, and analytics.",
    image: imgEcommerce,
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task board with teams, status tracking, and real-time updates.",
    image: imgTaskApp,
    tags: ["React", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
  },
];
