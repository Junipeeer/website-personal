import Home from "./routes/Home";
import "./index.css";
import Header from "./components/Header";
import About from "./routes/About";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import PersonalWebsite from "./routes/project pages/PersonalWebsite";
import SimpleProtogenFace from "./routes/project pages/SimpleProtogenFace";
import SCFacilitatorBot from "./routes/project pages/SCFacilitatorBot";
import InteractionEditor from "./routes/project pages/InteractionEditor";
import JavaChess from "./routes/project pages/JavaChess";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="w-full h-full bg-neutral-900">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route
            path="project/personal-Website"
            element={<PersonalWebsite />}
          ></Route>
          <Route
            path="project/simple-protogen-face"
            element={<SimpleProtogenFace />}
          ></Route>
          <Route
            path="project/facilitator-bot"
            element={<SCFacilitatorBot />}
          ></Route>
          <Route
            path="project/interaction-editor"
            element={<InteractionEditor />}
          ></Route>
          <Route path="project/chess-dot" element={<JavaChess />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
