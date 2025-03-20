// Implements landing page
// has 3js scene and implements cube
// working with cube changes scene, colors, and camera
// needs 3d import, and create scripts
import { Canvas } from "@react-three/fiber";
import CubeScene from "../Components/models/CubeScene";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

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
        <Canvas>
          <Suspense fallback={`<h1 className="text-white">loading</h1>`}>
            <OrbitControls makeDefault />
            <ambientLight intensity={1} />
            <CubeScene isMouseInWindow={isMouseInWindow} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
