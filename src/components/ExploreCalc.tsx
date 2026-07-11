import React, { useMemo, useState } from 'react';

interface GameData {
  id: string;
  route: string;
  title: string;
  icon?: string;
  categories: any[];
}

// The current newest region per game gets the lighter surcharge. Update on new patches.
const NEWEST_REGION: Record<string, string> = {
  'genshin-impact': 'Nod Krai 6.1 100%',
  'honkai-star-rail': 'Planarcadia 100%',
  'wuthering-waves': 'Dimmr Plains 100%',
};

// Per-% surcharge on exploration above 50%.
const SURCHARGE = {
  heavy: { PHP: 2, USD: 0.04 },   // older maps
  light: { PHP: 1, USD: 0.02 },   // newest area
};

function parseAmount(priceStr: string | undefined, currency: 'PHP' | 'USD'): number {
  if (!priceStr) return 0;
  const parts = priceStr.split('|').map(s => s.trim());
  const part = parts.length === 2 ? (currency === 'PHP' ? parts[0] : parts[1]) : parts[0];
  const m = part.replace(/,/g, '').match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 0;
}

function fmt(v: number, currency: 'PHP' | 'USD'): string {
  return currency === 'USD' ? `$${v.toFixed(2)}` : `₱${Math.round(v).toLocaleString()}`;
}

interface Item { name: string; amount: number; }
interface Region {
  name: string;
  bundle: number;
  areas: Item[];
  collectibles: Item[];
  quests: Item[];
  isLight: boolean;
}

function getRegions(game: GameData, currency: 'PHP' | 'USD'): Region[] {
  const cat = (game.categories || []).find(
    (c: any) => (c.categoryName || '').toLowerCase() === 'exploration'
  );
  if (!cat) return [];
  return (cat.services || []).map((svc: any) => {
    const areas: Item[] = [], collectibles: Item[] = [], quests: Item[] = [];
    let section: 'area' | 'collectible' | 'quest' = 'area';
    for (const it of svc.subItems || []) {
      if (it.isHeader) {
        const h = (it.name || '').toLowerCase();
        section = h.includes('collectible') ? 'collectible' : h.includes('quest') ? 'quest' : 'area';
        continue;
      }
      const entry = { name: it.name, amount: parseAmount(it.price, currency) };
      (section === 'collectible' ? collectibles : section === 'quest' ? quests : areas).push(entry);
    }
    return {
      name: svc.name,
      bundle: parseAmount(svc.price, currency),
      areas,
      collectibles,
      quests,
      isLight: svc.name === NEWEST_REGION[game.id],
    };
  });
}

function areaCharge(price: number, pctStr: string, isLight: boolean, currency: 'PHP' | 'USD') {
  if (pctStr.trim() === '') return { charge: price, full: true, over85: false };
  let c = parseFloat(pctStr);
  if (isNaN(c)) c = 0;
  c = Math.max(0, Math.min(100, c));
  if (c < 20) return { charge: price, full: true, over85: false };      // recommend bundle → full
  const base = price / 100;
  const sur = SURCHARGE[isLight ? 'light' : 'heavy'][currency];
  const remaining = 100 - c;
  const aboveFifty = Math.max(0, 100 - Math.max(c, 50));                 // portion of remaining above 50%
  const charge = Math.min(base * remaining + sur * aboveFifty, price);   // never exceed sticker
  return { charge, full: false, over85: c > 85 };
}

const clean = (n: string) => n.replace(/\s*100%$/, '');

export default function ExploreCalc({ game, currency }: { game: GameData; currency: 'PHP' | 'USD' }) {
  const regions = useMemo(() => getRegions(game, currency), [game, currency]);
  const [regionIdx, setRegionIdx] = useState<number | null>(null);
  const [areaIdx, setAreaIdx] = useState<number | null>(null);
  const [pctStr, setPctStr] = useState('');
  const [copied, setCopied] = useState(false);

  const region = regionIdx != null ? regions[regionIdx] : null;
  const area = region && areaIdx != null ? region.areas[areaIdx] : null;

  const res = useMemo(
    () => (region && area ? areaCharge(area.amount, pctStr, region.isLight, currency) : null),
    [region, area, pctStr, currency]
  );

  const copyQuote = () => {
    if (!region || !area || !res) return;
    const text =
      `${game.title} — ${clean(region.name)} · ${area.name}${pctStr.trim() ? ` @ ${pctStr}%` : ' (full)'} → ${fmt(res.charge, currency)}\n\n` +
      `Assumes the area / region quests are already done — final price may increase if they aren't.\n` +
      `Note: This is the estimated price, not the total price. Final pricing is confirmed once the order process begins with our staff.`;
    try {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const backBtn = (label: string, onClick: () => void) => (
    <button onClick={onClick} className="flex items-center gap-1 text-xs text-white/50 hover:text-white mb-3 transition-colors">
      <i className="fi fi-br-angle-left text-[10px]"></i> {label}
    </button>
  );

  // Step 1: region picker
  if (!region) {
    return (
      <>
        <p className="text-sm text-white/70 mb-3">Which region are you exploring?</p>
        {regions.length === 0 ? (
          <p className="text-xs text-white/40">No exploration regions for this game yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {regions.map((r, i) => (
              <button
                key={i}
                onClick={() => { setRegionIdx(i); setAreaIdx(null); setCopied(false); }}
                className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl glass hover:border-brand-pink/50 hover:bg-brand-pink/5 text-left text-sm text-white transition-all"
              >
                <span className="truncate">{clean(r.name)}</span>
                {r.isLight && <span className="shrink-0 text-[10px] text-brand-pink uppercase tracking-wider">new</span>}
              </button>
            ))}
          </div>
        )}
      </>
    );
  }

  // Step 2: area picker
  if (!area) {
    return (
      <>
        {backBtn('Regions', () => setRegionIdx(null))}
        <p className="text-sm text-white/70 mb-3">
          Which area in <span className="text-brand-pink font-semibold">{clean(region.name)}</span>?
        </p>
        {region.areas.length === 0 ? (
          <p className="text-xs text-white/40">No map areas listed for this region.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {region.areas.map((a, i) => (
              <button
                key={i}
                onClick={() => { setAreaIdx(i); setPctStr(''); setCopied(false); }}
                className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl glass hover:border-brand-pink/50 hover:bg-brand-pink/5 text-left text-sm text-white transition-all"
              >
                <span className="truncate">{a.name}</span>
                <span className="shrink-0 text-xs text-brand-pink font-bold">{fmt(a.amount, currency)}</span>
              </button>
            ))}
          </div>
        )}
      </>
    );
  }

  // Step 3: % input + estimate
  return (
    <>
      {backBtn('Areas', () => setAreaIdx(null))}
      <h4 className="text-base font-bold text-white mb-1">{area.name}</h4>
      <p className="text-[11px] text-white/40 mb-4">
        {region.isLight ? 'Newer area — lighter rate. ' : ''}Full = {fmt(area.amount, currency)}. Leave blank for full price.
      </p>

      <div className="flex items-center gap-2 mb-4">
        <span className="flex-1 text-sm text-white/80">Your current exploration %</span>
        <input
          type="number" min={0} max={100} inputMode="numeric"
          value={pctStr}
          onChange={e => setPctStr(e.target.value)}
          placeholder="%"
          className="w-16 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white text-center placeholder:text-white/30 focus:outline-none focus:border-brand-pink/50"
        />
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-3">
        <span className="text-sm font-bold text-white">Estimated price</span>
        <span className="text-lg font-extrabold text-brand-pink">{fmt(res!.charge, currency)}</span>
      </div>
      {res!.full && pctStr.trim() !== '' && (
        <p className="text-[11px] text-white/50 mt-1">Under 20% — we'd recommend the full bundle instead.</p>
      )}
      {res!.over85 && (
        <p className="text-[11px] text-yellow-300/70 mt-1">Over 85% explored — we handle those case-by-case, please message us.</p>
      )}

      <button
        onClick={copyQuote}
        className="w-full mt-4 py-2 rounded-xl bg-brand-pink text-brand-black text-sm font-bold hover:opacity-90 transition-opacity"
      >
        {copied ? 'Copied!' : 'Copy my quote'}
      </button>

      <p className="text-[10px] text-white/40 leading-snug mt-3">
        Assumes the area / region quests are already done — final price may increase if they aren't.
      </p>
      <p className="text-[10px] text-white/40 leading-snug mt-1.5">
        ⚠️ This is the <span className="text-white/60 font-semibold">estimated price</span>, not the total price. Final pricing is confirmed once the order process begins with our staff.
      </p>
    </>
  );
}
