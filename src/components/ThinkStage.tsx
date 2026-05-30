import { motion } from 'framer-motion';
import { capabilities } from '../lib/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import CapabilityStage from './CapabilityStage';

export default function ThinkStage() {
  const c = capabilities[1];
  const reduced = useReducedMotion();
  const particles = Array.from({ length: 18 });
  return (
    <CapabilityStage
      id="think"
      index="02 — CAPABILITIES"
      headline={c.headline}
      support={c.support}
      hue={0.5}
      visual={
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#C8A2FF]"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
              animate={reduced ? {} : { y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            />
          ))}
        </div>
      }
    />
  );
}
