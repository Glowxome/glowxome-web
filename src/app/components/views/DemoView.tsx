"use client";
import React, { useState } from 'react';
 
type DemoTab = 'game' | 'bracelet' | 'origami';
 
const TABS: { id: DemoTab; label: string; icon: string }[] = [
  { id: 'game', label: 'Évolution du jeu', icon: '✦' },
  { id: 'bracelet', label: 'Bracelet', icon: '◎' },
  { id: 'origami', label: 'Origamis', icon: '◇' },
];
 
// ─── JOURNAL DES MISES À JOUR ───────────────────────────────────────────────
// Pour ajouter une nouvelle mise à jour :
//   1. Dépose "mise à jour N.mp4" dans /public
//   2. Ajoute une entrée { num, date, desc } dans ce tableau
// ─────────────────────────────────────────────────────────────────────────────
const UPDATES: { num: number; date: string; desc: string }[] = [
  { num: 1, date: 'Juin 2024', desc: 'Première version jouable — mécanique de pliage de base et univers graphique initial.' },
];
// ─────────────────────────────────────────────────────────────────────────────
 
const ORIGAMI_VIDEOS = [
  { title: 'Origami', src: '/origami.mp4' },
  { title: 'Origami 1', src: '/origami 1.mp4' },
  { title: 'Origami 3', src: '/origami 3.mp4' },
];
 
function OrigamiCard({ title, src }: { title: string; src: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-amber-500/20 bg-stone-900/60">
      <video
        src={src}
        controls
        playsInline
        className="w-full aspect-video object-cover bg-stone-950"
      />
      <div className="px-4 py-3 border-t border-amber-500/10">
        <span className="text-stone-200 text-xs tracking-widest uppercase">{title}</span>
      </div>
    </div>
  );
}
 
export default function DemoView({ setCurrentTab }: { setCurrentTab: (tab: string) => void }) {
  const [activeTab, setActiveTab] = useState<DemoTab>('game');
 
  // Mise à jour active (la plus récente par défaut)
  const [activeUpdate, setActiveUpdate] = useState(UPDATES[UPDATES.length - 1].num);
  const current = UPDATES.find((u) => u.num === activeUpdate)!;
 
  return (
    <section className="pt-36 pb-32 max-w-5xl mx-auto px-6 min-h-[75vh] flex flex-col relative z-10 animate-fade-in">
 
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-amber-500/50 text-xs tracking-[0.4em] uppercase mb-3">Expériences interactives</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-widest uppercase bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-pulse">
          Espace Démo
        </h1>
        <div className="mt-5 mx-auto w-16 h-px bg-amber-500/30" />
      </div>
 
      {/* Tab nav */}
      <div className="flex justify-center mb-12">
        <div className="relative flex gap-0 border border-amber-500/20 rounded-sm overflow-hidden">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-7 py-3 text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'text-stone-950 bg-amber-500'
                    : 'text-amber-500/60 bg-transparent hover:text-amber-400 hover:bg-amber-500/8'
                }`}
              >
                <span className="mr-2 opacity-70">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
 
      {/* Tab content */}
      <div className="flex-1">
 
        {/* ── ÉVOLUTION DU JEU ── */}
        {activeTab === 'game' && (
          <div className="animate-fade-in">
 
            {/* Sélecteur d'historique (affiché seulement si > 1 vidéo) */}
            {UPDATES.length > 1 && (
              <div className="flex items-center gap-2 justify-center mb-8 flex-wrap">
                <span className="text-stone-500 text-xs tracking-widest uppercase mr-2">Historique</span>
                {UPDATES.map((u) => (
                  <button
                    key={u.num}
                    onClick={() => setActiveUpdate(u.num)}
                    className={`px-4 py-1.5 text-xs tracking-widest uppercase rounded-sm border transition-all duration-200 ${
                      activeUpdate === u.num
                        ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                        : 'border-amber-500/20 text-stone-500 hover:border-amber-500/40 hover:text-stone-300'
                    }`}
                  >
                    Mise à jour {u.num}
                  </button>
                ))}
              </div>
            )}
 
            {/* Lecteur vidéo */}
            <div className="border border-amber-500/20 rounded-sm overflow-hidden bg-stone-900/40">
              <video
                key={current.num}
                src={`/mise à jour ${current.num}.mp4`}
                controls
                playsInline
                className="w-full aspect-video object-cover bg-stone-950"
              />
              {/* Barre d'info */}
              <div className="px-6 py-4 border-t border-amber-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-stone-200 text-xs tracking-widest uppercase mb-1">
                    Mise à jour {current.num}
                  </p>
                  <p className="text-stone-500 text-xs">{current.desc}</p>
                </div>
                <span className="text-amber-500/40 text-xs font-mono tracking-wider shrink-0">{current.date}</span>
              </div>
            </div>
 
            {/* Message si une seule vidéo */}
            {UPDATES.length === 1 && (
              <p className="text-stone-600 text-xs text-center mt-6 tracking-wider">
                Les prochaines mises à jour apparaîtront ici automatiquement.
              </p>
            )}
          </div>
        )}
 
        {/* ── BRACELET ── */}
        {activeTab === 'bracelet' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-amber-500/20 rounded-sm overflow-hidden bg-stone-900/40">
                <video
                  src="/Prototype bracelet.mp4"
                  controls
                  playsInline
                  className="w-full aspect-video object-cover bg-stone-950"
                />
                <div className="px-5 py-3 border-t border-amber-500/10">
                  <p className="text-stone-200 text-xs tracking-widest uppercase">Vue du prototype</p>
                </div>
              </div>
 
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Technologie', value: 'NFC · BLE 5.0' },
                  { label: 'Matériaux', value: 'Résine bio-sourcée' },
                  { label: 'Autonomie', value: '72 h · sans fil' },
                  { label: 'Capteurs', value: 'Accéléromètre · Gyroscope' },
                  { label: 'Statut', value: 'Prototype v2 — Tests' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between border border-amber-500/15 rounded-sm px-5 py-3 bg-stone-900/30">
                    <span className="text-stone-500 text-xs tracking-widest uppercase">{label}</span>
                    <span className="text-amber-400 text-xs font-mono">{value}</span>
                  </div>
                ))}
                <button className="mt-2 px-6 py-3 border border-amber-500/30 text-amber-500 text-xs tracking-widest uppercase rounded-sm hover:bg-amber-500/10 transition-colors">
                  Télécharger les specs
                </button>
              </div>
            </div>
          </div>
        )}
 
        {/* ── ORIGAMIS ── */}
        {activeTab === 'origami' && (
          <div className="animate-fade-in">
            <p className="text-stone-500 text-xs tracking-[0.3em] uppercase text-center mb-8">
              Guides de montage étape par étape
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {ORIGAMI_VIDEOS.map((v) => (
                <OrigamiCard key={v.title} title={v.title} src={v.src} />
              ))}
            </div>
            <p className="text-stone-600 text-xs text-center mt-8 tracking-wider">
              Trois niveaux de difficulté · Narration incluse
            </p>
          </div>
        )}
 
      </div>
 
      {/* Back link */}
      <div className="text-center mt-16">
        <button
          onClick={() => setCurrentTab('home')}
          className="px-8 py-3.5 bg-transparent border border-amber-500/25 text-amber-500/70 uppercase text-xs rounded-full tracking-widest hover:border-amber-500/50 hover:text-amber-500 transition-all duration-300"
        >
          ← Retourner à l'Éveil
        </button>
      </div>
    </section>
  );
}