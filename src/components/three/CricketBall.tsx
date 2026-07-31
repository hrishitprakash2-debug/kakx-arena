"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CricketBall({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.007;
    }
    if (groupRef.current) {
      groupRef.current.rotation.x += (mouse.current.y * 0.12 - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y += (mouse.current.x * 0.12 - groupRef.current.rotation.y) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#d42626"
            emissive="#7a1414"
            emissiveIntensity={0.25}
            roughness={0.35}
            metalness={0.15}
            distort={0.09}
            speed={1.6}
          />
        </mesh>
        {/* seams */}
        <mesh>
          <torusGeometry args={[1.02, 0.03, 16, 96]} />
          <meshStandardMaterial color="#f5f5dc" roughness={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.02, 0.03, 16, 96]} />
          <meshStandardMaterial color="#f5f5dc" roughness={0.3} />
        </mesh>
        {/* glow shell */}
        <mesh>
          <sphereGeometry args={[1.35, 32, 32]} />
          <meshBasicMaterial color="#ff6b00" transparent opacity={0.07} side={THREE.BackSide} />
        </mesh>
      </Float>
      <Sparkles count={45} scale={7} size={2.4} speed={0.35} color="#ff9a3d" opacity={0.7} />
    </group>
  );
}

export default function CricketBallCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="absolute inset-0"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouse.current.x = (e.clientX - r.left) / r.width - 0.5;
        mouse.current.y = (e.clientY - r.top) / r.height - 0.5;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 6]} intensity={1.6} color="#ffd9b8" />
        <pointLight position={[-4, -2, 2]} intensity={1.2} color="#ff6b00" />
        <CricketBall mouse={mouse} />
      </Canvas>
    </div>
  );
}
