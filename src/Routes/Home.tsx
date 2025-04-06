import { Canvas } from "@react-three/fiber";
import CubeScene from "../Components/models/HomeScene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Cube from "../Components/models/cube/Cube";
import { mainCam } from "../constants/components";

const Home = () => {
  const [isMouseInWindow, setIsMouseInWindow] = useState(true);

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsMouseInWindow(false);
    };
    const handleMouseEnter = () => {
      setIsMouseInWindow(true);
    };

    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="Home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas shadows camera={mainCam} gl={{ localClippingEnabled: true }}>
          <Suspense fallback={`<h1 className="text-white">loading</h1>`}>
            <Environment preset="night" />
            <Cube isMouseInWindow={isMouseInWindow} />
            <CubeScene isMouseInWindow={isMouseInWindow} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
