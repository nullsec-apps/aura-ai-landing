export const formatNumber = (n: number) => new Intl.NumberFormat('en-US').format(n);
export const formatCurrency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
