import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Pilot {
  name: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <i className="fi fi-br-shield text-xl text-brand-pink" />,
    title: "100% Secure",
    description: "We use strictly manual grinding. No bots, no third-party software. Your account safety is our absolute priority."
  },
  {
    icon: <i className="fi fi-br-bolt text-xl text-brand-pink" />,
    title: "Fast Delivery",
    description: "We work efficiently to complete your orders in record time, so you can get back to enjoying the game."
  },
  {
    icon: <i className="fi fi-br-award text-xl text-brand-pink" />,
    title: "Veteran Pilots",
    description: "Our team consists of day-1 players and endgame experts who know every optimal route and mechanic."
  },
  {
    icon: <i className="fi fi-br-bullseye text-xl text-brand-pink" />,
    title: "Custom Requests",
    description: "Need something specific? We tailor our services to your exact account needs and current builds."
  }
];

const pilots: Pilot[] = [
  { name: "lumpia (admin macie)", description: "Founder, admin, and all-arounder." },
  { name: "kurt", description: "Co-founder, admin, and all-arounder." },
  { name: "mika", description: "Veteran pilot, specializing in endgame content and character building." },
  { name: "jiyu", description: "Farming and quests specialist. WuWa veteran." },
  { name: "lemon", description: "Veteran pilot and all-arounder." },
  { name: "ekso", description: "All-arounder pilot." },
  { name: "yri", description: "All-arounder pilot." },
  { name: "zen", description: "All-arounder pilot." },
  { name: "matt", description: "HSR specialist." },
  { name: "miles", description: "Veteran pilot for both Genshin and WuWa." }
];

function PilotSwap() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = pilots.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(p => (p + 1) % n), 3000);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <div
      className="relative h-[260px] w-full max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {pilots.map((pilot, i) => {
        const slot = (i - active + n) % n;
        return (
          <motion.div
            key={pilot.name}
            className="absolute bottom-0 left-0 w-[75%]"
            style={{ zIndex: n - slot }}
            animate={{
              x: slot * 30,
              y: -slot * 26,
              scale: 1 - slot * 0.05,
              opacity: slot < 4 ? 1 : 0,
              skewX: -6,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 26 }}
          >
            <div className="glass rounded-2xl border border-brand-pink/20 bg-[#0f0f0f]/90 backdrop-blur-md shadow-2xl p-6 text-left min-h-[140px] flex flex-col justify-center">
              <h4 className="text-xl font-bold text-brand-pink mb-2">{pilot.name}</h4>
              <p className="text-sm text-brand-offwhite/70 leading-relaxed">{pilot.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AboutUs() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative bg-gradient-to-b from-transparent to-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Title, copy, stats */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Choose <span className="text-brand-pink font-extrabold drop-shadow-[0_0_15px_rgba(255,208,215,0.15)]">Macie & Co.</span>?
            </h2>
            <p className="text-brand-offwhite/70 text-lg leading-relaxed mb-6">
              We are a dedicated team of passionate gacha gamers who understand the pain of the grind…
            </p>
            <p className="text-brand-offwhite/70 text-lg leading-relaxed">
              Founded in 2021, our roster has grown to 10+ professional pilots across Genshin, HSR, WuWa, ZZZ and more.
            </p>

            {/* Stats Cards */}
            <div className="flex gap-6 mt-12">
              <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-center flex-1 backdrop-blur-sm hover:border-brand-pink/30 transition-colors duration-300">
                <div className="text-4xl font-extrabold text-white mb-1">500+</div>
                <div className="text-xs text-brand-offwhite/50 uppercase tracking-widest font-semibold">Orders Completed</div>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-center flex-1 backdrop-blur-sm hover:border-brand-pink/30 transition-colors duration-300">
                <div className="text-4xl font-extrabold text-white mb-1">10+</div>
                <div className="text-xs text-brand-offwhite/50 uppercase tracking-widest font-semibold">Pilots Ready For You</div>
              </div>
            </div>
          </div>

          {/* Right Column: Static 2x2 advantage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="glass rounded-2xl border border-white/10 p-6 hover:border-brand-pink/40 transition-colors duration-300"
              >
                <h3 className="text-base font-bold text-brand-pink mb-1">{value.title}</h3>
                <p className="text-sm text-brand-offwhite/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Meet Our Pilots — full-width section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">Meet Our Pilots</h3>
            <p className="text-brand-offwhite/60 max-w-xl mx-auto">
              The dedicated team behind your account's progress.
            </p>
          </div>
          <div className="flex justify-center">
            <PilotSwap />
          </div>
        </div>

      </div>
    </section>
  );
}
