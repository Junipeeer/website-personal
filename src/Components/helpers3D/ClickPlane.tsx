import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh, Shape } from "three";
import {
  calculateHoleSize,
  clickPlanes,
  mainCam,
} from "../../constants/components3D";

interface Props {
  points: [number, number][];
  isMobile: boolean;
  onPointerEnter: (e: PointerEvent) => void;
  onPointerOut: (e: PointerEvent) => void;
  onPointerDown: (e: PointerEvent) => void;
  onPointerMove: (e: PointerEvent) => void;
  onPointerUp: (e: PointerEvent) => void;
  onClick?: (e: Event) => void;
}

const ClickPlane = ({
  points,
  isMobile,
  onPointerEnter,
  onPointerOut,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onClick,
}: Props) => {
  const meshRef = useRef<Mesh>(null);

  const createShape = () => {
    const shape = new Shape();

    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      shape.lineTo(points[i][0], points[i][1]);
    }
    shape.lineTo(points[0][0], points[0][1]);

    return shape;
  };

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerEnter={onPointerEnter}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={onClick}
      renderOrder={2}
      scale={isMobile ? 2 : 1}
    >
      <shapeGeometry args={[createShape()]} />
      <meshBasicMaterial
        transparent
        opacity={0}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

interface CPGProps {
  setActiveFace: (index: number) => void;
  isMobile: boolean;
  activeFace: number;
  onPlaneClick: (planeId: number, route: string) => void;
  isInteractionAllowed: boolean;
}

const ClickPlaneGenerator = ({
  setActiveFace,
  isMobile,
  onPlaneClick,
  isInteractionAllowed,
  activeFace,
}: CPGProps) => {
  const { viewport } = useThree();
  const holeSize = isMobile
    ? calculateHoleSize(viewport, mainCam) / 2
    : calculateHoleSize(viewport, mainCam);
  const isDragging = useRef(false);
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);

  const handleInteraction = (planeId: number, route: string) => {
    if (!isInteractionAllowed || isDragging.current) return;

    if (isMobile) {
      if (activeFace === planeId) {
        onPlaneClick(planeId, route);
      }
    } else {
      onPlaneClick(planeId, route);
    }
  };

  return (
    <group>
      {clickPlanes.map((plane) => (
        <ClickPlane
          isMobile={isMobile}
          key={plane.id}
          points={plane.getPoints(viewport, holeSize)}
          onPointerDown={(e) => {
            if (isMobile) {
              touchStartPos.current = { x: e.clientX, y: e.clientY };
              isDragging.current = false;
            }
          }}
          onPointerMove={(e) => {
            if (isMobile && touchStartPos.current) {
              const deltaX = e.clientX - touchStartPos.current.x;
              const deltaY = e.clientY - touchStartPos.current.y;
              if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                isDragging.current = true;
              }
            }
          }}
          onPointerUp={() => {
            if (isMobile && !isDragging.current) {
              handleInteraction(plane.id, plane.route);
            }
            touchStartPos.current = null;
          }}
          onPointerEnter={() => {
            if (isInteractionAllowed && !isMobile) setActiveFace(plane.id);
          }}
          onPointerOut={() => {
            if (!isMobile) setActiveFace(-1);
          }}
          onClick={() => {
            if (!isMobile) {
              handleInteraction(plane.id, plane.route);
            }
          }}
        />
      ))}
    </group>
  );
};

export default ClickPlaneGenerator;
