"use client";

import { motion } from "framer-motion";

export function MotionButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        y: -2,
        scale: 1.018,
        filter: "drop-shadow(0 18px 38px rgba(239, 35, 60, 0.18))",
      }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}
