import { projects } from "../constants/index";
import ProjectCard from "../components/project helpers/ProjectCard";
import { LinkBlob } from "../components/project helpers/Blobs";
import { IntroAnimation } from "../components/TransitionsOverlays";

const Portfolio = () => {
  return (
    <section className="page-wrapper bg-cover">
      <div className="content-wrapper">
        <IntroAnimation>
          <div className="mb-15 border-b-2 border-[#ed93d9] backdrop-blur-2xl ">
            <div className="space-y-6  p-6 ">
              <h1 className="text-4xl font-bold text-white">Portfolio</h1>
              <p className="text-lg leading-relaxed text-justify">
                Here are a few of my larger projects so far. These projects
                demonstrate my skills in various aspects of software development
                across different languages and areas of programming.
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
                    text="Junipeeer (Private)"
                    link="https://github.com/Junipeeer/"
                  ></LinkBlob>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index}></ProjectCard>
            ))}
          </div>
        </IntroAnimation>
      </div>
    </section>
  );
};

export default Portfolio;
