const pi = Math.PI;

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
    rotation: { x: pi / 2, y: 0, z: 0 },
    position: [0, 5.01, 0],
    label: "top",
  },
  {
    index: 1,
    rotation: { x: pi / 2, y: 0, z: 0 },
    position: [0, -5.01, 0],
    label: "bottom",
  },
  {
    index: 2,
    rotation: { x: 0, y: pi / 2, z: 0 },
    position: [5.01, 0, 0],
    label: "right",
  },
  {
    index: 3,
    rotation: { x: 0, y: pi / 2, z: 0 },
    position: [-5.01, 0, 0],
    label: "left",
  },
];
