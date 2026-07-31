"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Badminton racket + mini shuttlecock — accent for the Sports section. */
function Racket() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={group} rotation={[0.15, 0, -0.12]}>
      {/* head frame */}
      <mesh position={[0, 0.42, 0]}>
        <torusGeometry args={[0.3, 0.022, 12, 40]} />
        <meshStandardMaterial color="#A3E635" roughness={0.4} metalness={0.3} />
      </mesh>
      {/* strings */}
      {[-2, -1, 0, 1, 2].map((i) => (
        <mesh key={`h${i}`} position={[0, 0.42 + i * 0.055, 0]}>
          <cylinderGeometry args={[0.004, 0.004, 0.52, 6]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.45} />
        </mesh>
      ))}
      {[-2, -1, 0, 1, 2].map((i) => (
        <mesh key={`v${i}`} position={[i * 0.055, 0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.004, 0.004, 0.52, 6]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.45} />
        </mesh>
      ))}
      {/* throat */}
      {[-0.045, 0.045].map((x) => (
        <mesh key={x} position={[x, 0.14, 0]} rotation={[0, 0, x * 3.2]}>
          <cylinderGeometry args={[0.018, 0.022, 0.2, 10]} />
          <meshStandardMaterial color="#3a3a3a" roughness={0.5} />
        </mesh>
      ))}
      {/* handle */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.3, 12]} />
        <meshStandardMaterial color="#222222" roughness={0.6} />
      </mesh>
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.042, 0.042, 0.1, 12]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
    </group>
  );
}

/** Small floating shuttlecock beside the racket. */
function MiniShuttle() {
  return (
    <Float speed={2.6} rotationIntensity={1.2} floatIntensity={1}>
      <group position={[0.55, -0.15, 0.15]} rotation={[0.4, 0, 0.2]} scale={0.75}>
        <mesh position={[0, 0.14, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#f2f2f2" roughness={0.4} />
        </mesh>
        <mesh>
          <coneGeometry args={[0.24, 0.3, 16, 1, true]} />
          <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

export default function RacketCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "300px" });
  return (
    <div ref={ref} className="absolute inset-0">
    {inView && (
    <Canvas
      camera={{ position: [0, 0, 2.4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[3, 4, 4]} intensity={1.4} color="#eaffd0" />
      <pointLight position={[-2, -1, 2]} intensity={0.8} color="#A3E635" />
      <Float speed={2.4} rotationIntensity={0.4} floatIntensity={0.9}>
        <Racket />
      </Float>
      <MiniShuttle />
    </Canvas>
    )}
    </div>
  );
}
