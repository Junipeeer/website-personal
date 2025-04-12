import { Billboard, Edges, Text } from "@react-three/drei";
import PortalScene from "../helpers3D/PortalScene";
import SceneObject from "../helpers3D/SceneObject";
import { pi } from "../../constants/components3D";

interface Props {
  active: boolean;
}

const SceneObjects = ({ active }: Props) => {
  return (
    <group>
      {/* ---- Red Cube ---- */}
      <SceneObject
        startPos={[0, -3, 0]}
        targetPos={[0, 5, 0]}
        targetRot={[pi / 4, pi / 4, 0]}
        targetScale={2}
        active={active}
        duration={0.2}
      >
        <mesh>
          <Edges linewidth={4} scale={1.01} color="#ff2222" />
          <boxGeometry args={[2, 2, 2]} />
          <meshToonMaterial color="maroon" />
        </mesh>
      </SceneObject>
      {/* ---- Main Text ---- */}
      <SceneObject
        startPos={[0, 1, -3]}
        startRot={[0, 0, pi]}
        targetPos={[0, 6.7, 2.5]}
        targetRot={[-pi / 6, 0, 0]}
        targetScale={1}
        active={active}
        duration={0.2}
      >
        <Text
          font={"/fonts/Exo2-VariableFont_wght.ttf"}
          fontWeight={400}
          fontSize={2}
          color="lime"
          outlineWidth={0.1}
          outlineColor="white"
        >
          About Me
        </Text>
      </SceneObject>
    </group>
  );
};

const TopPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[0, 5.01, 0]}
        planeRot={[-pi / 2, 0, 0]}
        sceneRot={[pi / 2, 0, 0]}
        sceneBG="lime"
      >
        <SceneObjects active={active} />
      </PortalScene>
      {/*
        ------------------------------
        ------- Outside Portal -------
        ------------------------------
      */}
      <SceneObjects active={active} />
      {/* ---- Billboard Icon ---- */}
      <SceneObject
        startPos={[3, 0, 0]}
        startRot={[0, 0, -pi / 2]}
        targetPos={[-4, 9, -2]}
        targetRot={[0, 0, 0.3]}
        targetScale={1}
        active={active}
        duration={0.2}
      >
        <Billboard lockZ>
          <Text
            fontSize={5}
            color="limegreen"
            castShadow={false}
            receiveShadow={false}
            outlineWidth={0.1}
            outlineColor="white"
          >
            🌐
          </Text>
        </Billboard>
      </SceneObject>
    </group>
  );
};

export default TopPortal;
