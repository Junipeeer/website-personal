import { projects } from "../../constants";
import ProjectHero, {
  ProjectSection,
  ProjectHeader,
  ProjectBackLink,
} from "../../components/project helpers/ProjectArticleSections";

const SimpleProtogenFace = () => {
  const project = projects.find((p) => p.id === "pro-spf");
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
                I created Simple Protogen Face (SPF) to have a simpler
                alternative to{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                  href="https://github.com/coelacant1/ProtoTracer"
                >
                  ProtoTracer
                </a>{" "}
                for running protogen (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                  href="en.wiktionary.org/wiki/protogen"
                >
                  what is that?
                </a>
                ) face animations on Raspberry Pi hardware.
              </p>
              <p>
                While Prototracer is powerful, as it is effectively a 3d
                rendering engine. It feels complicated to use and also requires
                specific hardware. As I had a Raspberry Pi Zero laying around, I
                decided to create a simpler, cost effective solution.
              </p>
              <p>
                SPF runs on two chained 64x32 HUB75 LED matrices and supports a
                few additional interactive I/O features like proximity sensing
                and custom animations, while maintaining a simpler approach that
                doesn't require programming knowledge.
              </p>
              <p>
                With SPF I tried to fo focuses on simplicity and accessibility,
                allowing users to run pre-created or custom face animations
                using standard image files or GIFs. The project includes support
                for a few hardware add-ons like proximity sensors and buttons.
              </p>
            </div>
          </ProjectSection>

          <ProjectSection title="Key Features">
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>
                  Support for pre-created or custom face animations using GIFs
                  or image sequences
                </li>
                <li>
                  Interactive features including boop detection via proximity
                  sensors
                </li>
                <li>
                  Configurable animation system with weighted random selection
                </li>
                <li>Custom text display support</li>
                <li>
                  Physical hardware button integration with multiple interaction
                  modes
                </li>
                <li>Flexible configuration through YAML files</li>
              </ul>
            </div>
          </ProjectSection>

          <ProjectSection title="Technical Implementation">
            <div className="space-y-4">
              <p>
                Built primarily in Python, the project uses the
                rpi-rgb-led-matrix library for LED matrix control and various
                hardware interface libraries for sensor integration (gpiozero,
                busio, rpi_ws281x). The architecture is designed to be modular,
                allowing for easy addition of new animations and sensor
                implementations.
              </p>
              <p>
                The program implements a main animation loop that handles face
                transitions, sensor inputs, and animation playback. All
                animations are loaded into memory as canvases, with configurable
                framerates, brightness etc.
              </p>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                Minimum Hardware Integration
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Two 64x32 HUB75 LED matrices for display output</li>
                <li>Raspberry Pi Zero W (or better) as the main controller</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                Additional Hardware support
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>APDS9960 proximity sensor for "boop" detection</li>
                <li>Optional button inputs for additional interactions</li>
                <li>Additional ws2811 or ws2812 LEDS</li>
                <li>Technically also support</li>
              </ul>
            </div>
          </ProjectSection>

          <ProjectSection title="Challenges & Solutions">
            <div className="space-y-4">
              <p>
                The main challenge was optimizing performance on the
                resource-constrained Raspberry Pi Zero W. The Python bindings
                for the LED matrix library proved to be quite
                resource-intensive, particularly when running multiple auxiliary
                features as well. While a C++ or C rewrite would offer better
                performance, the current implementation is good enough for my
                purposes. I will likely revisit it someday though.
              </p>
              <p>
                Another challenge was how to run the program loop. Currently,
                there is a main loop with each additional hardware I/O component
                in their own thread. While this works, the thread switching may
                increase performance draw. For a potential rewrite I would adopt
                a sequential main loop instead.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </article>
  );
};

export default SimpleProtogenFace;
