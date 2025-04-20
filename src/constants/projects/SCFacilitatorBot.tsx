import ProjectTemplate from "../../components/project-helpers/ProjectTemplate";

const InteractionEditor = () => {
  const sections = [
    {
      title: "Project Overview",
      content: (
        <>
          <p>
            The Språkcafé Facilitator Bot is a GPT-4-powered assistant designed
            to support language cafés - informal gatherings where people
            practice speaking languages in a café-like setting. Created as part
            of my master's thesis in media technologies, the goal was to assess
            how a conversational agent could enhance language learning
            experiences, particularly in settings with limited native speaker
            support.
          </p>
          <p>
            Based on research conducted at two Swedish language cafés in Malmö,
            the bot serves as both a facilitator for language practice and a
            potential tool for collecting data on language learning patterns in
            a research context. It uses OpenAI's GPT-4 for natural conversation
            generation, combined with ElevenLabs for text-to-speech and
            Microsoft Azure for speech recognition. The project is based on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
              href="https://en.wiktionary.org/wiki/protogen"
              aria-label="Babagaboosh GitHub"
            >
              Babagaboosh
            </a>{" "}
            by DougDoug. My main contribution was to create a simple front end
            using Flask on top of this, rather than to create a fully functional
            product.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time verbal conversations using GPT-4</li>
            <li>Speech recognition via Microsoft Azure</li>
            <li>Natural speech synthesis through ElevenLabs</li>
            <li>Flask-based front-end featuring a friendly cat avatar</li>
            <li>User-initiated interaction style</li>
          </ul>
        </>
      ),
    },
    {
      title: "Technical Implementation",
      content: (
        <>
          <p>
            The bot is built in Python using Flask for the backend
            infrastructure. It integrates with Babagaboosh, which uses three
            main AI services: OpenAI's GPT-4 for conversation generation,
            ElevenLabs' API for high-quality text-to-speech, and Microsoft
            Azure's speech-to-text services for accurate voice recognition in
            Swedish.
          </p>
          <p>
            The implementation focuses on creating natural, flowing
            conversations while maintaining a balance between helpful
            intervention and allowing organic social interaction. The system is
            designed to be unobtrusive while still providing support for
            language practice. For example, users can ask it vocabulary or
            factual questions or have it propose discussion topics and games.
          </p>
        </>
      ),
    },
    {
      title: "Research Context",
      content: (
        <>
          <p>
            This project was developed as part of my master's thesis, which
            focused on how generative AI can support second language acquisition
            in informal learning environments. The research involved
            observations and interviews at two language cafés in Malmö. The
            research is also based in the broader context of multimodal learning
            analytics (MMLA), which uses multimodal data analysis to model,
            analyze, and support learning processes, mainly in a research
            context.
          </p>
          <p>
            The findings revealed that different language café settings have
            varying needs for technological support. A university-based café I
            visited often had fewer native speakers present and therefore showed
            a greater need for facilitation tools like this bot. In theory, a
            bot like this could also collect data for MMLA, which could be
            analyzed to gain insights into how language learners interact with
            each other and the bot, how people's language skills develop over
            time, and what dynamics unfold at language cafés.
          </p>
        </>
      ),
    },
  ];

  return (
    <ProjectTemplate projectId="pro-facilitator-bot" sections={sections} />
  );
};

export default InteractionEditor;
