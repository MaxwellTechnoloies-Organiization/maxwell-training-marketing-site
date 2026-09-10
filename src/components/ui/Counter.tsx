"use client";

import { useEffect, useRef } from "react";

export interface CounterProps {
  value: number;
  duration?: number;
  localize?: boolean;
}

export function Counter({
  value,
  duration = 1000,
  localize = true,
}: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const format = (n: number) => (localize ? n.toLocaleString() : String(n));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.textContent = format(value);
      return;
    }

    let frameId = 0;
    let startTime = 0;

    const step = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      node.textContent = format(
        Math.round(value * (1 - Math.pow(1 - progress, 3))),
      );
      frameId = progress < 1 ? window.requestAnimationFrame(step) : 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        node.textContent = format(0);
        frameId = window.requestAnimationFrame(step);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [value, duration, localize]);

  return (
    <span ref={nodeRef} className="counter">
      {localize ? value.toLocaleString() : value}
    </span>
  );
}
