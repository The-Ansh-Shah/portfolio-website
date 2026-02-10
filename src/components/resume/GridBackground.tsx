'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingGrid() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, opacities } = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    const ops = new Float32Array(count);
    const spread = 30;

    for (let i = 0; i < count; i++) {
      // Grid-aligned positions with slight random offset
      const gridSize = 2;
      pos[i * 3] = (Math.round((Math.random() - 0.5) * spread / gridSize) * gridSize) + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
      ops[i] = Math.random() * 0.4 + 0.1;
    }
    return { positions: pos, opacities: ops };
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(time * 0.03) * 0.05;
    meshRef.current.rotation.x = Math.cos(time * 0.02) * 0.03;
    meshRef.current.position.y = Math.sin(time * 0.05) * 0.3;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FED8B1"
        size={0.04}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const lineCount = 40;
    const positions = new Float32Array(lineCount * 6);
    const spread = 20;

    for (let i = 0; i < lineCount; i++) {
      const x1 = (Math.random() - 0.5) * spread;
      const y1 = (Math.random() - 0.5) * spread;
      const z1 = (Math.random() - 0.5) * 8 - 5;
      const angle = Math.random() * Math.PI * 2;
      const len = 1 + Math.random() * 3;

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
    linesRef.current.rotation.y = Math.sin(time * 0.02) * 0.04;
    linesRef.current.rotation.z = Math.cos(time * 0.015) * 0.02;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#A67B5B" transparent opacity={0.08} />
    </lineSegments>
  );
}

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <FloatingGrid />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
