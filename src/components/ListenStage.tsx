import { motion } from 'framer-motion';
import { capabilities } from '../lib/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import CapabilityStage from './CapabilityStage';

export default function ListenStage() {
  const c = capabilities[0];
  const reduced = useReducedMotion();
  return (
    <CapabilityStage
      id="listen"
      index="01 — CAPABILITIES"
      headline={c.headline}
      support={c.support}
      hue={0}
      visual={
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#C8A2FF]/30"
              style={{ width: 200, height: 200 }}
              animate={reduced ? {} : { scale: [1, 3.5], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
            />
          ))}
        </div>
      }
    />
  );
}
