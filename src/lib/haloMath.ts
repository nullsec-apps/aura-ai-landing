function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

export function lerpHue(t: number) {
  const a = hexToRgb('#C8A2FF');
  const b = hexToRgb('#7FE3D4');
  const p = Math.max(0, Math.min(1, t));
  const r = Math.round(a.r + (b.r - a.r) * p);
  const g = Math.round(a.g + (b.g - a.g) * p);
  const bl = Math.round(a.b + (b.b - a.b) * p);
  return `rgb(${r}, ${g}, ${bl})`;
}
