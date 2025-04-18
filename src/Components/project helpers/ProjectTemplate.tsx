import { projects } from "../../constants";
import ProjectHero, {
  ProjectSection,
  ProjectHeader,
  ProjectBackLink,
} from "../../components/project helpers/ProjectArticleSections";
import { IntroAnimation } from "../../components/TransitionsOverlays";
import { JSX } from "react";

interface ProjectContentSection {
  title: string;
  content?: string | JSX.Element;
}

interface ProjectTemplateProps {
  projectId: string;
  sections: ProjectContentSection[];
}

const ProjectTemplate = ({ projectId, sections }: ProjectTemplateProps) => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="page-wrapper">
      {/* Hero Section */}
      <ProjectHero image={project.image} alt={project.title} />

      {/* Content */}
      <IntroAnimation className="content-wrapper -mt-65">
        <ProjectBackLink />

        <ProjectHeader project={project} />

        <div className=" mt-12 project-card">
          {sections.map((section, index) => (
            <ProjectSection key={index} title={section.title}>
              <div className="project-content space-y-4">{section.content}</div>
            </ProjectSection>
          ))}
        </div>
      </IntroAnimation>
    </article>
  );
};

export default ProjectTemplate;
