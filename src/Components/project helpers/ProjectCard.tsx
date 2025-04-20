import { Link } from "react-router-dom";
import { Project } from "../../constants";
import { TechnologyBlobs } from "./Blobs";
import { IntroAnimation } from "../TransitionsOverlays";

interface CardProps {
  project: Project;
}

const ProjectCard = ({ project }: CardProps) => {
  return (
    <IntroAnimation>
      <Link to={"/project/" + project.route} aria-label={project.title}>
        <div
          style={{ "--hover-border": project.border } as React.CSSProperties}
          className="project-card active:border-[var(--hover-border)] hover:border-[var(--hover-border)]"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 h-full">
            {/* Image Section */}

            <div className="relative cursor-pointer w-full h-full overflow-hidden col-span-1">
              <img
                src={project.image}
                alt={project.title}
                className="absolute w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 flex flex-col justify-between col-span-1">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>

                <p className="text-sm text-neutral-500 mb-4">
                  {project.timeframe}
                </p>
                <p className="mb-6 text-justify">{project.description}</p>

                {project.role && (
                  <p className="text-sm text-neutral-400 mb-4">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-white mb-2">
                  Technologies
                </h3>
                <TechnologyBlobs technologies={project.technologies} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </IntroAnimation>
  );
};

export default ProjectCard;
