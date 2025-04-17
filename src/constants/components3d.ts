import { Vector3 } from "three";

export const pi = Math.PI;

export const mainCam = {
  position: new Vector3(0, 0, 40),
  far: 10000,
  near: 0.1,
  fov: 70,
  rotation: [0, 0, 0] as [number, number, number],
};

export const getPortalColor = (face: number): string => {
  switch (face) {
    case 0:
      return "#12ff30"; // Top portal green
    case 1:
      return "aqua"; // Bottom portal aqua
    case 2:
      return "#ffcc30"; // Right portal yellow/orange
    case 3:
      return "hotpink"; // Left portal pink
    default:
      return "white";
  }
};

export const getTransitionColor = (face: number): string => {
  switch (face) {
    case 0:
      return "#95e468"; // Top portal green
    case 1:
      return "#99e3e2"; // Bottom portal aqua
    case 2:
      return "#e6cf74"; // Right portal yellow/orange
    case 3:
      return "#ed93d9"; // Left portal pink
    default:
      return "white";
  }
  
}

interface crystalProps {
  position: [number, number, number];
  scaleFactor: number;
  rotationSpeed: number;
  oscillationAmplitude: number;
  oscillationOffset: number;
}

export const crystals: crystalProps[] = [
  {
    position: [270, 133, -456],
    scaleFactor: 1.11,
    rotationSpeed: 0.43,
    oscillationAmplitude: 7.82,
    oscillationOffset: 2.14
  },
  {
    position: [0, 140, -293],
    scaleFactor: 1.05,
    rotationSpeed: 0.34,
    oscillationAmplitude: 6.18,
    oscillationOffset: 4.9
  },
  {
    position: [-350, 60, -380],
    scaleFactor: 1.1,
    rotationSpeed: 0.35,
    oscillationAmplitude: 4.2,
    oscillationOffset: 4.13
  },
  {
    position: [-178, 130, -480],
    scaleFactor: 0.83,
    rotationSpeed: -0.13,
    oscillationAmplitude: 8.2,
    oscillationOffset: 3.43
  },
  {
    position: [-90, 165, -469],
    scaleFactor: 1.09,
    rotationSpeed: -0.29,
    oscillationAmplitude: 6,
    oscillationOffset: 1.18
  },
  {
    position: [-247, 157, -314],
    scaleFactor: 0.9,
    rotationSpeed: -0.24,
    oscillationAmplitude: 6.95,
    oscillationOffset: 1.27
  },
  {
    position: [72, 132, -298],
    scaleFactor: 0.78,
    rotationSpeed: -0.34,
    oscillationAmplitude: 10,
    oscillationOffset: 2.71
  },
  {
    position: [-177, 62, -278],
    scaleFactor: 0.84,
    rotationSpeed: -0.36,
    oscillationAmplitude: 5.85,
    oscillationOffset: 6.1
  },
  {
    position: [296, 62, -597],
    scaleFactor: 1.07,
    rotationSpeed: -0.19,
    oscillationAmplitude: 6.61,
    oscillationOffset: 2.59
  },
  {
    position: [313, 30, -391],
    scaleFactor: 0.85,
    rotationSpeed: 0.43,
    oscillationAmplitude: 2.35,
    oscillationOffset: 0.78
  },
  {
    position: [200, 110, -565],
    scaleFactor: 0.89,
    rotationSpeed: 0.22,
    oscillationAmplitude: 7.25,
    oscillationOffset: 4.93
  },
]

export interface ClickPlaneConfig {
  id: number;
  route: string;
  getPoints: (viewport: { width: number; height: number }, holeSize: number) => [number, number][];
}

export const calculateHoleSize = (viewport: { height: number }, camera: { fov: number; position: Vector3 }) => {
  const cubeBaseSize = 5;
  const cubeScale = 1.5;
  const actualCubeSize = cubeBaseSize * cubeScale;
  const distance = camera.position.z || 40;
  const fov = (camera.fov * Math.PI) / 180;

  return (actualCubeSize * viewport.height) / (2 * distance * Math.tan(fov / 2));
};

export const clickPlanes: ClickPlaneConfig[] = [
  {
    // top plane
    id: 0,
    route: "/about",
    getPoints: (viewport, holeSize) => {
      const left = -holeSize / 2;
      const right = holeSize / 2;
      const top = holeSize / 2;
      
      return [
        [-viewport.width / 2, viewport.height / 2],
        [viewport.width / 2, viewport.height / 2],
        [right, top],
        [left, top],
      ];
    },
  },
  {
    // bottom plane
    id: 1,
    route: "/blog",
    getPoints: (viewport, holeSize) => {
      const left = -holeSize / 2;
      const right = holeSize / 2;
      const bottom = -holeSize / 2;
      
      return [
        [left, bottom],
        [right, bottom],
        [viewport.width / 2, -viewport.height / 2],
        [-viewport.width / 2, -viewport.height / 2],
      ];
    },
  },
  {
    // right plane
    id: 2,
    route: "/lab",
    getPoints: (viewport, holeSize) => {
      const right = holeSize / 2;
      const top = holeSize / 2;
      const bottom = -holeSize / 2;
      
      return [
        [right, top],
        [viewport.width / 2, viewport.height / 2],
        [viewport.width / 2, -viewport.height / 2],
        [right, bottom],
      ];
    },
  },
  {
    // left plane
    id: 3,
    route: "/portfolio",
    getPoints: (viewport, holeSize) => {
      const left = -holeSize / 2;
      const top = holeSize / 2;
      const bottom = -holeSize / 2;
      
      return [
        [-viewport.width / 2, viewport.height / 2],
        [left, top],
        [left, bottom],
        [-viewport.width / 2, -viewport.height / 2],
      ];
    },
  }
];