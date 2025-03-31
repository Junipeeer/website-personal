import { Environment, MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useRef } from "react";
import { CircleGeometry, DoubleSide, Euler, Group, Mesh, Vector3 } from "three";

interface Props {
  active?: boolean;
  position?: [number, number, number] | Vector3;
  rotation?: [number, number, number] | Euler;
  children: ReactElement;
}

const PortalPlane = ({
  active = false,
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
  children,
}: Props) => {
  const portal = useRef<any>(null);
  const mesh = useRef(new Mesh());
  const circleGeometry = useRef(new CircleGeometry(0.01, 64));

  useFrame((_, delta) => {
    const targetRadius = active ? 4 : 4;
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
        {children}
      </MeshPortalMaterial>
    </mesh>
  );
};

export default PortalPlane;
