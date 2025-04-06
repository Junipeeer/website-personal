import { useEffect, useRef } from "react";
import Home from "./Routes/Home";
import "./index.css";

function App() {
  const winke = useRef(null);

  return (
    <main className="w-full h-full">
      <section className="absolute w-full h-10 z-10">
        <div className="w-full flex items-center p-2 ">
          <img src="/img/logo.svg" className="h-[40px]" />
          <h1 className="text-white text-2xl font-bold ml-2">
            Julian Schalon <span ref={winke}>👋</span>
          </h1>
        </div>
      </section>
      <Home />
    </main>
  );
}

export default App;
