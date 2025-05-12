import { IntroAnimation } from "../components/TransitionsOverlays";
import {
  NavigationButton,
  TechnologyBlobs,
} from "../components/project-helpers/Blobs";
import { demoProjects, projects } from "../constants";

const Lab = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        <IntroAnimation className="space-y-8">
          <div className="page-header border-[#e6cf74]">
            <h1 className="text-4xl font-bold text-white">Lab</h1>
            <p className="text-lg leading-relaxed mt-2">
              Welcome to the lab! Here you can find live demos of some of my
              projects, as well as smaller experiments and other things I want
              to show.
            </p>
          </div>

          <div className="grid gap-4">
            <IntroAnimation className="space-y-8">
              {demoProjects.map((demo, index) => {
                // Try to find matching project, otherwise use demo data
                const project = projects.find((p) => p.id === demo.id);
                const displayData = project
                  ? {
                      title: project.title,
                      description: project.description,
                      border: project.border,
                      route: project.route,
                    }
                  : {
                      title: demo.title,
                      description: demo.description,
                      border: "#e6cf74", // Default border color
                      route: demo.route,
                    };

                return (
                  <div
                    key={index}
                    className="block  border-l-2 hover:bg-neutral-700/50 transition-colors duration-200 mx-2 sm:mx-12 rounded-r-md"
                    style={{ borderColor: displayData.border }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="group/card p-4">
                        <h2 className="text-xl font-bold text-white">
                          {displayData.title}
                        </h2>
                        <p className="mt-1">{displayData.description}</p>
                        <div className="mt-4">
                          <TechnologyBlobs technologies={demo.tags} />
                        </div>
                        <div className="mt-6">
                          <NavigationButton
                            route={"/demo/" + displayData.route}
                            label={"To project: " + displayData.title}
                            text={"View demo"}
                            border={displayData.border}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </IntroAnimation>
          </div>
        </IntroAnimation>
      </div>
    </section>
  );
};

export default Lab;
