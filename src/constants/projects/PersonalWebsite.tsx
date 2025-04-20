import { Link } from "react-router-dom";
import ProjectTemplate from "../../components/project-helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview & Inspiration",
      content: (
        <>
          <p>
            My goal with this project was both to create a portfolio for myself
            and also to get deeper into React and re-familiarize myself with
            Tailwind. I wanted to create something that would not only showcase
            my projects but also demonstrate my skills in creating interactive
            websites and web design as well. This website now also serves as a
            playground for exploring modern web technologies and writing about
            my projects, both web-based and otherwise.
          </p>
          <p>
            The idea for using a cube as a navigation element came to me earlier
            this year, as I was deliberating creating a portfolio. Initially I
            was interested in paying homage to the UI of the PS2, which I owned
            as a child, as I enjoy its retro aesthetic. I soon began looking at
            other consoles too and quickly found myself inspired by the GameCube
            UI as well. I initially created a cube using regular React and CSS,
            where I tested the idea. This worked (
            <Link to={"/demo/website-ps2"} className="underline">
              and can be viewed here
            </Link>
            ), though I was not super satisfied with the result. A bit later on,
            completely by chance, I came across a tutorial for a Three.js
            portfolio using React and felt inspired to pick the project back up
            again, the result of which you are looking at right now.
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
            to explore the content. The other pages feature a consistent design
            with a dark theme and responsive layouts that work across all
            devices.
          </p>
          <p>Key features include</p>
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
            modern web development practices and tools. Some 3D elements are
            created using Blender and imported as GLTF files through React Three
            Fiber, allowing for an integration of 3D graphics with React's
            component-based architecture. A lot of the visual effects are
            created using React Three Drei, which is a library for helper
            classes for creating certain elements and effects. For example, the
            cube has a slight "wobble," which comes from a React Three Drei
            material with a distortion filter.
          </p>
          <p>
            For routing, I am using react-router-dom, as this works well for a
            smaller project like this. Visually, I used Tailwind and react-icons
            for a consistent and modern look. I also used Framer Motion for
            animations and transitions, which adds some subtle polish to the
            design.
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
            visually appealing, functional and performant. My approach of
            transforming elements, rather than a more static UI, requires a lot
            of computation. However, I am quite pleased with the result, as it
            feels very dynamic.
          </p>
          <p>
            This required quite a bit of consideration of performance
            optimization, especially for mobile devices. The solution involved
            only rendering elements when visible, as well as removing dynamic
            lighting.
          </p>
          <p>
            Adapting the cube interface to deliver a good user experience on
            mobile touch devices was also a bit of a challenge. The desktop
            version relies on the mouse position; on mobile, I had to opt to use
            swipe controls instead. Capturing the cube and its children is also
            a challenge on vertical mobile devices, which is why the camera is
            translated in the swipe direction on mobile.
          </p>
          <p>
            Another challenge was ensuring accessibility despite the complex 3D
            interface. This was addressed by providing alternative navigation
            options through the navigation header with appropriate aria
            labeling. I could try to implement keyboard controls as well, though
            I think this may conflict with accessibility for screen readers. I
            will have to look into this further.
          </p>
          <p>
            The last challenge, which I am still working on, is dynamically
            adding content without having to rebuild the project. Currently I am
            packaging all content with the website so I can statically host it
            on GitHub Pages, though in the future having an externally hosted DB
            for projects, demos, and blog posts would be more convenient.
          </p>
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId="pro-pers-web" sections={sections} />;
};

export default InteractionEditor;
