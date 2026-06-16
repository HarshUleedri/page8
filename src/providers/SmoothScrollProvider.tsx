import { ReactLenis, type LenisRef } from "lenis/react";
import { frame, cancelFrame } from "motion/react";
import { useEffect, useRef } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.08,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
