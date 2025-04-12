import { projects } from "../../constants";
import ProjectHero, {
  ProjectSection,
  ProjectHeader,
} from "../../components/project helpers/ProjectArticleSections";

const PersonalWebsite = () => {
  const project = projects.find((p) => p.id === "pro-pers-web");
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <article className="page-wrapper">
      {/* Hero Section */}
      <ProjectHero image={project.image} alt={project.title} />

      {/* Content */}
      <div className="content-wrapper -mt-50">
        <ProjectHeader project={project} />

        <div className="mt-12 space-y-12">
          <ProjectSection title="Project Overview">
            <div>TODO</div>
          </ProjectSection>
          <ProjectSection title="Technical Implementation">
            <div>TODO</div>
          </ProjectSection>
        </div>
      </div>
    </article>
  );
};

export default PersonalWebsite;
