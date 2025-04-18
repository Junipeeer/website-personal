import { Link } from "react-router-dom";
import { techIcons } from "../../constants";

interface TechBlobProps {
  technologies: string[];
}

export const TechnologyBlobs = ({ technologies }: TechBlobProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span key={i} className="project-tech font-bold">
          {techIcons[tech] && (
            <span className="text-lg ">{techIcons[tech]}</span>
          )}
          {tech}
        </span>
      ))}
    </div>
  );
};

interface LinkBlobProps {
  icon: "Github" | "external" | "Linkedin" | "Arrow";
  link: string;
  text: string;
  external?: boolean;
}

export const LinkBlob = ({
  icon,
  link,
  text,
  external = true,
}: LinkBlobProps) => {
  return external ? (
    <a
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
      className="project-link"
    >
      <span className="text-2xl">{techIcons[icon]}</span>
      <span className="text-md">{text}</span>
    </a>
  ) : (
    <Link to={link} className="project-link">
      <span className="text-2xl">{techIcons[icon]}</span>
      <span className="text-md">{text}</span>
    </Link>
  );
};
