import { useRef } from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import { Object3D } from "three";

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF("models/cube.glb");

  const cubeRef = useRef(new Object3D());

  return (
    <group position={[0, 0, 0]} scale={0.3} dispose={null} {...props}>
      <mesh
        ref={cubeRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      ></mesh>
    </group>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;
