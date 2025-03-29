// Implements landing page
// has 3js scene and implements cube
// working with cube changes scene, colors, and camera
// needs 3d import, and create scripts
import { Canvas } from "@react-three/fiber";
import CubeScene from "../Components/models/CubeScene";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, use, useEffect, useState } from "react";
import Cube from "../Components/models/Cube";

const Home = () => {
  const [isMouseInWindow, setIsMouseInWindow] = useState(true);
  const { nodes, materials } = useGLTF("/models/cube_scene.glb");

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
        <Canvas
          shadows
          camera={{
            position: [0, 0, 88.424],
            far: 2000,
            near: 0.1,
            fov: 28,
            rotation: [0, 0, 0],
          }}
        >
          <Suspense fallback={`<h1 className="text-white">loading</h1>`}>
            <ambientLight intensity={1} />
            <OrbitControls />
            <Cube
              isMouseInWindow={isMouseInWindow}
              material={materials.glass}
              geometry={nodes.Cube.geometry}
            />
            <CubeScene isMouseInWindow={isMouseInWindow} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
