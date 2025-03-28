import { MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ReactElement, useRef } from "react";
import { CircleGeometry, DoubleSide, Euler, Group, Mesh, Vector3 } from "three";

interface Props {
  active?: boolean;
  position?: Vector3;
  rotation?: Euler;
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
  const target = useRef(new Group());
  const circleGeometry = useRef(new CircleGeometry(0.001, 64));

  useFrame((_, delta) => {
    const targetRadius = active ? 0.4 : 0.001;
    const currentRadius = circleGeometry.current.parameters.radius;
    const targetPos = active ? new Vector3(0, 0, 0) : new Vector3(0, -1, 0);
    easing.damp3(target.current.position, targetPos, 0.25, delta);

    // Ease the radius value toward the target using a damping factor (e.g. 4)
    easing.damp(
      circleGeometry.current.parameters,
      "radius",
      targetRadius,
      0.05,
      delta
    );

    // Only update geometry if the change is significant
    if (
      Math.abs(circleGeometry.current.parameters.radius - currentRadius) > 0.001
    ) {
      const newGeometry = new CircleGeometry(
        circleGeometry.current.parameters.radius,
        64
      );
      mesh.current.geometry.dispose(); // Dispose the old geometry
      mesh.current.geometry = newGeometry;
      circleGeometry.current = newGeometry;
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <primitive object={circleGeometry.current} />
      <MeshPortalMaterial
        ref={portal}
        side={DoubleSide}
        worldUnits
        resolution={0}
        blur={0}
      >
        <ambientLight />
        <group ref={target}>{children}</group>
      </MeshPortalMaterial>
    </mesh>
  );
};

export default PortalPlane;
