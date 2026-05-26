"use client";
import React from 'react';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  dimensionsData: Array<{ id: number; name: string; src: string; rune: string; desc: string }>;
}

export default function HomeView({ setCurrentTab, isMuted, setIsMuted, dimensionsData }: HomeViewProps) {
  return (
    <>
      {/* HEADER SACRÉ */}
      <header className="relative pt-24 lg:pt-44 pb-20 text-center z-10">
  <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] mb-4 bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-pulse">
    GLOWXOME
  </h1>
        <p className="text-amber-700/60 font-montserrat tracking-[1em] uppercase text-sm mb-12">
          LE RÉVEIL COMMENCE
        </p>

        {/* CONTENEUR DE PRÉSENTATION ULTRA-SÉCURISÉ */}
        <div className="max-w-7xl mx-auto px-6 mb-20 relative">
          <div className="hidden lg:flex items-start justify-center gap-6 xl:gap-12 relative z-30 w-full max-w-6xl mx-auto">
            
            {/* PORTAIL KICKSTARTER GAUCHE */}
            <div className="flex-shrink-0 lg:mt-12">
              <a 
                href="[https://www.kickstarter.com](https://www.kickstarter.com)" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-36 h-36 xl:w-44 xl:h-44 group hover:scale-105 active:scale-95 transition-all duration-300 animate-slide-left-loop pause-on-hover block relative"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/30 bg-[#08090a]/95 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] group-hover:border-amber-400 transition-all duration-500 flex items-center justify-center">
                  <img 
                    src="/kickstarter-left.png" 
                    alt="Kickstarter Resistance" 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent z-0 group-hover:from-amber-500/10 transition-all duration-500" />
                </div>
              </a>
            </div>

            {/* ZONE DE TEXTE ET VIDÉO */}
            <div className="relative text-center px-6 max-w-xl xl:max-w-3xl flex-1 flex flex-col items-center gap-8">
              <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full scale-125 pointer-events-none" />
              
              <p className="relative text-amber-50 font-montserrat text-[11px] xl:text-[12px] uppercase tracking-[0.25em] xl:tracking-[0.3em] leading-relaxed xl:leading-loose text-center drop-shadow-[0_0_12px_rgba(251,191,36,0.5)] transition-all duration-500 hover:text-white">
                Le système vous surveille. Keny et Béguy infiltrent la matrice pour vous libérer. Au risque de se faire
                effacer, nos éclaireurs piratent le code pour réveiller vos sens. Armez-vous du Glow-Band :
                cet artefact pirate transmute vos efforts réels en puissance interdite pour briser l'illusion.
                maîtrisez l'origami cosmique et franchissez les 11 dimensions avant d'être détectés. Mais attention : seuls
                les 100 plus vaillants obtiendront l'ultime Glow-Band Or, vestige légendaire d'une puissance absolue.
                rejoignez la résistance. Sabotez l'ombre. Devenez l'élite de Glowxome avant qu'il ne soit trop tard.
              </p>

              <div 
                onClick={() => setIsMuted(!isMuted)}
                className="w-full max-w-lg aspect-[16/9] bg-stone-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group cursor-pointer"
              >
                <video 
                  autoPlay 
                  muted={isMuted} 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover scale-[1.15] brightness-75 group-hover:brightness-100 transition-all duration-700"
                >
                  <source src="/presentation.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-[10px] text-amber-500 uppercase tracking-widest mb-1">Présentation</p>
                    <h3 className="text-lg font-bold text-white">L'Éveil de Glowxome</h3>
                  </div>
                  <a 
                    href="[https://www.youtube.com](https://www.youtube.com)"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black hover:scale-110 transition-transform duration-300"
                  >
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M8 5v14l11-7z"/></svg>
                  </a>
                </div>
              </div>

              <a 
                href="/presentation.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-full text-black font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.4)] text-center inline-block"
              >
                Devenez un Glow
              </a>
            </div>

            {/* PORTAIL KICKSTARTER DROIT */}
            <div className="flex-shrink-0 lg:mt-12">
              <a 
                href="[https://www.kickstarter.com](https://www.kickstarter.com)" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-36 h-36 xl:w-44 xl:h-44 group hover:scale-105 active:scale-95 transition-all duration-300 animate-slide-right-loop pause-on-hover block relative"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-amber-500/30 bg-[#08090a]/95 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] group-hover:border-amber-400 transition-all duration-500 flex items-center justify-center">
                  <img 
                    src="/kickstarter-right.png" 
                    alt="Kickstarter Resistance" 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent z-0 group-hover:from-amber-500/10 transition-all duration-500" />
                </div>
              </a>
            </div>

          </div>

          {/* CONFIGURATION MOBILE */}
          <div className="lg:hidden flex flex-col items-center gap-10 relative z-30">
            <p className="text-amber-50 font-montserrat text-[11px] uppercase tracking-[0.2em] leading-relaxed px-4 text-center">
              Le système vous surveille. Keny et Béguy infiltrent la matrice...
            </p>
            <div onClick={() => setIsMuted(!isMuted)} className="w-full max-w-sm aspect-[16/9] bg-stone-900 rounded-3xl overflow-hidden border border-white/5 relative cursor-pointer px-4">
              <video autoPlay muted={isMuted} loop playsInline className="w-full h-full object-cover scale-[1.15] brightness-75">
                <source src="/presentation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION HÉROS */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-20 pb-12">
        
        {/* KENY */}
        <div className="flex flex-col items-center group order-2 lg:order-1 pt-12 lg:pt-0 lg:-mt-56">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full scale-150 animate-pulse" />
            <img src="/keny.png" alt="Keny" className="w-80 transition-transform duration-700 group-hover:scale-105 relative z-10 drop-shadow-[0_20px_50px_rgba(45,212,191,0.3)]" />
          </div>
          <h2 className="text-3xl font-bold tracking-widest text-teal-400 mb-2">KENY</h2>
          <p className="text-[10px] text-teal-200/40 uppercase tracking-[0.4em] mb-6">Gardien de l'Équilibre</p>
          <p className="text-xs text-stone-500 text-center max-w-xs leading-relaxed">
            Keny est le premier né de la lignée des Veilleurs. Porteur du fragment d'azur, il maîtrise les flux cinétiques et la géométrie sacrée.
          </p>
        </div>

        {/* COLONNE CENTRALE */}
        <div className="flex flex-col items-center gap-12 order-1 lg:order-2 lg:-mt-20">
          <div className="w-full max-w-sm flex flex-col items-center gap-4 group">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentTab('glow-band'); }}
              className="relative block cursor-pointer group-hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full" />
              <img src="/bracelet.png" alt="Glow-Band" className="w-full h-auto relative z-10 mix-blend-screen drop-shadow-[0_0_40px_rgba(245,158,11,0.5)] animate-float"/>
            </a>
            <div className="text-center">
              <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] mb-1">Relique Millénaire</p>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentTab('glow-band'); }}
                className="hover:text-amber-400 transition-colors inline-block text-xl font-bold tracking-widest"
              >
                GLOW-BAND
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 group w-[280px]">
            <div className="w-[280px] h-[500px] bg-stone-900 rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-2xl relative cursor-pointer">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000">
                <source src="/origami.mp4" type="video/mp4" />
              </video>
            </div>
            <a 
              href="/origami.mp4"
              target="_blank"
              className="px-6 py-2.5 bg-black/40 backdrop-blur-md border border-amber-500/30 text-amber-500 text-[10px] uppercase tracking-widest rounded-full hover:bg-amber-500 hover:text-black transition-all duration-500 text-center"
            >
              Explorer nos glow-Origamis
            </a>
          </div>
        </div>

        {/* BÉGUY */}
        <div className="flex flex-col items-center group order-3 pt-12 lg:pt-0 lg:-mt-56">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full scale-150 animate-pulse" />
            <img src="/beguy.png" alt="Béguy" className="w-80 transition-transform duration-700 group-hover:scale-105 relative z-10 drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]" />
          </div>
          <h2 className="text-3xl font-bold tracking-widest text-purple-400 mb-2">BÉGUY</h2>
          <p className="text-[10px] text-purple-200/40 uppercase tracking-[0.4em] mb-6">Oracle du Flux</p>
          <p className="text-xs text-stone-500 text-center max-w-xs leading-relaxed">
            Béguy perçoit les vibrations des onze dimensions avant même qu'elles ne se manifestent. Sa maîtrise de l'Oracle du Flux lui permet de manipuler les brèches temporelles.
          </p>
        </div>

      </section>

      {/* SECTION DIMENSIONS */}
      <section className="pt-4 pb-24 bg-gradient-to-b from-transparent via-stone-900/20 to-transparent relative overflow-hidden">
        <div className="relative w-full mb-16">
          <div className="flex gap-10 animate-scroll w-[200%] hover:pause text-center">
            {[...dimensionsData, ...dimensionsData].map((dim, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentTab(`dimension-${dim.id}`)}
                className="min-w-[150px] h-[150px] rounded-3xl border border-white/10 bg-[#08090a] flex items-center justify-center group relative overflow-hidden transition-all duration-500 hover:border-amber-500/40 shadow-[0_0_15px_rgba(217,176,92,0.1)] cursor-pointer"
              >
                <div className="absolute -bottom-10 w-24 h-24 bg-amber-500/0 blur-[60px] rounded-full group-hover:bg-amber-500/50 transition-all duration-700 pointer-events-none z-0" />
                <img 
                    src={dim.src} 
                    alt={dim.desc} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 z-10 scale-100 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="relative z-20 flex flex-col items-center transition-transform duration-500 group-hover:scale-110">
                    <span className="text-[10px] text-white/40 group-hover:text-amber-400 font-cinzel mb-1 tracking-widest uppercase">Dim</span>
                    <span className="text-4xl font-cinzel text-white/20 group-hover:text-amber-500">{dim.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-stone-600 text-[10px] uppercase tracking-[0.6em] font-bold mb-2">ᚱ L’éveil se merite ᛗ</p>
            <h2 className="font-cinzel text-amber-500/50 text-xl tracking-[0.3em] uppercase">Les 11 Dimensions de GlowXome</h2>
        </div>
      </section>
    </>
  );
}