import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutUs() {
  const values: ValueItem[] = [
    {
      icon: <i className="fi fi-br-shield text-2xl text-brand-pink" />,
      title: "100% Secure",
      description: "We use strictly manual grinding. No bots, no third-party software. Your account safety is our absolute priority."
    },
    {
      icon: <i className="fi fi-br-bolt text-2xl text-brand-pink" />,
      title: "Fast Delivery",
      description: "Our veteran pilots work efficiently to complete your orders in record time, so you can get back to enjoying the game."
    },
    {
      icon: <i className="fi fi-br-award text-2xl text-brand-pink" />,
      title: "Veteran Pilots",
      description: "Our team consists of day-1 players and endgame experts who know every optimal route and mechanic."
    },
    {
      icon: <i className="fi fi-br-bullseye text-2xl text-brand-pink" />,
      title: "Custom Requests",
      description: "Need something specific? We tailor our services to your exact account needs and current builds."
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % values.length);
    }, 2800);
    return () => clearInterval(id);
  }, [values.length]);

  return (
    <section id="about" className="py-24 border-t border-white/5 relative bg-gradient-to-b from-transparent to-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Sticky Title and Stats */}
          <div className="lg:sticky lg:top-36 flex flex-col justify-between py-2">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Choose <span className="text-brand-pink font-extrabold drop-shadow-[0_0_15px_rgba(255,208,215,0.15)]">Macie & Co.</span>?
              </h2>
              <p className="text-brand-offwhite/70 text-lg leading-relaxed mb-6">
                We are a dedicated team of passionate gacha gamers who understand the pain of the grind. Whether you're burnt out from daily artifact farming, struggling to clear the Abyss, or just don't have time to complete the latest story quest, we're here to help.
              </p>
              <p className="text-brand-offwhite/70 text-lg leading-relaxed">
                Founded in 2021, united through our love of the gacha space, our roster has since grown to 10+ professional pilots — experts across all gacha games, ensuring your account progresses optimally while you focus on what matters most.
              </p>
            </div>

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

          {/* Right Column: Bubble-popping cycling card */}
          <div className="relative flex flex-col items-center justify-center gap-8 min-h-[300px] lg:min-h-[360px] lg:sticky lg:top-36">
            <div className="relative w-full flex items-center justify-center min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="glass p-6 md:p-8 rounded-2xl border border-brand-pink/20 relative overflow-hidden shadow-2xl bg-[#0f0f0f]/90 backdrop-blur-md w-full"
                >
                  {/* Soft radial glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-base md:text-lg font-bold text-brand-pink mb-2 tracking-wide uppercase">
                      {values[active].title}
                    </h3>
                    <p className="text-sm text-brand-offwhite/85 leading-relaxed">
                      {values[active].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {values.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show advantage ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-brand-pink' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
