import { useRef } from "react";
import { Text } from "@react-three/drei";
import { Object3D } from "three";
import { useControls } from "leva";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import ClickPlane from "../ClickPlane";
import { clickPlanes, emojis } from "../../constants/components";

interface Props {
  geometry: any;
  material: any;
  isMouseInWindow: boolean;
}

const Cube = ({ geometry, material, isMouseInWindow }: Props) => {
  const cubeRef = useRef(new Object3D());

  const activeFaceRef = useRef(-1);

  let showCube = false;
  const pi = Math.PI;

  let test = useControls({
    px: { value: 1, min: 0.01, max: 10 },
    rX: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    rY: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    rZ: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
  });

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    const cubeTranslateY = Math.sin(elapsed) * 0.1;
    const idleCubeRotX = Math.sin(elapsed * 0.5) * 0.1;
    const idleCubeRotY = Math.cos(elapsed * 0.3) * 0.1;
    const idleCubeRotZ = Math.sin(elapsed * 0.7) * 0.04;

    //adjust camera position
    //easing.damp3(state.camera.position, [0, 5.802, 88.424], 0.25, delta);

    //cube rotation based on mouse position and idle rotation
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

    //cube vertical wobble and intro
    if (showCube) {
      easing.damp3(
        cubeRef.current.position,
        [0, 4 + cubeTranslateY, 0],
        0.25,
        delta
      );

      setTimeout(() => {
        easing.damp3(cubeRef.current.scale, 1.5, 0.25, delta);
      }, 2000);
    }
  });

  setTimeout(() => {
    showCube = true;
  }, 1000);

  return (
    <group ref={cubeRef} position={[0, -25, 0]}>
      <mesh
        geometry={geometry}
        material={material}
        castShadow={true}
        receiveShadow={true}
      ></mesh>
      <pointLight
        intensity={5000}
        decay={2}
        color="#7c8dff"
        rotation={[-2.752, -0.324, -2.15]}
        scale={12}
      />
      {clickPlanes.map((plane) => (
        <ClickPlane
          key={plane.label}
          onPointerEnter={(e: Event) => {
            e.stopPropagation();
            activeFaceRef.current = plane.index;
          }}
          onPointerOut={(e: Event) => {
            e.stopPropagation();
            activeFaceRef.current = -1;
          }}
          rotateX={plane.rotation.x}
          rotateY={plane.rotation.y}
          rotateZ={plane.rotation.z}
          position={plane.position}
        />
      ))}

      {emojis.map((emoji, index) => (
        <Text
          key={index}
          fontSize={7}
          position={[emoji.pos.x, emoji.pos.y, emoji.pos.z]}
          rotation={[emoji.rot.x, emoji.rot.y, emoji.rot.z]}
          color="#ffffff"
        >
          {emoji.emoji}
        </Text>
      ))}
    </group>
  );
};

export default Cube;
