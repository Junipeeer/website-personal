import { Link } from "react-router-dom";
import { LinkBlob } from "../components/project helpers/Blobs";
import { projects } from "../constants";
import { IntroAnimation } from "../components/TransitionsOverlays";

const About = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper max-w-4xl">
        {/* Bio Section */}
        <IntroAnimation className="space-y-16">
          <div className="space-y-6 border-b-2 border-lime-200 p-6">
            <h1 className="text-4xl font-bold text-white">About Me</h1>
            <p className="text-lg leading-relaxed text-neutral-300 text-justify">
              I am a recent M.Sc. graduate in the field of media technologies. I
              enjoy solving problems creatively and working on interesting
              projects, with a passion for usability and accessibility. I seek
              to apply my skills to better facilitate users' interaction with
              media systems and create solutions to real world problems.
            </p>
            {/* Social Links - Moved up and redesigned */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">
                Connect with me
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
              Frontend Development
            </h2>
            <div className="border-l-2 border-neutral-700 pl-6 space-y-8">
              <div>
                <h3 className="text-white text-xl">Vue.js</h3>
                <p className="skill-paragraph mt-2">
                  I have used Vue.js for several projects since 2022, including
                  during my Bachelor thesis which I developed an{" "}
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
                  using Interact.js, implementing drag-and-drop functionality,
                  complex state management and DropBox uploads/downloads using
                  their API at the time.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">React & TypeScript</h3>
                <p className="skill-paragraph mt-2">
                  I am newer to React and TS with my biggest projects being this
                  portfolio website. During this project I have learned modern
                  standards and best practices for React, including component
                  reusability, type safety, hooks and context. While I am still
                  learning the details of React specifically, my existing
                  experience with Vue.js, as well as standard HTML, CSS and JS
                  means I am quite comfortable with the underlying concepts.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Three.js</h3>
                <p className="skill-paragraph mt-2">
                  I have some experience using Three.js, specifically
                  React-three-fiber and react three Drei to create and program
                  interactive 3D elements and animations for web applications.
                  All 3d models and scenes used on this site were created and
                  animated by me, using Blender.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Tailwind</h3>
                <p className="skill-paragraph mt-2">
                  I have worked with Tailwind in a few projects, and used it for
                  this website. While I am not an expert designer, I am capable
                  of creating responsive layouts using as needed. I also know my
                  way around standard CSS and a bit of SCSS as well.
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
                  my master thesis to prototype a language learning
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
                  using Flask. I have also developed a larger project, namely a
                  <Link
                    to={
                      "/project/" +
                      (projects.find((p) => p.id === "pro-spf")?.route || "#")
                    }
                  >
                    {" "}
                    <span className="underline">protogen face display</span>
                  </Link>{" "}
                  program using matrix displays on Raspberry Pi.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Java</h3>
                <p className="skill-paragraph mt-2">
                  I learned Java during my Bachelor and have used it for smaller
                  and larger projects during uinversity courses. During a larger
                  team project we created a fully functional
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
                  on on clean architecture and test-driven development.
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
                  As I have a background in media technologies, I am familiar
                  with base concepts around usability, accessibility and UI/UX
                  design. I have worked with wireframes and prototypes, and
                  performed usability testing before. I try to put a strong
                  focus on accessibility and inclusive design principles.
                </p>
              </div>

              <div>
                <h3 className="text-white text-xl">Tools & Methods</h3>
                <p className="skill-paragraph mt-2">
                  I have a bit of experience in Figma, Miro, Notion and Trello
                  for design and collaboration. I have experience with data
                  visualization and analysis using Tableau and network analysis
                  with Gephi.
                </p>
              </div>
            </div>
          </div>
          {/* Languages Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Languages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white text-lg">German</p>
                <p className="">Native</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white text-lg">English</p>
                <p className="">C2 Certified</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white text-lg">Swedish</p>
                <p className="">Basic but improving</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white text-lg">French</p>
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
