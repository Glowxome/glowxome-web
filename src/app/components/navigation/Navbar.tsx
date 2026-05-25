"use client";
import React from 'react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  // SÉCURITÉ : Bloquer les injections d'URLs dangereuses
  const sanitizeUrl = (url: string): string => {
    if (!url) return '#';
    const sanitized = url.trim();
    if (sanitized.toLowerCase().startsWith('javascript:') || sanitized.toLowerCase().startsWith('data:')) {
      return '#';
    }
    return sanitized;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6 lg:px-0">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full">
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-montserrat items-center">
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); setCurrentTab('demo'); }}
            className={`transition-colors cursor-pointer ${currentTab === 'demo' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            ᚱ Démo
          </a>
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); setCurrentTab('glowbis'); }}
            className={`transition-colors cursor-pointer ${currentTab === 'glowbis' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            les Glowbis
          </a>
        </div>
        <div className="flex flex-col items-center">
          <span 
            onClick={() => setCurrentTab('home')}
            className="text-amber-500 text-xl font-light tracking-widest flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity select-none"
          >
            <span className="opacity-40">ᚱ</span> GlowXome <span className="opacity-40">ᛗ</span>
          </span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-montserrat items-center">
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); setCurrentTab('communaute'); }}
            className={`transition-colors cursor-pointer ${currentTab === 'communaute' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            communauté
          </a>
          <button 
            onClick={() => setCurrentTab('connexion')}
            className={`px-5 py-1.5 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-pointer text-[10px] uppercase tracking-[0.2em] font-montserrat ${
              currentTab === 'connexion' 
                ? 'bg-amber-500 text-black border border-amber-400 font-bold' 
                : 'bg-amber-600/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black'
            }`}
          >
            Se Connecter
          </button>
        </div>
      </div>
    </nav>
  );
}
