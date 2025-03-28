import { useRef } from "react";
import { DoubleSide, Euler, Object3D, Vector3 } from "three";

interface Props {
  position: [number, number, number] | Vector3;
  rotation: [number, number, number] | Euler; // Add rotation prop
  onPointerEnter: (e: Event) => void;
  onPointerOut: (e: Event) => void;
}

const ClickPlane = ({ position, rotation }: Props) => {
  const ref = useRef(new Object3D());

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <planeGeometry args={[9, 9]} />
      <meshBasicMaterial
        color="red"
        side={DoubleSide}
        transparent
        visible={false}
      />
    </mesh>
  );
};

export default ClickPlane;
