import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  timeframe: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  role?: string;
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A responsive portfolio website built to showcase my projects and skills. Features dark mode design, 3d elements, responsive layouts, and smooth animations.",
    timeframe: "March 2024 - April 2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    image: "/projects/portfolio.png", // Add your screenshot
    githubLink: "https://github.com/Junipeeer/website-personal",
    liveLink: "",
    role: "Solo Developer",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-900 text-neutral-400">
      <div className="c-space py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">My Projects</h1>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 cursor-pointer rounded-lg overflow-hidden shadow-xl transition-all hover:shadow-2xl box-border border-2 border-neutral-800 hover:border-red-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h2>

                    <p className="text-sm text-neutral-500 mb-4">
                      {project.timeframe}
                    </p>

                    <p className="text-neutral-300 mb-6">
                      {project.description}
                    </p>

                    {project.role && (
                      <p className="text-sm text-neutral-400 mb-4">
                        <span className="font-semibold">Role:</span>{" "}
                        {project.role}
                      </p>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-neutral-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
