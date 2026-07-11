import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';

import genshinIcon from '@/assets/game icons/Genshin Impact.jpg';
import hsrIcon from '@/assets/game icons/HSR.webp';
import wuwaIcon from '@/assets/game icons/Wuwa.webp';
import homeBg from '@/assets/game icons/home BG.png';

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGameSelect = (e: React.MouseEvent<HTMLButtonElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    const element = document.getElementById('services');
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Landing background image */}
      <img
        src={homeBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain object-center opacity-20 z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-brand-black/70 z-0 pointer-events-none" />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-[128px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-pixel text-lg sm:text-2xl md:text-4xl leading-relaxed mb-8 text-white">
              <span className="text-brand-pink">Safe and Reliable Pilot Services for your games.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              Professional piloting services for the world's most popular gacha titles. Secure, fast, and handled by veteran top-tier players. Don't have time to grind? We conquer the hardest content and farm efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-brand-pink/80 font-semibold mb-5">
              Choose your game
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={(e) => handleGameSelect(e, '/')}
              className={`w-full sm:w-auto px-6 py-3 glass hover:bg-brand-pink/10 hover:border-brand-pink text-white rounded-xl text-xs font-bold transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${location.pathname === '/' ? 'border-brand-pink bg-brand-pink/10' : ''}`}
            >
              <img src={genshinIcon} alt="" className="w-5 h-5 rounded-full object-cover" />
              Genshin Impact
            </button>
            
            <button 
              onClick={(e) => handleGameSelect(e, '/honkai-star-rail')}
              className={`w-full sm:w-auto px-6 py-3 glass hover:bg-brand-pink/10 hover:border-brand-pink text-white rounded-xl text-xs font-bold transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${location.pathname === '/honkai-star-rail' ? 'border-brand-pink bg-brand-pink/10' : ''}`}
            >
              <img src={hsrIcon} alt="" className="w-5 h-5 rounded-full object-cover" />
              Honkai: Star Rail
            </button>
            
            <button 
              onClick={(e) => handleGameSelect(e, '/wuthering-waves')}
              className={`w-full sm:w-auto px-6 py-3 glass hover:bg-brand-pink/10 hover:border-brand-pink text-white rounded-xl text-xs font-bold transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${location.pathname === '/wuthering-waves' ? 'border-brand-pink bg-brand-pink/10' : ''}`}
            >
              <img src={wuwaIcon} alt="" className="w-5 h-5 rounded-full object-cover" />
              Wuthering Waves
            </button>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://www.facebook.com/GenshinPilots"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium text-white/80 hover:text-white hover:border-brand-pink transition-all"
            >
              <i className="fi fi-brands-facebook text-brand-pink flex items-center"></i>
              Facebook
            </a>
            <a
              href="https://discord.gg/MwKZGwdAN4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium text-white/80 hover:text-white hover:border-brand-pink transition-all"
            >
              <i className="fi fi-brands-discord text-brand-pink flex items-center"></i>
              Discord
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
