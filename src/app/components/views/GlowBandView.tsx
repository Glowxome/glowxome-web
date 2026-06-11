"use client";
import React, { useState } from 'react';

interface GlowBandProps {
  setCurrentTab: (tab: string) => void;
  isSynchronizing: boolean;
  syncComplete: boolean;
  triggerSync: () => void;
}

const BRACELETS = [
  {
    id: "01",
    cycle: "L'Œuvre au Noir",
    latin: "Nigredo",
    tier: "COMMUN",
    matiere: "Silicone",
    name: "Bracelet de Silicone",
    dims: "Dimensions 1 — 5",
    dimsLabel: "Le Cycle de la Matière",
    videoSrc: "/bracelet-silicone.mp4",
    videoPoster: "/poster-silicone.jpg",
    dimensions: [
      { num: 1, name: "Le Sel", desc: "Le Corps / La Dent" },
      { num: 2, name: "Le Soufre", desc: "Le Feu Interne / Le Goût" },
      { num: 3, name: "Le Mercure", desc: "Le Souffle / L'Air" },
      { num: 4, name: "L'Eau", desc: "La Purification" },
      { num: 5, name: "La Terre", desc: "Le Geste Sain" },
    ],
    description: "Le stade de la purification. L'humain numérique est dissous dans ses mauvaises habitudes pour être reconstruit. Travail sur le corps physique.",
    hex: "#78716c",
    glow: "rgba(120,113,108,0.6)",
    rarity: 1,
  },
  {
    id: "02",
    cycle: "L'Œuvre au Blanc",
    latin: "Albedo",
    tier: "PEU COMMUN",
    matiere: "Cristal",
    name: "Bracelet de Cristal",
    dims: "Dimensions 6 — 8",
    dimsLabel: "Le Cycle de l'Esprit",
    videoSrc: "/bracelet-cristal.mp4",
    videoPoster: "/poster-cristal.jpg",
    dimensions: [
      { num: 6, name: "Le Fil à Plomb", desc: "La Verticalité / Le Tri" },
      { num: 7, name: "Le Niveau", desc: "L'Égalité / Le Lien Social" },
      { num: 8, name: "L'Équerre", desc: "La Rectitude / Le Geste Précis" },
    ],
    description: "On ne travaille plus sur soi seul, mais sur sa relation au monde. Le passage de l'individu au collectif, la fraternité.",
    hex: "#2dd4bf",
    glow: "rgba(45,212,191,0.6)",
    rarity: 2,
  },
  {
    id: "03",
    cycle: "L'Œuvre au Jaune",
    latin: "Citrinitas",
    tier: "RARE",
    matiere: "Ambre",
    name: "Bracelet d'Ambre",
    dims: "Dimensions 9 — 10",
    dimsLabel: "Le Cycle du Mystère",
    videoSrc: "/bracelet-ambre.mp4",
    videoPoster: "/poster-ambre.jpg",
    dimensions: [
      { num: 9, name: "Le Compas", desc: "La Créativité / L'Origami" },
      { num: 10, name: "La Voûte Étoilée", desc: "L'Harmonie / Le Son" },
    ],
    description: "Le joueur accède aux secrets de la création. Il n'est plus un consommateur, il devient un artisan, un initié.",
    hex: "#f59e0b",
    glow: "rgba(245,158,11,0.6)",
    rarity: 3,
  },
  {
    id: "04",
    cycle: "L'Œuvre au Rouge",
    latin: "Rubedo",
    tier: "LÉGENDAIRE",
    matiere: "Or",
    name: "Bracelet d'Or",
    dims: "Dimension 11",
    dimsLabel: "La Dimension Unique",
    videoSrc: "/bracelet-or.mp4",
    videoPoster: "/poster-or.jpg",
    dimensions: [
      { num: 11, name: "La Pierre Philosophale", desc: "L'Éveil Total" },
    ],
    description: "La fusion du numérique et de l'organique. L'humain ne regarde plus son écran pour s'échapper, mais pour s'illuminer.",
    hex: "#fbbf24",
    glow: "rgba(251,191,36,0.8)",
    rarity: 4,
    limited: true,
  },
];

function BraceletVideo({ b }: { b: typeof BRACELETS[0] }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border"
      style={{ borderColor: b.hex + "33", backgroundColor: "#08090a" }}
    >
      {/* Lueur sur le bord supérieur */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ backgroundColor: b.hex + "66" }}
      />

      {/* Header vidéo */}
      <div className="px-5 py-3 flex items-center justify-between border-b" style={{ borderColor: b.hex + "1a" }}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: b.hex }} />
          <span className="text-[9px] uppercase tracking-widest" style={{ color: b.hex }}>
            Présentation — {b.name}
          </span>
        </div>
        <span className="text-[8px] text-stone-600 uppercase tracking-widest font-mono">{b.latin}</span>
      </div>

      {/* Zone vidéo */}
      <div className="aspect-video relative group" style={{ backgroundColor: "#08090a" }}>
        <video
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          controls
          poster={b.videoPoster}
          preload="none"
        >
          <source src={b.videoSrc} type="video/mp4" />
        </video>

        {/* Overlay placeholder (visible si pas de vidéo chargée) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
            style={{
              borderColor: b.hex + "55",
              backgroundColor: b.hex + "11",
              boxShadow: `0 0 24px ${b.glow}`,
            }}
          >
            <svg className="w-5 h-5 ml-1" fill={b.hex} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-[9px] uppercase tracking-widest" style={{ color: b.hex + "88" }}>
            Vidéo à venir
          </span>
        </div>

        {/* Gradient bas */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#08090a] to-transparent pointer-events-none" />
      </div>

      {/* Footer vidéo */}
      <div className="px-5 py-3 flex items-center justify-between">
        <p className="text-[9px] text-stone-500 uppercase tracking-widest">{b.dims} · {b.dimsLabel}</p>
        <span
          className="text-[8px] px-2 py-0.5 rounded-full uppercase tracking-widest"
          style={{ backgroundColor: b.hex + "22", color: b.hex }}
        >
          {b.tier}
        </span>
      </div>
    </div>
  );
}

export default function GlowBandView({ setCurrentTab, isSynchronizing, syncComplete, triggerSync }: GlowBandProps) {
  const [selected, setSelected] = useState<number>(0);
  const active = BRACELETS[selected];

  return (
    <section className="pt-32 pb-32 max-w-5xl mx-auto px-6 relative z-10 animate-fade-in">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] blur-[160px] rounded-full transition-all duration-700"
          style={{ backgroundColor: active.hex + "0a" }}
        />
      </div>

      {/* -- HERO -------------------------------------------------------- */}
      <div className="text-center mb-16 relative">
        {/* Lueur ambiante derrière le titre */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 blur-[80px] rounded-full pointer-events-none" style={{ backgroundColor: "#fbbf2418" }} />

        {/* Titre principal */}
        <h1
          className="relative text-6xl sm:text-8xl font-extrabold tracking-widest uppercase mb-3"
          style={{
            background: "linear-gradient(to bottom, #fde68a, #f59e0b, #92400e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 30px rgba(251,191,36,0.55))",
          }}
        >
          GLOW-BAND
        </h1>

        {/* Titre secondaire */}
        <p
          className="text-[10px] uppercase tracking-[0.45em] mb-6"
          style={{ color: "#fbbf24aa" }}
        >
          ARTEFACT SECRET DE RÉSISTANCE
        </p>

        <div className="w-24 h-[1px] bg-amber-500/30 mx-auto mb-6" />
        <p className="text-stone-400 text-sm uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
          Quatre matières. Quatre cycles alchimiques. Onze dimensions à traverser.
        </p>
      </div>

      {/* -- SÉLECTEUR 4 BRACELETS --------------------------------------- */}
      <div className="mb-4">
        <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] text-center mb-6">LA PYRAMIDE DE L'ÉVEIL</p>
        <div className="grid grid-cols-4 gap-3">
          {BRACELETS.map((b, i) => (
            <button
              key={b.id}
              onClick={() => setSelected(i)}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300"
              style={{
                borderColor: selected === i ? b.hex + "99" : b.hex + "22",
                backgroundColor: selected === i ? b.hex + "14" : "#08090a",
                boxShadow: selected === i ? `0 0 24px ${b.glow}` : "none",
              }}
            >
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: b.hex + (selected === i ? "cc" : "44"),
                  boxShadow: selected === i ? `0 0 16px ${b.glow}` : "none",
                  backgroundColor: b.hex + "11",
                }}
              >
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: b.hex, opacity: selected === i ? 1 : 0.4 }} />
              </div>
              <span className="text-[8px] font-mono uppercase tracking-widest" style={{ color: b.hex }}>{b.matiere}</span>
              <span className="text-[7px] text-stone-600 uppercase tracking-wider hidden sm:block">{b.tier}</span>
            </button>
          ))}
        </div>

        {/* Barre de rareté */}
        <div className="relative h-[2px] rounded-full mt-5 mb-1" style={{ backgroundColor: "#08090a" }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-600/40 via-teal-500/40 via-amber-500/40 to-yellow-400/60" />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#08090a] transition-all duration-500"
            style={{ left: `calc(${(selected / 3) * 100}% - 6px)`, backgroundColor: active.hex, boxShadow: `0 0 10px ${active.glow}` }}
          />
        </div>
        <div className="flex justify-between text-[8px] text-stone-600 uppercase tracking-widest px-1">
          <span>Commun</span><span>Peu Commun</span><span>Rare</span><span>Légendaire</span>
        </div>
      </div>

      {/* -- FICHE BRACELET ACTIF ---------------------------------------- */}
      <div
        className="rounded-2xl border p-8 mb-8 relative overflow-hidden transition-all duration-500"
        style={{ borderColor: active.hex + "44", backgroundColor: "#08090a", boxShadow: `0 0 50px ${active.glow}18` }}
      >
        <span className="absolute top-4 right-6 text-[10px] font-mono tracking-[0.3em] uppercase opacity-20" style={{ color: active.hex }}>
          {active.latin}
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-[9px] font-mono tracking-widest mb-1" style={{ color: active.hex }}>
              [ {active.id} ] — {active.cycle}
            </p>
            <h2 className="text-2xl font-extrabold uppercase tracking-wider text-white mb-1">{active.name}</h2>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: active.hex + "aa" }}>
              {active.dimsLabel} · {active.dims}
            </p>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">{active.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[9px] px-3 py-1 rounded-full uppercase tracking-widest border" style={{ borderColor: active.hex + "55", color: active.hex, backgroundColor: active.hex + "11" }}>
                {active.tier}
              </span>
              <span className="text-[9px] px-3 py-1 rounded-full uppercase tracking-widest border border-white/5 text-stone-500">
                {active.matiere}
              </span>
              {active.limited && (
                <span className="text-[9px] px-3 py-1 rounded-full uppercase tracking-widest border border-yellow-400/40 text-yellow-300 bg-yellow-400/10">
                  100 Ex. — Édition Limitée
                </span>
              )}
            </div>
          </div>
          <div>
            <p className="text-[9px] text-stone-500 uppercase tracking-widest mb-4">Dimensions débloquées</p>
            <div className="flex flex-col gap-2">
              {active.dimensions.map((dim) => (
                <div key={dim.num} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: active.hex + "22", backgroundColor: active.hex + "08" }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: active.hex + "22", color: active.hex }}>
                    {dim.num}
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wider">{dim.name}</p>
                    <p className="text-stone-500 text-[10px]">{dim.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 h-[1px] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(active.rarity / 4) * 100}%`, backgroundColor: active.hex, boxShadow: `0 0 12px ${active.glow}` }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-stone-600 uppercase tracking-widest">Puissance</span>
          <span className="text-[8px] uppercase tracking-widest" style={{ color: active.hex }}>{active.rarity * 25}%</span>
        </div>
      </div>

      {/* -- VIDÉO DU BRACELET SÉLECTIONNÉ ------------------------------ */}
      <div className="mb-16">
        <BraceletVideo b={active} />
      </div>

      {/* -- SÉPARATEUR : TOUTES LES VIDÉOS ----------------------------- */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-white/5" />
          <p className="text-[10px] text-stone-500 uppercase tracking-[0.4em] whitespace-nowrap">TOUS LES BRACELETS</p>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRACELETS.map((b, i) => (
            <div key={b.id} onClick={() => setSelected(i)} className="cursor-pointer group">
              {/* Mini header cliquable */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: b.hex + "22", color: b.hex }}>
                  {b.id}
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">{b.name}</p>
                  <p className="text-[9px] uppercase tracking-widest" style={{ color: b.hex + "99" }}>{b.dimsLabel}</p>
                </div>
                {b.limited && (
                  <span className="ml-auto text-[8px] text-yellow-300 border border-yellow-400/30 px-2 py-0.5 rounded-full">100 Ex.</span>
                )}
              </div>
              <BraceletVideo b={b} />
            </div>
          ))}
        </div>
      </div>

      {/* -- CTA -------------------------------------------------------- */}
      <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={triggerSync}
          className="px-8 py-3.5 bg-amber-500 text-black border border-amber-400 font-bold uppercase text-xs rounded-full transition-all hover:bg-amber-400"
        >
          {isSynchronizing ? "Synchronisation..." : syncComplete ? "✓ Connecté" : "Initialiser le Signal"}
        </button>
        <button
          onClick={() => setCurrentTab('home')}
          className="px-8 py-3.5 border border-white/10 text-stone-400 uppercase text-xs rounded-full hover:border-white/20 hover:text-stone-300 transition-all"
        >
          Retourner à l'Éveil
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}