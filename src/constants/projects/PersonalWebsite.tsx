import ProjectTemplate from "../../components/project helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview & Inspiration",
      content: (
        <>
          <p>
            This website serves as both my portfolio and a playground for
            exploring modern web technologies. My goal was both to create a
            portfolio for myself, but also learn React and refamiliarize myself
            with Tailwind, as I wanted to create something that would not only
            showcase my projects but also demonstrate my skills in creating
            interactive websites and web-design as well.
          </p>
          <p>
            The idea for using a cube as a navigation element came to me earlier
            this year, as I was deliberating making a portfolio. Initially I was
            interested in paying homage to the menu of the PS2, which I owned as
            a child. I soon began looking at other consoles as well and felt
            inspired by the Gamecube menu. I initially created a cube using
            regular React and CSS, where I tested the idea, though I was not
            super satisfied with it. A bit later on, completely by chance, I
            came across a tutorial for a Three.js portfolio using React and felt
            inspired to pick the project back up again, the result of which you
            are looking at right now.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <>
          <p>
            The site features a 3D cube interface on the homepage, serving as an
            interactive navigation element. Each face of the cube represents and
            links to a different section of the website, creating a unique way
            to explore the content. The other pages feature a coherent design
            with a dark theme and responsive layouts that work across all
            devices.
          </p>
          <ul className="list-disc list-inside space-y-2 ">
            <li>
              Interactive 3D cube navigation using React and React Three Fiber
            </li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Custom animated components and transitions</li>
            <li>Project showcase with detailed case studies</li>
            <li>Performance optimizations with lazy loading and suspense</li>
          </ul>
        </>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            The website is built with React and TypeScript, as I tried to use
            modern web development practices and tools. The 3D elements are
            created using Blender and imported with Three.js through React Three
            Fiber, allowing for seamless integration of 3D graphics with React's
            component-based architecture.
          </p>
          <p>
            For routing I am using react-router-dom, as this appears to be the
            standard for this purpose in React. Visually, I used Tailwind and
            react-icons for a coherent and modern look.
          </p>
        </>
      ),
    },
    {
      title: "Challenges & Solutions",
      content: (
        <>
          <p>
            One of the main challenges was creating a 3D interface that was both
            visually appealing, functional and performant. This required quite a
            bit of consideration of performance optimization, especially for
            mobile devices. The solution involved only rendering elements when
            visible, as all "portals" are bound to the cube and its transforms
            and removing dynamic lighting.
          </p>
          <p>
            Translating the cube interface to deliver a good user experience on
            mobile touch devices was also a challenge. The desktop version
            relies on the mouse position, on touch this is difficult. I
            therefore opted to use swipe controls on mobile instead. The width
            was also a challenge, which is why the cube is translated in the
            swipe direction on mobile.
          </p>
          <p>
            Another challenge was ensuring accessibility despite the complex 3D
            interface. This was addressed by providing alternative navigation
            options through the navigation header with appropriate aria
            labeling.
          </p>
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId="pro-pers-web" sections={sections} />;
};

export default InteractionEditor;
