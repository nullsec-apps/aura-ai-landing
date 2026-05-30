import { motion } from 'framer-motion';
import { useScrollStage } from '../hooks/useScrollStage';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { lerpHue } from '../lib/haloMath';

interface AuraHaloProps {
  intensity?: number;
  scale?: number;
  hue?: number;
}

export default function AuraHalo({ intensity, scale = 1, hue }: AuraHaloProps) {
  const stage = useScrollStage();
  const reduced = useReducedMotion();
  const op = intensity ?? stage.haloIntensity;
  const color = lerpHue(hue ?? stage.progress);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520 * scale,
          height: 520 * scale,
          background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
          filter: 'blur(70px)',
          opacity: op * 0.55,
        }}
        animate={reduced ? {} : { scale: [1, 1.12, 1], opacity: [op * 0.45, op * 0.65, op * 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 340 * scale,
          height: 340 * scale,
          background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
          filter: 'blur(45px)',
          opacity: op * 0.7,
        }}
        animate={reduced ? {} : { scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: 280 * scale,
          height: 280 * scale,
          borderColor: color,
          opacity: op * 0.4,
          boxShadow: `0 0 60px ${color}`,
        }}
        animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [op * 0.3, op * 0.5, op * 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
