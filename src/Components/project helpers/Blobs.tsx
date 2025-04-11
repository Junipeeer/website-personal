import { techIcons } from "../../constants";

interface TechBlobProps {
  technologies: string[];
}

export const TechnologyBlobs = ({ technologies }: TechBlobProps) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, i) => (
          <span key={i} className="project-tech">
            {techIcons[tech] && (
              <span className="text-lg">{techIcons[tech]}</span>
            )}
            {tech}
          </span>
        ))}
      </div>
    </>
  );
};

interface LinkBlobProps {
  icon: "Github" | "externalLink";
  link: string;
  text: string;
}

export const LinkBlob = ({ icon, link, text }: LinkBlobProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      <span className="text-lg">{techIcons[icon]}</span>
      <span>{text}</span>
    </a>
  );
};
