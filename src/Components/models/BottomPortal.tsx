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
      {/* ---- Orange Torus ---- */}
      <SceneObject
        startPos={[-2, -1, 0]}
        targetPos={[0, -7, -1]}
        targetRot={[pi / 5, 0, 0]}
        targetScale={1}
        active={active}
      >
        <mesh>
          <torusGeometry args={[2.5, 1, 32]} />
          <Edges linewidth={4} scale={1.1} color="white" />
          <meshToonMaterial color="red" />
        </mesh>
      </SceneObject>
      {/* ---- Icon ---- */}
      <SceneObject
        startRot={[pi, 0, -pi / 2]}
        targetPos={[0.5, -6, 1.5]}
        targetRot={[pi / 5, 0, -pi / 4]}
        targetScale={1}
        active={active}
      >
        <Text
          castShadow={false}
          receiveShadow={false}
          fontSize={5}
          color="lightblue"
          outlineWidth={0.1}
          outlineColor="white"
        >
          💡
        </Text>
      </SceneObject>
      {/* ---- Main Text ---- */}
      <SceneObject
        startPos={[3, 2, 3]}
        startRot={[pi / 2, pi / 4, -pi / 2]}
        targetPos={[0, -9, 1]}
        targetRot={[pi / 6, pi / 24, 0]}
        targetScale={1}
        active={active}
        duration={0.2}
      >
        <group>
          <Text
            font={"/fonts/Exo2-VariableFont_wght.ttf"}
            fontWeight={400}
            fontSize={3}
            color="aqua"
            castShadow={false}
            receiveShadow={false}
            outlineWidth={0.05}
            outlineColor="white"
            glyphGeometryDetail={8}
          >
            Blog
          </Text>
          <Text
            position={[0, 0, 1]}
            rotation={[0, 0, pi / 24]}
            font={"/fonts/Exo2-VariableFont_wght.ttf"}
            fontWeight={400}
            fontSize={1}
            color="#212121"
            castShadow={false}
            receiveShadow={false}
            outlineWidth={0.05}
            outlineColor="white"
            glyphGeometryDetail={8}
          >
            Under Construction
          </Text>
        </group>
      </SceneObject>
    </group>
  );
};

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

export default BottomPortal;
