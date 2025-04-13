import { projects } from "../../constants";
import ProjectHero, {
  ProjectSection,
  ProjectHeader,
  ProjectBackLink,
} from "../../components/project helpers/ProjectArticleSections";

const SCFacilitatorBot = () => {
  const project = projects.find((p) => p.id === "pro-facilitator-bot");
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
                The Språkcafé Facilitator Bot is a GPT-4-powered assistant
                designed to support language cafés - informal gatherings where
                people practice speaking languages in a café-like setting.
                Created as part of my Master's thesis in Media Technologies, my
                goal was to see how a conversational agent could enhance
                language learning experiences, particularly in settings with
                limited native speaker support.
              </p>
              <p>
                Based on research conducted at two Swedish language cafés in
                Malmö, the bot serves as both a facilitator for language
                practice and a tool for collecting data on language learning
                patterns. It uses OpenAI's GPT-4 for natural conversation
                generation, combined with Elevenlabs for text-to-speech and
                Microsoft Azure for speech recognition. The project is based on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                  href="https://en.wiktionary.org/wiki/protogen"
                >
                  Babagaboosh
                </a>{" "}
                by DougDoug.
              </p>
            </div>
          </ProjectSection>

          <ProjectSection title="Key Features">
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                <li>Real-time verbal conversations using GPT-4</li>
                <li>Natural speech synthesis through Elevenlabs</li>
                <li>Speech recognition via Microsoft Azure</li>
                <li>Flask-based front-end featuring a friendly cat avatar </li>
                <li>User-initiated interaction style</li>
              </ul>
            </div>
          </ProjectSection>

          <ProjectSection title="Technical Implementation">
            <div className="space-y-4">
              <p>
                The bot is built in Python using Flask for the backend
                infrastructure. It integrates wit Babagaboosh, which uses three
                main AI services: OpenAI's GPT-4 for conversation generation,
                Elevenlabs' API for high-quality text-to-speech conversion, and
                Microsoft Azure's speech-to-text services for accurate voice
                recognition.
              </p>
              <p>
                The implementation focuses on creating natural, flowing
                conversations while maintaining a balance between helpful
                intervention and allowing organic social interaction. The system
                is designed to be unobtrusive while still providing valuable
                support for language practice. Users can ask it vocabulary or
                factual questions in Swedish.
              </p>
            </div>
          </ProjectSection>

          <ProjectSection title="Research Context">
            <div className="space-y-4">
              <p>
                This project was developed as part of a my Master Thesis, which
                focussed on how generative AI can support second language
                acquisition in informal learning environments. The research
                involved observations and interviews at two language cafés in
                Malmö. The research is also based in the broader context of
                multimodal learning analytics (MMLA), which uses multimodal data
                analysis to analyse and support learning processes.
              </p>
              <p>
                The findings revealed that different language café settings have
                varying needs for technological support. A University-based café
                I visited often had fewer native speakers present and therefore
                showed a greater need for facilitation tools like this bot.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </article>
  );
};

export default SCFacilitatorBot;
