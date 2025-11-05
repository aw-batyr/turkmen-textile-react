import { useLenis } from "lenis/react";
import { useEffect } from "react";

export const useScrollTop = (arg?: string | number) => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, {
      lerp: 0.3,
      duration: 0.3,
    });
  }, [lenis, arg]);
};
