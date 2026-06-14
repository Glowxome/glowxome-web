"use client";
import React, { useState } from 'react';

interface CommunViewProps {
  onBack: () => void;
}

// ── DONNÉES COMPLÈTES ──────────────────────────────────────────────────────
const chatMessages = [
  { id: 1, avatar: "⚔️", pseudo: "EclaireurNox", dim: "Oris", time: "2 min", text: "Jour 7 consécutif dans Oris 🔥 Karéon commence vraiment à faiblir dans ma zone", eclats: 14 },
  { id: 2, avatar: "🌿", pseudo: "Lumiara", dim: "Terra", time: "5 min", text: "Astuce Terra : faire la mission dehors juste après l'école change tout. Le Glow-Band brille direct !", eclats: 31 },
  { id: 3, avatar: "🔮", pseudo: "VortexSage", dim: "Harmoniae", time: "9 min", text: "Quelqu'un a débloqué la Confrontation Finale de Harmoniae ? C'est légendaire…", eclats: 8 },
  { id: 4, avatar: "⚡", pseudo: "KrystaLux", dim: "Ignis", time: "12 min", text: "Le Fleuve de Vie dans Oris + Ignis en combo = mon bracelet est ORANGE depuis 3 jours", eclats: 47 },
  { id: 5, avatar: "🌙", pseudo: "OmbraFlex", dim: "Spiritus", time: "18 min", text: "Béguy a transmis un nouveau fragment de lore ce matin. La Voûte Étoilée cache quelque chose…", eclats: 22 },
  { id: 6, avatar: "💎", pseudo: "CristalMere", dim: "Oris", time: "31 min", text: "Mon fils vient de terminer sa 5ème mission d'Oris. La Confrontation Finale se débloque demain 🙌", eclats: 89 },
];

const news = [
  { from: "Béguy", fromColor: "text-purple-400", tag: "NOUVEAUTÉ", tagStyle: "bg-purple-500/10 text-purple-400 border-purple-500/20", title: "La Dimension Rectae s'éveille", text: "Éclaireurs, les Tours de Rectae ont été détectées. Confusior le Tordu mobilise ses Parasites du Flux. Les missions de la Dimension VI arrivent dans 3 jours." },
  { from: "Keny", fromColor: "text-teal-400", tag: "ÉVÉNEMENT", tagStyle: "bg-teal-500/10 text-teal-400 border-teal-500/20", title: "Les 100 Glow-Bands Or — La Course est lancée", text: "Seuls les 100 Éclaireurs les plus vaillants obtiendront le Glow-Band Or légendaire. Le classement est mis à jour en temps réel." },
  { from: "Béguy", fromColor: "text-purple-400", tag: "MISE À JOUR", tagStyle: "bg-amber-500/10 text-amber-600 border-amber-500/20", title: "Nouveau : les Éclats de Communauté", text: "Quand ta communauté valide ta mission, le Glow-Band reçoit un Éclat de Communauté. Plus puissant. Plus lumineux. Plus durable." },
];

const legends = [
  { avatar: "⚔️", pseudo: "EclaireurNox", badge: "Éclaireur d'Élite", dims: ["Oris", "Ignis", "Terra"], eclats: 4820 },
  { avatar: "💎", pseudo: "CristalMere", badge: "Gardienne du Nexus", dims: ["Oris", "Nexus", "Terra"], eclats: 3210 },
  { avatar: "🌿", pseudo: "Lumiara", badge: "Tisseuse de Terra", dims: ["Terra", "Aqua", "Spiritus"], eclats: 2980 },
  { avatar: "⚡", pseudo: "KrystaLux", badge: "Flamme d'Ignis", dims: ["Ignis", "Oris"], eclats: 1750 },
];

const tips = [
  { avatar: "🏔️", pseudo: "TerraKen", dim: "Terra · Dim V", eclats: 56, tip: "Faire la mission 'Arbre Gardien' au lever du soleil débloque un bonus caché de +200 éclats. Le Glow-Band confirme avec 3 vibrations dorées." },
  { avatar: "⚡", pseudo: "KrystaLux", dim: "Ignis · Dim II", eclats: 47, tip: "Combiner les missions Ignis et Oris le même jour crée un effet de synergie. Mon bracelet est passé orange en 48h." },
  { avatar: "🌿", pseudo: "Lumiara", dim: "Terra · Dim V", eclats: 31, tip: "Sortir 15 min sans téléphone et observer 3 choses vivantes compte comme mission complète." },
  { avatar: "🌙", pseudo: "OmbraFlex", dim: "Harmoniae · Dim X", eclats: 22, tip: "10 min de silence total avant de dormir + mission Harmoniae du soir = Glow-Band en mode étoile le lendemain." },
  { avatar: "🏔️", pseudo: "TerraKen", dim: "Terra · Dim V", eclats: 56, tip: "Faire la mission 'Arbre Gardien' au lever du soleil débloque un bonus caché de +200 éclats." },
  { avatar: "⚡", pseudo: "KrystaLux", dim: "Ignis · Dim II", eclats: 47, tip: "Combiner les missions Ignis et Oris le même jour crée un effet de synergie." },
];

export default function CommunauteView({ onBack }: CommunauteViewProps) {
  const [likedMessages, setLikedMessages] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const toggleLike = (id: number) => {
    setLikedMessages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getHallOfFameDisplay = () => {
    const list = [...legends];
    for (let i = list.length + 1; i <= 11; i++) {
      list.push({ avatar: "·", pseudo: "Place à prendre", badge: "En attente...", dims: [], eclats: 0 });
    }
    return list;
  };

  return (
    <div className="min-h-screen bg-[#08070A] text-[#E8E2D4] font-sans flex flex-col w-full">
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* HERO */}
        <header className="py-20 text-center">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#92400e] animate-[pulse_4s_ease-in-out_infinite]" style={{ filter: "drop-shadow(0 0 30px rgba(251,191,36,0.3))" }}>
                Les Glows
            </h1>
            <p className="text-[#8A6C2A] uppercase tracking-[0.4em] text-[0.8rem] mb-10">LA PLACE DES ÉCLAIREURS</p>
        </header>

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          <div className="xl:col-span-2 flex flex-col gap-10">
            
            {/* TRANSMISSIONS */}
            <section>
              <h2 className="text-[#D4A847] font-serif text-xl text-center uppercase tracking-widest mb-6">Transmissions de Keny & Béguy</h2>
              <div className="flex flex-col gap-4">
                {news.map((n, i) => (
                  <article key={i} className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className={`font-bold ${n.fromColor}`}>{n.from}</span>
                      <span className={`text-[9px] px-2 py-1 rounded-full border uppercase ${n.tagStyle}`}>{n.tag}</span>
                    </div>
                    <h3 className="text-sm font-bold mb-2">{n.title}</h3>
                    <p className="text-xs text-stone-500">{n.text}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* TCHAT */}
            <section>
              <h2 className="text-[#D4A847] font-serif text-xl text-center uppercase tracking-widest mb-6">Le Tchat des Glows</h2>
              <div className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl overflow-hidden">
                <div className="h-[400px] overflow-y-auto p-5 flex flex-col gap-4">
                  {chatMessages.map((m) => (
                    <div key={m.id} className="flex gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-lg">{m.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1"><span className="text-[11px] font-semibold">{m.pseudo}</span><span className="text-[9px] px-2 rounded-full bg-amber-500/10 text-[#8A6C2A]">{m.dim}</span></div>
                        <p className="text-xs text-stone-400">{m.text}</p>
                      </div>
                      <button onClick={() => toggleLike(m.id)} className="text-[10px] px-2 border border-white/10 rounded">◆ {likedMessages.includes(m.id) ? m.eclats + 1 : m.eclats}</button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* ASTUCES (3 COLONNES) */}
            <section>
                <h2 className="text-[#D4A847] font-serif text-xl text-center uppercase tracking-widest mb-6">ASTUCES DES ÉCLAIREURS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tips.map((t, i) => (
                        <article key={i} className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl p-5">
                             <div className="flex items-center gap-2 mb-2"><span>{t.avatar}</span><span className="text-[10px] text-[#8A6C2A]">{t.pseudo}</span></div>
                             <p className="text-xs text-stone-500">{t.tip}</p>
                        </article>
                    ))}
                </div>
            </section>
          </div>

          {/* COLONNE DROITE */}
          <aside className="flex flex-col gap-8">
            <section>
              <h2 className="text-[#D4A847] font-serif text-xl uppercase tracking-widest mb-5">Hall of Fame</h2>
              <div className="flex flex-col gap-3">
                {getHallOfFameDisplay().map((l, i) => (
                  <div key={i} className={`flex items-center gap-3 p-4 bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl ${l.eclats === 0 ? 'opacity-40' : ''}`}>
                    <span className="font-serif text-xs text-[#7A7268] w-4">{i + 1}</span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-lg">{l.avatar}</div>
                    <div className="flex-1"><p className="text-xs font-bold truncate">{l.pseudo}</p></div>
                    {l.eclats > 0 && <p className="text-[#D4A847] font-bold">{l.eclats}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* GLOW-BAND OR */}
            <section className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl p-6">
                <p className="text-[11px] font-semibold text-[#D4A847] mb-2">Glow-Band Or · Vestige Légendaire</p>
                <p className="text-xs text-stone-500 mb-4">Seuls les 100 Éclaireurs les plus vaillants obtiendront le Glow-Band Or. Chaque mission, chaque éclat compte.</p>
                <div className="h-1 bg-white/4 rounded-full overflow-hidden mb-4"><div className="h-full w-[23%] rounded-full bg-[#D4A847]" /></div>
                <button className="w-full py-2 border border-[#D4A847]/25 text-[#D4A847] text-[10px] uppercase rounded-full">Rejoindre la course</button>
            </section>

            {/* NEWSLETTER */}
            <section className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl p-6">
              <h3 className="text-sm text-[#E8E2D4] mb-2">Recevoir les transmissions</h3>
              {!newsletterSent ? (
                <div className="flex flex-col gap-2">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@signal.com" className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs" />
                  <button onClick={() => email && setNewsletterSent(true)} className="py-2 border border-purple-500/20 text-purple-400 text-[10px] uppercase rounded-full">Intercepter</button>
                </div>
              ) : <p className="text-purple-400 text-xs">Signal reçu ✦</p>}
            </section>

            {/* TEASER MEMBRES */}
            <section className="bg-[#0E0C12] border border-[#D4A847]/10 rounded-xl p-6 cursor-pointer" onClick={onBack}>
              <h3 className="text-sm text-[#E8E2D4] mb-2">Espace membres</h3>
              <p className="text-xs text-stone-500">Accède à tes missions, ta communauté et ton Glow-Band.</p>
            </section>
          </aside>
        </div>

        {/* BOUTONS BAS DE PAGE */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 border-t border-white/5 mt-12">
            <button className="px-8 py-3.5 bg-amber-500 text-black font-bold uppercase text-xs rounded-full hover:bg-amber-400 transition-all tracking-widest">REJOINDRE LA RÉSISTANCE</button>
            <button onClick={onBack} className="px-8 py-3.5 border border-white/10 text-white uppercase text-xs rounded-full hover:border-white/20 transition-all tracking-widest">RETOURNER À L'ÉVEIL</button>
        </div>
      </main>
    </div>
  );
}