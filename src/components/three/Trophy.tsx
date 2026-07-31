"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/** Mini championship trophy — accent for the Reviews section. */
function Trophy() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.45;
  });

  const gold = "#F2C14E";

  return (
    <group ref={group} position={[0, -0.15, 0]}>
      {/* base */}
      <mesh position={[0, -0.42, 0]}>
        <cylinderGeometry args={[0.3, 0.34, 0.06, 24]} />
        <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
      </mesh>
      {/* stem */}
      <mesh position={[0, -0.26, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 0.28, 16]} />
        <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
      </mesh>
      {/* cup */}
      <mesh position={[0, -0.02, 0]}>
        <cylinderGeometry args={[0.14, 0.3, 0.3, 24]} />
        <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
      </mesh>
      {/* lip */}
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[0.3, 0.018, 12, 32]} />
        <meshStandardMaterial color="#ffdf8e" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* handles */}
      {[1, -1].map((s) => (
        <mesh key={s} position={[s * 0.3, 0.02, 0]} rotation={[0, 0, s * Math.PI * 0.5]}>
          <torusGeometry args={[0.14, 0.02, 8, 20, Math.PI]} />
          <meshStandardMaterial color={gold} metalness={0.75} roughness={0.25} />
        </mesh>
      ))}
      {/* glow disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.46, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshBasicMaterial color="#A3E635" transparent opacity={0.12} />
      </mesh>
      <Sparkles count={20} scale={2.4} size={2} speed={0.4} color="#C6F56A" opacity={0.8} />
    </group>
  );
}

export default function TrophyCanvas() {
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
      <directionalLight position={[3, 4, 4]} intensity={1.5} color="#fff3d6" />
      <pointLight position={[-2, -1, 2]} intensity={0.8} color="#A3E635" />
      <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.9}>
        <Trophy />
      </Float>
    </Canvas>
    )}
    </div>
  );
}
