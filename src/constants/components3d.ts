export const pi = Math.PI;

export const mainCam = {
  position: [0, 0, 88.424] as [number, number, number],
  far: 1000,
  near: 0.1,
  fov: 28,
  rotation: [0, 0, 0] as [number, number, number],
};

export interface ClickPlaneConfig {
  id: number;
  route: string;
  getPoints: (viewport: { width: number; height: number }, holeSize: number) => [number, number][];
}

export const calculateHoleSize = (viewport: { height: number }, camera: { fov: number; position: [number, number, number] }) => {
  const cubeBaseSize = 5;
  const cubeScale = 1.5;
  const actualCubeSize = cubeBaseSize * cubeScale;
  const distance = camera.position[2];
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