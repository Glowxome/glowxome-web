"use client";
import React from 'react';
export default function ConnexionView({ setCurrentTab }: { setCurrentTab: (tab: string) => void }) {
  return (
    <section className="pt-44 pb-32 max-w-xl mx-auto px-6 text-center min-h-[75vh] flex flex-col justify-center items-center relative z-10 animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-amber-500 mb-2 uppercase">PORTAIL D'ÉVEIL</h1>
      <p className="text-[10px] text-amber-500/40 uppercase tracking-[0.4em] mb-8 font-mono">Connexion Sécurisée du Réseau</p>
      <div className="w-full bg-black/70 border border-white/10 p-8 rounded-3xl text-left space-y-6">
        <div>
          <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2">Identifiant Éclaireur</label>
          <input type="text" placeholder="Ex: Keny_01" className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-amber-500 placeholder-stone-600 focus:outline-none uppercase font-mono" disabled />
        </div>
        <div>
          <label className="block text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-2">Clé Runique Décryptée</label>
          <input type="password" placeholder="••••••••••••••" className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-amber-500 focus:outline-none font-mono" disabled />
        </div>
        <button className="w-full py-4 bg-amber-600/10 border border-amber-500/30 text-amber-500 rounded-xl uppercase text-xs font-bold cursor-not-allowed" disabled>Établir le Flux</button>
      </div>
      <button onClick={() => setCurrentTab('home')} className="mt-8 px-8 py-3 bg-transparent border border-white/10 text-stone-500 uppercase text-xs rounded-full">Retourner à l'Éveil</button>
    </section>
  );
}
