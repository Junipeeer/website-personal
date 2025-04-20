import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { EdgesGeometry, LineBasicMaterial, LineSegments, Mesh } from "three";
import { crystals } from "../../constants/components3D";

interface CrystalProps {
  position: [number, number, number];
  activeFace: number;
  scaleFactor: number;
  rotationSpeed: number;
  oscillationAmplitude: number;
  oscillationOffset: number;
}

const Crystal = ({
  position,
  activeFace,
  scaleFactor,
  rotationSpeed,
  oscillationAmplitude,
  oscillationOffset,
}: CrystalProps) => {
  const meshRef = useRef<Mesh>(null);
  const edgeRef = useRef<LineSegments>(null);
  const initialY = useRef(position[1]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y +=
        delta * rotationSpeed * (1 + activeFace * 0.2);
      meshRef.current.position.y =
        initialY.current +
        Math.sin(state.clock.elapsedTime + oscillationOffset) *
          oscillationAmplitude;
    }
  });

  useEffect(() => {
    if (!meshRef.current) return;

    const geometry = new EdgesGeometry(meshRef.current.geometry, 1);
    const material = new LineBasicMaterial({ color: "white" });
    const edges = new LineSegments(geometry, material);

    meshRef.current.add(edges);
    edgeRef.current = edges;

    return () => {
      meshRef.current?.remove(edges);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={[scaleFactor, scaleFactor * 2, scaleFactor]}
    >
      <octahedronGeometry args={[15, 0]} />
      <meshBasicMaterial color="black" />
    </mesh>
  );
};

const Crystals = ({ activeFace }: { activeFace: number }) => {
  const crystalArray = crystals;
  return (
    <group>
      {crystalArray.map((crystal, idx) => (
        <Crystal
          key={idx}
          position={crystal.position}
          activeFace={activeFace}
          scaleFactor={crystal.scaleFactor}
          rotationSpeed={crystal.rotationSpeed}
          oscillationAmplitude={crystal.oscillationAmplitude}
          oscillationOffset={crystal.oscillationOffset}
        />
      ))}
    </group>
  );
};

export default Crystals;
