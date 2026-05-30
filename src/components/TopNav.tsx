import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const links = [
  { label: 'Capabilities', href: '#listen' },
  { label: 'Materials', href: '#materials' },
  { label: 'Specs', href: '#specs' },
];

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const logoUrl = (window as any).__NULLSEC__?.logoUrl;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          {logoUrl ? (
            <img src={logoUrl} className="h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} alt="Aura" />
          ) : null}
          <span className="font-display text-lg font-700 tracking-tight text-[#F4F5F7]">Aura</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#7C7F86] transition-colors duration-200 hover:text-[#F4F5F7]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
          className="h-9 rounded-full bg-[#F4F5F7] px-5 text-sm font-500 text-[#070708] transition-all duration-200 hover:bg-white hover:scale-105"
        >
          Reserve
        </Button>
      </div>
    </header>
  );
}
