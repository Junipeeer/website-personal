import { useRef } from "react";
import { Text } from "@react-three/drei";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import { Object3D } from "three";
import { useControls } from "leva";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

interface Props {
  geometry: any;
  material: any;
  isMouseInWindow: boolean;
}

const Cube = ({ geometry, material, isMouseInWindow }: Props) => {
  const cubeRef = useRef(new Object3D());
  let showCube = false;
  const pi = Math.PI;

  let test = useControls({
    scale: { value: 1, min: 0.001, max: 10 },
    rX: { value: 0, min: -pi / 2, max: pi / 2 },
    rY: { value: 0, min: -pi / 2, max: pi / 2 },
    rZ: { value: 0, min: -pi / 2, max: pi / 2 },
  });

  const emojis = [
    { emoji: "👋", pos: { x: 0, y: 0, z: 5.01 }, rot: { x: 0, y: 0, z: 0 } },
    {
      emoji: "🌐",
      pos: { x: 0, y: 5.01, z: 0 },
      rot: { x: test.rX, y: test.rY, z: test.rZ },
    },
    {
      emoji: "🛠️",
      pos: { x: 5.01, y: 0, z: 0 },
      rot: { x: 0, y: pi / 2, z: 0 },
    },
    {
      emoji: "🎨",
      pos: { x: -5.01, y: 0, z: 0 },
      rot: { x: 0, y: pi / 2, z: (pi / 2) * 3 },
    },
    {
      emoji: "💡",
      pos: { x: 0, y: -5.01, z: 0 },
      rot: { x: pi / 2, y: 0, z: 0 },
    },
  ];
  const emojiText = emojis.map((emoji, index) => (
    <Text
      key={index}
      fontSize={7}
      position={[emoji.pos.x, emoji.pos.y, emoji.pos.z]}
      rotation={[emoji.rot.x, emoji.rot.y, emoji.rot.z]}
      color="#ffffff"
    >
      {emoji.emoji}
    </Text>
  ));

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();

    const cubeTranslateY = Math.sin(elapsed) * 0.1;
    const idleCubeRotX = Math.sin(elapsed * 0.5) * 0.1;
    const idleCubeRotY = Math.cos(elapsed * 0.3) * 0.1;
    const idleCubeRotZ = Math.sin(elapsed * 0.7) * 0.04;

    // //adjust camera position
    // easing.damp3(state.camera.position, [0, 5.802, 88.424], 0.25, delta);

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
      }, 1000);
    }
  });

  setTimeout(() => {
    showCube = true;
  }, 1000);

  return (
    <group ref={cubeRef} position={[0, -25, 0]}>
      <mesh material={material} castShadow={true} receiveShadow={true}>
        <Geometry>
          <Base geometry={geometry} position={[0, 0, 0]} />
          <Subtraction position={[0, 5, 0]} rotation={[0, 0, 0]}>
            {/* Top face hole*/}
            <cylinderGeometry args={[test.scale, test.scale, 5, 32]} />
          </Subtraction>
          <Subtraction position={[0, -5, 0]} rotation={[0, 0, 0]}>
            {/* Bottom face hole*/}
            <cylinderGeometry args={[test.scale, test.scale, 4, 32]} />
          </Subtraction>
          <Subtraction position={[-5, 0, 0]} rotation={[0, 0, pi / 2]}>
            {/* Left face hole*/}
            <cylinderGeometry args={[test.scale, test.scale, 4, 32]} />
          </Subtraction>
          <Subtraction position={[5, 0, 0]} rotation={[0, 0, pi / 2]}>
            {/* Right face hole*/}
            <cylinderGeometry args={[test.scale, test.scale, 4, 32]} />
          </Subtraction>
        </Geometry>
      </mesh>
      <pointLight
        intensity={5000}
        decay={2}
        color="#7c8dff"
        rotation={[-2.752, -0.324, -2.15]}
        scale={12}
      />
      {emojiText}
    </group>
  );
};

export default Cube;
