"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(Math.min(pct * 100, 100));
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent">
      <div
        className="h-full bg-kips-yellow-500 transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(250,185,32,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
