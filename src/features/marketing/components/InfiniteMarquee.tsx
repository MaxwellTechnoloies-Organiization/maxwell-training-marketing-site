"use client";

import { useEffect, useRef } from "react";
import type { Certification } from "@/features/marketing/data/home";
import Image from "next/image";

export interface InfiniteMarqueeProps {
  items: Certification[];
  reverse?: boolean;
  className?: string;
}

export function InfiniteMarquee({
  items,
  reverse = false,
  className,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const originals = track.querySelectorAll<HTMLElement>(":scope > .item");
    if (originals.length === 0) return;

    const measure = () => {
      let listWidth = 0;
      originals.forEach((item) => {
        const marginRight = parseFloat(
          window.getComputedStyle(item).marginRight,
        );
        listWidth += item.offsetWidth + marginRight;
      });

      track.style.width = `${listWidth}px`;
      track.style.animationDuration = `${listWidth / 100}s`;
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, [items]);

  const duplicate = (
    <div className="item-dup" aria-hidden="true">
      {items.map((item) => (
        <div className="item" key={`dup-${item.label}`}>
          <div className="thumb">
            <img src={item.logo} alt="" />
          </div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`block-infinite layout-02${className ? ` ${className}` : ""}`}
    >
      <div ref={trackRef} className={`infinite${reverse ? " layout-02" : ""}`}>
        {reverse && duplicate}
        {items.map((item) => (
          <div className="item" key={item.label}>
            <div className="thumb">
              <img src={item.logo} alt={item.alt} />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
        {!reverse && duplicate}
      </div>
    </div>
  );
}
