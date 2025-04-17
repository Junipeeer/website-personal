import { Canvas } from "@react-three/fiber";
import { HomeScene } from "../components/models/HomeScene";
import {
  BakeShadows,
  Environment,
  PerformanceMonitor,
  Preload,
  Stars,
} from "@react-three/drei";
import { Suspense, useCallback, useEffect, useState } from "react";
import Cube from "../components/models/Cube";
import { mainCam } from "../constants/components3D";
import CanvasLoader from "../components/helpers3D/CanvasLoader";
import CameraController from "../components/helpers3D/CameraController";
import ClickPlaneGenerator from "../components/helpers3D/ClickPlane";

interface HomeProps {
  triggerTransition: (route: string, face: number) => void;
}

const SWIPE_THRESHOLD = 50;

const Home = ({ triggerTransition }: HomeProps) => {
  const [isMouseInWindow, setIsMouseInWindow] = useState(true);
  const [activeFace, setActiveFace] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [transitionActive, setTransitionActive] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const hasVisited = sessionStorage.getItem("hasVisitedBefore") === "true";
  const [isInteractionAllowed, setIsInteractionAllowed] = useState(hasVisited);

  // Allow interactions after 3.5 seconds.
  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsInteractionAllowed(true);
        sessionStorage.setItem("hasVisitedBefore", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [hasVisited]);

  const handlePlaneClick = useCallback(
    (planeId: number, route: string) => {
      if (!isMobile || (isMobile && activeFace === planeId)) {
        if (activeFace !== -1) {
          setTransitionActive(true);
          triggerTransition(route, activeFace);
        } else {
          triggerTransition(route, activeFace);
        }
      }
    },
    [isMobile, activeFace, triggerTransition]
  );

  // Mobile swipe/touch handling (same as your current setup)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!isInteractionAllowed || transitionActive) return;
      e.preventDefault();
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },
    [isInteractionAllowed, transitionActive]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      if (!touchStart || !isInteractionAllowed || transitionActive) return;
      const deltaX = e.changedTouches[0].clientX - touchStart.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.y;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);
      if (Math.max(absDeltaX, absDeltaY) > SWIPE_THRESHOLD) {
        if (absDeltaY > absDeltaX) {
          if (activeFace === 0 && deltaY > 0) setActiveFace(-1);
          else if (activeFace === 1 && deltaY < 0) setActiveFace(-1);
          else setActiveFace(deltaY > 0 ? 1 : 0);
        } else {
          if (activeFace === 3 && deltaX > 0) setActiveFace(-1);
          else if (activeFace === 2 && deltaX < 0) setActiveFace(-1);
          else setActiveFace(deltaX > 0 ? 2 : 3);
        }
      }
      setTouchStart(null);
    },
    [touchStart, activeFace, isInteractionAllowed, transitionActive]
  );

  useEffect(() => {
    if (!isInteractionAllowed || transitionActive) return;
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    if (isMobile) {
      canvas.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      const handleMouseLeave = () => {
        setIsMouseInWindow(false);
        setActiveFace(-1);
      };
      const handleMouseEnter = () => setIsMouseInWindow(true);
      canvas.addEventListener("mouseenter", handleMouseEnter);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        canvas.removeEventListener("mouseenter", handleMouseEnter);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    isMobile,
    isInteractionAllowed,
    transitionActive,
    handleTouchStart,
    handleTouchEnd,
  ]);

  return (
    <section id="Home" className="page-wrapper h-full flex">
      <Canvas
        key={location.pathname}
        id="canvas"
        camera={mainCam}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <PerformanceMonitor />
          <BakeShadows />
          <Preload all />
          <Environment preset="night" />
          <group position={[0, 0, -800]}>
            <Stars radius={1000} count={30000} />
          </group>
          {isInteractionAllowed && (
            <CameraController
              activeFace={activeFace}
              isMobile={isMobile}
              transitioning={transitionActive}
            />
          )}

          <HomeScene activeFace={activeFace} />
          <ClickPlaneGenerator
            setActiveFace={setActiveFace}
            isMobile={isMobile}
            activeFace={activeFace}
            onPlaneClick={handlePlaneClick}
            isInteractionAllowed={isInteractionAllowed}
          />
          <Cube isMouseInWindow={isMouseInWindow} activeFace={activeFace} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
