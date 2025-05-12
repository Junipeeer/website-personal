import { Link } from "react-router-dom";
import { navLinks, techIcons } from "../../constants";

interface TechBlobProps {
  technologies: string[];
}

export const TechnologyBlobs = ({ technologies }: TechBlobProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span
          key={i}
          className="project-tech md:*:font-bold md:text-neutral-300 text-white/80"
        >
          {techIcons[tech] && (
            <span className="text-lg">{techIcons[tech]}</span>
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
      className="project-link group-hover/lb:text-white hover:text-white"
      aria-label={`External link: ${text}`}
    >
      <span className="text-2xl" aria-hidden="true">
        {techIcons[icon]}
      </span>
      <span className="text-md">{text}</span>
    </a>
  ) : (
    <Link
      to={link}
      className="project-link group-hover/lb:text-white hover:text-white"
      aria-label={`Link: ${text}`}
    >
      <span className="text-2xl" aria-hidden="true">
        {techIcons[icon]}
      </span>
      <span className="text-md">{text}</span>
    </Link>
  );
};

interface NavigationButtonProps {
  route: string;
  label: string;
  text?: string;
  border?: string;
}

export const NavigationButton = ({
  route,
  label,
  text = "Read more",
  border = "white",
}: NavigationButtonProps) => {
  return (
    <Link
      to={route}
      aria-label={label}
      style={{ "--hover-border": border } as React.CSSProperties}
      className="group/btn flex items-center gap-2 px-3 py-2
      rounded-sm border-2 border-neutral-400 hover:border-[var(--hover-border)] text-neutral-300 hover:text-white transition-all z-10 w-fit"
    >
      <span className="text-lg ">{text}</span>
      <span
        className="transition-transform group-hover/btn:translate-x-1"
        aria-hidden="true"
      >
        {techIcons.Arrow}
      </span>
    </Link>
  );
};
