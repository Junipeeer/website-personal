import { forwardRef } from "react";
import { DoubleSide, Euler, Mesh, Vector3 } from "three";

interface Props {
  position: [number, number, number] | Vector3;
  rotation: [number, number, number] | Euler;
  onPointerEnter: (e: Event) => void;
  onPointerOut: (e: Event) => void;
}

const ClickPlane = forwardRef<Mesh, Props>(
  ({ position, rotation, onPointerEnter, onPointerOut }, ref) => {
    return (
      <mesh
        ref={ref}
        position={position}
        rotation={rotation}
        onPointerEnter={onPointerEnter}
        onPointerOut={onPointerOut}
        renderOrder={1}
      >
        <planeGeometry args={[9, 9]} />
        <meshBasicMaterial
          color="red"
          transparent
          opacity={0}
          side={DoubleSide}
          depthWrite={false}
        />
      </mesh>
    );
  }
);

export default ClickPlane;
