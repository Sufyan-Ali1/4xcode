"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useSafeReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={entranceTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
