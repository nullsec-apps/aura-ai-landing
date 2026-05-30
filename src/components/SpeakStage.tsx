import { motion } from 'framer-motion';
import { capabilities } from '../lib/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import CapabilityStage from './CapabilityStage';

export default function SpeakStage() {
  const c = capabilities[2];
  const reduced = useReducedMotion();
  return (
    <CapabilityStage
      id="speak"
      index="03 — CAPABILITIES"
      headline={c.headline}
      support={c.support}
      hue={1}
      visual={
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#7FE3D4]/40"
              style={{ width: 120, height: 120 }}
              animate={reduced ? {} : { scale: [1, 4], opacity: [0.6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }}
            />
          ))}
        </div>
      }
    />
  );
}
