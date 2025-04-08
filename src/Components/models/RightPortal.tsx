import { Edges, Text } from "@react-three/drei";
import PortalScene from "../helpers3D/PortalScene";
import SceneObject from "../helpers3D/SceneObject";
import { pi } from "../../constants/components3D";

interface Props {
  active: boolean;
}

const SceneObjects = ({ active }: Props) => {
  return (
    <group>
      {/* ---- Blue Pyramid ---- */}
      <SceneObject
        startPos={[0, 2, 0]}
        startRot={[0, -pi / 2, 0]}
        targetPos={[8.2, 0, -3]}
        targetRot={[pi / 10, pi / 5, 0]}
        targetScale={2}
        active={active}
      >
        <mesh>
          <Edges linewidth={4} scale={1.1} color="white" />
          <coneGeometry args={[2, 2, 4, 3]} />
          <meshToonMaterial color="blue" />
        </mesh>
      </SceneObject>
      {/* ---- Icon ---- */}
      <SceneObject
        startPos={[0, -4, 2]}
        startRot={[0, 0, -pi / 2]}
        targetPos={[9.2, 5, -1.7]}
        targetRot={[pi / 10, pi / 4, 0]}
        targetScale={1}
        active={active}
      >
        <Text
          castShadow={false}
          receiveShadow={false}
          fontSize={5}
          color="orange"
          outlineWidth={0.1}
          outlineColor="white"
        >
          🧪
        </Text>
      </SceneObject>
      {/* ---- Main Text ---- */}
      <SceneObject
        startPos={[0, -1, 0]}
        startRot={[0, 0, pi / 2]}
        targetPos={[10, 0, 2]}
        targetRot={[0, pi / 8, -pi / 16]}
        targetScale={1}
        active={active}
        duration={0.2}
      >
        <Text
          font={"/fonts/Exo2-VariableFont_wght.ttf"}
          fontWeight={400}
          fontSize={2}
          color="#ffcc30"
          castShadow={false}
          receiveShadow={false}
          outlineWidth={0.05}
          outlineColor="white"
          glyphGeometryDetail={8}
        >
          Lab
        </Text>
      </SceneObject>
    </group>
  );
};

const RightPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[5.01, 0, 0]}
        planeRot={[0, pi / 2, 0]}
        sceneRot={[pi / 2, 0, 0]}
        sceneBG="orange"
      >
        <SceneObjects active={active} />
      </PortalScene>
      {/*
        ------------------------------
        ------- Outside Portal -------
        ------------------------------
      */}
      <SceneObjects active={active} />
    </group>
  );
};

export default RightPortal;
