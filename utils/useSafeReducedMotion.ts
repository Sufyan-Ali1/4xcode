"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Returns reduced motion preference ONLY after client mount.
 * Before mount returns false so SSR and first client render match exactly.
 * This prevents the framer-motion hydration mismatch.
 */
export function useSafeReducedMotion(): boolean {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount: always false → same as SSR
  return mounted ? (reduced ?? false) : false;
}
