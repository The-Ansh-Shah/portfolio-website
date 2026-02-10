'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Starfield with twinkling stars
function Stars() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const count = 1500;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const spread = 50;

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 10;
      sz[i] = Math.random() * 0.06 + 0.02;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    // Subtle rotation
    meshRef.current.rotation.y = time * 0.01;

    // Twinkling effect
    const material = meshRef.current.material as THREE.PointsMaterial;
    material.opacity = 0.4 + Math.sin(time * 0.5) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FED8B1"
        size={0.05}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Shooting star component
function ShootingStar({ delay }: { delay: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const startTimeRef = useRef(Date.now() + delay * 1000);

  const line = useMemo(() => {
    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(0, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: "#FED8B1",
      transparent: true,
      opacity: 1
    });
    return new THREE.Line(geometry, material);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const now = Date.now();
    const elapsed = (now - startTimeRef.current) / 1000;
    const duration = 1.5; // Shooting star duration
    const interval = 8; // Time between shooting stars

    // Reset after interval
    if (elapsed > interval) {
      startTimeRef.current = now;
      return;
    }

    // Only visible during shooting phase
    if (elapsed > duration) {
      line.visible = false;
      return;
    }

    line.visible = true;

    // Animate the shooting star
    const progress = elapsed / duration;
    const startX = -15 + (delay * 5);
    const startY = 10 - (delay * 3);
    const endX = startX + progress * 25;
    const endY = startY - progress * 15;

    const positions = line.geometry.attributes.position.array as Float32Array;
    positions[0] = startX + progress * 25;
    positions[1] = startY - progress * 15;
    positions[2] = -5;
    positions[3] = endX;
    positions[4] = endY;
    positions[5] = -5;

    line.geometry.attributes.position.needsUpdate = true;

    // Fade out at the end
    const material = line.material as THREE.LineBasicMaterial;
    material.opacity = 1 - progress;
  });

  return (
    <group ref={groupRef}>
      <primitive object={line} />
    </group>
  );
}

// Connection lines for depth
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const lineCount = 30;
    const positions = new Float32Array(lineCount * 6);
    const spread = 25;

    for (let i = 0; i < lineCount; i++) {
      const x1 = (Math.random() - 0.5) * spread;
      const y1 = (Math.random() - 0.5) * spread;
      const z1 = (Math.random() - 0.5) * 10 - 8;
      const angle = Math.random() * Math.PI * 2;
      const len = 1 + Math.random() * 2;

      positions[i * 6] = x1;
      positions[i * 6 + 1] = y1;
      positions[i * 6 + 2] = z1;
      positions[i * 6 + 3] = x1 + Math.cos(angle) * len;
      positions[i * 6 + 4] = y1 + Math.sin(angle) * len;
      positions[i * 6 + 5] = z1;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    const time = state.clock.elapsedTime;
    linesRef.current.rotation.y = Math.sin(time * 0.015) * 0.03;
    linesRef.current.rotation.z = Math.cos(time * 0.01) * 0.02;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#A67B5B" transparent opacity={0.06} />
    </lineSegments>
  );
}

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <ConnectionLines />
        <ShootingStar delay={0} />
        <ShootingStar delay={3} />
        <ShootingStar delay={6} />
      </Canvas>
    </div>
  );
}
