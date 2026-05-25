"use client";
import React from 'react';
export default function DemoView({ setCurrentTab }: { setCurrentTab: (tab: string) => void }) {
  return (
    <section className="pt-44 pb-32 max-w-4xl mx-auto px-6 text-center min-h-[75vh] flex flex-col justify-center items-center relative z-10 animate-fade-in">
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-widest text-amber-500 mb-6 uppercase">Espace Démo</h1>
      <p className="text-stone-300 text-sm uppercase tracking-[0.25em] max-w-2xl leading-relaxed mb-12">Le simulateur d'Origami cosmique sera modélisé ici.</p>
      <button onClick={() => setCurrentTab('home')} className="px-8 py-3.5 bg-transparent border border-amber-500/30 text-amber-500 uppercase text-xs rounded-full">Retourner à l'Éveil</button>
    </section>
  );
}
