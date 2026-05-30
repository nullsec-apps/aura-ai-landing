import { useState } from 'react';
import toast from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function FooterStage() {
  const [email, setEmail] = useState('');
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error('Enter a valid email');
      return;
    }
    setEmail('');
    toast.success('Subscribed. We will keep you close.');
  };
  return (
    <footer id="footer" className="relative flex min-h-screen flex-col justify-between px-4 py-24 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center text-center">
        <h2 className="font-display text-[14vw] font-800 leading-[0.9] tracking-tighter text-[#F4F5F7] sm:text-[10vw] md:text-[96px]">
          Aura. Presence,
          <br />
          not screens.
        </h2>
        <form onSubmit={submit} className="mt-12 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Stay in the loop"
            className="h-12 flex-1 rounded-full border-white/10 bg-white/5 px-5 text-base text-[#F4F5F7] placeholder:text-[#7C7F86]"
          />
          <Button type="submit" className="h-12 rounded-full bg-[#F4F5F7] px-8 text-base font-500 text-[#070708] transition-all duration-200 hover:bg-white hover:scale-105">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <Separator className="bg-white/10" />
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-[#7C7F86] sm:flex-row">
          <span className="font-display font-600 text-[#F4F5F7]">Aura</span>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-[#F4F5F7]">Privacy</a>
            <a href="#" className="transition-colors duration-200 hover:text-[#F4F5F7]">Terms</a>
            <a href="#" className="transition-colors duration-200 hover:text-[#F4F5F7]">Press</a>
            <a href="#" className="transition-colors duration-200 hover:text-[#F4F5F7]">Contact</a>
          </div>
          <span>© 2026 Aura Devices</span>
        </div>
      </div>
    </footer>
  );
}
