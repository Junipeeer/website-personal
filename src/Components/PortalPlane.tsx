import { MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useRef } from "react";
import { CircleGeometry, DoubleSide, Euler, Mesh, Vector3 } from "three";

interface Props {
  active?: boolean;
  position?: [number, number, number] | Vector3;
  rotation?: [number, number, number] | Euler;
  sceneRotation?: [number, number, number] | Euler;
  sceneBG?: string;
  children: ReactElement;
}

const PortalPlane = ({
  active = false,
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
  sceneRotation = new Euler(0, 0, 0),
  sceneBG = "hotpink",
  children,
}: Props) => {
  const portal = useRef<any>(null);
  const mesh = useRef(new Mesh());
  const circleGeometry = useRef(new CircleGeometry(0.01, 64));

  useFrame((_, delta) => {
    const targetRadius = active ? 4 : 0.01;
    const currentRadius = circleGeometry.current.parameters.radius;

    easing.damp(
      circleGeometry.current.parameters,
      "radius",
      targetRadius,
      0.05,
      delta
    );

    if (
      Math.abs(circleGeometry.current.parameters.radius - currentRadius) > 0.001
    ) {
      const newGeometry = new CircleGeometry(
        circleGeometry.current.parameters.radius,
        64
      );
      mesh.current.geometry.dispose();
      mesh.current.geometry = newGeometry;
      circleGeometry.current = newGeometry;
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <circleGeometry ref={circleGeometry} args={[4, 64]} />
      <MeshPortalMaterial
        ref={portal}
        side={DoubleSide}
        resolution={0}
        blur={0}
      >
        <group castShadow receiveShadow rotation={sceneRotation}>
          <mesh castShadow receiveShadow position={[0, -15, 0]}>
            <cylinderGeometry args={[4, 4, 30, 64, 1, true]} />
            <meshStandardMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            position={[0, -30, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <circleGeometry args={[4, 64]} />
            <meshToonMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>
          <ambientLight intensity={1} />
          {children}
        </group>
      </MeshPortalMaterial>
    </mesh>
  );
};

export default PortalPlane;
