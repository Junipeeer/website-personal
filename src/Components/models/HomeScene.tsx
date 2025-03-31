import { Edges, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { Mesh, Object3D } from "three";

interface Props {
  isMouseInWindow: boolean;
}

export function HomeScene({ isMouseInWindow }: Props) {
  const { nodes, materials } = useGLTF("/models/home_scene.glb");
  const pedestalLowerRef = useRef(new Object3D());
  const pedestalUpperRef = useRef(new Object3D());

  useFrame((state, delta) => {
    //lower pedestal rotation based on mouse position
    easing.dampE(
      pedestalLowerRef.current.rotation,
      [
        0,
        isMouseInWindow ? Math.sin(state.pointer.y + state.pointer.x) * 2 : 0,
        0,
      ],
      0.25,
      delta
    );
    //lower pedestal rotation based on mouse position
    easing.dampE(
      pedestalUpperRef.current.rotation,
      [
        0,
        isMouseInWindow ? Math.cos(state.pointer.y + state.pointer.x) * 4 : 0,
        0,
      ],
      0.25,
      delta
    );
  });

  return (
    <group>
      <pointLight
        intensity={10000}
        decay={2}
        color="#67fcff"
        position={[-15.788, 14.857, -19.49]}
        rotation={[-2.752, -0.324, -2.15]}
        scale={1}
      />
      <pointLight
        intensity={5000}
        decay={2}
        color="#ff9aef"
        position={[0, -17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      ></pointLight>
      <mesh
        geometry={(nodes.ground_plane as Mesh).geometry}
        material={materials.Rock}
        position={[0, -17, -219.025]}
        castShadow
        receiveShadow
      />
      <mesh
        ref={pedestalLowerRef}
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_bottom as Mesh).geometry}
        material={materials.Rock}
        position={[0, -14, 0]}
      />
      <mesh
        ref={pedestalUpperRef}
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_top as Mesh).geometry}
        material={materials.Rock}
        position={[0, -14, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pedestal_base as Mesh).geometry}
        material={materials.Rock}
        position={[0, -14, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/home_scene.glb");

export default HomeScene;
