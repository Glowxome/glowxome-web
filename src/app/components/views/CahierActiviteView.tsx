"use client";
import React from 'react';

interface CahierActiviteViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function CahierActiviteView({ setCurrentTab }: CahierActiviteViewProps) {
  const handleOpenDemoOrigamis = () => {
    setCurrentTab('demo');
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('glowxome:open-demo-origamis'));
    }, 50);
  };

  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-24 text-center">
      <div className="mb-8 text-left">
        <button
          type="button"
          onClick={() => setCurrentTab('home')}
          className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 hover:border-amber-500/50 hover:text-amber-400 text-stone-300 text-xs uppercase tracking-widest transition-all cursor-pointer"
        >
          ← Retour à l’accueil
        </button>
      </div>

      <div className="relative w-full bg-[#08090a] border border-amber-500/40 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(245,158,11,0.25)]">
        <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] mb-2 text-center">
          ᚱ Offre de Pré-Lancement du cahier Glow origami by GlowXome ᛗ
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider mb-4 text-center">
          Cahier d’Activité Glow-Origamis : 3 en 1 Colorier, plier et s&apos;éveiller
        </h1>
        <p className="text-xs md:text-sm text-stone-300 font-montserrat leading-relaxed mb-8 text-justify">
          Profitez du tarif de pré-lancement à <strong className="text-amber-400">moins des 3/4 du prix officiel</strong> avant le lancement grand public prévu en juillet 2027 : coloriage, pliage sans colle ni ciseaux, défis ludiques et aventures avec Keny et Béguy de <strong className="text-amber-400">GlowXome</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20">
            <p className="text-[10px] text-amber-400 uppercase tracking-widest font-bold mb-1 text-center">
              Prix de Lancement
            </p>
            <p className="text-xs text-stone-300 leading-relaxed text-justify">
              Commandez à moins des 3/4 du prix officiel (plus de 25 % d’économie) en pré-lancement sur Kickstarter, avant le passage au tarif public de juillet 2027 et nos événements GlowXome.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-teal-500/20">
            <p className="text-[10px] text-teal-400 uppercase tracking-widest font-bold mb-1 text-center">
              Tutos Vidéo
            </p>
            <p className="text-xs text-stone-300 leading-relaxed text-justify">
              Accédez directement aux vidéos d’origamis dans l’onglet Origamis de l’Espace Démo pour découvrir les pliages pas à pas.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-purple-500/20">
            <p className="text-[10px] text-purple-400 uppercase tracking-widest font-bold mb-1 text-center">
              Contenu
            </p>
            <p className="text-xs text-stone-300 leading-relaxed text-justify">
              20 pages de coloriages, énigmes et origamis sur papier : votre enfant va colorier, plier et découvrir des secrets éducatifs.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            type="button"
            onClick={handleOpenDemoOrigamis}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-xs uppercase tracking-widest font-bold text-center transition-all cursor-pointer"
          >
            Voir les tutos vidéo
          </button>
          <a
            href="https://www.kickstarter.com/projects/glow-origami/glow-origami-laventure-du-papier-magique"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black text-xs uppercase tracking-widest font-bold text-center hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Commander au prix de lancement
          </a>
        </div>
      </div>
    </section>
  );
}