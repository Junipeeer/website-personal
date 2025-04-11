import { Canvas, useThree } from "@react-three/fiber";
import CubeScene from "../components/models/HomeScene";
import { Environment, Preload, Stars } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Cube from "../components/models/Cube";
import {
  calculateHoleSize,
  clickPlanes,
  mainCam,
} from "../constants/components3D";
import ClickPlane from "../components/helpers3D/ClickPlane";
import CanvasLoader from "../components/helpers3D/CanvasLoader";

interface CPGProps {
  setActiveFace: (index: number) => void;
}

const ClickPlaneGenerator = ({ setActiveFace }: CPGProps) => {
  const { viewport } = useThree();
  const holeSize = calculateHoleSize(viewport, mainCam);
  const [planesActive, setPlanesActive] = useState(false);

  // Handle cube appearance after mount
  useEffect(() => {
    const timer = setTimeout(() => setPlanesActive(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <group>
      {clickPlanes.map((plane) => (
        <ClickPlane
          key={plane.id}
          points={plane.getPoints(viewport, holeSize)}
          onPointerEnter={() => {
            if (planesActive) setActiveFace(plane.id);
          }}
          onPointerOut={() => setActiveFace(-1)}
          onClick={() => console.log(plane.id)}
        />
      ))}
    </group>
  );
};

const Home = () => {
  const [isMouseInWindow, setIsMouseInWindow] = useState(true);
  const [activeFace, setActiveFace] = useState(-1);

  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const handleMouseLeave = () => {
      setIsMouseInWindow(false);
      setActiveFace(-1);
    };
    const handleMouseEnter = () => {
      setIsMouseInWindow(true);
    };

    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="Home" className="page-wrapper h-full flex">
      <Canvas id="canvas" camera={mainCam} gl={{ localClippingEnabled: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <Preload all />
          <Environment preset="night" />
          <Stars radius={300} count={25000} />
          <Cube isMouseInWindow={isMouseInWindow} activeFace={activeFace} />
          <CubeScene isMouseInWindow={isMouseInWindow} />
          <ClickPlaneGenerator setActiveFace={setActiveFace} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
