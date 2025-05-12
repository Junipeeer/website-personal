import { IntroAnimation } from "../../components/TransitionsOverlays";
import { ProjectBackLink } from "../../components/project-helpers/ProjectArticleSections";
import {
  LinkBlob,
  NavigationButton,
} from "../../components/project-helpers/Blobs";

const InteractionEditorDemo = () => {
  return (
    <section className="page-wrapper">
      <IntroAnimation className="space-y-8">
        {/* Content section with normal width */}
        <div className="content-wrapper">
          <div className="page-header border-b-transparent">
            <div className="flex items-center gap-4">
              <ProjectBackLink link="/lab" />
              <NavigationButton
                text="Full Project description"
                route="/project/interaction-editor"
                label="To full Project description"
              />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Interaction Editor
            </h1>

            <p className="text-lg leading-relaxed">
              This is a Vue.js based editor for creating Labanotation scores. It
              provides an interactive online interface for documenting
              human-computer interactions using Labanotation. Created in the
              context of my Bachelor Thesis.
            </p>

            <div className="flex flex-wrap gap-4">
              <LinkBlob
                icon="Github"
                text="View Code"
                link="https://github.com/JSchalon/bachelor-thesis"
              />
              <LinkBlob
                icon="external"
                text="View fullscreen on Github Pages"
                link="https://jschalon.github.io/bachelor-thesis/"
              />
            </div>
          </div>

          <div className="md:hidden mt-8 p-4 sm:p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
            <p className="text-yellow-200/80">
              ⚠️ Small Screen detected - I recommend using a Tablet or PC to use
              this editor. Using a smaller screen like a smartphone is
              technically possible, but not intended.
            </p>
          </div>
        </div>

        {/* Full-width iframe container */}
        <div className="max-md:hidden w-full flex justify-center">
          <div className="bg-neutral-900 rounded-lg overflow-hidden md:w-[90vw] lg:w-[85vw] xl:w-[80vw] -translate-y-25">
            <iframe
              src="https://jschalon.github.io/bachelor-thesis/"
              className="w-full h-[80vh] border-0"
              title="Interaction Editor Demo"
            />
          </div>
        </div>
      </IntroAnimation>
    </section>
  );
};

export default InteractionEditorDemo;
