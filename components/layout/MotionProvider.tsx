"use client";

import { MotionConfig } from "framer-motion";
import { interactionTransition } from "@/utils/motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={interactionTransition}>
      {children}
    </MotionConfig>
  );
}
