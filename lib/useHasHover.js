"use client";

import { useEffect, useState } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True only on devices with a real pointer. Framer Motion's `whileHover` fires
 * from pointerenter, which a touch tap also emits, so hover states would stick
 * on phones. Gate every hover animation on this.
 *
 * Starts false so the server render and first paint carry no hover behaviour.
 */
export default function useHasHover() {
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    setHasHover(mql.matches);
    const onChange = (event) => setHasHover(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return hasHover;
}
