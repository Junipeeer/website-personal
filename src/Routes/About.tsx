import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        {/* Bio Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <p className="text-lg leading-relaxed text-justify mb-4">
            I am a recent M.Sc. graduate in the field of media technologies. I
            enjoy solving problems creatively and working on interesting
            projects, with a passion for usability and accessibility. I seek to
            apply my skills to better facilitate users' interaction with media
            systems and create solutions to real world problems.
          </p>

          {/* Education Section */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
              Education
            </h2>
            <div className="border-l-2 border-neutral-700 pl-4 space-y-6">
              <div>
                <h3 className="text-white text-lg">
                  Master of Science - Strategic Media Development
                </h3>
                <p className="text-sm">Malmö Universitet • 2022 - 2024</p>
              </div>
              <div>
                <h3 className="text-white text-lg">
                  Bachelor of Science - Media Technologies
                </h3>
                <p className="text-sm">Universität zu Lübeck • 2018 - 2022</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white mb-2">Development</h3>
                <ul className="space-y-2">
                  <li>
                    Front-end: React, VueJS, TypeScript, Tailwind, ThreeJS
                  </li>
                  <li>
                    Programming: Java incl. unit testing, Python, C# (Unity)
                  </li>
                  <li>Version Control: Git</li>
                </ul>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <h3 className="text-white mb-2">Design & Analysis</h3>
                <ul className="space-y-2">
                  <li>
                    Usability methodologies incl. human-centered design,
                    prototyping, and accessibility
                  </li>
                  <li>Design Tools: Miro, Figma, Canva</li>
                  <li>Data Analysis: Tableau, Gephi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Languages
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white">German</p>
                <p className="text-sm">Native</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white">English</p>
                <p className="text-sm">C2 Certified</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white">Swedish</p>
                <p className="text-sm">Solid and improving</p>
              </div>
              <div className="border-l-2 border-neutral-700 pl-4">
                <p className="text-white">French</p>
                <p className="text-sm">Basic</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12 space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Get in Touch
            </h2>
            <div className="w-full flex items-center max-md:justify-between gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/julian-schalon-956117287/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>Julian Schalon</span>
              </a>
              <a
                href="https://github.com/JSchalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>JSchalon</span>
              </a>
              <a
                href="https://github.com/Junipeeer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>Junipeeer (Private)</span>
              </a>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Me
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
