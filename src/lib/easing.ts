export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
export const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
