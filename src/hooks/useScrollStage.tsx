import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { clamp } from '../lib/easing';

interface ScrollStage {
  progress: number;
  haloIntensity: number;
  rotation: number;
}

const Ctx = createContext<ScrollStage>({ progress: 0, haloIntensity: 0.5, rotation: 0 });

export function ScrollStageProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<ScrollStage>({ progress: 0, haloIntensity: 0.5, rotation: 0 });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0;
      const halo = 0.4 + Math.sin(p * Math.PI) * 0.5;
      setStage({ progress: p, haloIntensity: clamp(halo, 0.3, 1), rotation: p * 360 });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return <Ctx.Provider value={stage}>{children}</Ctx.Provider>;
}

export function useScrollStage() {
  return useContext(Ctx);
}
