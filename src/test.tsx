import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  MeshPortalMaterial,
  CameraControls,
} from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";

const NestedScene = () => {
  return (
    <group>
      <mesh position={[0, 0, -0.5]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </group>
  );
};

const CubeWithPortal = () => {
  // Initialize the portal ref with a null initial value to satisfy TS
  const portal = useRef<any>(null);
  const mesh = useRef(new THREE.Mesh());
  const hovered = useRef(false);
  const circleGeometry = useRef(new THREE.CircleGeometry(0.1, 64));

  useFrame((_, delta) => {
    const targetRadius = hovered.current ? 0.5 : 0.1;
    const currentRadius = circleGeometry.current.parameters.radius;
    // Ease the radius value toward the target using a damping factor (e.g. 4)
    easing.damp(
      circleGeometry.current.parameters,
      "radius",
      targetRadius,
      0.05,
      delta
    );

    // Only update geometry if the change is significant
    if (
      Math.abs(circleGeometry.current.parameters.radius - currentRadius) > 0.001
    ) {
      const newGeometry = new THREE.CircleGeometry(
        circleGeometry.current.parameters.radius,
        64
      );
      mesh.current.geometry.dispose(); // Dispose the old geometry
      mesh.current.geometry = newGeometry;
      circleGeometry.current = newGeometry;
    }
  });

  return (
    <mesh
      ref={mesh}
      onPointerEnter={(e) => {
        e.stopPropagation();
        hovered.current = true;
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        hovered.current = false;
      }}
    >
      <primitive object={circleGeometry.current} />
      <MeshPortalMaterial ref={portal} side={THREE.DoubleSide} worldUnits>
        <ambientLight />
        <NestedScene />
      </MeshPortalMaterial>
    </mesh>
  );
};

const App = () => {
  return (
    <section id="Home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <CubeWithPortal />
          <mesh position={[0, 0, -0.51]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          <ambientLight intensity={1} />
          <OrbitControls />
          <CameraControls makeDefault />
        </Canvas>
      </div>
    </section>
  );
};

export default App;
