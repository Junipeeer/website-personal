import { Billboard, Text } from "@react-three/drei";
import PortalScene from "../../PortalScene";
import SceneObject from "../../SceneObject";
import { pi } from "../../../constants/components";

interface Props {
  active: boolean;
}

const LeftPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[-5.01, 0, 0]}
        planeRot={[0, -pi / 2, 0]}
        sceneRot={[pi / 2, 0, 0]}
      >
        {/* Lime Box */}
        <SceneObject
          targetPos={[-10, 0, 0]}
          targetRot={[0, pi / 3, 0]}
          targetScale={2}
          active={active}
        >
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshToonMaterial color="green" />
          </mesh>
        </SceneObject>
      </PortalScene>
      {/*
        ------------------------------
        ------- Outside Portal -------
        ------------------------------
      */}
      {/* Lime Box */}
      <SceneObject
        targetPos={[-10, 0, 0]}
        targetRot={[0, pi / 3, 0]}
        targetScale={2}
        active={active}
      >
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshToonMaterial color="green" />
        </mesh>
      </SceneObject>
    </group>
  );
};

export default LeftPortal;
