"use client";

import { useRef, Suspense, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const Blob = memo(function Blob({
  position,
  color,
  scale,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  distort: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      mesh.current.rotation.y = clock.getElapsedTime() * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.6}>
      <Sphere ref={mesh} args={[1, 32, 32]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={1.5}
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  );
});

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#fdf0ed" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#DDAAA5" />

      <Blob position={[0, 0, 0]} color="#DDAAA5" scale={1.8} speed={1.2} distort={0.35} />
      <Blob position={[2.5, 1.5, -2]} color="#F4ECE7" scale={1.1} speed={0.8} distort={0.25} />
      <Blob position={[-2.2, -1.2, -1.5]} color="#8C6E63" scale={0.8} speed={1.4} distort={0.4} />
      <Blob position={[1.5, -2, -1]} color="#DDAAA5" scale={0.6} speed={1.0} distort={0.3} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]} // Cap DPR for performance
        performance={{ min: 0.5 }}
        gl={{
          antialias: false, // Disable for performance
          alpha: true,
          powerPreference: "default",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
