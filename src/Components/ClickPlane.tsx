import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Object3D } from "three";

const ClickPlane = (props: any) => {
  const ref = useRef(new Object3D());

  useFrame(() => {
    if (props.rotateX) {
      ref.current.rotation.x = props.rotateX;
    }
    if (props.rotateY) {
      ref.current.rotation.y = props.rotateY;
    }
    if (props.rotateZ) {
      ref.current.rotation.z = props.rotateZ;
    }
    // ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} {...props}>
      <planeGeometry args={[9, 9]} />
      <meshBasicMaterial
        color="red"
        side={DoubleSide}
        transparent
        visible={false}
      />
    </mesh>
  );
};

export default ClickPlane;
