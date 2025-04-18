import { Link } from "react-router-dom";
import { IntroAnimation } from "../components/TransitionsOverlays";
import { TechnologyBlobs } from "../components/project helpers/Blobs";
import { demoProjects, projects } from "../constants";

const Lab = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        <IntroAnimation className="space-y-8">
          <div className="space-y-6 border-b-2 border-[#e6cf74] p-6">
            <h1 className="text-4xl font-bold text-white">Lab</h1>
            <p className="text-lg leading-relaxed mt-2">
              Here you can find live demos of some of my projects.
            </p>
          </div>

          <div className="grid gap-4">
            {demoProjects.map((demo, index) => {
              const project = projects.find((p) => p.id === demo.id);
              if (!project) return null;

              return (
                <Link
                  to={"/demo/" + project.route}
                  key={index}
                  className="block p-4 border-l-2 hover:bg-neutral-700/50 transition-colors duration-200 rounded mx-12"
                  style={{ borderColor: project.border }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {project.title}
                      </h2>
                      <p className=" text-sm mt-1 ">{project.description}</p>
                      <div className="mt-2">
                        <TechnologyBlobs technologies={demo.tags} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </IntroAnimation>
      </div>
    </section>
  );
};

export default Lab;
