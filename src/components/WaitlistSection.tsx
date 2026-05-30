import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useReservationCounter } from '../hooks/useReservationCounter';
import { useInViewReveal } from '../hooks/useInViewReveal';
import { shipWindow } from '../lib/content';
import AuraHalo from './AuraHalo';
import ReservationCounter from './ReservationCounter';
import ConfigPanel from './ConfigPanel';

export default function WaitlistSection() {
  const { reserved, total, reserve } = useReservationCounter();
  const { ref, inView } = useInViewReveal<HTMLElement>(0.2);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error('Enter a valid email');
      return;
    }
    reserve();
    setDone(true);
    toast.success('You are on the list. Welcome to the first 10,000.');
  };

  return (
    <section id="reserve" ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      <AuraHalo scale={1.2} hue={0.6} />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-xs tracking-[0.3em] text-[#7C7F86]">RESERVE</span>
          <h2 className="font-display text-5xl font-800 leading-[0.9] tracking-tighter text-[#F4F5F7] sm:text-7xl">
            Be one of
            <br />
            the first.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#7C7F86]">
            The first 10,000 reservations ship {shipWindow}. No charge today — your place is held while we hand-build each unit.
          </p>
          <div className="mt-10">
            <ReservationCounter reserved={reserved} total={total} />
          </div>
          {!done ? (
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 flex-1 rounded-full border-white/10 bg-white/5 px-5 text-base text-[#F4F5F7] placeholder:text-[#7C7F86]"
              />
              <Button type="submit" className="h-12 rounded-full bg-[#F4F5F7] px-8 text-base font-500 text-[#070708] transition-all duration-200 hover:bg-white hover:scale-105">
                Reserve yours
              </Button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex items-start gap-3 rounded-2xl border border-[#7FE3D4]/30 bg-[#7FE3D4]/5 p-5">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FE3D4]/20">
                <Check className="h-3.5 w-3.5 text-[#7FE3D4]" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display text-lg font-600 text-[#7FE3D4]">Reservation confirmed.</p>
                <p className="mt-1 break-all text-sm text-[#7C7F86]">We'll email {email} as your Aura is built.</p>
              </div>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="border-white/10 bg-[#0F1012]/60 p-6 backdrop-blur-xl">
            <ConfigPanel />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
