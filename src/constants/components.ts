import { Euler, Vector3 } from "three";

export const pi = Math.PI;

export const mainCam = {
  position: [0, 0, 88.424] as [number, number, number],
  far: 1000,
  near: 0.1,
  fov: 75,
  rotation: [0, 0, 0] as [number, number, number],
};

export const emojis = [
  { emoji: "👋", pos: { x: 0, y: 0, z: 5.02 }, rot: { x: 0, y: 0, z: 0 } },
  { emoji: "🌐", pos: { x: 0, y: 5.02, z: 0 }, rot: { x: pi / 2, y: 0, z: 0 } },
  { emoji: "🛠️", pos: { x: 5.02, y: 0, z: 0 }, rot: { x: 0, y: pi / 2, z: 0 } },
  { emoji: "🎨", pos: { x: -5.02, y: 0, z: 0 }, rot: { x: 0, y: pi / 2, z: (pi / 2) * 3 } },
  { emoji: "💡", pos: { x: 0, y: -5.02, z: 0 }, rot: { x: pi / 2, y: 0, z: 0 } },
];

export const clickPlanes = [
  {
    index: 0,
    rotation: new Euler(-pi / 2, 0, 0),
    position: new Vector3(0, 5.03, 0),
    label: "top",
  },
  {
    index: 1,
    rotation: new Euler(pi / 2, 0, 0),
    position: new Vector3(0, -5.03, 0),
    label: "bottom",
  },
  {
    index: 2,
    rotation: new Euler(0, pi / 2, 0),
    position: new Vector3(5.03, 0, 0),
    label: "right",
  },
  {
    index: 3,
    rotation: new Euler(0, -pi / 2, 0),
    position: new Vector3(-5.03, 0, 0),
    label: "left",
  },
];
