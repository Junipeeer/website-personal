import ProjectTemplate from "../../components/project-helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            The Interaction Editor is a web-based tool I developed as part of my
            bachelor thesis to simplify the documentation of Natural User
            Interface (NUI) interactions using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
              href="https://en.wikipedia.org/wiki/Labanotation"
              aria-label="Labanotation Wikipedia"
            >
              Laban notation
            </a>
            .
          </p>
          <p>
            Laban notation, originally designed for documenting dance movements,
            offers a comprehensive system for recording human movement.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            Intuitive drag-and-drop interface for creating Labanotation scores
          </li>
          <li>Component-based editor using Vue.js</li>
          <li>Real-time preview of gesture documentation</li>
          <li>Integration with Dropbox API for score storage and sharing</li>
          <li>Modular architecture for future extension</li>
          <li>Designed to work with both MKB and tablet touch devices</li>
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
            component-based architecture where each Laban notation symbol is a
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
            several rounds of iterations, user testing, and refinement. This
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
          <p>
            The project was developed as part of a broader research project for
            defining a common standard for the documentation of NUI
            interactions. The feedback was generally positive, though it became
            clear that Laban notation is quite complicated to learn, both in
            writing and reading scores. It does not find much use in general,
            even within dance communities, which it was originally designed for.
            In general, dances are generally not shared through notation but
            rather visually as images and videos. It is therefore unclear how or
            if Laban notation could find wider adoption.
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
