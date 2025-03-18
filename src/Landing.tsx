// Implements landing page
// has 3js scene and implements cube
// working with cube changes scene, colors, and camera
// needs 3d import, and create scripts
import { Canvas } from "@react-three/fiber";
import Cube from "./Components/Cube";
import {
  Backdrop,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";

const Landing = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <OrbitControls makeDefault />
          <Cube envMapIntensity={5} />
          <Environment preset="city" />
          <mesh position={[0, -2.1, 0]}>
            <boxGeometry args={[100, 1, 100]} />
            <meshBasicMaterial color="white" />
          </mesh>
          <Sky />
        </Canvas>
      </div>
    </section>
  );
};

export default Landing;
