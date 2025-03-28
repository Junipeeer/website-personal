import { useControls } from "leva";
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
  const pi = Math.PI;
  let test = useControls({
    px: { value: 1, min: 0.01, max: 10 },
    rX: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    rY: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    rZ: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
  });

  return (
    <group rotation={rotation} position={[test.rX, test.rY, test.rZ]}>
      {children}
      <mesh>
        <cylinderGeometry args={[4, 4, 30, 32, 1, true]} />
        <meshToonMaterial
          side={DoubleSide}
          emissive={bgColor}
          color={bgColor}
        />
      </mesh>
      <mesh position={[0, -40, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4, 32]} />
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
