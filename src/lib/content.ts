export const capabilities = [
  {
    key: 'listen',
    headline: 'It listens.',
    support: 'Always-ready, on-device wake word. Aura hears the moment you need it — and nothing more.',
  },
  {
    key: 'think',
    headline: 'It thinks.',
    support: 'Reasoning happens privately, on the pendant. Context, memory, and intent — without the cloud watching.',
  },
  {
    key: 'speak',
    headline: 'It speaks.',
    support: 'A voice that feels present, not synthetic. Answers arrive in your ear, hands and eyes still free.',
  },
];

export const materials = [
  { name: 'Grade-5 Titanium', detail: '34g, aerospace shell' },
  { name: 'Sapphire Window', detail: 'Scratch-proof sensor lens' },
  { name: 'Woven Tether', detail: 'Recycled fiber, three tones' },
  { name: 'Haptic Ring', detail: 'Silent linear actuator' },
];

export const specs = [
  { value: '18hr', label: 'All-day presence battery' },
  { value: '34g', label: 'Titanium total weight' },
  { value: '0ms', label: 'On-device wake latency' },
  { value: '6', label: 'Spatial microphones' },
];

export const finishes = ['Titanium', 'Midnight', 'Lunar'];
export const tethers = ['Stone', 'Sand', 'Ink'];

export const basePrice = 499;
export const finishPricing: Record<string, number> = {
  Titanium: 0,
  Midnight: 50,
  Lunar: 120,
};

export const shipWindow = 'Spring 2026';
