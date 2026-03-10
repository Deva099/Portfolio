// import project1 from "../assets/images/project-1.jpg"; // TOO LARGE (11MB) - Causing lag
const project1 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"; // Optimized placeholder
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import project4 from "../assets/img/project-4.jpg";



export const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: project1,
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: project3,
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: project4,
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];
