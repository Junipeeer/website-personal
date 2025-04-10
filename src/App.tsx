import Home from "./routes/Home";
import "./index.css";
import Header from "./components/Header";
import About from "./routes/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <Router>
      <main className="w-full h-full">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
