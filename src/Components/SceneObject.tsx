import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useRef } from "react";
import { Euler, Group, Vector3 } from "three";

interface Props {
  startPos?: [number, number, number];
  startRot?: [number, number, number];
  startScale?: number;
  duration?: number;

  targetPos: [number, number, number];
  targetRot: [number, number, number];
  targetScale: number;

  active: boolean;
  children: ReactElement;
}

const SceneObject = ({
  startPos = [0, 0, 0],
  startRot = [0, 0, 0],
  startScale = 0,
  targetPos,
  targetRot,
  targetScale,
  active,
  duration = 0.2,
  children,
}: Props) => {
  const groupRef = useRef(new Group());

  useFrame((state, delta) => {
    const newPosTarget = active ? targetPos : startPos;
    const newRotTarget = active ? targetRot : startRot;
    const newScaleTarget = active ? targetScale : startScale;
    //
    if (!groupRef.current.position.equals(new Vector3(...newPosTarget))) {
      easing.damp3(groupRef.current.position, newPosTarget, duration, delta);
    }
    if (!groupRef.current.rotation.equals(new Euler(...newRotTarget))) {
      easing.dampE(groupRef.current.rotation, newRotTarget, duration, delta);
    }
    easing.damp3(
      groupRef.current.scale,
      [newScaleTarget, newScaleTarget, newScaleTarget],
      duration,
      delta
    );
  });
  return (
    <group
      ref={groupRef}
      scale={startScale}
      position={startPos}
      rotation={startRot}
    >
      {children}
    </group>
  );
};

export default SceneObject;
