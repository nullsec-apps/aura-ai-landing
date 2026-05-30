import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useProductConfig } from '../hooks/useProductConfig';
import { formatCurrency } from '../lib/format';

export default function StickyReserveBar() {
  const { price, finish } = useProductConfig();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById('footer');
      const max = document.body.scrollHeight - window.innerHeight;
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight - 80 : false;
      setVisible(window.scrollY > window.innerHeight * 0.8 && window.scrollY < max - 60 && !nearFooter);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glass fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 items-center justify-between gap-3 rounded-full border border-white/10 px-4 py-2.5 shadow-2xl"
        >
          <div className="min-w-0">
            <div className="truncate text-sm font-500 text-[#F4F5F7]">Aura · {finish}</div>
            <div className="text-xs text-[#7C7F86]">{formatCurrency(price)} · {`Spring 2026`}</div>
          </div>
          <Button
            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
            className="h-9 shrink-0 rounded-full bg-[#F4F5F7] px-5 text-sm font-500 text-[#070708] transition-all duration-200 hover:bg-white"
          >
            Reserve
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
