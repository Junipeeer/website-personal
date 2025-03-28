import { ReactElement } from "react";
import { DoubleSide, Euler, Vector3 } from "three";

interface Props {
  bgColor?: string;
  position?: [number, number, number] | Vector3;
  rotation?: [number, number, number] | Euler;
  children?: ReactElement;
}

const NestedScene = ({
  bgColor = "hotpink",
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
  children,
}: Props) => {
  return (
    <group rotation={rotation} position={position}>
      {children}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 3, 32, 1, true]} />
        <meshToonMaterial
          side={DoubleSide}
          emissive={bgColor}
          color={bgColor}
        />
      </mesh>
      <mesh position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 32]} />
        <meshToonMaterial
          side={DoubleSide}
          emissive={bgColor}
          color={bgColor}
        />
      </mesh>
    </group>
  );
};

export default NestedScene;
