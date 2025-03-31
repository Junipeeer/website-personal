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
    <group castShadow receiveShadow position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[4, 4, 30, 64, 1, true]} />
        <meshStandardMaterial
          side={DoubleSide}
          color={bgColor}
          emissive={bgColor}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[0, -15, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[4, 64]} />
        <meshToonMaterial
          side={DoubleSide}
          color={bgColor}
          emissive={bgColor}
        />
      </mesh>
      <ambientLight intensity={1} />
      {children}
    </group>
  );
};

export default NestedScene;
