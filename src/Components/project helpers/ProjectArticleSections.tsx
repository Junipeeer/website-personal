import { ReactNode } from "react";
import { Project, techIcons } from "../../constants";
import { LinkBlob, TechnologyBlobs } from "./Blobs";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  image: string;
  alt: string;
}

const ProjectHero = ({ image, alt }: HeroProps) => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] lg:h-[80vh] w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute w-full h-full object-cover"
      />
      <div className="hero-blend absolute h-2/12 sm:h-4/12 lg:h-5/12 w-full bottom-0" />
    </div>
  );
};

export default ProjectHero;

export const ProjectBackLink = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start mb-6 ">
      <button
        onClick={() => navigate(-1)}
        className="group cursor-pointer flex items-center gap-2 px-3 py-2 bg-neutral-700/50 hover:bg-neutral-600/50 
        rounded-lg text-neutral-300 hover:text-white transition-all backdrop-blur-sm"
        aria-label="Go back to previous page"
      >
        <span
          className=" transition-transform group-hover:-translate-x-1"
          aria-hidden="true"
        >
          {techIcons.back}
        </span>
        <span className="text-lg">Back</span>
      </button>
    </div>
  );
};

interface HeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: HeaderProps) => {
  return (
    <div className="project-card backdrop-blur-lg p-8">
      <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
      <p className="text-sm text-neutral-500 mb-4">{project.timeframe}</p>
      {project.role && (
        <p className="text-sm text-neutral-400 mb-4">
          <span className="font-semibold">Role:</span> {project.role}
        </p>
      )}
      <p className="mb-6 text-justify">{project.description}</p>

      {/* Technologies */}
      <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
      <TechnologyBlobs technologies={project.technologies} />

      {/* Links */}
      <div className="flex gap-4 mt-6">
        {project.githubLink && (
          <LinkBlob icon="Github" link={project.githubLink} text="View Code" />
        )}
        {project.liveLink && (
          <LinkBlob
            icon="external"
            link={project.liveLink.link}
            external={project.liveLink.external}
            text="Live Demo"
          />
        )}
      </div>
    </div>
  );
};

interface SectionProps {
  children: ReactNode;
  title: string;
}
export const ProjectSection = ({ children, title }: SectionProps) => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div>{children}</div>
    </section>
  );
};
