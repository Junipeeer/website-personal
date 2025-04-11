import Home from "./routes/Home";
import "./index.css";
import Header from "./components/Header";
import About from "./routes/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import PersonalWebsite from "./routes/project pages/PersonalWebsite";
import SimpleProtogenFace from "./routes/project pages/SimpleProtogenFace";
import SCFacilitatorBot from "./routes/project pages/SCFacilitatorBot";
import InteractionEditor from "./routes/project pages/InteractionEditor";

function App() {
  return (
    <Router>
      <Header />
      <main className="w-full h-full bg-neutral-900">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route
            path="portfolio/personal-Website"
            element={<PersonalWebsite />}
          ></Route>
          <Route
            path="portfolio/simple-protogen-face"
            element={<SimpleProtogenFace />}
          ></Route>
          <Route
            path="portfolio/facilitator-bot"
            element={<SCFacilitatorBot />}
          ></Route>
          <Route
            path="portfolio/interaction-editor"
            element={<InteractionEditor />}
          ></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
