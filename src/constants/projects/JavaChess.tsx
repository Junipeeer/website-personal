import ProjectTemplate from "../../components/project helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            Chess. is a fully functional chess game developed in a collaborative
            project as part of a software engineering course during my
            Bachelor's degree. As team lead, I was responsible for the overall
            architecture and a significant portion of the implementation. The
            project focused on building good architecture, test-driven
            development, and proper software engineering practices.
          </p>
          <p>
            This project was Developed during the early stages of COVID-19, so
            it was also an interesting learning experience not just in technical
            skills, but also in navigating collaborative development, especially
            in a remote setting.
          </p>
        </>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            The application was built from scratch in Java using JavaFX for the
            user interface. The architecture follows best pracitces and code
            principles with clear separation of concerns between the game logic,
            UI, and data layers. We opted to use a Model-View-Controller pattern
            for this purpose. Comprehensive unit testing was implemented to
            ensure game rule compliance and proper functionality.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Model-View-Controller (MVC) architecture</li>
            <li>Comprehensive unit test coverage</li>
            <li>JavaFX-based graphical user interface</li>
            <li>Custom chess piece movement validation</li>
            <li>Game state management and move history</li>
            <li>"AI" using Minimax algorithm (not implemented by me)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Development Process",
      content: (
        <>
          <p>
            The development process began with detailed UML diagrams to plan the
            system architecture. These diagrams helped establish a clear
            structure for the codebase. We followed an agile-ish approach with
            regular online meetings and incremental development.
          </p>
          <p>
            Initial development saw me taking on a large portion of the
            architectural and implementation work, pushing around 60% of
            commits, driven by enthusiasm and COVID-related circumstances.
            However, as the project progressed, I learned to step back and
            create more opportunities for team involvement, leading to better
            collaboration and knowledge sharing.
          </p>
        </>
      ),
    },
    {
      title: "Leadership Insights",
      content: (
        <>
          <p>
            This project taught me valuable lessons about technical leadership
            and team dynamics. While my initial approach was to handle most of
            the complex implementation myself, I learned the importance of
            patience and creating opportunities for team members to develop
            their skills.
          </p>
          <p>
            Initially I approached the project with a "if you want something
            done well you have to do it yourself" approach, which was definitely
            unfair to the two other team members. While there was a gap in
            Java-skill then, me pushing ahead so strongly made it difficult for
            them to catch up, especially as the project grew in complexity.
          </p>
          <p>
            While I wish I had learned it sooner, this definitely taught me a
            valuable lessons about delegation and supporting team members: You
            have to trust people and let them learn at their own pace, and, if
            needed support them, rather than just doing it yourself. I tried to
            implement this more later on, for example by delegating part of the
            GUI and the AI algorythm.
          </p>
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId="pro-java-chess" sections={sections} />;
};

export default InteractionEditor;
