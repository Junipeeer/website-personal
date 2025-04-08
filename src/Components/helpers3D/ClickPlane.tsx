import { useRef } from "react";
import { DoubleSide, Mesh, Shape } from "three";

interface Props {
  points: [number, number][];
  onPointerEnter: (e: Event) => void;
  onPointerOut: (e: Event) => void;
  onClick?: (e: Event) => void;
}

const ClickPlane = ({
  points,
  onPointerEnter,
  onPointerOut,
  onClick,
}: Props) => {
  const meshRef = useRef<Mesh>(null);

  const createShape = () => {
    const shape = new Shape();

    // Draw shape using provided points
    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      shape.lineTo(points[i][0], points[i][1]);
    }
    shape.lineTo(points[0][0], points[0][1]); // Close the shape

    return shape;
  };

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -1]} // Just in front of camera
      onPointerEnter={onPointerEnter}
      onPointerOut={onPointerOut}
      onClick={onClick}
      renderOrder={2}
    >
      <shapeGeometry args={[createShape()]} />
      <meshBasicMaterial
        transparent
        opacity={0}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

export default ClickPlane;
