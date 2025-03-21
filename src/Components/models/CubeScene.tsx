import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { Group, Object3D } from "three";
import Cube from "./Cube";

interface Props {
  isMouseInWindow: boolean;
  props?: any;
}

export function CubeScene({ isMouseInWindow, ...props }: Props) {
  const { nodes, materials } = useGLTF("/models/cube_scene.glb");
  const groupRef = useRef(new Group());
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
    <group {...props} ref={groupRef} dispose={null}>
      <PerspectiveCamera
        makeDefault={true}
        far={2000}
        near={0.1}
        fov={28}
        position={[0, 4, 88.424]}
        rotation={[0, 0, 0]}
      />
      <pointLight
        intensity={20000}
        decay={2}
        color="#67fcff"
        position={[-15.788, 19.857, -19.49]}
        rotation={[-2.752, -0.324, -2.15]}
        scale={4.32}
      />
      <pointLight
        intensity={20000}
        decay={2}
        color="#ff9aef"
        position={[0, -31.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Cube
        isMouseInWindow={isMouseInWindow}
        material={materials.glass}
        geometry={nodes.Cube.geometry}
      />
      <mesh
        geometry={nodes.ground_plane.geometry}
        material={materials["Material.001"]}
        castShadow={true}
        receiveShadow={true}
        position={[0, -13.5, 0]}
      />
      <mesh
        ref={pedestalLowerRef}
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Pedestal_bottom.geometry}
        material={materials["Material.001"]}
        position={[0, -10, 0]}
        scale={0.6}
      />
      <mesh
        ref={pedestalUpperRef}
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Pedestal_top.geometry}
        material={materials["Material.001"]}
        position={[0, -10, 0]}
        scale={0.6}
      />
      <mesh
        geometry={nodes.Pedestal_base.geometry}
        castShadow={true}
        receiveShadow={true}
        material={materials["Material.001"]}
        position={[0, -10, 0]}
        scale={0.6}
      />
    </group>
  );
}

useGLTF.preload("/models/cube_scene.glb");

export default CubeScene;
