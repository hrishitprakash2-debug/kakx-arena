"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Cricket stumps + bails + a floating ball. Used in the Academy section. */
function Stumps({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const ballRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mouse.current.x * 0.25 - group.current.rotation.y) * 0.035;
      group.current.rotation.x += (mouse.current.y * 0.15 - group.current.rotation.x) * 0.035;
    }
    if (ballRef.current) {
      ballRef.current.rotation.x += 0.02;
      ballRef.current.rotation.z += 0.015;
    }
  });

  const wood = "#e8cfa0";

  return (
    <group ref={group} position={[0, -0.55, 0]}>
      {/* 3 stumps */}
      {[-0.11, 0, 0.11].map((x) => (
        <mesh key={x} position={[x, 0.45, 0]}>
          <cylinderGeometry args={[0.045, 0.05, 0.9, 14]} />
          <meshStandardMaterial color={wood} roughness={0.6} />
        </mesh>
      ))}
      {/* bails */}
      <mesh position={[-0.055, 0.92, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.016, 0.016, 0.15, 10]} />
        <meshStandardMaterial color="#d4b483" roughness={0.5} />
      </mesh>
      <mesh position={[0.055, 0.92, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.016, 0.016, 0.15, 10]} />
        <meshStandardMaterial color="#d4b483" roughness={0.5} />
      </mesh>
      {/* floating ball */}
      <Float speed={2.6} rotationIntensity={1} floatIntensity={1.2}>
        <mesh ref={ballRef} position={[0.28, 0.55, 0.12]}>
          <sphereGeometry args={[0.13, 32, 32]} />
          <meshStandardMaterial color="#9BE33D" emissive="#527A14" emissiveIntensity={0.35} roughness={0.35} />
        </mesh>
      </Float>
      {/* ground shadow disc */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial color="#A3E635" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

export default function StumpsCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "300px" });

  return (
    <div
      ref={ref}
      className="absolute inset-0"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = (e.clientX - r.left) / r.width - 0.5;
        mouse.current.y = (e.clientY - r.top) / r.height - 0.5;
      }}
    >
      {inView && (
        <Canvas
          camera={{ position: [0, 0, 3.1], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 5, 4]} intensity={1.5} color="#eaffd0" />
          <pointLight position={[-3, -1, 2]} intensity={0.9} color="#A3E635" />
          <Stumps mouse={mouse} />
        </Canvas>
      )}
    </div>
  );
}
