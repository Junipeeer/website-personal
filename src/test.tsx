import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RenderTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const NestedScene = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const CubeWithViewport = () => {
  const planeRef = useRef(new THREE.CircleGeometry());

  const test = useControls({ scale: { value: 1, min: 0.01, max: 3 } });

  return (
    <mesh>
      {/* This plane acts as the viewport */}
      <circleGeometry ref={planeRef} args={[test.scale, 64]} />
      <meshBasicMaterial>
        <RenderTexture attach="map">
          <ambientLight />
          <NestedScene />
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};

const App = () => {
  return (
    <section id="Home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          {/* Your main scene */}
          <CubeWithViewport />
          <mesh position={[0, 0, -0.51]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          <ambientLight intensity={1}></ambientLight>
          <OrbitControls></OrbitControls>
          {/* ...other main scene elements */}
        </Canvas>
      </div>
    </section>
  );
};

export default App;
