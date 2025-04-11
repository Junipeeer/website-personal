import { projects } from "../../constants";
import ProjectHero, {
  ProjectArticleSection,
  ProjectHeader,
} from "../../components/project helpers/ProjectSections";

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
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative">
        <ProjectHeader project={project} />

        <div className="mt-12 space-y-12 mb-20">
          <ProjectArticleSection title="Project Overview">
            <div>TODO</div>
          </ProjectArticleSection>
          <ProjectArticleSection title="Technical Implementation">
            <div>TODO</div>
          </ProjectArticleSection>
        </div>
      </div>
    </article>
  );
};

export default PersonalWebsite;
