import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  MeshPortalMaterial,
  CameraControls,
} from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";
import ClickPlane from "./Components/models/ClickPlane";

const NestedScene = ({
  bgColor = "hotpink",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  children,
}) => {
  return (
    <group>
      {children}
      <mesh rotation={rotation} position={position}>
        <cylinderGeometry args={[0.4, 0.4, 3, 32, 1, true]} />
        <meshToonMaterial
          side={THREE.DoubleSide}
          emissive={bgColor}
          color={bgColor}
        />
      </mesh>
    </group>
  );
};

const PortalPlane = ({
  active = false,
  position = [0, 0, 0.51],
  rotation = [0, 0, 0.51],
  children,
}) => {
  // Initialize the portal ref with a null initial value to satisfy TS
  const portal = useRef<any>(null);
  const mesh = useRef(new THREE.Mesh());
  const target = useRef(new THREE.Group());
  const circleGeometry = useRef(new THREE.CircleGeometry(0.001, 64));

  useFrame((_, delta) => {
    const targetRadius = active ? 0.4 : 0.001;
    const currentRadius = circleGeometry.current.parameters.radius;
    const targetPos = active
      ? new THREE.Vector3(0, 0, 0)
      : new THREE.Vector3(0, -1, 0);
    easing.damp3(target.current.position, targetPos, 0.25, delta);

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
    <mesh ref={mesh} position={position} rotation={rotation}>
      <primitive object={circleGeometry.current} />
      <MeshPortalMaterial ref={portal} side={THREE.DoubleSide} worldUnits>
        <ambientLight />
        <group ref={target}>{children}</group>
      </MeshPortalMaterial>
    </mesh>
  );
};

const App = () => {
  const [activeFace, setActiveFace] = useState(-1);
  const topGeo = useRef(new THREE.Mesh());
  const pi = Math.PI;
  const clickPlanes = [
    {
      index: 0,
      rotation: { x: pi / 2, y: 0, z: 0 },
      position: [0, 0.52, 0],
      label: "top",
    },
    {
      index: 1,
      rotation: { x: pi / 2, y: 0, z: 0 },
      position: [0, -0.52, 0],
      label: "bottom",
    },
    {
      index: 2,
      rotation: { x: 0, y: pi / 2, z: 0 },
      position: [0.52, 0, 0],
      label: "right",
    },
    {
      index: 3,
      rotation: { x: 0, y: pi / 2, z: 0 },
      position: [-0.52, 0, 0],
      label: "left",
    },
  ];

  return (
    <section id="Home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          {clickPlanes.map((plane) => (
            <ClickPlane
              key={plane.label}
              onPointerEnter={(e: Event) => {
                e.stopPropagation();
                setActiveFace(plane.index);
              }}
              onPointerOut={(e: Event) => {
                e.stopPropagation();
                setActiveFace(-1);
              }}
              rotateX={plane.rotation.x}
              rotateY={plane.rotation.y}
              rotateZ={plane.rotation.z}
              position={plane.position}
            />
          ))}
          <PortalPlane
            active={activeFace === 0}
            position={[0, 0.51, 0]}
            rotation={[pi / 2, 0, 0]}
          >
            <NestedScene bgColor="white" position={[0, -1, 0]}>
              <mesh ref={topGeo} position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="maroon" />
              </mesh>
            </NestedScene>
          </PortalPlane>
          <PortalPlane
            active={activeFace === 1}
            position={[0, -0.51, 0]}
            rotation={[pi / 2, 0, 0]}
          >
            <NestedScene bgColor="aqua" position={[0, 1, 0]}>
              <mesh>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="maroon" />
              </mesh>
            </NestedScene>
          </PortalPlane>
          <PortalPlane
            active={activeFace === 2}
            position={[0.51, 0, 0]}
            rotation={[0, pi / 2, 0]}
          >
            <NestedScene
              bgColor="orange"
              position={[-1, 0, 0]}
              rotation={[0, 0, pi / 2]}
            >
              <mesh>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="maroon" />
              </mesh>
            </NestedScene>
          </PortalPlane>
          <PortalPlane
            active={activeFace === 3}
            position={[-0.51, 0, 0]}
            rotation={[0, pi / 2, 0]}
          >
            <NestedScene position={[1, 0, 0]} rotation={[0, 0, pi / 2]}>
              <mesh>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="maroon" />
              </mesh>
            </NestedScene>
          </PortalPlane>
          <mesh>
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
