import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { Group, Object3D } from "three";
import Cube from "./Cube";

interface Props {
  isMouseInWindow: boolean;
}

export function CubeScene({ isMouseInWindow }: Props) {
  const { nodes, materials } = useGLTF("/models/cube_scene.glb");
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
        intensity={20000}
        decay={2}
        color="#ff9aef"
        position={[0, -35.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <mesh
        geometry={nodes.ground_plane.geometry}
        material={materials.plane_material}
        position={[0, -17.5, 0]}
        castShadow
        receiveShadow
      />
      <mesh
        ref={pedestalLowerRef}
        castShadow
        receiveShadow
        geometry={nodes.Pedestal_bottom.geometry}
        material={materials.outer_pedestal}
        position={[0, -14, 0]}
      />
      <mesh
        ref={pedestalUpperRef}
        castShadow
        receiveShadow
        geometry={nodes.Pedestal_top.geometry}
        material={materials.inner_pedestal}
        position={[0, -14, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pedestal_base.geometry}
        material={materials.pedestal_ring}
        position={[0, -14, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/cube_scene.glb");

export default CubeScene;
