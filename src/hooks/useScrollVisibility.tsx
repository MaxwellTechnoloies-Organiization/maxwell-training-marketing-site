"use client";

import { useEffect, useRef, useState } from "react";


export function useScrollVisibility(offset: number): boolean {
  const [visible, setVisible] = useState(false);
  const currentRef = useRef(false);

  useEffect(() => {
    let lastScrollTop = window.scrollY;
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const st = window.scrollY;
      const next = st > lastScrollTop ? false : st > offset;
      lastScrollTop = st;

      if (next !== currentRef.current) {
        currentRef.current = next;
        setVisible(next);
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
  }, [offset]);

  return visible;
}
