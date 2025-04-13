import { projects } from "../../constants";
import ProjectHero, {
  ProjectSection,
  ProjectHeader,
  ProjectBackLink,
} from "../../components/project helpers/ProjectArticleSections";

const InteractionEditor = () => {
  const project = projects.find((p) => p.id === "pro-interaction-editor");
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <article className="page-wrapper">
      {/* Hero Section */}
      <ProjectHero image={project.image} alt={project.title} />

      {/* Content */}
      <div className="content-wrapper -mt-65">
        <ProjectBackLink />
        <ProjectHeader project={project} />

        <div className="mt-12 space-y-12">
          <ProjectSection title="Project Overview">
            <div className="space-y-4">
              <p>
                The Interaction Editor is a web-based tool I developed as part
                of my Bachelor's thesis to simplify the documentation of Natural
                User Interface (NUI) interactions using{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                  href="https://en.wikipedia.org/wiki/Labanotation"
                >
                  Labanotation
                </a>
                . As computing becomes increasingly integrated into our
                environment, the need for documenting gesture-based interactions
                grows, yet no standardized digital format exists for this
                purpose.
              </p>
              <p>
                Labanotation, originally designed for documenting dance
                movements, offers a comprehensive system for recording human
                movement. At the time of this thesis, there was no good
                publically available lanbanotation editor. This project
                therefore aimed to create a digital editor that makes the
                traditionally laborious process of creating Labanotation scores
                more accessible and efficient for interaction designers.
              </p>
            </div>
          </ProjectSection>

          <ProjectSection title="Key Features">
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>
                  Intuitive drag-and-drop interface for creating Labanotation
                  scores
                </li>
                <li>Component-based editor using Vue.js</li>
                <li>Real-time preview of gesture documentation</li>
                <li>
                  Integration with Dropbox API for score storage and sharing
                </li>
                <li>Modular architecture for future extensions</li>
                <li>Designed to work with both mkb and touch devices</li>
              </ul>
            </div>
          </ProjectSection>

          <ProjectSection title="Technical Implementation">
            <div className="space-y-4">
              <p>
                I built the editor with Vue.js and Interact.js to create a
                responsive and intuitive interface. The application uses a
                component-based architecture where each Labanotation symbol is a
                reusable component that can be dragged, dropped, and configured
                on a digital score sheet.
              </p>
              <p>
                State management was implemented to handle complex user
                interactions and maintain score consistency. The Dropbox API
                integration allows users to save their work and share scores
                with others.
              </p>
            </div>
          </ProjectSection>

          <ProjectSection title="Development & Research Context">
            <div className="space-y-4">
              <p>
                I followed a human-centered design approach for this project,
                with several rounds of iterations, user testing and refinement.
                This process helped ensure that the final product met the needs
                of interaction designers while maintaining usability standards.
              </p>
              <p>
                User testing revealed that the editor successfully simplified
                the process of creating Labanotation scores while maintaining
                the notation system's integrity. The modular architecture also
                worked well for implementing user-requested features and
                preparing for potential future work on top of it.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </article>
  );
};

export default InteractionEditor;
