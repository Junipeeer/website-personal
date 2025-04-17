import { useEffect, useMemo, useRef, useState } from "react";
import { MeshDistortMaterial, Outlines, useGLTF } from "@react-three/drei";
import { Group, Mesh } from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { getPortalColor, pi } from "../../constants/components3D";
import TopPortal from "./TopPortal";
import BottomPortal from "./BottomPortal";
import RightPortal from "./RightPortal";
import LeftPortal from "./LeftPortal";
import DelayedUnmount from "../helpers3D/DelayedUnmount";

interface Props {
  isMouseInWindow: boolean;
  activeFace: number;
}

const Cube = ({ isMouseInWindow, activeFace }: Props) => {
  const hasVisited = sessionStorage.getItem("hasVisitedBefore") === "true";
  const cubeRef = useRef<Group | null>(null);
  const [showCube, setShowCube] = useState(false);
  const [interactable, setInteractable] = useState(false);
  const { nodes } = useGLTF("/models/cube.glb");
  const outlineColor = useMemo(() => getPortalColor(activeFace), [activeFace]);

  // Handle cube appearance after mount
  useEffect(() => {
    if (!hasVisited) {
      const showTimer = setTimeout(() => setShowCube(true), 1500);
      const interactTimer = setTimeout(() => setInteractable(true), 3000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(interactTimer);
      };
    } else {
      setShowCube(true);
      setInteractable(true);
    }
  }, [hasVisited]);

  useFrame((_state, delta) => {
    if (cubeRef.current != null && showCube) {
      let rotX = 0;
      let rotY = 0;

      if (isMouseInWindow && interactable) {
        // const { size } = state;
        // const fov = mainCam.fov * (Math.PI / 180);
        // const cubeSize = 10;
        // const distance = mainCam.position[2];
        // // Calculate projected size in pixels
        // const projectedSize =
        //   (cubeSize * size.height) / (3 * distance * Math.tan(fov / 2));

        // // Get mouse position in pixels from center
        // const mouseX = (state.pointer.x * size.width) / 2;
        // const mouseY = (state.pointer.y * size.height) / 2;

        // // Calculate rotation based on distance from cube center relative to its size
        // const relativeX = mouseX / (projectedSize / 1.5);
        // const relativeY = mouseY / (projectedSize / 1.5);

        const maxRotation = pi / 4;

        // const exponent = 2;
        // rotX =
        //   Math.sign(relativeY) *
        //   maxRotation *
        //   Math.min(Math.pow(Math.abs(relativeY), exponent), 1);
        // rotY =
        //   -Math.sign(relativeX) *
        //   maxRotation *
        //   Math.min(Math.pow(Math.abs(relativeX), exponent), 1);

        switch (activeFace) {
          case 0:
            rotX = maxRotation;
            break;
          case 1:
            rotX = -maxRotation;
            break;
          case 2:
            rotY = -maxRotation;
            break;
          case 3:
            rotY = maxRotation;
            break;
          default:
            break;
        }
      }
      // Handle cube appearance animation
      easing.damp3(cubeRef.current.position, [0, 0, 0], 0.25, delta);

      // Apply rotation with easing
      easing.dampE(cubeRef.current.rotation, [rotX, rotY, 0], 0.25, delta);

      if (interactable) easing.damp3(cubeRef.current.scale, 1.5, 0.25, delta);
    }
  });

  return (
    <group
      ref={cubeRef}
      position={[0, hasVisited ? 0 : 40, 0]}
      scale={1}
      frustumCulled
    >
      {/* ----Cube---- */}

      {/* ---- Instances of Portal Planes and Children ---- */}
      <DelayedUnmount active={activeFace === 0} delay={500}>
        <TopPortal active={activeFace === 0} />
      </DelayedUnmount>
      <DelayedUnmount active={activeFace === 1} delay={500}>
        <BottomPortal active={activeFace === 1} />
      </DelayedUnmount>
      <DelayedUnmount active={activeFace === 2} delay={500}>
        <RightPortal active={activeFace === 2} />
      </DelayedUnmount>
      <DelayedUnmount active={activeFace === 3} delay={500}>
        <LeftPortal active={activeFace === 3} />
      </DelayedUnmount>
      <mesh geometry={(nodes.Cube as Mesh).geometry}>
        <MeshDistortMaterial distort={0.1} speed={5} color={"black"} />
        <Outlines thickness={5} color={outlineColor} />
      </mesh>
    </group>
  );
};

export default Cube;
