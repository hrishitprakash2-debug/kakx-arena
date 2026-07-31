"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

/** Mini sport objects orbiting the ball on a faint ring. */
function OrbitKit() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={group}>
      {/* ring */}
      <mesh rotation={[Math.PI / 2.35, 0.35, 0]}>
        <torusGeometry args={[2.15, 0.012, 8, 128]} />
        <meshBasicMaterial color="#A3E635" transparent opacity={0.3} />
      </mesh>
      {/* mini stump */}
      <group position={[2.15, 0.12, 0]}>
        <mesh>
          <cylinderGeometry args={[0.045, 0.055, 0.45, 12]} />
          <meshStandardMaterial color="#e8cfa0" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.27, 0]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial color="#e8cfa0" roughness={0.6} />
        </mesh>
      </group>
      {/* mini shuttlecock */}
      <group position={[-1.08, 0, 1.86]} rotation={[0.25, 0.4, 0]}>
        <mesh>
          <coneGeometry args={[0.13, 0.24, 16, 1, true]} />
          <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial color="#f2f2f2" roughness={0.4} />
        </mesh>
      </group>
      {/* mini pickleball paddle */}
      <group position={[-1.08, 0, -1.86]} rotation={[0.3, 0.6, 0.15]}>
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.022, 0.022, 0.24, 10]} />
          <meshStandardMaterial color="#8a5a2b" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.16, 0]} scale={[1, 0.32, 1]}>
          <sphereGeometry args={[0.15, 20, 20]} />
          <meshStandardMaterial color="#A3E635" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}

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
            color="#9BE33D"
            emissive="#527A14"
            emissiveIntensity={0.3}
            roughness={0.35}
            metalness={0.15}
            distort={0.09}
            speed={1.6}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.02, 0.03, 16, 96]} />
          <meshStandardMaterial color="#f5f5dc" roughness={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.02, 0.03, 16, 96]} />
          <meshStandardMaterial color="#f5f5dc" roughness={0.3} />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.35, 32, 32]} />
          <meshBasicMaterial color="#A3E635" transparent opacity={0.07} side={THREE.BackSide} />
        </mesh>
      </Float>
      <OrbitKit />
      <Sparkles count={45} scale={7} size={2.4} speed={0.35} color="#C6F56A" opacity={0.7} />
    </group>
  );
}

export default function CricketBallCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  // mount the WebGL context only while near the viewport — saves battery/GPU off-screen
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
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 5, 6]} intensity={1.6} color="#eaffd0" />
          <pointLight position={[-4, -2, 2]} intensity={1.2} color="#A3E635" />
          <CricketBall mouse={mouse} />
        </Canvas>
      )}
    </div>
  );
}
