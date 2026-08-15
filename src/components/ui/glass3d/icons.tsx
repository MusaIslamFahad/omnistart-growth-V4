import { useMemo } from "react";
import * as THREE from "three";

interface IconProps {
  color?: string;
}

// Shared "liquid glass" material recipe — transmissive, high clearcoat,
// low roughness — matching the frosted/refractive look of the CSS glass
// panels elsewhere on the site, just rendered as real geometry.
function glassMat(color: string, thickness = 1) {
  return (
    <meshPhysicalMaterial
      color={color}
      transmission={1}
      roughness={0.08}
      thickness={thickness}
      ior={1.45}
      clearcoat={1}
      clearcoatRoughness={0.12}
      attenuationColor={color}
      attenuationDistance={1.1}
      envMapIntensity={1.15}
    />
  );
}

export function RocketIcon({ color = "#2dd4bf" }: IconProps) {
  const finAngles = [0, 120, 240];
  return (
    <group rotation={[0.1, 0, 0.3]} scale={0.85}>
      <mesh position={[0, 1.05, 0]}>
        <coneGeometry args={[0.42, 0.85, 32]} />
        {glassMat(color, 0.9)}
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.42, 0.4, 1.3, 32]} />
        {glassMat(color, 1.2)}
      </mesh>
      {finAngles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <mesh key={deg} position={[Math.sin(rad) * 0.4, -0.55, Math.cos(rad) * 0.4]} rotation={[0, -rad, 0]}>
            <coneGeometry args={[0.26, 0.5, 3]} />
            {glassMat(color, 0.5)}
          </mesh>
        );
      })}
      <mesh position={[0, 0.3, 0.4]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        {glassMat("#ffffff", 0.3)}
      </mesh>
    </group>
  );
}

export function GearIcon({ color = "#a3e635" }: IconProps) {
  const teeth = 8;
  return (
    <group rotation={[1.2, 0.4, 0]} scale={0.95}>
      <mesh>
        <cylinderGeometry args={[0.58, 0.58, 0.3, 32]} />
        {glassMat(color, 1)}
      </mesh>
      {Array.from({ length: teeth }).map((_, i) => {
        const angle = (i / teeth) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.72, 0, Math.sin(angle) * 0.72]} rotation={[0, -angle, 0]}>
            <boxGeometry args={[0.22, 0.3, 0.3]} />
            {glassMat(color, 0.4)}
          </mesh>
        );
      })}
      <mesh>
        <cylinderGeometry args={[0.24, 0.24, 0.34, 24]} />
        <meshPhysicalMaterial color={color} transmission={1} roughness={0.2} thickness={0.3} ior={1.4} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export function DiamondIcon({ color = "#8b6cf0" }: IconProps) {
  return (
    <mesh rotation={[0.3, 0.5, 0]} scale={1}>
      <octahedronGeometry args={[0.88, 0]} />
      {glassMat(color, 1.4)}
    </mesh>
  );
}

export function ChartIcon({ color = "#ff6b4a" }: IconProps) {
  const heights = [0.5, 0.85, 1.15, 0.9];
  return (
    <group rotation={[0.15, -0.4, 0]} position={[-0.63, -0.35, 0]} scale={0.85}>
      {heights.map((h, i) => (
        <mesh key={i} position={[i * 0.42, h / 2, 0]}>
          <boxGeometry args={[0.3, h, 0.3]} />
          {glassMat(color, 0.8)}
        </mesh>
      ))}
    </group>
  );
}

export function ShieldIcon({ color = "#2dd4bf" }: IconProps) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.68, 0.85);
    shape.lineTo(0.68, 0.85);
    shape.lineTo(0.68, 0.05);
    shape.quadraticCurveTo(0.68, -0.65, 0, -1.0);
    shape.quadraticCurveTo(-0.68, -0.65, -0.68, 0.05);
    shape.lineTo(-0.68, 0.85);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 4,
      curveSegments: 16,
    });
  }, []);

  return (
    <mesh geometry={geometry} rotation={[0.2, 0.4, 0]} position={[0, 0.05, -0.15]} scale={0.8}>
      {glassMat(color, 1)}
    </mesh>
  );
}

export function LinkIcon({ color = "#a78bfa" }: IconProps) {
  return (
    <group rotation={[0.25, 0.25, 0]} scale={1.05}>
      <mesh position={[-0.24, 0.04, 0.08]}>
        <torusGeometry args={[0.4, 0.13, 20, 48]} />
        {glassMat(color, 0.9)}
      </mesh>
      <mesh position={[0.24, -0.04, -0.08]} rotation={[0, 0, 0.2]}>
        <torusGeometry args={[0.4, 0.13, 20, 48]} />
        {glassMat(color, 0.9)}
      </mesh>
    </group>
  );
}
