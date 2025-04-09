import Home from "./routes/Home";
import "./index.css";
import Header from "./components/Header";
import About from "./routes/About";

function App() {
  return (
    <main className="w-full h-full">
      <Header />
      <Home />
      <About />
    </main>
  );
}

export default App;
