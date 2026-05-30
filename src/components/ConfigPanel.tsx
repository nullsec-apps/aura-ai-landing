import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useProductConfig } from '../hooks/useProductConfig';
import { finishes, tethers } from '../lib/content';
import { formatCurrency } from '../lib/format';
import ProductRender from './ProductRender';

export default function ConfigPanel() {
  const { finish, setFinish, tether, setTether, engraving, setEngraving, price } = useProductConfig();

  return (
    <div>
      <div className="mb-6 flex items-center justify-center">
        <ProductRender size={130} rotation={0} />
      </div>
      <div className="space-y-6">
        <div>
          <Label className="text-xs uppercase tracking-widest text-[#7C7F86]">Finish</Label>
          <RadioGroup value={finish} onValueChange={setFinish} className="mt-3 flex gap-2">
            {finishes.map((f) => (
              <label
                key={f}
                className={`flex flex-1 cursor-pointer items-center justify-center rounded-full border px-3 py-2 text-sm transition-all duration-200 ${
                  finish === f ? 'border-[#C8A2FF] bg-[#C8A2FF]/10 text-[#F4F5F7]' : 'border-white/10 text-[#7C7F86] hover:border-white/20'
                }`}
              >
                <RadioGroupItem value={f} className="sr-only" />
                {f}
              </label>
            ))}
          </RadioGroup>
        </div>
        <div>
          <Label className="text-xs uppercase tracking-widest text-[#7C7F86]">Tether</Label>
          <RadioGroup value={tether} onValueChange={setTether} className="mt-3 flex gap-2">
            {tethers.map((t) => (
              <label
                key={t}
                className={`flex flex-1 cursor-pointer items-center justify-center rounded-full border px-3 py-2 text-sm transition-all duration-200 ${
                  tether === t ? 'border-[#7FE3D4] bg-[#7FE3D4]/10 text-[#F4F5F7]' : 'border-white/10 text-[#7C7F86] hover:border-white/20'
                }`}
              >
                <RadioGroupItem value={t} className="sr-only" />
                {t}
              </label>
            ))}
          </RadioGroup>
        </div>
        <div>
          <Label className="text-xs uppercase tracking-widest text-[#7C7F86]">Engraving</Label>
          <Input
            value={engraving}
            maxLength={12}
            onChange={(e) => setEngraving(e.target.value)}
            placeholder="Up to 12 characters"
            className="mt-3 h-11 rounded-xl border-white/10 bg-white/5 text-base text-[#F4F5F7] placeholder:text-[#7C7F86]"
          />
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-[#7C7F86]">Estimated price</span>
          <span className="font-display text-2xl font-700 text-[#F4F5F7]">{formatCurrency(price)}</span>
        </div>
      </div>
    </div>
  );
}
