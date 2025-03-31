import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, CameraControls } from "@react-three/drei";
import * as THREE from "three";
import ClickPlane from "./ClickPlane";
import NestedScene from "./NestedScene";
import PortalPlane from "./PortalScene";
import { clickPlanes } from "../constants/components";
import { easing } from "maath";

function Scene() {
  const [activeFace, setActiveFace] = useState(-1);
  const cubeRef = useRef(new THREE.Mesh());
  const pi = Math.PI;

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

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();
    const idleCubeRotX = Math.sin(elapsed * 0.5) * 0.1;
    const idleCubeRotY = Math.cos(elapsed * 0.3) * 0.1;
    const idleCubeRotZ = Math.sin(elapsed * 0.7) * 0.04;

    easing.dampE(
      cubeRef.current.rotation,
      [
        isMouseInWindow ? state.pointer.y + idleCubeRotY : idleCubeRotY,
        isMouseInWindow ? -state.pointer.x + idleCubeRotX : idleCubeRotX,
        idleCubeRotZ,
      ],
      0.25,
      delta
    );
    //cube rotation based on mouse position and idle rotation
    easing.dampE(
      cubeRef.current.rotation,
      [idleCubeRotY, idleCubeRotX, idleCubeRotZ],
      0.25,
      delta
    );
  });
  return (
    <group ref={cubeRef}>
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <ambientLight intensity={1} />
      <OrbitControls />
      <CameraControls makeDefault />

      {clickPlanes.map((plane) => (
        <ClickPlane
          key={plane.label}
          onPointerEnter={(e: Event) => {
            e.stopPropagation();
            console.log(plane.index);
            setActiveFace(plane.index);
          }}
          onPointerOut={(e: Event) => {
            e.stopPropagation();
            setActiveFace(-1);
            console.log(activeFace);
          }}
          rotation={plane.rotation}
          position={plane.position}
        />
      ))}
      <PortalPlane
        active={activeFace === 0}
        position={new THREE.Vector3(0, 5.01, 0)}
        rotation={new THREE.Euler(pi / 2, 0, 0)}
      >
        <NestedScene
          bgColor="white"
          position={[0, 0, 15]}
          rotation={[-pi / 2, 0, 0]}
        >
          <mesh position={[0, 12.5, 0]}>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 1}
        position={new THREE.Vector3(0, -5.01, 0)}
        rotation={new THREE.Euler(pi / 2, 0, 0)}
      >
        <NestedScene
          bgColor="aqua"
          position={[0, 0, -15]}
          rotation={[pi / 2, 0, 0]}
        >
          <mesh position={[0, 12.5, 0]}>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 2}
        position={new THREE.Vector3(5.01, 0, 0)}
        rotation={new THREE.Euler(0, pi / 2, 0)}
      >
        <NestedScene
          bgColor="orange"
          position={[0, 0, -15]}
          rotation={[pi / 2, 0, 0]}
        >
          <mesh position={[0, 12.5, 0]}>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 3}
        position={new THREE.Vector3(-5.01, 0, 0)}
        rotation={new THREE.Euler(0, pi / 2, 0)}
      >
        <NestedScene position={[0, 0, 15]} rotation={[-pi / 2, 0, 0]}>
          <mesh position={[0, 12.5, 0]}>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
    </group>
  );
}

const App = () => {
  return (
    <section id="Home" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full h-full absolute inset-0">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <Scene />
        </Canvas>
      </div>
    </section>
  );
};

export default App;
