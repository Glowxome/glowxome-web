"use client";
import React from 'react';

interface OrisViewProps {
  onBack: () => void;
}

export default function DimensionOris({ onBack }: OrisViewProps) {
  return (
    <div className="min-h-screen bg-[#08070A] text-[#E8E2D4] font-sans flex flex-col w-full">
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        
        {/* HERO - Structure : Titre puis sous-titre */}
        <header className="py-20 text-center">
          
          {/* TITRE LUMINEUX AVEC EFFET PULSE */}
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-widest mb-4 animate-pulse" 
            style={{
              background: "linear-gradient(to bottom, #fde68a, #f59e0b, #92400e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(251,191,36,0.4))"
            }}
          >
            Dimension<br className="md:hidden" /> Oris
          </h1>

          {/* SOUS-TITRE EN DESSOUS */}
          <p className="text-[#8A6C2A] uppercase tracking-[0.4em] text-[0.8rem] mb-10">
            CYCLE I · NIGREDO
          </p>

          <p className="text-[#E8E2D4]/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 px-4">
            Les Citadelles de Cristal sont attaquées. Karéon le Dévastateur envoie ses armées de Putridae dans l'ombre. Tes rituels quotidiens sont ta seule arme.
          </p>
          
          <button className="px-8 py-3 bg-[#D4A847] text-black font-bold rounded-full hover:bg-[#F0D898] uppercase text-xs tracking-widest transition-all">
            Commencer la mission
          </button>
        </header>

        {/* BOSS SECTION */}
        <section className="mb-12 bg-[#0E0C12] border border-[rgba(212,168,71,0.18)] rounded-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl text-[#C4503A] mb-2 font-['Cinzel']">Karéon le Dévastateur</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#7A7268] mb-4">REX CARIONIS · SEIGNEUR DE LA DISSOLUTION</p>
              <p className="text-sm text-stone-400">Il s'installe dans les failles, il ronge, il dissout. Une seule nuit de négligence suffit à ses Putridae pour prendre pied dans la Citadelle.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4"><span className="text-2xl">🦠</span><span className="text-sm">Les Putridae</span></div>
              <div className="flex items-center gap-4"><span className="text-2xl">⚗️</span><span className="text-sm">Corrosifs du Sucre</span></div>
            </div>
          </div>
        </section>

        {/* MISSIONS GRID */}
        <section className="mb-12">
          <h2 className="text-lg md:text-xl text-center uppercase tracking-widest mb-8">Tes missions d'Éclaireur</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['L\'Armure du Matin', 'Cristaux du Soir', 'Le Fleuve de Vie'].map((m, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-lg bg-[#0E0C12] hover:border-[#D4A847] transition-all cursor-pointer">
                <h4 className="text-[#F0D898] mb-2 font-['Cinzel']">{m}</h4>
                <p className="text-xs text-stone-500 mb-4">◆ +120 ÉCLATS</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOUTONS ACTIONS BAS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-8">
          <button className="px-8 py-3.5 bg-amber-500 text-black font-bold uppercase text-xs rounded-full hover:bg-amber-400 transition-all">
            INITIALISER LE SIGNAL
          </button>
          <button 
            onClick={onBack}
            className="px-8 py-3.5 border border-white/10 text-white uppercase text-xs rounded-full hover:border-white/20 transition-all"
          >
            RETOURNER À L'ÉVEIL
          </button>
        </div>
      </main>
    </div>
  );
}