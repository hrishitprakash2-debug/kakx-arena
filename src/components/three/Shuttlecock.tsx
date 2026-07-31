"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Floating badminton shuttlecock — decorative accent for the CTA banner. */
function Shuttle() {
  const mesh = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={mesh} rotation={[0.35, 0, 0.15]}>
      {/* cork */}
      <mesh position={[0, 0.16, 0]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#f2f2f2" roughness={0.4} />
      </mesh>
      {/* skirt */}
      <mesh>
        <coneGeometry args={[0.34, 0.42, 24, 1, true]} />
        <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} roughness={0.6} />
      </mesh>
      {/* skirt ribs */}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 0.22, -0.1, Math.sin(a) * 0.22]} rotation={[0, -a, 0]}>
            <cylinderGeometry args={[0.006, 0.006, 0.3, 6]} />
            <meshStandardMaterial color="#e2e2e2" />
          </mesh>
        );
      })}
    </group>
  );
}

export default function ShuttlecockCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "300px" });
  return (
    <div ref={ref} className="absolute inset-0">
    {inView && (
    <Canvas
      camera={{ position: [0, 0, 2.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#eaffd0" />
      <pointLight position={[-2, -1, 2]} intensity={0.8} color="#A3E635" />
      <Float speed={2.4} rotationIntensity={0.6} floatIntensity={1.1}>
        <Shuttle />
      </Float>
    </Canvas>
    )}
    </div>
  );
}
