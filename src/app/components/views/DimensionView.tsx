"use client";
import React from 'react';

interface DimensionViewProps {
  setCurrentTab: (tab: string) => void;
  tabId: string;
  stabilizationProgress: number;
  setStabilizationProgress: (progress: number) => void;
  dimensionsData: Array<{ id: number; name: string; src: string; rune: string; desc: string }>;
}

export default function DimensionView({ setCurrentTab, tabId, stabilizationProgress, setStabilizationProgress, dimensionsData }: DimensionViewProps) {
  const activeDimensionId = parseInt(tabId.split('-')[1], 10);
  const activeDimension = dimensionsData.find(d => d.id === activeDimensionId);

  if (!activeDimension) return null;

  return (
    <section className="pt-44 pb-32 max-w-4xl mx-auto px-6 min-h-[75vh] flex flex-col items-center justify-center relative z-10 animate-fade-in text-center">
      <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full scale-75" />
      <div className="relative w-40 h-40 rounded-full border border-amber-500/20 bg-[#08090a]/80 flex items-center justify-center mb-6">
        <span className="text-6xl font-bold text-white tracking-widest">{activeDimension.rune}</span>
      </div>
      <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] mb-2">SECTEUR DIMENSIONNEL SÉCURISÉ</p>
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-widest text-white mb-2 uppercase">{activeDimension.name}</h1>
      <p className="text-stone-400 text-sm uppercase font-light font-montserrat mb-6">Rune : {activeDimension.rune} — {activeDimension.desc}</p>
      
      <div className="border border-white/10 bg-black/60 p-8 rounded-3xl max-w-xl w-full text-left mb-12">
        <div className="flex justify-between items-center text-xs font-mono uppercase text-stone-400 border-b border-white/5 pb-4 mb-4">
          <span>Coordonnées</span>
          <span className="text-amber-500 font-bold">11D_SEC_0{activeDimension.id}</span>
        </div>
        <p className="text-stone-300 text-xs leading-relaxed uppercase tracking-wider mb-6">
          La résistance a piraté cette dimension afin de stabiliser le signal du Glow-Band. Keny et Béguy surveillent les brèches.
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase font-mono text-stone-500">
            <span>Stabilité Dimensionnelle</span>
            <span className="text-amber-400 font-bold">{stabilizationProgress}%</span>
          </div>
          <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-1000" style={{ width: `${stabilizationProgress}%` }} />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={() => setStabilizationProgress(Math.min(stabilizationProgress + 5, 100))} className="px-8 py-3.5 bg-amber-600/10 border border-amber-500/30 text-amber-500 uppercase text-xs rounded-full">
          Injecter de l'énergie
        </button>
        <button onClick={() => { setCurrentTab('home'); setStabilizationProgress(78); }} className="px-8 py-3.5 border border-white/10 text-stone-400 uppercase text-xs rounded-full">
          Retourner à l'Éveil
        </button>
      </div>
    </section>
  );
}
