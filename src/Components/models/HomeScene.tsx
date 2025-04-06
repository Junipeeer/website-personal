import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { Mesh, Object3D } from "three";

interface Props {
  isMouseInWindow: boolean;
}

export function HomeScene({ isMouseInWindow }: Props) {
  const { nodes, materials } = useGLTF("/models/home_scene.glb");

  return (
    <group>
      <pointLight
        intensity={10000}
        decay={2}
        color="#67fcff"
        position={[-25.788, 28.857, -29.49]}
        rotation={[-2.752, -0.324, -2.15]}
        scale={1}
      />
      <pointLight
        intensity={500}
        decay={2}
        color="#ff9aef"
        position={[0, -19, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      ></pointLight>
      <mesh
        geometry={(nodes.ground_plane as Mesh).geometry}
        material={materials.Rock}
        position={[0, -23.1, -219.025]}
        castShadow
        receiveShadow
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_bottom as Mesh).geometry}
        material={materials.Rock}
        position={[0, -20, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_top as Mesh).geometry}
        material={materials.Rock}
        position={[0, -20, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_base as Mesh).geometry}
        material={materials.Rock}
        position={[0, -20, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/home_scene.glb");

export default HomeScene;
