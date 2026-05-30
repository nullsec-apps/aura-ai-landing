import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { basePrice, finishPricing } from '../lib/content';

interface ProductConfig {
  finish: string;
  setFinish: (v: string) => void;
  tether: string;
  setTether: (v: string) => void;
  engraving: string;
  setEngraving: (v: string) => void;
  price: number;
}

const Ctx = createContext<ProductConfig | null>(null);

export function ProductConfigProvider({ children }: { children: ReactNode }) {
  const [finish, setFinish] = useState('Titanium');
  const [tether, setTether] = useState('Stone');
  const [engraving, setEngraving] = useState('');

  const price = useMemo(() => {
    return basePrice + (finishPricing[finish] || 0) + (engraving ? 40 : 0);
  }, [finish, engraving]);

  return (
    <Ctx.Provider value={{ finish, setFinish, tether, setTether, engraving, setEngraving, price }}>
      {children}
    </Ctx.Provider>
  );
}

export function useProductConfig() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useProductConfig must be used within ProductConfigProvider');
  return ctx;
}
