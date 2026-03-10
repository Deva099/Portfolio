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
  SiPython
} from "react-icons/si";

export const skillsHeader = {
  title: "Technical ",
  accentTitle: "Skills",
  description: "High-performance tools for building scalable digital solutions."
};

export const skillsData = [
  {
    title: "Frontend Engineering",
    description: "Building immersive, responsive user interfaces.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ]
  },
  {
    title: "Backend & Systems",
    description: "Scalable server-side architecture and databases.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Python", icon: SiPython },
      { name: "Docker", icon: SiDocker },
    ]
  },
  {
    title: "Design & Tools",
    description: "Workflow optimization and visual craftsmanship.",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Git", icon: SiGit },
      { name: "JavaScript", icon: SiJavascript },
    ]
  }
];
