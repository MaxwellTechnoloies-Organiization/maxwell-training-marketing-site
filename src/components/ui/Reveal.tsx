"use client";

import {
  useCallback,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type JSX,
  type Ref,
} from "react";


type HostElement = keyof JSX.IntrinsicElements;

export interface RevealOwnProps<T extends HostElement = "div"> {
  animation: string;
  as?: T;
  delay?: string;
}

export type RevealProps<T extends HostElement = "div"> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

export function Reveal<T extends HostElement = "div">({
  animation,
  as,
  delay,
  children,
  style,
  ...rest
}: RevealProps<T>) {
  const cleanupRef = useRef<(() => void) | null>(null);

  const attachRef = useCallback(
    (node: HTMLElement | null) => {
      cleanupRef.current?.();
      cleanupRef.current = null;

      if (!node) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      node.style.visibility = "hidden";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          node.style.visibility = "";
          node.classList.add("animate__animated", animation);
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      observer.observe(node);

      cleanupRef.current = () => {
        observer.disconnect();
        node.style.visibility = "";
      };
    },
    [animation],
  );

  const mergedStyle: CSSProperties = {
    ...(style as CSSProperties | undefined),
    ...(delay ? { animationDelay: delay } : null),
  };

  const Tag = (as ?? "div") as "div";
  const domProps = rest as ComponentPropsWithoutRef<"div">;

  return (
    <Tag
      ref={attachRef as Ref<HTMLDivElement>}
      style={mergedStyle}
      {...domProps}
    >
      {children}
    </Tag>
  );
}
