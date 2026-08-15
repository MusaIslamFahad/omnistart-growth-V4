import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import type { Group } from "three";
import { cn } from "../../../utils/cn";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "250px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

// A small procedural "studio" made of glowing panels — gives the glass
// material something to reflect/highlight without fetching any external
// HDR file, so it can't fail to load on the deployed site.
function Studio() {
  return (
    <Environment resolution={32}>
      <Lightformer intensity={2.2} color="#ffffff" position={[0, 4, 2]} scale={[6, 3, 1]} />
      <Lightformer intensity={1.4} color="#5eead4" position={[-4, 1, 3]} rotation={[0, Math.PI / 3, 0]} scale={[3, 3, 1]} />
      <Lightformer intensity={1.2} color="#fca5a5" position={[4, -1, 3]} rotation={[0, -Math.PI / 3, 0]} scale={[3, 3, 1]} />
      <Lightformer intensity={1} color="#fef9c3" position={[0, -4, -2]} scale={[5, 3, 1]} />
    </Environment>
  );
}

function Motion({ children, floatSpeed = 1, rotateSpeed = 1 }: { children: ReactNode; floatSpeed?: number; rotateSpeed?: number }) {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.22 * rotateSpeed;
    group.current.rotation.x = Math.sin(t * 0.35 * rotateSpeed) * 0.18;
    group.current.position.y = Math.sin(t * 0.6 * floatSpeed) * 0.14;
  });
  return <group ref={group}>{children}</group>;
}

interface GlassIcon3DProps {
  children: ReactNode;
  size?: number;
  className?: string;
  floatSpeed?: number;
  rotateSpeed?: number;
}

export function GlassIcon3D({ children, size = 140, className, floatSpeed, rotateSpeed }: GlassIcon3DProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("pointer-events-none absolute", className)} style={{ width: size, height: size }} aria-hidden>
      {inView && (
        <Canvas
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
          camera={{ position: [0, 0, 4.4], fov: 36 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 5]} intensity={1.1} color="#ffffff" />
          <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#99f6e4" />
          <Suspense fallback={null}>
            <Studio />
            <Motion floatSpeed={floatSpeed} rotateSpeed={rotateSpeed}>
              {children}
            </Motion>
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
