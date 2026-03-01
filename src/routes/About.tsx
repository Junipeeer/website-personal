import { Link } from "react-router-dom";
import { LinkBlob } from "../components/project-helpers/Blobs";
import { projects } from "../constants";
import { IntroAnimation } from "../components/TransitionsOverlays";

const About = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper max-w-4xl">
        {/* Bio Section */}
        <IntroAnimation className="space-y-16">
          <div className="space-y-6 border-b-2 border-[#95e468] sm:p-6 p-2">
            <h1 className="text-4xl font-bold text-white">About Me</h1>
            <p className="text-lg leading-relaxed text-justify">
              Hi, I'm Julian 👋 I am a Software Developer and recent M.Sc.
              graduate in the field of media technologies. I enjoy solving
              problems creatively and working on engaging projects, with a
              passion for usability and accessibility. I try to apply my skills
              to better facilitate users' interaction with media systems and
              create solutions to real-world problems.
            </p>
            {/* Social Links - Moved up and redesigned */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">
                Connect with me:
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <LinkBlob
                  icon="Linkedin"
                  text="Julian Schalon"
                  link="https://www.linkedin.com/in/julian-schalon-956117287/"
                ></LinkBlob>
                <LinkBlob
                  icon="Github"
                  text="JSchalon"
                  link="https://github.com/JSchalon/"
                ></LinkBlob>
              </div>
            </div>
          </div>
          {/* Work Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Work Experience
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">
                  Windows Application Software Developer
                </h3>
                <p className="text-sm">nok9 • 2025 - now</p>
                <p className="skill-paragraph mt-2">
                  nok9 is a Malmö-based company that produces testing and
                  certification hardware for wireless charging devices using the
                  Qi standard. My main responsibilities in this role include
                  updating and maintaining our software, which is internally
                  used to create tests per the Qi standard specification, and
                  that customers use to test and certify devices against. This
                  includes both the GUI and the underlying logic, including
                  communication with our firmware.
                </p>
                <p className="skill-paragraph mt-2">
                  In this role as the main software developer for nok9 I
                  developed several skills, both in self-management, working in
                  multi-disciplinary teams, but also hard skills, both in C# and
                  the Qi standard. nok9's software is quite complex and has a
                  large codebase, so I have gained significant experience
                  working with and understanding legacy code, improving it and
                  adding new features. I have directly worked with our hardware
                  and firmware engineers, as well as our production and customer
                  service to implement new features and further develop existing
                  ones.
                </p>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">
                  Master of Science - Strategic Media Development
                </h3>
                <p className="text-sm">Malmö Universitet • 2022 - 2024</p>
              </div>
              <div>
                <h3 className="text-white text-xl">
                  Bachelor of Science - Media Technologies
                </h3>
                <p className="text-sm">Universität zu Lübeck • 2018 - 2022</p>
              </div>
            </div>
          </div>
          {/* Frontend Development Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Front-end Development
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">Vue.js</h3>
                <p className="skill-paragraph mt-2">
                  I have used Vue.js for several projects since 2022, including
                  for my bachelor thesis, during which I developed a functional
                  prototype for an{" "}
                  <Link
                    to={
                      "/project/" +
                      (projects.find((p) => p.id === "pro-interaction-editor")
                        ?.route || "#")
                    }
                  >
                    {" "}
                    <span className="underline">interaction editor</span>
                  </Link>{" "}
                  using Interact.js. In this project I implemented drag-and-drop
                  functionality, complex state management, and Dropbox
                  uploads/downloads using their API at the time.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">React & TypeScript</h3>
                <p className="skill-paragraph mt-2">
                  This portfolio website is my biggest React and TS project so
                  far. During this project I have learned a lot about modern
                  standards and best practices for React, including component
                  reusability, type safety, hooks, and context. While I am still
                  learning the deeper details of React, my existing experience
                  with Vue.js, as well as standard HTML, CSS, and JS, means that
                  I am quite comfortable with the underlying concepts already.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Tailwind</h3>
                <p className="skill-paragraph mt-2">
                  This website is my first larger project using Tailwind. I have
                  some prior experience using it in smaller projects and tests,
                  though it has been a while. Of course I also know my way
                  around standard CSS as well, as I have been interested in web
                  development since 2018. While I am not an expert designer, I
                  am capable of designing and implementing responsive layouts as
                  needed.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Three.js</h3>
                <p className="skill-paragraph mt-2">
                  Through creating this website, I now have some experience
                  using Three.js, specifically React Three Fiber and React Three
                  Drei, to create and program interactive 3D elements and
                  animations for web applications. All 3D models and scenes used
                  on this site were created and animated by me.
                </p>
              </div>
            </div>
          </div>

          {/* Backend & Programming Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Backend & Programming
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">Python</h3>
                <p className="skill-paragraph mt-2">
                  I have used Python in quite a few projects, including during
                  my master's thesis to prototype a language learning
                  <Link
                    to={
                      "/project/" +
                      (projects.find((p) => p.id === "pro-facilitator-bot")
                        ?.route || "#")
                    }
                  >
                    {" "}
                    <span className="underline">facilitator bot</span>
                  </Link>{" "}
                  using Flask. I have also developed a larger Python-based
                  project, namely a program to display
                  <Link
                    to={
                      "/project/" +
                      (projects.find((p) => p.id === "pro-spf")?.route || "#")
                    }
                  >
                    {" "}
                    <span className="underline">protogen faces</span>
                  </Link>{" "}
                  using matrix displays on Raspberry Pi.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Java</h3>
                <p className="skill-paragraph mt-2">
                  I learned Java during my bachelor's degree, as I have used it
                  for both smaller and larger projects during university
                  courses. During a larger team project, we created a fully
                  functional
                  <Link
                    to={
                      "/project/" +
                      (projects.find((p) => p.id === "pro-java-chess")?.route ||
                        "#")
                    }
                  >
                    {" "}
                    <span className="underline">chess game</span>{" "}
                  </Link>
                  with JavaFX GUI and comprehensive unit testing, with a focus
                  on clean architecture and test-driven development.
                </p>
              </div>
              <div>
                <h3 className="text-white text-xl">C#</h3>
                <p className="skill-paragraph mt-2">
                  The bulk of my experience in C# comes from working at nok9,
                  though I had some Unity experience before and my Java
                  knowledge was helpful as well. I have mainly worked on
                  maintaining and developing a WPF-based windows application,
                  with some additional work on a Blazor-based webservice. I have
                  worked directly with both WPF and a migration to Avalonia,
                  though my main work has been more on technical features, as
                  well as performance and stability improvements.
                </p>
              </div>
            </div>
          </div>

          {/* Design & Analysis Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Design & Analysis
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">Usability & Design</h3>
                <p className="skill-paragraph mt-2">
                  I am familiar with base concepts around usability,
                  accessibility, and UI/UX design, due to my background in media
                  technologies. I have worked with wireframes and prototypes and
                  performed usability testing before. I try to put a strong
                  focus on accessibility and inclusive design principles.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Tools & Methods</h3>
                <p className="skill-paragraph mt-2">
                  I have a bit of experience in Figma, Miro, Notion, and Trello
                  for design and collaboration. I have experience with data
                  visualization and analysis using Tableau and network analysis
                  with Gephi.
                </p>
              </div>
            </div>
          </div>
          {/* Standards and Such */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Standards and Specifications
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">Qi Standard</h3>
                <p className="skill-paragraph mt-2">
                  I have gained significant experience with the Qi standard for
                  wireless charging from my work at nok9. I am familiar with the
                  technical specifications and requirements for both
                  transmitters and receivers, as well as the testing and
                  certification processes involved. My knowledge of the
                  communication protocol is extensive, with a fundamental
                  understanding of the underlying physical communications layer
                  as well.
                </p>
              </div>
            </div>
          </div>
          {/* Languages Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white text-lg">German</h3>
                <p className="">Native</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white text-lg">English</h3>
                <p className="">C2 Certified</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white text-lg">Swedish</h3>
                <p className="">Basic but improving</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white text-lg">French</h3>
                <p className="">Basic</p>
              </div>
            </div>
          </div>
        </IntroAnimation>
      </div>
    </section>
  );
};

export default About;
