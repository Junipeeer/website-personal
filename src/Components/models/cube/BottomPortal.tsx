import { Billboard, Text } from "@react-three/drei";
import PortalScene from "../../PortalScene";
import SceneObject from "../../SceneObject";
import { pi } from "../../../constants/components";

interface Props {
  active: boolean;
}

const BottomPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[0, -5.01, 0]}
        planeRot={[pi / 2, 0, 0]}
        sceneRot={[pi / 2, 0, 0]}
        sceneBG="aqua"
      >
        {/* Orange Box */}
        <SceneObject
          targetPos={[0, -5, -1]}
          targetRot={[0, 0, 0]}
          targetScale={1}
          active={active}
        >
          <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshToonMaterial color="red" />
          </mesh>
        </SceneObject>
      </PortalScene>
      {/*
        ------------------------------
        ------- Outside Portal -------
        ------------------------------
      */}
      {/* Orange Box */}
      <SceneObject
        targetPos={[0, -5, -1]}
        targetRot={[0, 0, 0]}
        targetScale={1}
        active={active}
      >
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshToonMaterial color="red" />
        </mesh>
      </SceneObject>
    </group>
  );
};

export default BottomPortal;
