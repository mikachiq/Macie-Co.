import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { slugify } from './GameSection';
import ExploreCalc from './ExploreCalc';

const FB_URL = 'https://www.facebook.com/GenshinPilots';
const DISCORD_URL = 'https://discord.gg/MwKZGwdAN4';

interface GameData {
  id: string;
  route: string;
  title: string;
  icon?: string;
  categories: any[];
}

interface Entry {
  type: 'service' | 'category';
  label: string;
  sublabel: string;
  targetId: string;
  hasSubItems: boolean;
  hay: string;
  subNames: string[];
}

function buildEntries(game: GameData): Entry[] {
  const entries: Entry[] = [];
  for (const cat of game.categories || []) {
    entries.push({
      type: 'category',
      label: cat.categoryName,
      sublabel: 'Section',
      targetId: `${game.id}-${slugify(cat.categoryName)}`,
      hasSubItems: false,
      hay: cat.categoryName.toLowerCase(),
      subNames: [],
    });
    for (const svc of cat.services || []) {
      const subNames = (svc.subItems || []).filter((s: any) => !s.isHeader).map((s: any) => s.name);
      const desc = Array.isArray(svc.description) ? svc.description.join(' ') : (svc.description || '');
      entries.push({
        type: 'service',
        label: svc.name,
        sublabel: cat.categoryName,
        targetId: `${game.id}-card-${slugify(svc.name)}`,
        hasSubItems: !!(svc.subItems && svc.subItems.length),
        hay: [svc.name, subNames.join(' '), desc, cat.categoryName].join(' ').toLowerCase(),
        subNames,
      });
    }
  }
  return entries;
}

type Mode = null | 'find' | 'calc';

export default function FindBot({ games, currency }: { games: GameData[]; currency: 'PHP' | 'USD' }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(null);
  const [game, setGame] = useState<GameData | null>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(false);

  const entries = useMemo(() => (game ? buildEntries(game) : []), [game]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return entries
      .filter(e => e.hay.includes(q))
      .map(e => {
        const name = e.label.toLowerCase();
        let score = name === q ? 100 : name.startsWith(q) ? 80 : name.includes(q) ? 60 : e.subNames.some(s => s.toLowerCase().includes(q)) ? 40 : 20;
        if (e.type === 'category') score -= 10;
        return { e, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(s => s.e);
  }, [entries, query]);

  const pickGame = (g: GameData) => {
    setGame(g);
    setQuery('');
    navigate(g.route);
  };

  const goToResult = (e: Entry) => {
    if (game) navigate(game.route);
    setTimeout(() => {
      if (e.type === 'service') window.dispatchEvent(new CustomEvent('find-open', { detail: { cardId: e.targetId } }));
      else document.getElementById(e.targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    setOpen(false);
  };

  const matchedSub = (e: Entry) => {
    const q = query.trim().toLowerCase();
    if (!q || e.label.toLowerCase().includes(q)) return null;
    return e.subNames.find(s => s.toLowerCase().includes(q)) || null;
  };

  const goBack = () => {
    if (game) { setGame(null); setQuery(''); }
    else if (mode) setMode(null);
  };

  const title = !mode ? 'How can we help?' : mode === 'find' ? 'Find a Service' : 'Exploration Estimate';

  return (
    <>
      {/* Hover hint bubble */}
      <AnimatePresence>
        {hovered && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            className="fixed bottom-24 right-6 z-40 w-[220px] text-left glass bg-brand-black/95 border border-brand-pink/30 rounded-2xl shadow-xl shadow-brand-pink/10 px-4 py-3 pointer-events-none"
          >
            <span className="block text-xs text-white/80 leading-snug">
              Looking for a price or an estimate?{' '}
              <span className="text-brand-pink font-semibold">Start here</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher button */}
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Find a service or estimate"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-pink text-brand-black shadow-lg shadow-brand-pink/30 flex items-center justify-center hover:scale-105 transition-transform"
      >
        <i className={`fi ${open ? 'fi-br-cross' : 'fi-br-search'} text-lg flex items-center justify-center`}></i>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[340px] max-w-[calc(100vw-3rem)] max-h-[70vh] glass bg-brand-black/95 border border-brand-pink/30 rounded-2xl shadow-2xl shadow-brand-pink/10 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            {(mode || game) && (
              <button onClick={goBack} aria-label="Back" className="w-6 h-6 rounded-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                <i className="fi fi-br-angle-left text-xs flex items-center justify-center"></i>
              </button>
            )}
            <span className="text-sm font-bold text-white">{title}</span>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto flex-1">
            {/* Step 1: choose feature */}
            {!mode && (
              <>
                <p className="text-sm text-white/70 mb-4">What are you looking for?</p>
                <div className="flex flex-col gap-2">
                  <button onClick={() => setMode('find')} className="flex items-start gap-3 px-3 py-3 rounded-xl glass hover:border-brand-pink/50 hover:bg-brand-pink/5 text-left transition-all">
                    <i className="fi fi-br-search text-brand-pink mt-0.5"></i>
                    <span>
                      <span className="block text-sm font-semibold text-white">Find a Service</span>
                      <span className="block text-[11px] text-white/50">Jump straight to a specific price.</span>
                    </span>
                  </button>
                  <button onClick={() => setMode('calc')} className="flex items-start gap-3 px-3 py-3 rounded-xl glass hover:border-brand-pink/50 hover:bg-brand-pink/5 text-left transition-all">
                    <i className="fi fi-br-calculator text-brand-pink mt-0.5"></i>
                    <span>
                      <span className="block text-sm font-semibold text-white">Exploration Estimate</span>
                      <span className="block text-[11px] text-white/50">Calculate a price based on your progress.</span>
                    </span>
                  </button>
                </div>
              </>
            )}

            {/* Step 2: choose game */}
            {mode && !game && (
              <>
                <p className="text-sm text-white/70 mb-4">Which game are you playing?</p>
                <div className="flex flex-col gap-2">
                  {games.map(g => (
                    <button key={g.id} onClick={() => pickGame(g)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl glass hover:border-brand-pink/50 hover:bg-brand-pink/5 text-left text-sm text-white transition-all">
                      {g.icon && <img src={g.icon} alt="" className="w-6 h-6 rounded-md object-cover" />}
                      {g.title}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 3a: find */}
            {mode === 'find' && game && (
              <>
                <p className="text-sm text-white/70 mb-3">
                  What are you looking for in <span className="text-brand-pink font-semibold">{game.title}</span>?
                </p>
                <input
                  autoFocus
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && results[0]) goToResult(results[0]); }}
                  placeholder="e.g. Enkanomiya, Memory of Chaos…"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-pink/50 mb-3"
                />
                <div className="flex flex-col gap-1.5">
                  {query.trim() && results.length === 0 && (
                    <div className="py-2">
                      <p className="text-xs text-white/60 mb-2.5 leading-snug">Can't find it here? Contact us and we'll give you a price.</p>
                      <div className="flex gap-2">
                        <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-white/80 hover:text-white hover:border-brand-pink transition-all">
                          <i className="fi fi-brands-facebook text-brand-pink flex items-center"></i>Facebook
                        </a>
                        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-white/80 hover:text-white hover:border-brand-pink transition-all">
                          <i className="fi fi-brands-discord text-brand-pink flex items-center"></i>Discord
                        </a>
                      </div>
                    </div>
                  )}
                  {results.map((e, i) => {
                    const sub = matchedSub(e);
                    return (
                      <button key={i} onClick={() => goToResult(e)} className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-left transition-colors group">
                        <span className="min-w-0">
                          <span className="block text-sm text-white group-hover:text-brand-pink transition-colors truncate">{e.label.replace(/\s*100%$/, '')}</span>
                          <span className="block text-[11px] text-white/40 truncate">{sub ? `${e.sublabel} · ${sub}` : e.sublabel}</span>
                        </span>
                        <i className="fi fi-br-angle-right text-[10px] text-white/30 group-hover:text-brand-pink shrink-0"></i>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* Step 3b: calculator */}
            {mode === 'calc' && game && <ExploreCalc game={game} currency={currency} />}
          </div>
        </div>
      )}
    </>
  );
}
