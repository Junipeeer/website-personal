import { useEffect, useMemo, useRef } from "react";
import {
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Shape,
} from "three";
import { Edges } from "@react-three/drei";

const MountainRange = () => {
  const meshRef = useRef<Mesh>(null);
  const edgeRef = useRef<LineSegments>(null);

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
  const shape = useMemo(() => {
    const s = new Shape();
    s.moveTo(-800, 0);
    s.quadraticCurveTo(-400, 80, 0, 0);
    s.quadraticCurveTo(400, -60, 800, 0);
    s.lineTo(800, -200);
    s.lineTo(-800, -200);
    s.closePath();
    return s;
  }, []);

  const extrudeSettings = { steps: 1, depth: 10, bevelEnabled: false };
  return (
    <mesh ref={meshRef} position={[0, 50, -1000]} scale={[2.2, 1, 1]}>
      <extrudeGeometry attach="geometry" args={[shape, extrudeSettings]} />
      <meshBasicMaterial attach="material" color="black" side={2} />
    </mesh>
  );
};

export default MountainRange;
