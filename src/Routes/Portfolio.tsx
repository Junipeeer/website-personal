import { projects } from "../constants/index";
import ProjectCard from "../components/project helpers/ProjectCard";

const Portfolio = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        <h1 className="text-4xl font-bold text-white mb-12">Portfolio</h1>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
