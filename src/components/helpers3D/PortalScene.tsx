import { MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useEffect, useMemo, useRef } from "react";
import { CircleGeometry, DoubleSide, Euler, Mesh, Vector3 } from "three";
import { pi } from "../../constants/components3D";

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
  sceneBG = "#ff79e4",
  children,
}: Props) => {
  const mesh = useRef(new Mesh());
  const initialGeometry = useMemo(() => new CircleGeometry(0.001, 32), []);
  const circleGeometry = useRef(initialGeometry);

  useFrame((_, delta) => {
    if (!active && circleGeometry.current.parameters.radius <= 0.002) return;
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
        32
      );
      mesh.current.geometry.dispose();
      mesh.current.geometry = newGeometry;
      circleGeometry.current = newGeometry;
    }
  });

  useEffect(() => {
    return () => {
      if (circleGeometry.current) {
        circleGeometry.current.dispose();
        mesh.current.geometry.dispose();
      }
    };
  }, []);

  return (
    <mesh ref={mesh} position={position} rotation={planeRot}>
      <circleGeometry ref={circleGeometry} args={[4, 32]} />

      <MeshPortalMaterial blend={0} resolution={0} blur={0}>
        <group rotation={sceneRot}>
          <mesh position={[0, -15, 0]}>
            <cylinderGeometry args={[7, 7, 30, 32, 1, true]} />
            <meshToonMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>
          <mesh position={[0, -15, 0]} rotation={[pi / 2, 0, 0]}>
            <circleGeometry args={[7, 32]} />
            <meshToonMaterial
              side={DoubleSide}
              color={sceneBG}
              emissive={sceneBG}
            />
          </mesh>

          <group
            position={[0, -5.1, 0]}
            rotation={[
              -(Array.isArray(planeRot) ? planeRot[0] : planeRot.x) -
                (Array.isArray(sceneRot) ? sceneRot[0] : sceneRot.x),
              -(Array.isArray(planeRot) ? planeRot[1] : planeRot.y),
              -(Array.isArray(planeRot) ? planeRot[2] : planeRot.z),
            ]}
          >
            {children}
          </group>
        </group>
      </MeshPortalMaterial>
    </mesh>
  );
};

export default PortalScene;
