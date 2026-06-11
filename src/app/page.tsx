"use client";

import React, { useState } from 'react';
import Navbar from './components/navigation/Navbar';
import HomeView from './components/views/HomeView';
import GlowBandView from './components/views/GlowBandView';
import DimensionView from './components/views/DimensionView';
import DemoView from './components/views/DemoView';
import GlowbisView from './components/views/GlowbisView';
import CommunauteView from './components/views/CommunauteView';
import ConnexionView from './components/views/ConnexionView';
import OrigamiView from './components/views/OrigamiView';

export default function App() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [stabilizationProgress, setStabilizationProgress] = useState<number>(78);
  const [isSynchronizing, setIsSynchronizing] = useState<boolean>(false);
  const [syncComplete, setSyncComplete] = useState<boolean>(false);

  const dimensionsData = Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    name: `Dimension ${i + 1}`,
    src: `/dim${i + 1}.png`,
    rune: ["ᚱ", "ᛗ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚻ", "ᛟ"][i] || "ᛟ",
    desc: [
      "Volonté Initiale", "Vecteur & Direction", "Fluidic Breath", "Purification",
      "Ancrage Réel", "Verticalité", "Lien Social", "Discipline & Geste",
      "Vision & Guidance", "Alchimie Intérieure", "L'Éveil Ultime"
    ][i] || "Énergie Primordiale"
  }));

  const Icons = {
    X: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>,
    Instagram: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    Facebook: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    TikTok: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>,
    WhatsApp: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.1H12.5a10.3 10.3 0 0 1 4.5 2.5l3 1-1 3z" /></svg>
  };

  const socials = [
    { id: 'twitter', name: 'Twitter (X)', icon: Icons.X },
    { id: 'instagram', name: 'Instagram', icon: Icons.Instagram },
    { id: 'facebook', name: 'Facebook', icon: Icons.Facebook },
    { id: 'tiktok', name: 'TikTok', icon: Icons.TikTok },
    { id: 'whatsapp', name: 'WhatsApp', icon: Icons.WhatsApp }
  ];

  const triggerSync = () => {
    setIsSynchronizing(true);
    setSyncComplete(false);
    setTimeout(() => {
      setIsSynchronizing(false);
      setSyncComplete(true);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#020406] text-stone-200 selection:bg-amber-500/30 overflow-x-hidden relative">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Rendu dynamique des vues */}
      {currentTab === 'home' && <HomeView setCurrentTab={setCurrentTab} isMuted={isMuted} setIsMuted={setIsMuted} dimensionsData={dimensionsData} />}
      {currentTab === 'glow-band' && <GlowBandView setCurrentTab={setCurrentTab} isSynchronizing={isSynchronizing} syncComplete={syncComplete} triggerSync={triggerSync} />}
      {currentTab.startsWith('dimension-') && <DimensionView setCurrentTab={setCurrentTab} tabId={currentTab} stabilizationProgress={stabilizationProgress} setStabilizationProgress={setStabilizationProgress} dimensionsData={dimensionsData} />}
      {currentTab === 'origami' && <OrigamiView setCurrentTab={setCurrentTab} isSynchronizing={isSynchronizing} syncComplete={syncComplete} triggerSync={triggerSync} />}
      {currentTab === 'demo' && <DemoView setCurrentTab={setCurrentTab} />}
      {currentTab === 'glowbis' && <GlowbisView setCurrentTab={setCurrentTab} />}
      {currentTab === 'communaute' && <CommunauteView setCurrentTab={setCurrentTab} />}
      {currentTab === 'connexion' && <ConnexionView setCurrentTab={setCurrentTab} />}

      <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="flex gap-10 mb-12 relative">
            {socials.map((social) => (
              <div key={social.id} className="relative flex flex-col items-center" onMouseEnter={() => setHoveredIcon(social.id)} onMouseLeave={() => setHoveredIcon(null)}>
                <div className={`absolute -top-12 px-4 py-1.5 bg-amber-500 text-black text-[9px] uppercase tracking-widest font-bold rounded-lg transition-all duration-300 pointer-events-none ${hoveredIcon === social.id ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0'}`}>
                  {social.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rotate-45" />
                </div>
                <button type="button" className="p-3 border border-white/10 rounded-xl text-stone-500 hover:text-amber-500 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-500">
                  <social.icon />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4">
            <div className="text-amber-500/40 text-[10px] tracking-[0.4em] uppercase">ᚱ Glowxome ᛗ</div>
            <p className="text-stone-600 text-[10px] uppercase tracking-widest">© 2024 GLOWXOME. TOUS DROITS RÉSERVÉS.</p>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { display: flex; width: max-content; animation: scroll 40s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />
    </main>
  );
}