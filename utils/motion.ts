import type { Transition } from "framer-motion";

// Shared timing for content entrances and interactive feedback.
export const entranceOffset = 28;

export const entranceTransition: Transition = {
  type: "tween",
  duration: 0.6,
  delay: 0,
  ease: [0.25, 0.1, 0.25, 1],
};

export const interactionTransition: Transition = {
  type: "tween",
  duration: 0.2,
  delay: 0,
  ease: "easeOut",
};

export const revealViewport = {
  once: true,
  amount: "some" as const,
  margin: "0px 0px -32px 0px",
};
