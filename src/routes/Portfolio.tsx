import { projects } from "../constants/index";
import ProjectCard from "../components/project-helpers/ProjectCard";
import { LinkBlob } from "../components/project-helpers/Blobs";
import { IntroAnimation } from "../components/TransitionsOverlays";

const Portfolio = () => {
  return (
    <section className="page-wrapper bg-cover">
      <div className="content-wrapper">
        <IntroAnimation>
          <div className="mb-15 page-header border-[#ed93d9] backdrop-blur-2xl ">
            <h1 className="text-4xl font-bold text-white">Portfolio</h1>
            <p className="text-lg leading-relaxed text-justify">
              Here you can see a selection of larger projects I have completed,
              both in an academic and private context. I have chosen these
              projects specifically, as they demonstrate my skills in various
              aspects of software development across different languages and
              areas of programming.
            </p>
            {/* Social Links */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">
                See my projects on Github:
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <LinkBlob
                  icon="Github"
                  text="JSchalon"
                  link="https://github.com/JSchalon/"
                ></LinkBlob>
                <LinkBlob
                  icon="Github"
                  text="Junipeeer (Personal)"
                  link="https://github.com/Junipeeer/"
                ></LinkBlob>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <IntroAnimation className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard project={project} key={index}></ProjectCard>
              ))}
            </IntroAnimation>
          </div>
        </IntroAnimation>
      </div>
    </section>
  );
};

export default Portfolio;
