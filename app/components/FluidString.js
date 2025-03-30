'use client';
import { useRef } from 'react';

export default function FluidString() {
  const pathRef = useRef(null);
  let frame = 0;
  let animationId = null;

  const pluckString = () => {
    cancelAnimationFrame(animationId);
    frame = 0;
    animateWave();
  };

  const animateWave = () => {
    const path = pathRef.current;
    if (!path) return;

    // Bigger bounce, slower decay
    const amplitude = Math.exp(-frame / 40) * 50;
    const wave = Math.sin(frame / 2.5) * amplitude;

    const d = `M0,50 Q75,${50 - wave} 150,50 T300,50`;
    path.setAttribute('d', d);

    frame++;
    if (frame < 100) {
      animationId = requestAnimationFrame(animateWave);
    }
  };

  return (
    <svg
      width="300"
      height="80"
      onClick={pluckString}
      className="cursor-pointer z-50"
    >
      <path
        ref={pathRef}
        d="M0,50 Q75,50 150,50 T300,50"
        stroke="#3B82F6"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}