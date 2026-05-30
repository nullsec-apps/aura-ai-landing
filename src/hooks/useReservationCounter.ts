import { useEffect, useState } from 'react';

const KEY = 'aura_reservations';
const TOTAL = 10000;
const SEED = 7842;

export function useReservationCounter() {
  const [reserved, setReserved] = useState(SEED);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) setReserved(parseInt(stored, 10));
    } catch {}
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setReserved((r) => {
        const next = Math.min(TOTAL - 1, r + (Math.random() > 0.6 ? 1 : 0));
        return next;
      });
    }, 9000);
    return () => clearInterval(id);
  }, []);

  const reserve = () => {
    setReserved((r) => {
      const next = Math.min(TOTAL, r + 1);
      try { localStorage.setItem(KEY, String(next)); } catch {}
      return next;
    });
  };

  return { reserved, total: TOTAL, reserve };
}
