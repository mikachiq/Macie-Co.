import React, { useState, useEffect } from 'react';

import logo from '@/assets/favicon.jpg';

export default function Navbar({ 
  currency, 
  setCurrency 
}: { 
  currency: 'PHP' | 'USD', 
  setCurrency: (c: 'PHP' | 'USD') => void 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Macie & Co." className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-bold text-xl tracking-tighter text-white uppercase">MACIE <span className="text-brand-pink">&</span> CO.</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`${idx === 0 ? 'text-brand-pink' : 'text-brand-offwhite/70'} hover:text-brand-pink transition-colors px-3 py-2 text-sm font-medium`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-black/20 border border-white/10 rounded-full p-1 flex items-center">
              <button 
                onClick={() => setCurrency('PHP')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${currency === 'PHP' ? 'bg-brand-pink text-white' : 'text-white/50 hover:text-white'}`}
              >
                PHP
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${currency === 'USD' ? 'bg-brand-pink text-white' : 'text-white/50 hover:text-white'}`}
              >
                USD
              </button>
            </div>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, '#services')}
              className="bg-brand-pink hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-offwhite hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <i className="fi fi-br-cross text-xl"></i> : <i className="fi fi-br-menu-burger text-xl"></i>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-brand-offwhite/80 hover:text-white hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex justify-center p-1 bg-white/5 rounded-lg">
              <button 
                onClick={() => { setCurrency('PHP'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-colors ${currency === 'PHP' ? 'bg-brand-pink text-white' : 'text-white/50 hover:text-white'}`}
              >
                PHP
              </button>
              <button 
                onClick={() => { setCurrency('USD'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-2 rounded-md text-sm font-bold transition-colors ${currency === 'USD' ? 'bg-brand-pink text-white' : 'text-white/50 hover:text-white'}`}
              >
                USD
              </button>
            </div>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, '#services')}
              className="mt-4 block w-full text-center bg-brand-pink text-white px-4 py-3 rounded-md font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
