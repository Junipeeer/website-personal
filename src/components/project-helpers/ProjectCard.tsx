import { Project } from "../../constants";
import { NavigationButton, TechnologyBlobs } from "./Blobs";
import { IntroAnimation } from "../TransitionsOverlays";
import { Link } from "react-router-dom";

interface CardProps {
  project: Project;
}

const ProjectCard = ({ project }: CardProps) => {
  return (
    <IntroAnimation>
      <div
        style={
          { "--image-url": `url(${project.image})` } as React.CSSProperties
        }
        className="md:hidden bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat project-card group/card 
        hover:border-neutral-500"
      >
        <ProjectCardContent project={project} showBtn />
      </div>
      <Link
        to={"/project/" + project.route}
        aria-label={"To project: " + project.title}
        style={{ "--border-color": `${project.border}` } as React.CSSProperties}
        className="hidden md:flex hover:border-[var(--border-color)] project-card group/card "
      >
        <ProjectCardContent project={project} />
      </Link>
    </IntroAnimation>
  );
};

export default ProjectCard;

const ProjectCardContent = ({
  project,
  showBtn = false,
}: {
  project: Project;
  showBtn?: boolean;
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-full text-shadow-xl">
      {/* Image Section */}

      <div className="relative w-full h-full overflow-hidden col-span-1">
        <img
          src={project.image}
          alt={project.title}
          className="absolute w-full h-full object-cover object-center group-hover/card:scale-105 
      transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col justify-between col-span-1 max-md:bg-black/70 ">
        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>

        <p className="text-sm md:text-neutral-400 text-white/80 mb-4">
          {project.timeframe}
        </p>
        <p className="mb-6 md:text-neutral-300 text-white/80 text-justify">
          {project.description}
        </p>

        {project.role && (
          <p className="text-sm md:text-neutral-400 text-white/80 mb-4">
            <span className="font-semibold">Role:</span> {project.role}
          </p>
        )}

        <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
        <TechnologyBlobs technologies={project.technologies} />
        {showBtn && (
          <div className="md:hidden mt-6">
            <NavigationButton
              route={"/project/" + project.route}
              label={"To project: " + project.title}
              border={project.border}
            />
          </div>
        )}
      </div>
    </div>
  );
};
