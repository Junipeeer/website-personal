import { IntroAnimation } from "../../components/TransitionsOverlays";
import { ProjectBackLink } from "../../components/project-helpers/ProjectArticleSections";
import { LinkBlob } from "../../components/project-helpers/Blobs";

const WebsiteAlpha = () => {
  return (
    <section className="page-wrapper">
      <IntroAnimation className="space-y-8">
        {/* Content section with normal width */}
        <div className="content-wrapper">
          <div className="page-header border-b-transparent">
            <h1 className="text-4xl font-bold text-white">
              Alpha test for this website
            </h1>
            <ProjectBackLink />
            <p className="text-lg leading-relaxed">
              Before I switched to Three.js, I created a simple demo using React
              and Framer Motion. Here the nod to the design of the GameCube UI
              is also more clear than in the final design. I quite like the
              animated emojis inside the cube, though this was difficult to do
              with Three.js. I also added an emoji clock that works (well, every
              30 minutes at least), though I opted not to carry this over to the
              final design, as it does not really serve much of a purpose.
            </p>
            <p className="text-lg leading-relaxed">
              Initially I also had a translucent cube for the final website,
              though I found it hard to achieve a nice, unified look. A
              screenshot from this previous version can be seen{" "}
              <a
                href="#pic"
                className="underline"
                aria-label="shortcut to image of previous version of the cubee"
              >
                below
              </a>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <LinkBlob
                icon="Github"
                text="View Code"
                link="https://github.com/Junipeeer/website-ps2"
              />
              <LinkBlob
                icon="external"
                text="View fullscreen on Github Pages"
                link="https://junipeeer.github.io/website-ps2/"
              />
            </div>
          </div>

          <div className="lg:hidden mt-8 p-4 sm:p-6 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
            <p className="text-yellow-200/80">
              ⚠️ Small Screen detected - This demo does not really offer good
              touch support, as the main goal was to see how feasible the basic
              idea was.
            </p>
          </div>
        </div>

        {/* Full-width iframe container */}
        <div className="max-lg:hidden w-full flex justify-center">
          <div className="bg-neutral-900 rounded-lg overflow-hidden md:w-[90vw] lg:w-[85vw] xl:w-[80vw] -translate-y-25">
            <iframe
              src="https://junipeeer.github.io/website-ps2//"
              className="w-full h-[90vh] border-0"
              title="Interaction Editor Demo"
            />
          </div>
        </div>
        <div className="content-wrapper -translate-y-35">
          <div className="page-header border-transparent" id="pic">
            <h2 className="text-3xl font-bold text-white">
              Earlier cube and scene design.
            </h2>
            <div className="flex justify-center">
              <img
                src="/img/website-thumbnail-old.png"
                className="md:w-10/12"
                alt="old version of the website landing page with transparent cube"
              ></img>
            </div>
          </div>
        </div>
      </IntroAnimation>
    </section>
  );
};

export default WebsiteAlpha;
