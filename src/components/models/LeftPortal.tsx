import { Text } from "@react-three/drei";
import PortalScene from "../helpers3D/PortalScene";
import SceneObject from "../helpers3D/SceneObject";
import { pi } from "../../constants/components3D";

interface Props {
  active: boolean;
}

const SceneObjects = ({ active }: Props) => {
  return (
    <group>
      {/* ---- Lime Sphere ---- */}
      <SceneObject
        startPos={[0, -1, 0]}
        targetPos={[-10, 0, 0]}
        targetRot={[0, pi / 3, 0]}
        targetScale={2.5}
        active={active}
      >
        <group>
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshMatcapMaterial color="#22ff99" />
          </mesh>
          <mesh>
            <sphereGeometry args={[1.1, 8, 8]} />
            <meshBasicMaterial color="white" wireframe />
          </mesh>
        </group>
      </SceneObject>
      {/* ---- Billboard Icon ---- */}
      <SceneObject
        startPos={[0, -3, 0]}
        startRot={[0, 0, pi / 2]}
        targetPos={[-7, 3, -1]}
        targetRot={[0, -pi / 4, 0]}
        targetScale={1}
        active={active}
      >
        <Text
          fontSize={5}
          color="#cc7084"
          outlineWidth={0.1}
          outlineColor="white"
        >
          🎨
        </Text>
      </SceneObject>
      {/* ---- Main Text ---- */}
      <SceneObject
        startPos={[0, 3, 0]}
        startRot={[0, 0, pi / 2]}
        targetPos={[-11.7, 0, 2.5]}
        targetRot={[0, -pi / 8, -pi / 24]}
        targetScale={1}
        active={active}
        duration={0.2}
      >
        <Text
          font={"./fonts/Exo2-VariableFont_wght.ttf"}
          fontWeight={400}
          fontSize={2}
          color="hotpink"
          outlineWidth={0.05}
          outlineColor="white"
          glyphGeometryDetail={8}
        >
          Portfolio
        </Text>
      </SceneObject>
    </group>
  );
};

const LeftPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[-5.1, 0, 0]}
        planeRot={[0, -pi / 2, 0]}
        sceneRot={[pi / 2, 0, 0]}
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

export default LeftPortal;
