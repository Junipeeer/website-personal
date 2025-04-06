import { Billboard, Text } from "@react-three/drei";
import PortalScene from "../../PortalScene";
import SceneObject from "../../SceneObject";
import { pi } from "../../../constants/components";

interface Props {
  active: boolean;
}

const TopPortal = ({ active }: Props) => {
  return (
    <group>
      <PortalScene
        active={active}
        position={[0, 5.01, 0]}
        planeRot={[-pi / 2, 0, 0]}
        sceneRot={[pi / 2, 0, 0]}
        sceneBG="white"
      >
        <group>
          {/* ---- Red Cube ---- */}
          <SceneObject
            targetPos={[0, 5, 0]}
            targetRot={[pi / 4, pi / 4, 0]}
            targetScale={2}
            active={active}
            duration={0.2}
          >
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshToonMaterial color="maroon" />
            </mesh>
          </SceneObject>
          {/* ---- Billboard Icon ---- */}
          <SceneObject
            startPos={[4, 0, 0]}
            targetPos={[-10, 8, -2]}
            targetRot={[0, 0, 0.3]}
            targetScale={1}
            active={active}
            duration={0.15}
          >
            <Text fontSize={6} color="lightblue">
              🌐
            </Text>
          </SceneObject>
          {/* ---- Main Text ---- */}
          <SceneObject
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
              fontSize={3}
              color="#aaaaaa"
            >
              Info
            </Text>
          </SceneObject>
        </group>
      </PortalScene>
      {/*
        ------------------------------
        ------- Outside Portal -------
        ------------------------------
      */}
      {/* Red Cube */}
      <SceneObject
        targetPos={[0, 5, 0]}
        targetRot={[pi / 4, pi / 4, 0]}
        targetScale={2}
        active={active}
        duration={0.2}
      >
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshToonMaterial color="maroon" />
        </mesh>
      </SceneObject>
      {/* ---- Billboard Icon ---- */}
      <SceneObject
        startPos={[4, 0, 0]}
        targetPos={[-4, 8, -2]}
        targetRot={[0, 0, 0.3]}
        targetScale={1}
        active={active}
        duration={0.15}
      >
        <Billboard>
          <Text fontSize={6} color="lightblue">
            🌐
          </Text>
        </Billboard>
      </SceneObject>
      {/* ---- Main Text ---- */}
      <SceneObject
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
          fontSize={3}
          color="white"
        >
          Info
        </Text>
      </SceneObject>
      ;
    </group>
  );
};

export default TopPortal;
