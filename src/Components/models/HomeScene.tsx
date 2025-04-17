import { Cloud, Clouds, Grid, MeshReflectorMaterial } from "@react-three/drei";
import { pi } from "../../constants/components3D";
import {
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
} from "three";
import MountainRange from "./MountainRange";
import Crystals from "./Crystals";
import { useEffect, useRef, useState } from "react";

const CloudGroup = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // wait for first paint
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <group>
      <Clouds position={[0, 5, -1300]} material={MeshBasicMaterial}>
        <Cloud
          seed={1}
          scale={30}
          segments={200}
          bounds={[70, 5, 5]}
          volume={40}
          color="white"
        />
        <Cloud
          position={[0, 0, 70]}
          seed={1}
          scale={25}
          volume={40}
          bounds={[40, 4, 10]}
          color="gray"
          fade={100}
        />
      </Clouds>
    </group>
  );
};

export function HomeScene({ activeFace }: { activeFace: number }) {
  const sunRef = useRef<Mesh>(null);
  const edgeRef = useRef<LineSegments>(null);
  useEffect(() => {
    if (!sunRef.current) return;

    const geometry = new EdgesGeometry(sunRef.current.geometry, 1);
    const material = new LineBasicMaterial({ color: "white" });
    const edges = new LineSegments(geometry, material);

    sunRef.current.add(edges);
    edgeRef.current = edges;

    return () => {
      sunRef.current?.remove(edges);
      geometry.dispose();
      material.dispose();
    };
  }, []);
  return (
    <group>
      {/* Background shapes that react to activeFace */}
      <Crystals activeFace={activeFace} />
      {/* Black sun*/}
      <mesh ref={sunRef} position={[0, 60, -1300]} scale={[1, 1, 0.01]}>
        <circleGeometry args={[700, 64]} />
        <meshBasicMaterial color="black" />
      </mesh>
      {/* Mountain Range */}
      <MountainRange />

      <Grid
        position={[10, -15, -900]}
        cellSize={20}
        cellThickness={1.5}
        sectionSize={20}
        sectionColor={"white"}
        sectionThickness={1.5}
        fadeDistance={2000}
        fadeStrength={5}
        infiniteGrid
      />
      <mesh rotation={[-pi / 2, 0, 0]} position={[0, -30, -900]}>
        <planeGeometry args={[2000, 2000]} />
        <MeshReflectorMaterial color={"black"} />
      </mesh>
      <CloudGroup />
    </group>
  );
}
export default HomeScene;
