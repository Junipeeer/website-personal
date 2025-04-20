import { useEffect, useRef } from "react";
import { Group } from "three";

interface Props {
  active: boolean;
  delay: number;
  children: React.ReactNode;
}

const DelayedUnmount = ({ active, delay, children }: Props) => {
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (active) {
      if (groupRef.current) groupRef.current.visible = true;
    } else {
      timeoutId = setTimeout(() => {
        if (groupRef.current) groupRef.current.visible = false;
      }, delay);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [active, delay]);

  return <group ref={groupRef}>{children}</group>;
};

export default DelayedUnmount;
