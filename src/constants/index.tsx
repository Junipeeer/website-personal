import { JSX } from "react";
import {
  FaReact,
  FaVuejs,
  FaJava,
  FaPython,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
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
    color: "#aaaaaa",
  },
  {
    id: 1,
    name: "About Me",
    emoji: "🌐",
    href: "/about",
    color: "#95e468",
  },
  {
    id: 2,
    name: "Portfolio",
    emoji: "🎨",
    href: "/portfolio",
    color: "#ed93d9",
  },
  {
    id: 3,
    name: "Lab",
    emoji: "🧪",
    href: "/lab",
    color: "#e6cf74",
  },
  {
    id: 4,
    name: "Blog",
    emoji: "💡",
    href: "/blog",
    color: "#99e3e2",
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
  Linkedin: <FaLinkedin />,
  external: <FaExternalLinkAlt />,
  back: <FaArrowLeft />,
  Arrow: <FaArrowRight />,
};

interface DemoProject {
  id: string;
  url: string;
  tags: string[];
  route?: string;
  title?: string;
  description?: string;
  border?: string;
}

export const demoProjects: DemoProject[] = [
  {
    id: "pro-interaction-editor",
    url: "https://jschalon.github.io/bachelor-thesis/",
    tags: ["Vue.js", "Interactive", "Demo"],
  },
  {
    id: "pro-website-ps2",
    url: "https://junipeeer.github.io/website-ps2/",
    tags: ["React", "Framer Motion", "Demo"],
    title: "Initital Website Test",
    description:
      "A simple demo using React and FramerMotion. Created to test feasibility before I switched to Three.js.",
    route: "website-ps2",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  timeframe: string;
  technologies: string[];
  image: string;
  border: string;
  route: string;
  githubLink?: string;
  liveLink?: { link: string; external: boolean };
  role?: string;
}

export const projects: Project[] = [
  {
    id: "pro-pers-web",
    title: "Personal Website",
    route: "personal-website",
    description:
      "A responsive portfolio website built to showcase my projects and skills. Features dark mode design, 3D elements, responsive layouts, and CSS animations.",
    timeframe: "March 2025 - April 2025",
    technologies: [
      "React",
      "TypeScript",
      "Three.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/img/website-thumbnail.jpg",
    githubLink: "https://github.com/Junipeeer/website-personal",
    border: "#ef4444",
  },
  {
    id: "pro-spf",
    title: "SPF - Simple Protogen Face",
    route: "simple-protogen-face",
    description:
      "A Python-based program to run an image-based protogen face on Raspberry Pi using Hub75 matrices. Includes auxillary hardware support for proximity sensors, additional LEDs and buttons.",
    timeframe: "August 2024 - January 2025",
    technologies: ["Python", "Raspberry Pi"],
    image: "/img/spf-thumbnail.jpg",
    githubLink: "https://github.com/Junipeeer/Simple-Protogen-Face",
    border: "#3bc260",
  },
  {
    id: "pro-facilitator-bot",
    title: "Språkcafé Facilitator Bot",
    route: "facilitator-bot",
    description:
      "A simple front end to have verbal conversations with OpenAI's GPT models, using MS Azure speech-to-text and ElevenLabs for voice support. Created for use in the context of Swedish language cafés as part of my master's thesis in media technologies. Basic prototype, modified from Babagaboosh by DougDoug.",
    timeframe: "March 2024 - April 2024",
    technologies: ["Python", "Flask"],
    image: "/img/scfacilitatorbot-thumbnail.png",
    githubLink: "https://github.com/JSchalon/SCFacilitatorBot",
    border: "#3baff3",
  },
  {
    id: "pro-interaction-editor",
    title: "Interaction Editor",
    route: "interaction-editor",
    description:
      "A Vue.js and Interact.js-based editor for creating Laban notation scores with the purpose of recording and documenting natural interactions with gesture-based interfaces. Functional prototype, created in the context of my bachelor thesis.",
    timeframe: "February 2022 - May 2022",
    technologies: ["Vue.js", "Interact.js"],
    image: "/img/laban-thumbnail.png",
    githubLink: "https://github.com/JSchalon/bachelor-thesis",
    liveLink: { link: "/demo/interaction-editor", external: false },
    border: "#c40399",
  },
  {
    id: "pro-java-chess",
    title: "Chess.",
    route: "java-chess",
    description:
      "A Java-based chess game created in a collaborative project as part of a software engineering course. Includes A JavaFX-based interface, German/English language support, a simple 'AI,' and unit testing.",
    timeframe: "March 2020 - July 2020",
    technologies: ["Java", "JavaFX"],
    image: "/img/chess-thumbnail.jpg",
    githubLink: "",
    border: "#f0f30a",
    role: "Main programmer and software architect",
  },
];
