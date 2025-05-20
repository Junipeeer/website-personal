import Home from "./routes/Home";
import "./index.css";
import Header from "./components/Header";
import About from "./routes/About";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import Blog from "./routes/Blog";
import Lab from "./routes/Lab";
import { getTransitionColor } from "./constants/components3D";
import LoadingOverlay, {
  TransitionFromHome,
} from "./components/TransitionsOverlays";
import PersonalWebsite from "./constants/projects/PersonalWebsite";
import SimpleProtogenFace from "./constants/projects/SimpleProtogenFace";
import SCFacilitatorBot from "./constants/projects/SCFacilitatorBot";
import InteractionEditor from "./constants/projects/InteractionEditor";
import JavaChess from "./constants/projects/JavaChess";
import InteractionEditorDemo from "./constants/demos/InteractionEditorDemo";
import WebsiteAlpha from "./constants/demos/WebsiteAlpha";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.scrollTo({ top: 50, left: 0, behavior: "instant" });
    document.body.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function AppContainer() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [portalBgColor, setPortalBgColor] = useState("");
  const [nextRoute, setNextRoute] = useState("");

  function triggerCubeTransition(route: string, face: number) {
    setPortalBgColor(getTransitionColor(face));
    setIsTransitioning(true);
    setNextRoute(route);
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === "x") {
        sessionStorage.removeItem("hasVisitedBefore");
        window.location.reload();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (isTransitioning && nextRoute) {
      const timer = setTimeout(() => {
        navigate(nextRoute);
        setIsTransitioning(false);
        setPortalBgColor(""); // Clean up
      }, 1000); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, nextRoute]);

  return (
    <>
      {/* Overlay for loading into home */}
      <LoadingOverlay />
      <ScrollToTop />
      <Analytics />
      <Header />
      {/* Overlay for transitioning from home */}
      <TransitionFromHome portalBgColor={portalBgColor} />
      <main>
        <Routes>
          <Route
            index
            element={<Home triggerTransition={triggerCubeTransition} />}
          />
          <Route path="about" element={<About />} />
          {/* Lab and demos */}
          <Route path="lab" element={<Lab />} />
          <Route
            path="demo/interaction-editor"
            element={<InteractionEditorDemo />}
          />
          <Route path="demo/website-ps2" element={<WebsiteAlpha />} />
          <Route path="blog" element={<Blog />} />
          {/* Portfolio Projects */}
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="project/personal-Website"
            element={<PersonalWebsite />}
          />
          <Route
            path="project/simple-protogen-face"
            element={<SimpleProtogenFace />}
          />
          <Route
            path="project/facilitator-bot"
            element={<SCFacilitatorBot />}
          />
          <Route
            path="project/interaction-editor"
            element={<InteractionEditor />}
          />
          <Route path="project/java-chess" element={<JavaChess />} />
        </Routes>
      </main>
    </>
  );
}
