"use client";
import React, { useState } from 'react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  // État pour gérer l'ouverture/fermeture du menu sur mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SÉCURITÉ : Bloquer les injections d'URLs dangereuses
  const sanitizeUrl = (url: string): string => {
    if (!url) return '#';
    const sanitized = url.trim();
    if (sanitized.toLowerCase().startsWith('javascript:') || sanitized.toLowerCase().startsWith('data:')) {
      return '#';
    }
    return sanitized;
  };

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    setIsMenuOpen(false); // Ferme automatiquement le menu après un clic
  };

  return (
    <nav className="fixed top-4 lg:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 lg:px-0">
      {/* BARRE PRINCIPALE */}
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 px-6 lg:px-8 py-3 rounded-full flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full relative z-50">
        
        {/* BOUTON BURGER (Visible UNIQUEMENT sur mobile/tablette) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer text-stone-300 hover:text-amber-400 transition-colors"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-5 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* LIENS GAUCHE (Masqués sur mobile, affichés sur ordinateur via md:) */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-[10px] uppercase tracking-[0.2em] font-montserrat items-center">
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); handleTabClick('demo'); }}
            className={`transition-colors cursor-pointer ${currentTab === 'demo' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            ᚱ Démo
          </a>
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); handleTabClick('glowbis'); }}
            className={`transition-colors cursor-pointer ${currentTab === 'glowbis' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            les Glowbis
          </a>
        </div>

        {/* LOGO CENTRAL (Toujours visible) */}
        <div className="flex flex-col items-center">
          <span 
            onClick={() => handleTabClick('home')}
            className="text-amber-500 text-base md:text-xl font-light tracking-widest flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity select-none"
          >
            <span className="opacity-40">ᚱ</span> GlowXome <span className="opacity-40">ᛗ</span>
          </span>
        </div>

        {/* LIENS DROIT & CONNEXION */}
        <div className="flex gap-6 lg:gap-8 text-[10px] uppercase tracking-[0.2em] font-montserrat items-center">
          <a 
            href={sanitizeUrl("#")} 
            onClick={(e) => { e.preventDefault(); handleTabClick('communaute'); }}
            className={`hidden md:inline transition-colors cursor-pointer ${currentTab === 'communaute' ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-400'}`}
          >
            communauté
          </a>
          <button 
            onClick={() => handleTabClick('connexion')}
            className={`px-4 lg:px-5 py-1.5 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-pointer text-[10px] uppercase tracking-[0.2em] font-montserrat whitespace-nowrap ${
              currentTab === 'connexion' 
                ? 'bg-amber-500 text-black border border-amber-400 font-bold' 
                : 'bg-amber-600/10 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-black'
            }`}
          >
            Se Connecter
          </button>
        </div>
      </div>

      {/* PANNEAU DÉROULANT MOBILE (S'affiche uniquement si isMenuOpen est vrai) */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-stone-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 origin-top ${
        isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
      }`}>
        <a 
          href={sanitizeUrl("#")} 
          onClick={(e) => { e.preventDefault(); handleTabClick('demo'); }}
          className={`text-xs uppercase tracking-[0.2em] transition-colors ${currentTab === 'demo' ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
        >
          ᚱ Démo
        </a>
        <a 
          href={sanitizeUrl("#")} 
          onClick={(e) => { e.preventDefault(); handleTabClick('glowbis'); }}
          className={`text-xs uppercase tracking-[0.2em] transition-colors ${currentTab === 'glowbis' ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
        >
          les Glowbis
        </a>
        <a 
          href={sanitizeUrl("#")} 
          onClick={(e) => { e.preventDefault(); handleTabClick('communaute'); }}
          className={`text-xs uppercase tracking-[0.2em] transition-colors ${currentTab === 'communaute' ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
        >
          communauté
        </a>
      </div>
    </nav>
  );
}