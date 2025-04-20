import ProjectTemplate from "../../components/project helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            I created Simple Protogen Face (SPF) to have a simpler alternative
            to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
              href="https://github.com/coelacant1/ProtoTracer"
              aria-label="ProtoTracer GitHub"
            >
              ProtoTracer
            </a>{" "}
            for running protogen (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
              href="https://en.wiktionary.org/wiki/protogen"
              aria-label="Protogen Wiktionary"
            >
              what is that?
            </a>
            ) face animations on Raspberry Pi hardware.
          </p>
          <p>
            Prototracer is powerful, as it is effectively a 3D rendering engine.
            However, it feels complicated to use and also requires specific
            hardware to run. As I had a Raspberry Pi Zero lying around, I
            decided to create a simpler, broader solution.
          </p>
          <p>
            SPF runs on two chained 64x32 HUB75 LED matrices and supports a few
            additional interactive I/O features like proximity sensing and
            custom animations while maintaining a simpler approach that doesn't
            require programming knowledge.
          </p>
          <p>
            With SPF, I tried to focus on simplicity and accessibility, allowing
            users to run pre-created or custom face animations using standard
            image files or GIFs. The project includes support for a few hardware
            add-ons like proximity sensors and buttons.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Support for pre-created or custom face animations using GIFs or
              image sequences
            </li>
            <li>
              Interactive features including boop detection via proximity
              sensors
            </li>
            <li>
              Configurable animation system with weighted random selection
            </li>
            <li>Limited text display support</li>
            <li>
              Physical hardware button integration with multiple interaction
              modes (click, double click, triple click, and hold)
            </li>
            <li>Flexible configuration through YAML files</li>
          </ul>
        </>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            Built primarily in Python, the project uses the rpi-rgb-led-matrix
            library for LED matrix control and various hardware interface
            libraries for sensor integration (gpiozero, busIO, rpi_ws281x). The
            architecture is designed to be modular, allowing for easy addition
            of new animations and sensor implementations.
          </p>
          <p>
            The program implements a main animation loop that handles face
            transitions, sensor inputs, and animation playback. All animations
            are loaded into memory as canvases, with configurable frame rates
            and other matrix settings like brightness, etc.
          </p>
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Minimum Hardware Integration
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Two 64x32 HUB75 LED matrices for display output</li>
            <li>Raspberry Pi Zero W (or better) as the main controller</li>
          </ul>
          <h3 className="text-xl font-semibold text-white mt-6 mb-2">
            Additional Hardware Support
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>APDS9960 proximity sensor for "boop" detection</li>
            <li>
              Optional button inputs for additional faces, images, and GIFs
            </li>
            <li>Additional WS2811 or WS2812 LEDs</li>
            <li>
              Technically also supports IIC/I2C screens, though these are not
              yet integrated into the main loop
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Challenges & Solutions",
      content: (
        <>
          <p>
            The main challenge was optimizing performance on the
            resource-constrained Raspberry Pi Zero W. The Python bindings for
            the LED matrix library proved to be quite resource-intensive,
            particularly when running multiple auxiliary features as well. While
            a C or C++ rewrite would offer better performance, the current
            implementation is good enough for my purposes. I will likely revisit
            it someday, though.
          </p>
          <p>
            Another challenge was figuring out how to run the program loop. I
            approached the project with the idea to have different threads
            handle different I/O components. Currently, there is a main loop
            with another loop for each button, one for sensors, and one for
            LEDs. While this works, the thread switching may increase
            performance draw and makes adding additional I/O features a bit
            complicated.
          </p>
          <p>
            For a potential rewrite, I would adopt a sequential main loop
            instead, kind of like a game engine where the program runs through a
            series of steps each frame. This could also be used to improve
            performance; for example, if the loop is measurably too slow, the
            next frame could be skipped.
          </p>
        </>
      ),
    },
  ];

  return <ProjectTemplate projectId="pro-spf" sections={sections} />;
};

export default InteractionEditor;
