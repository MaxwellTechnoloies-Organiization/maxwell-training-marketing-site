"use client";

import { useEffect, useRef, useState } from "react";

export function useStickyHeader(): boolean {
  const [onScroll, setOnScroll] = useState(false);
  const currentRef = useRef(false);

  useEffect(() => {
    let lastScrollTop = window.scrollY;
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const st = window.scrollY;
      const next = st > lastScrollTop ? false : st > 0;
      lastScrollTop = st;

      if (next !== currentRef.current) {
        currentRef.current = next;
        setOnScroll(next);
      }
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return onScroll;
}
