import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useEffect, useRef } from "react";
import { pi } from "../../constants/components3D";

interface ControllerProps {
  activeFace: number;
  isMobile: boolean;
  transitioning: boolean;
}

const CameraController = ({
  activeFace,
  isMobile,
  transitioning,
}: ControllerProps) => {
  const { camera } = useThree();
  const targetX = useRef(0);
  const targetY = useRef(0);
  const targetZ = useRef(40);
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  useEffect(() => {
    targetX.current = 0;
    targetY.current = 0;
    targetZ.current = 40;
    targetRotX.current = 0;
    targetRotY.current = 0;

    if (isMobile) {
      switch (activeFace) {
        case 0: // Up swipe
          targetY.current = 8;
          break;
        case 1: // Down swipe
          targetY.current = -8;
          break;
        case 2: // Left swipe
          targetX.current = 8;
          break;
        case 3: // Right swipe
          targetX.current = -8;
          break;
        default:
          targetX.current = 0;
      }
    }
    if (transitioning) {
      targetZ.current = 10;
      switch (activeFace) {
        case 0: // Up swipe
          targetY.current = 10;
          targetRotX.current = -pi / 5;
          break;
        case 1: // Down swipe
          targetY.current = -10;
          targetRotX.current = pi / 8;
          break;
        case 2: // Left swipe
          targetX.current = 10;
          targetRotY.current = pi / 8;
          break;
        case 3: // Right swipe
          targetX.current = -10;
          targetRotY.current = -pi / 8;
          break;
        default:
          targetX.current = 0;
      }
    }
  }, [activeFace, transitioning]);

  useFrame((_, delta) => {
    easing.damp(camera.position, "x", targetX.current, 0.2, delta);
    easing.damp(camera.position, "y", targetY.current, 0.2, delta);
    easing.damp(camera.position, "z", targetZ.current, 0.5, delta);
    easing.damp(camera.rotation, "x", targetRotX.current, 0.5, delta);
    easing.damp(camera.rotation, "y", targetRotY.current, 0.5, delta);
  });

  return null;
};

export default CameraController;
