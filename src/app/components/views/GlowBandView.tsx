"use client";
import React from 'react';

interface GlowBandProps {
  setCurrentTab: (tab: string) => void;
  isSynchronizing: boolean;
  syncComplete: boolean;
  triggerSync: () => void;
}

export default function GlowBandView({ setCurrentTab, isSynchronizing, syncComplete, triggerSync }: GlowBandProps) {
  return (
    <section className="pt-44 pb-32 max-w-4xl mx-auto px-6 min-h-[75vh] flex flex-col items-center justify-center relative z-10 animate-fade-in text-center">
      <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full scale-75 pointer-events-none" />
      <div className="relative w-48 h-48 mb-6 group">
        <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full" />
        <img src="/bracelet.png" alt="Glow-Band" className="w-full h-full object-contain relative z-10 mix-blend-screen drop-shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-float" />
      </div>
      <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] mb-2">ARTEFACT SECRETS DE RESISTANCE</p>
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-widest text-white mb-6 uppercase">GLOW-BAND</h1>
      <div className="w-24 h-[1px] bg-amber-500/30 mb-8" />
      <p className="text-stone-300 font-montserrat text-sm uppercase tracking-[0.25em] max-w-2xl leading-relaxed mb-12">
        Cet outil d'origami cosmique est capable de matérialiser vos performances réelles à travers les dimensions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mb-12 text-left">
        <div className="p-6 border border-white/5 bg-black/40 rounded-2xl">
          <span className="text-amber-500 text-xs font-mono tracking-widest block mb-2">[ 01. ALLIAGE ]</span>
          <h4 className="text-white font-bold uppercase tracking-wider text-xs">Silicium Cosmique</h4>
        </div>
        <div className="p-6 border border-white/5 bg-black/40 rounded-2xl">
          <span className="text-teal-400 text-xs font-mono tracking-widest block mb-2">[ 02. FLUX ]</span>
          <h4 className="text-teal-400 font-bold uppercase tracking-wider text-xs">Synergie 11-D</h4>
        </div>
        <div className="p-6 border border-purple-400/20 bg-amber-500/5 rounded-2xl border-dashed">
          <span className="text-amber-400 text-xs font-mono tracking-widest block mb-2">[ 03. ÉLITE ]</span>
          <h4 className="text-amber-400 font-bold uppercase tracking-wider text-xs">Édition Or : 100 Ex</h4>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={triggerSync} className="px-8 py-3.5 bg-amber-500 text-black border border-amber-400 font-bold uppercase text-xs rounded-full">
          {isSynchronizing ? "Synchronisation..." : syncComplete ? "✓ Connecté" : "Initialiser le Signal"}
        </button>
        <button onClick={() => setCurrentTab('home')} className="px-8 py-3.5 border border-white/10 text-stone-400 uppercase text-xs rounded-full">
          Retourner à l'Éveil
        </button>
      </div>
    </section>
  );
}