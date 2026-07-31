"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Spinning clock — accent for the Booking section (time slots). */
function Clock() {
  const hands = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (hands.current) {
      hands.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group>
      {/* face */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.05, 40]} />
        <meshStandardMaterial color="#f5f5f0" roughness={0.35} />
      </mesh>
      {/* rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <torusGeometry args={[0.36, 0.02, 12, 48]} />
        <meshStandardMaterial color="#A3E635" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* hour ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.sin(a) * 0.28, Math.cos(a) * 0.28, 0.04]}
            rotation={[0, 0, -a]}
          >
            <boxGeometry args={[0.018, i % 3 === 0 ? 0.06 : 0.035, 0.01]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        );
      })}
      {/* hands */}
      <group ref={hands} position={[0, 0, 0.055]}>
        <mesh position={[0, 0.09, 0]}>
          <boxGeometry args={[0.028, 0.18, 0.012]} />
          <meshStandardMaterial color="#A3E635" roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[0.022, 0.32, 0.01]} />
          <meshStandardMaterial color="#222222" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.008]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#A3E635" roughness={0.3} />
        </mesh>
      </group>
      {/* glow disc behind */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshBasicMaterial color="#A3E635" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function ClockCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.9], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#eaffd0" />
      <pointLight position={[-2, -1, 2]} intensity={0.7} color="#A3E635" />
      <Float speed={2.3} rotationIntensity={0.7} floatIntensity={1}>
        <Clock />
      </Float>
    </Canvas>
  );
}
