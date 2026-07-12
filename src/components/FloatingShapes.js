"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} position={[-2, 1, 0]} scale={0.8}>
            <MeshDistortMaterial color="#a855f7" attach="material" distort={0.4} speed={2} roughness={0.2} />
          </Sphere>
        </Float>

        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={3}>
          <Sphere args={[1, 100, 200]} position={[2, -1, -2]} scale={0.6}>
            <MeshDistortMaterial color="#ec4899" attach="material" distort={0.5} speed={1.5} roughness={0.2} />
          </Sphere>
        </Float>

        <Float speed={1.8} rotationIntensity={1} floatIntensity={2.5}>
          <Sphere args={[1, 100, 200]} position={[0, 2, -1]} scale={0.4}>
            <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.6} speed={2} roughness={0.2} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}