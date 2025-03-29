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
    nestedPosX: { value: 0, min: -100, max: 100, step: 0.5 },
    nestedPosY: { value: 0, min: -100, max: 100, step: 0.5 },
    nestedPosZ: { value: 0, min: -100, max: 100, step: 0.5 },
    nestedRotX: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    nestedRotY: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
    nestedRotZ: { value: 0, min: -pi / 2, max: pi / 2, step: pi / 16 },
  });
  //[test.rX, test.rY, test.rZ]
  return (
    <group position={position} rotation={rotation}>
      {children}
      <mesh>
        <cylinderGeometry args={[4, 4, 30, 64, 1, true]} />
        <meshToonMaterial
          side={DoubleSide}
          emissive={bgColor}
          color={bgColor}
        />
      </mesh>
      <mesh position={[0, -1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4, 64]} />
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
