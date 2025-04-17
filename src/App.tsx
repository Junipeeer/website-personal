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
import PersonalWebsite from "./routes/project pages/PersonalWebsite";
import SimpleProtogenFace from "./routes/project pages/SimpleProtogenFace";
import SCFacilitatorBot from "./routes/project pages/SCFacilitatorBot";
import InteractionEditor from "./routes/project pages/InteractionEditor";
import JavaChess from "./routes/project pages/JavaChess";
import { useEffect, useState } from "react";
import Lab from "./routes/Lab";
import Blog from "./routes/Blog";
import { motion, AnimatePresence } from "framer-motion";
import { getTransitionColor } from "./constants/components3D";
import LoadingOverlay, {
  TransitionFromHome,
} from "./components/TransitionsOverlays";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
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
      <Header />
      {/* Overlay for transitioning from home */}
      <TransitionFromHome portalBgColor={portalBgColor} />
      <main
        className="w-full h-full"
        style={{ backgroundColor: "var(--portal-bg-color, #111)" }}
      >
        <Routes>
          <Route
            index
            element={<Home triggerTransition={triggerCubeTransition} />}
          />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="lab" element={<Lab />} />
          <Route path="blog" element={<Blog />} />
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
          <Route path="project/chess-dot" element={<JavaChess />} />
        </Routes>
      </main>
    </>
  );
}
