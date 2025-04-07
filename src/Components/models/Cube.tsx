import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, Object3D, PerspectiveCamera } from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import ClickPlane from "../helpers/ClickPlane";
import { clickPlanes, mainCam, pi } from "../../constants/components";
import TopPortal from "./TopPortal";
import BottomPortal from "./BottomPortal";
import RightPortal from "./RightPortal";
import LeftPortal from "./LeftPortal";

interface Props {
  isMouseInWindow: boolean;
}

const Cube = ({ isMouseInWindow }: Props) => {
  const cubeRef = useRef(new Object3D());
  const clickPlaneRefs = useRef<Object3D[]>([]);
  const [activeFace, setActiveFace] = useState(-1);
  const [showCube, setShowCube] = useState(false);
  const { nodes, materials } = useGLTF("/models/cube.glb");

  // Handle cube appearance after mount
  useEffect(() => {
    const timer = setTimeout(() => setShowCube(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    if (showCube) {
      const elapsed = state.clock.getElapsedTime();

      const idleCubeRotX = Math.sin(elapsed * 0.5) * 0.1;
      const idleCubeRotY = Math.cos(elapsed * 0.3) * 0.1;
      const idleCubeRotZ = Math.sin(elapsed * 0.7) * 0.04;

      let rotX = 0;
      let rotY = 0;

      if (isMouseInWindow) {
        const { camera, size } = state;
        const fov =
          camera instanceof PerspectiveCamera
            ? (camera.fov * pi) / 180
            : pi / 2;
        const cubeSize = 10;
        const distance = mainCam.position[2];
        // Calculate projected size in pixels
        const projectedSize =
          (cubeSize * size.height) / (3 * distance * Math.tan(fov / 2));

        // Get mouse position in pixels from center
        const mouseX = (state.pointer.x * size.width) / 2;
        const mouseY = (state.pointer.y * size.height) / 2;

        // Calculate rotation based on distance from cube center relative to its size
        const relativeX = mouseX / (projectedSize / 1.5);
        const relativeY = mouseY / (projectedSize / 1.5);

        // Calculate the maximum rotation in radians (80% of PI)
        const maxRotation = (pi / 2) * 0.5;

        // Apply exponential easing with size-aware boundaries
        const exponent = 2;
        rotX =
          Math.sign(relativeY) *
          maxRotation *
          Math.min(Math.pow(Math.abs(relativeY), exponent), 1);
        rotY =
          -Math.sign(relativeX) *
          maxRotation *
          Math.min(Math.pow(Math.abs(relativeX), exponent), 1);

        const intersects = state.raycaster.intersectObjects(
          clickPlaneRefs.current.filter(Boolean),
          false
        );

        if (intersects.length > 0) {
          const hitPlane = intersects[0].object;
          const planeIndex = clickPlaneRefs.current.indexOf(
            hitPlane as Object3D
          );
          if (planeIndex !== -1) {
            setActiveFace(planeIndex);
          }
        } else {
          setActiveFace(-1);
        }
      }

      // Apply rotation with easing
      easing.dampE(
        cubeRef.current.rotation,
        [rotX + idleCubeRotX, rotY + idleCubeRotY, idleCubeRotZ],
        0.25,
        delta
      );

      // Handle cube appearance animation

      const cubeTranslateY = Math.sin(elapsed) * 0.1;
      easing.damp3(
        cubeRef.current.position,
        [0, cubeTranslateY, 0],
        0.25,
        delta
      );
      setTimeout(() => {
        easing.damp3(cubeRef.current.scale, 1.5, 0.25, delta);
      }, 1500);
    }
  });

  return (
    <group ref={cubeRef} position={[0, -30, 0]}>
      {/* ----Cube---- */}
      <mesh
        geometry={(nodes.Cube as Mesh).geometry}
        material={materials.glass}
        renderOrder={1}
      ></mesh>
      <pointLight
        intensity={5000}
        decay={2}
        color="#7c8dff"
        rotation={[-2.752, -0.324, -2.15]}
        scale={12}
      />
      {/* ----ClickPlanes---- */}
      {clickPlanes.map((plane) => (
        <ClickPlane
          key={plane.label}
          ref={(el) => {
            if (el) {
              clickPlaneRefs.current[plane.index] = el;
            }
          }}
          position={plane.position}
          rotation={plane.rotation}
          onPointerEnter={(e: Event) => {
            e.stopPropagation();
            setActiveFace(plane.index);
          }}
          onPointerOut={(e: Event) => {
            e.stopPropagation();
            setActiveFace(-1);
          }}
        />
      ))}
      {/* ---- Instances of Portal Planes and Children ---- */}
      <TopPortal active={activeFace === 0} />
      <BottomPortal active={activeFace === 1} />
      <RightPortal active={activeFace === 2} />
      <LeftPortal active={activeFace === 3} />
    </group>
  );
};

export default Cube;
