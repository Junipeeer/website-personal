import { JSX } from "react";
import {
  FaReact,
  FaVuejs,
  FaJava,
  FaPython,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFlask,
} from "react-icons/si";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    emoji: "🏠",
    href: "/",
  },
  {
    id: 1,
    name: "About",
    emoji: "🌐",
    href: "/about",
  },
  {
    id: 2,
    name: "Portfolio",
    emoji: "🎨",
    href: "/portfolio",
  },
  {
    id: 3,
    name: "Lab",
    emoji: "🧪",
    href: "/lab",
  },
];

export const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  "Three.js": <SiThreedotjs />,
  "Vue.js": <FaVuejs />,
  Java: <FaJava />,
  Python: <FaPython />,
  Flask: <SiFlask />,
  Github: <FaGithub />,
  externalLink: <FaExternalLinkAlt />,
};

export interface Project {
  id: string;
  title: string;
  description: JSX.Element;
  timeframe: string;
  technologies: string[];
  image: string;
  border: string;
  route: string;
  githubLink?: string;
  liveLink?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: "pro-pers-web",
    title: "Personal Website",
    route: "personal-website",
    description: (
      <>
        A responsive portfolio website built to showcase my projects and skills.
        Features dark mode design, 3d elements, responsive layouts, and smooth
        animations.
      </>
    ),
    timeframe: "March 2025 - April 2025",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    image: "/img/website-thumbnail.png",
    githubLink: "https://github.com/Junipeeer/website-personal",
    liveLink: "",
    border: "#ef4444",
  },
  {
    id: "pro-spf",
    title: "SPF - Simple Protogen Face",
    route: "simple-protogen-face",
    description: (
      <>
        A python-based program to run a simple protogen face on Raspberry Pi
        using Hub75 Matrices and auxillary hardware support for buttons,
        additional LEDs and proximity sensors.
      </>
    ),
    timeframe: "August 2024 - January 2025",
    technologies: ["Python", "Raspberry Pi"],
    image: "/img/spf-thumbnail.jpg",
    githubLink: "https://github.com/Junipeeer/Simple-Protogen-Face",
    liveLink: "",
    border: "#3bc260",
  },
  {
    id: "pro-facilitator-bot",
    title: "Språkcafé Facilitator Bot",
    route: "facilitator-bot",
    description: (
      <>
        A simple app to have verbal conversations with OpenAi's GPT models,
        using Elevenlabs and MS Azure speech to text. For use in the context of
        Swedish language cafés as part of my Master Thesis in Media
        Technologies, modified from{" "}
        <a
          className=" hover:text-white transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/DougDougGithub/Babagaboosh"
        >
          Babagaboosh
        </a>{" "}
        by DougDoug.
      </>
    ),
    timeframe: "March 2024 - April 2024",
    technologies: ["Python", "Flask"],
    image: "/img/scfacilitatorbot-thumbnail.png",
    githubLink: "https://github.com/JSchalon/SCFacilitatorBot",
    liveLink: "",
    border: "#3baff3",
  },
  {
    id: "pro-interaction-editor",
    title: "Interaction Editor",
    route: "interaction-editor",
    description: (
      <>
        A Vue.js and Interact.js based editor for creating laban notation scores
        for the recording of interactions. Created in the context of my Bachelor
        Thesis.
      </>
    ),
    timeframe: "February 2022 - May 2022",
    technologies: ["Vue.js", "Interact.js"],
    image: "/img/laban-thumbnail.png",
    githubLink: "https://github.com/JSchalon/bachelor-thesis",
    liveLink: "",
    border: "#c40399",
  },
];
