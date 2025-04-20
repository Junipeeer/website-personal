import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaArrowsAlt, FaHandPointUp } from "react-icons/fa";

interface Props {
  isMobile: boolean;
}

const InteractionIndicator = ({ isMobile }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const loaded = useProgress();

  useEffect(() => {
    // Hide after 10 seconds
    if (loaded) {
      const timer = setTimeout(
        () => setIsVisible(false),
        isMobile ? 15000 : 10000
      );
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  const DesktopAnimation = useCallback(() => {
    const radius = 20;
    const points = 24;
    const xPoints = Array.from(
      { length: points + 1 },
      (_, i) => radius * Math.sin((2 * Math.PI * i) / points)
    );
    const yPoints = Array.from(
      { length: points + 1 },
      (_, i) => radius * Math.cos((2 * Math.PI * i) / points)
    );

    return (
      <motion.div
        className="flex flex-col items-center gap-4 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Mouse pointer */}
        <motion.div
          className="relative text-xl mb-5"
          animate={{
            x: xPoints,
            y: yPoints,
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.4,
            repeatType: "loop",
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-0.5 -left-0.5 w-5 h-5 bg-white/20 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </motion.div>

        {/* Four-way arrow text */}
        <motion.p
          className="text-sm font-medium whitespace-nowrap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="flex items-center gap-2">
            <FaArrowsAlt className="text-lg" />
            Move around to navigate
          </span>
        </motion.p>
      </motion.div>
    );
  }, []);

  const MobileAnimation = useCallback(
    () => (
      <motion.div
        className="flex flex-col items-center gap-4 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Touch indicator with sequential animation */}
        <motion.div
          className="relative text-3xl mb-5"
          animate={{
            x: [-20, 20, 20, 0, 0, 0, 0],
            y: [0, 0, 0, 20, -20, -20, -20],
            opacity: [1, 1, 0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            times: [0, 0.25, 0.3, 0.31, 0.6, 0.85, 0.9], // Controls timing of each movement
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5, // Brief pause between sequences
          }}
        >
          <FaHandPointUp className="text-3xl -rotate-30" />
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <FaHandPointUp className="text-white/20 text-3xl -rotate-30" />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-sm font-medium whitespace-nowrap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="flex items-center gap-2">
            <FaArrowsAlt className="text-lg" />
            Swipe to navigate
          </span>
        </motion.p>
      </motion.div>
    ),
    []
  );

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      exit={{ opacity: 0 }}
    >
      {isMobile ? <MobileAnimation /> : <DesktopAnimation />}
    </motion.div>
  );
};

export default InteractionIndicator;
