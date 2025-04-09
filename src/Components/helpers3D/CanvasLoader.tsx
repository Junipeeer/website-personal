import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      className="flex justify-center items-center flex-col text-neutral-100"
    >
      <span className="canvas-loader" />
      <p className="text-md text-neutral-100 font-[800] mt-8">
        {progress !== 0 ? `${progress.toFixed(1)}%` : "loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
