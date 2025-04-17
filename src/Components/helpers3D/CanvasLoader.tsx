import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  return (
    <Html center>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {Math.round(displayProgress)}%
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
