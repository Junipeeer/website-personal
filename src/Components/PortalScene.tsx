import { MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useRef } from "react";
import { CircleGeometry, DoubleSide, Euler, Mesh, Vector3 } from "three";

interface Props {
  active?: boolean;
  position?: [number, number, number] | Vector3;
  planeRot?: [number, number, number] | Euler;
  sceneRot?: [number, number, number] | Euler;
  sceneBG?: string;
  children: ReactElement;
}

const PortalScene = ({
  active = false,
  position = new Vector3(0, 0, 0),
  planeRot = new Euler(0, 0, 0),
  sceneRot = new Euler(0, 0, 0),
  sceneBG = "hotpink",
  children,
}: Props) => {
  const portal = useRef<any>(null);
  const mesh = useRef(new Mesh());
  const circleGeometry = useRef(new CircleGeometry(0.001, 64));
  const [rotX, rotY, rotZ] = Array.isArray(sceneRot)
    ? sceneRot
    : [sceneRot.x, sceneRot.y, sceneRot.z];

  useFrame((_, delta) => {
    const targetRadius = active ? 4 : 0.001;
    const currentRadius = circleGeometry.current.parameters.radius;

    if (active) {
      easing.damp(
        circleGeometry.current.parameters,
        "radius",
        targetRadius,
        0.03,
        delta
      );
    } else {
      easing.damp(
        circleGeometry.current.parameters,
        "radius",
        targetRadius,
        0.08,
        delta
      );
    }
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
    <mesh ref={mesh} position={position} rotation={planeRot}>
      <circleGeometry ref={circleGeometry} args={[4, 64]} />
      <MeshPortalMaterial ref={portal} resolution={0} blur={0}>
        <group castShadow receiveShadow rotation={sceneRot}>
          <mesh castShadow receiveShadow position={[0, -15, 0]}>
            <cylinderGeometry args={[5, 5, 30, 64, 1, true]} />
            <meshStandardMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            position={[0, -15, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <circleGeometry args={[5, 64]} />
            <meshToonMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>
          <group
            position={[0, -5.01, 0]}
            rotation={[
              -(Array.isArray(planeRot) ? planeRot[0] : planeRot.x) -
                (Array.isArray(sceneRot) ? sceneRot[0] : sceneRot.x),
              -(Array.isArray(planeRot) ? planeRot[1] : planeRot.y),
              -(Array.isArray(planeRot) ? planeRot[2] : planeRot.z),
            ]}
          >
            <pointLight
              position={[0, 0, 0]}
              intensity={1000}
              decay={2}
              color="white"
              scale={1}
            />

            {children}
          </group>
        </group>
      </MeshPortalMaterial>
    </mesh>
  );
};

export default PortalScene;
