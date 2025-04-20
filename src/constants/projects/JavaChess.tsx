import ProjectTemplate from "../../components/project-helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            Chess. is a fully functional chess game developed in a collaborative
            project as part of a software engineering course during my
            bachelor's degree. As team lead, I was responsible for the overall
            architecture and a significant portion of the implementation. The
            project focused on building good architecture, test-driven
            development, and proper software engineering practices.
          </p>
          <p>
            This project was developed during the early stages of the COVID-19
            pandemic, so it was an interesting learning experience not just in
            terms of technical skills but also in navigating collaborative
            development, especially in a remote setting.
          </p>
        </>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            The game was built from scratch in Java using JavaFX for the user
            interface. The architecture follows best practices and code
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
            <li>"AI" using the Minimax algorithm (not implemented by me)</li>
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
            architectural and implementation work, pushing around 60% of total
            commits, in a team with two other people, driven by enthusiasm for
            the project and COVID-related boredom. However, as the project
            progressed, I reflected and decided to step back and create more
            opportunities for team involvement, leading to better collaboration
            and knowledge sharing.
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
            patience and creating opportunities for teammates to develop their
            skills.
          </p>
          <p>
            At first I approached the project with an "if you want something
            done well, you have to do it yourself" approach, which was
            definitely unfair to the two other teammates. While there was a
            noticeable gap in skill, me pushing ahead so strongly meant it was
            difficult for them to catch up, especially as the project grew in
            complexity. This made it hard for them to contribute and to be able
            to learn and grow from this project. As such, this is something I
            would approach quite differently now.
          </p>
          <p>
            While I wish I had learned it sooner, this definitely taught me a
            valuable lesson about delegation and supporting teammates: You have
            to trust people and let them learn at their own pace, and if needed,
            support them, rather than just doing it yourself. I tried to
            implement this more later on during the project and in future ones.
            For example, I delegated the AI algorithm and part of the GUI to my
            teammates.
          </p>
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId="pro-java-chess" sections={sections} />;
};

export default InteractionEditor;
