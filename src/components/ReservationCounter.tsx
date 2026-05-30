import { Progress } from '@/components/ui/progress';
import { formatNumber } from '../lib/format';

interface ReservationCounterProps {
  reserved: number;
  total: number;
}

export default function ReservationCounter({ reserved, total }: ReservationCounterProps) {
  const pct = (reserved / total) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="font-display text-3xl font-700 tracking-tight text-[#F4F5F7]">
          {formatNumber(reserved)}
        </span>
        <span className="text-sm text-[#7C7F86]">of first {formatNumber(total)} reserved</span>
      </div>
      <Progress value={pct} className="mt-3 h-1.5 bg-white/10" />
      <p className="mt-2 text-xs text-[#7C7F86]">{(100 - pct).toFixed(1)}% of founding spots remain.</p>
    </div>
  );
}
