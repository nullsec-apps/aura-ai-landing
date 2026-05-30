import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import AuraHalo from './AuraHalo';
import ProductRender from './ProductRender';

interface FilmModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FilmModal({ open, onOpenChange }: FilmModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none border-none bg-[#070708] p-0 sm:rounded-none" style={{ width: '100vw', height: '100vh' }}>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-5 top-5 z-50 rounded-full border border-white/10 p-2 text-[#F4F5F7] transition-all duration-200 hover:bg-white/10 hover:scale-110"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
          <AuraHalo scale={1.5} hue={0.4} intensity={0.9} />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ProductRender size={240} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="relative z-10 mt-12 px-4 text-center font-display text-3xl font-700 tracking-tighter text-[#F4F5F7] sm:text-5xl"
          >
            Presence, not screens.
          </motion.p>
          <p className="relative z-10 mt-4 text-sm text-[#7C7F86]">Aura — the film. Spring 2026.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
