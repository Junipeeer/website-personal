import ProjectTemplate from "../../components/project helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            The Interaction Editor is a web-based tool I developed as part of my
            Bachelor's thesis to simplify the documentation of Natural User
            Interface (NUI) interactions using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
              href="https://en.wikipedia.org/wiki/Labanotation"
            >
              Labanotation
            </a>
            .
          </p>
          <p>
            Labanotation, originally designed for documenting dance movements,
            offers a comprehensive system for recording human movement.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>
            Intuitive drag-and-drop interface for creating Labanotation scores
          </li>
          <li>Component-based editor using Vue.js</li>
          <li>Real-time preview of gesture documentation</li>
          <li>Integration with Dropbox API for score storage and sharing</li>
          <li>Modular architecture for future extensions</li>
          <li>Designed to work with both mkb and touch devices</li>
        </ul>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            I built the editor with Vue.js and Interact.js to create a
            responsive and intuitive interface. The application uses a
            component-based architecture where each Labanotation symbol is a
            reusable component that can be dragged, dropped, and configured on a
            digital score sheet.
          </p>
          <p>
            State management was implemented to handle complex user interactions
            and maintain score consistency. The Dropbox API integration allows
            users to save their work and share scores with others.
          </p>
        </>
      ),
    },
    {
      title: "Development & Research Context",
      content: (
        <>
          <p>
            I followed a human-centered design approach for this project, with
            several rounds of iterations, user testing and refinement. This
            process helped ensure that the final product met the needs of
            interaction designers while maintaining usability standards.
          </p>
          <p>
            User testing revealed that the editor successfully simplified the
            process of creating Labanotation scores while maintaining the
            notation system's integrity. The modular architecture also worked
            well for implementing user-requested features and preparing for
            potential future work on top of it.
          </p>
        </>
      ),
    },
  ];

  return (
    <ProjectTemplate projectId="pro-interaction-editor" sections={sections} />
  );
};

export default InteractionEditor;
