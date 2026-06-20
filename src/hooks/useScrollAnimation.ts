"use client";

import { useEffect, useRef, RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Returns a ref to attach to any element.
 * When that element enters the viewport, the class `animate-visible` is added.
 * Pair with CSS: `.animate-hidden { opacity:0; transform: translateY(28px) }` and
 * `.animate-visible { opacity:1; transform: translateY(0) }`
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T | null> {
  const { threshold = 0.12, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("animate-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("animate-hidden");
          el.classList.add("animate-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("animate-visible");
          el.classList.add("animate-hidden");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Animate multiple children with staggered delay.
 * Returns a ref for the parent container.
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions & { staggerMs?: number } = {}
): RefObject<T | null> {
  const { threshold = 0.08, rootMargin = "0px 0px -40px 0px", once = true, staggerMs = 80 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.classList.add("animate-hidden");
      child.style.transitionDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.classList.remove("animate-hidden");
            child.classList.add("animate-visible");
          });
          if (once) observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, staggerMs]);

  return ref;
}
