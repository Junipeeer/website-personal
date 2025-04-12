import { ReactNode } from "react";
import { Project } from "../../constants";
import { LinkBlob, TechnologyBlobs } from "./Blobs";

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
      <TechnologyBlobs technologies={project.technologies} />

      {/* Links */}
      <div className="flex gap-4">
        {project.githubLink && (
          <LinkBlob icon="Github" link={project.githubLink} text="View Code" />
        )}
        {project.liveLink && (
          <LinkBlob
            icon="externalLink"
            link={project.liveLink}
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
    <section className="project-card p-8">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div>{children}</div>
    </section>
  );
};
