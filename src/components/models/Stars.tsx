import { Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";

const getStarTargetOffset = (activeFace: number): [number, number, number] => {
  switch (activeFace) {
    case 0:
      return [0, 50, 0];
    case 1:
      return [0, -50, 0];
    case 2:
      return [50, 0, 0];
    case 3:
      return [-50, 0, 0];
    default:
      return [0, 0, 0];
  }
};

interface StarProps {
  activeFace: number;
  basePosition: [number, number, number];
}

const Star = ({ activeFace, basePosition }: StarProps) => {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = useRef([...basePosition]);
  useFrame((_state, delta) => {
    if (meshRef.current) {
      const target = getStarTargetOffset(activeFace);
      const desiredX = initialPosition.current[0] * 50 + target[0];
      const desiredY = initialPosition.current[1] * 50 + target[1];
      const desiredZ = initialPosition.current[2] * 50 + target[2];
      meshRef.current.position.x +=
        (desiredX - meshRef.current.position.x) * delta * 0.5;
      meshRef.current.position.y +=
        (desiredY - meshRef.current.position.y) * delta * 0.5;
      meshRef.current.position.z +=
        (desiredZ - meshRef.current.position.z) * delta * 0.5;
    }
  });
  return (
    <Trail width={5} color="white" length={10} attenuation={(t) => t}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshBasicMaterial color="white" />
      </mesh>
    </Trail>
  );
};

const Stars = ({ activeFace }: { activeFace: number }) => {
  const starCount = 10;
  const starBases = useMemo(() => {
    let arr = [];
    for (let i = 0; i < starCount; i++) {
      arr.push([
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
      ]);
    }
    return arr;
  }, []);
  return (
    <group>
      {starBases.map((base, idx) => (
        <Star
          key={idx}
          activeFace={activeFace}
          basePosition={base as [number, number, number]}
        />
      ))}
    </group>
  );
};

export default Stars;
