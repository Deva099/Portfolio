import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiFigma,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiPython,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiVscodium,
  SiPostman,
  SiCanva
} from "react-icons/si";


export const skillsHeader = {
  title: "Skills & ",
  accentTitle: "Technologies",
  description: "A comprehensive toolkit for building modern, scalable, and high-performance web applications."
};

export const skillsData = [
  {
    title: "Frontend Engineering",
    description: "Building clean, responsive, and interactive user interfaces.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Three.js", icon: SiThreedotjs },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Creating scalable APIs, server-side logic, and database-driven applications.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Python", icon: SiPython },
      { name: "Docker", icon: SiDocker },
    ]
  },
  {
    title: "Design & Tools",
    description: "Designing workflows, improving productivity, and crafting polished user experiences.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: SiVscodium },
      { name: "Postman", icon: SiPostman },
      { name: "Canva", icon: SiCanva },
    ]
  }
];
