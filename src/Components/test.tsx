import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import ClickPlane from "./ClickPlane";
import NestedScene from "./NestedScene";
import PortalPlane from "./PortalPlane";

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
            position={new THREE.Vector3(0, 0.51, 0)}
            rotation={new THREE.Euler(pi / 2, 0, 0)}
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
            position={new THREE.Vector3(0, -0.51, 0)}
            rotation={new THREE.Euler(pi / 2, 0, 0)}
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
            position={new THREE.Vector3(0.51, 0, 0)}
            rotation={new THREE.Euler(0, pi / 2, 0)}
          >
            <NestedScene
              bgColor="orange"
              position={[-1, 0, 0]}
              rotation={new THREE.Euler(0, 0, pi / 2)}
            >
              <mesh>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="maroon" />
              </mesh>
            </NestedScene>
          </PortalPlane>
          <PortalPlane
            active={activeFace === 3}
            position={new THREE.Vector3(-0.51, 0, 0)}
            rotation={new THREE.Euler(0, pi / 2, 0)}
          >
            <NestedScene
              position={[1, 0, 0]}
              rotation={new THREE.Euler(0, 0, pi / 2)}
            >
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
