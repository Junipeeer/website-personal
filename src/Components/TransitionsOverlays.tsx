import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingOverlay = () => {
  const { progress } = useProgress();
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset and show overlay when navigating to pages that need it
    if (location.pathname === "/") {
      setShow(true);
      // Small delay to ensure state is reset
      const timer = setTimeout(() => {
        if (progress === 100) {
          setShow(false);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location, progress]);

  useEffect(() => {
    if (progress === 100) {
      // Delay hiding the overlay to ensure everything is ready
      const timer = setTimeout(() => setShow(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-900"
        >
          <div className="text-center">
            <motion.p className="text-white text-xl font-bold">
              {Math.round(progress)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;

export const TransitionFromHome = ({
  portalBgColor,
}: {
  portalBgColor: string;
}) => {
  return (
    <AnimatePresence>
      {portalBgColor && (
        <motion.div
          key="portalOverlay"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
          style={{
            position: "fixed",
            top: "-75vh",
            left: "calc(50vw - 125vh)",
            width: "250vh",
            height: "250vh",
            background: portalBgColor,
            borderRadius: "50%",
            zIndex: 9999,
          }}
        />
      )}
    </AnimatePresence>
  );
};

interface IntroProps {
  children: ReactNode;
  className?: string;
}

export const IntroAnimation = ({ children, className }: IntroProps) => {
  const container = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
