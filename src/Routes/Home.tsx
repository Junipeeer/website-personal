import { Canvas, useThree } from "@react-three/fiber";
import CubeScene from "../Components/models/HomeScene";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Cube from "../Components/models/Cube";
import {
  calculateHoleSize,
  clickPlanes,
  mainCam,
} from "../constants/components3D";
import ClickPlane from "../Components/helpers3D/ClickPlane";

interface CPGProps {
  setActiveFace: (index: number) => void;
}

const ClickPlaneGenerator = ({ setActiveFace }: CPGProps) => {
  const { viewport } = useThree();
  const holeSize = calculateHoleSize(viewport, mainCam);

  return (
    <group>
      {clickPlanes.map((plane) => (
        <ClickPlane
          key={plane.id}
          points={plane.getPoints(viewport, holeSize)}
          onPointerEnter={() => setActiveFace(plane.id)}
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
    const handleMouseLeave = () => {
      setIsMouseInWindow(false);
      setActiveFace(-1);
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
    <section id="Home" className="h-full w-full flex flex-col relative">
      <div className="w-full h-full inset-0">
        <Canvas camera={mainCam} gl={{ localClippingEnabled: true }}>
          <Suspense fallback={`<h1 className="text-white">loading</h1>`}>
            <Environment preset="night" />
            <OrbitControls></OrbitControls>
            <Stars radius={300} count={25000} />
            <Cube isMouseInWindow={isMouseInWindow} activeFace={activeFace} />
            <CubeScene isMouseInWindow={isMouseInWindow} />
            <ClickPlaneGenerator setActiveFace={setActiveFace} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Home;
