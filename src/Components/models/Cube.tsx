import { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { Object3D } from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import ClickPlane from "../ClickPlane";
import { clickPlanes, emojis } from "../../constants/components";
import PortalPlane from "../PortalPlane";
import NestedScene from "../NestedScene";

interface Props {
  geometry: any;
  material: any;
  isMouseInWindow: boolean;
}

const Cube = ({ geometry, material, isMouseInWindow }: Props) => {
  const cubeRef = useRef(new Object3D());
  const [activeFace, setActiveFace] = useState(-1);

  let showCube = false;
  const pi = Math.PI;

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
        [0, cubeTranslateY, 0],
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

      <PortalPlane
        active={activeFace === 0}
        position={[0, 5.01, 0]}
        rotation={[pi / 2, 0, 0]}
      >
        <NestedScene bgColor="white" position={[0, -10, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 1}
        position={[0, -5.01, 0]}
        rotation={[pi / 2, 0, 0]}
      >
        <NestedScene bgColor="aqua" position={[0, 10, 0]}>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 2}
        position={[5.01, 0, 0]}
        rotation={[0, pi / 2, 0]}
      >
        <NestedScene
          bgColor="orange"
          position={[-10, 0, 0]}
          rotation={[0, 0, pi / 2]}
        >
          <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
      <PortalPlane
        active={activeFace === 3}
        position={[-5.01, 0, 0]}
        rotation={[0, pi / 2, 0]}
      >
        <NestedScene position={[10, 0, 0]} rotation={[0, 0, pi / 2]}>
          <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="maroon" />
          </mesh>
        </NestedScene>
      </PortalPlane>
    </group>
  );
};

export default Cube;
