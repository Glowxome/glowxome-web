"use client";
import React, { useState, useRef } from 'react';
 
interface OrigamiModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  downloadLink: string;
  unfoldedImage: string;
  foldedImage: string;
  extraPreview?: string;
  paperSpecs: string;
  foldingGuide: string;
  successConditions: string;
  scenarios: {
    perfect: { score: number; status: string; flux: number; occlusion: string; alignment: string; comment: string; };
    misaligned: { score: number; status: string; flux: number; occlusion: string; alignment: string; comment: string; };
    failed: { score: number; status: string; flux: number; occlusion: string; alignment: string; comment: string; };
  };
}
 
interface OrigamiViewProps {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  isSynchronizing: boolean;
  syncComplete: boolean;
}
 
export default function OrigamiView({ setCurrentTab, isSynchronizing, syncComplete }: OrigamiViewProps) {
  const origamiModels: OrigamiModel[] = [
    {
      id: "carie-challenger",
      title: "La Dent Saine vs Le Roi Carie",
      subtitle: "LE RITUEL DE PURIFICATION SÉCURISÉ",
      description: "Infiltrez les illusions du sucre. Coloriez le Roi Carie, ses sucreries dévorantes et ses gâteaux. Par la géométrie sacrée du pliage, scellez définitivement les monstres dans l'oubli pour faire triompher l'éclat de la dent saine. L'avion final ne laisse s'envoler que la pureté.",
      downloadLink: "Glow-Origami_Presentation_By_GlowXome.pdf",
      unfoldedImage: "WhatsApp Image 2026-05-31 at 10.34.50.jpeg",
      foldedImage: "WhatsApp Image 2026-05-31 at 10.34.50 (1).jpeg",
      paperSpecs: "Pour ce rituel de purification, utilisez un papier standard A4 de grammage classique (80g - 90g/m²). Une finition mate et non satinée est fortement recommandée pour assurer une pénétration optimale des couleurs de feutres sans bavures. Veillez à imprimer sans marge pour préserver la symétrie géométrique des ailes de l'avion.",
      foldingGuide: "Étape 1 : Coloriez avec ferveur les zones corrompues contenant le Roi Carie et les sucreries sur la face inférieure de la feuille. Étape 2 : Marquez rigoureusement les lignes de force imprimées en noir. Étape 3 : Assemblez les ailes de l'avion en rabattant la pointe centrale. Si vos gestes sont précis, le Roi Carie sera entièrement scellé dans la pliure interne, révélant la seule dent saine sur le dessus de l'appareil.",
      successConditions: "Pour réussir cette transition dimensionnelle, le Roi Carie et ses friandises doivent être dissimulés à 100% dans la structure de l'avion. De plus, les deux segments du mot 'Glow-ome' et les lignes runiques sur les ailes gauche et droite doivent s'aligner de manière fluide (écart toléré inférieur à 1 mm).",
      scenarios: {
        perfect: {
          score: 100, status: "PURIFICATION SANS FAILLE", flux: 150,
          occlusion: "100% Occulté (Le Roi Carie est emprisonné dans l'oubli)",
          alignment: "Parfait (Écart < 0.5mm sur les runes et le mot 'Glow-ome')",
          comment: "L'illusion est dissipée ! Le Roi Carie est totalement emprisonné sous l'aile et la dent saine s'envole en toute liberté. Keny et Béguy ont capté votre signature énergétique !"
        },
        misaligned: {
          score: 60, status: "DÉCALAGE DÉTECTÉ", flux: 45,
          occlusion: "80% Occulté (Le Roi Carie dépasse légèrement sur le bord de l'aile droite)",
          alignment: "Décalage de 3mm (Le mot 'Glow-ome' est asymétrique au pliage)",
          comment: "Vos plis manquent de précision géométrique. Le Roi Carie tente de s'échapper par le décalage de l'aile. Marquez mieux vos plis centraux et réessayez !"
        },
        failed: {
          score: 25, status: "BRÈCHE DE CORRUPTION", flux: 10,
          occlusion: "Non-occulté (La carie corrompt encore la dent saine de l'avion)",
          alignment: "Désalignement majeur (Runes brisées, symétrie non respectée)",
          comment: "La matrice est compromise ! L'illusion du sucre est visible à l'extérieur de l'appareil. Relisez attentivement le codex de pliage avant de relancer le flux."
        }
      }
    },
    {
      id: "flux-sorter",
      title: "La Gestion Sacrée de la Matière",
      subtitle: "LE CONTRÔLE DES FLUX ET RESSOURCES",
      description: "Le tri des flux physiques est le premier pilier de la résistance. Avant pliage, le désordre règne à travers les déchets technologiques et les énergies instables. En façonnant votre vaisseau de papier, remettez chaque élément à sa place.",
      downloadLink: "Glow-Origami_Presentation_By_GlowXome.pdf",
      unfoldedImage: "1766482368228.jpg",
      foldedImage: "1766482358025.jpg",
      extraPreview: "1766482348856.jpg",
      paperSpecs: "Un papier recyclé éco-conçu de 80g/m² est idéal pour cette expérience d'alchimie environnementale. Évitez tout ajout de colle ou de ciseaux afin de préserver l'intégrité de la matière recyclable de la résistance.",
      foldingGuide: "Étape 1 : Coloriez les globes terrestres, l'arche lumineuse et les bacs de tri universels. Étape 2 : Repliez les ailes vers l'intérieur pour isoler l'anomalie de tri (représentée par la poubelle barrée). Étape 3 : Verrouillez le pli de nez de l'avion pour sceller le tri adéquat de la matière et stabiliser l'aérodynamisme du signal.",
      successConditions: "L'erreur de tri centrale doit être complètement invisible une fois l'avion plié de face. Les matières de chaque bac (Papier, Organique, Technologie) doivent être rigoureusement ordonnées et l'arche supérieure d'or doit former un arc symétrique parfait.",
      scenarios: {
        perfect: {
          score: 100, status: "GESTION DE LA MATIÈRE ACQUISE", flux: 150,
          occlusion: "100% Correct (L'erreur de tri est totalement invisible)",
          alignment: "Symétrie absolue de l'arche dorée et du mot 'Glow-ome'",
          comment: "Félicitations Éclaireur ! Le geste citoyen est parfaitement exécuté. La matière est prête pour le recyclage. Vous gagnez les points d'impact !"
        },
        misaligned: {
          score: 65, status: "ASYMÉTRIE DES FLUX", flux: 50,
          occlusion: "80% Correct (La poubelle barrée dépasse légèrement de la pliure centrale)",
          alignment: "Décalage de 4mm (Les deux côtés de l'arche ne se joignent pas)",
          comment: "L'arche de pouvoir est désalignée et l'erreur de tri n'est pas complètement masquée. Ajustez le pli de symétrie centrale pour équilibrer la matière."
        },
        failed: {
          score: 30, status: "CHAOS DE LA MATIÈRE", flux: 10,
          occlusion: "Échec de tri (La poubelle barrée est visible de face sur l'aile)",
          alignment: "Pas d'arche formée (Pliage asymétrique ou inversé)",
          comment: "Alerte ! Le tri a échoué, les flux d'énergie sont mélangés. Reprenez le diagramme de pliage de Béguy pour purifier le flux."
        }
      }
    }
  ];
 
  const [selectedOrigamiId, setSelectedOrigamiId] = useState<string>("carie-challenger");
  const [selectedScenario, setSelectedScenario] = useState<'perfect' | 'misaligned' | 'failed'>('perfect');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showCameraModal, setShowCameraModal] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
 
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
 
  const activeOrigami = origamiModels.find(m => m.id === selectedOrigamiId) || origamiModels[0];
 
  const handleScanAction = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      const s = activeOrigami.scenarios[selectedScenario];
      setScanResult({ score: s.score, status: s.status, fluxAwarded: s.flux, details: { occlusion: s.occlusion, alignment: s.alignment }, comment: s.comment });
    }, 2800);
  };
 
  const handleFileUpload = () => fileInputRef.current?.click();
 
  const handleOpenCamera = async () => {
    setCameraError(null);
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) { cameraInputRef.current?.click(); return; }
    if (!navigator.mediaDevices?.getUserMedia) { setCameraError("Votre navigateur ne supporte pas l'accès à la caméra."); return; }
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } });
      setStream(mediaStream);
      setShowCameraModal(true);
      setTimeout(() => { if (videoRef.current) { videoRef.current.srcObject = mediaStream; videoRef.current.play(); } }, 150);
    } catch (err: any) {
      if (err.name === 'NotAllowedError') setCameraError("Permission caméra refusée. Autorisez l'accès dans les paramètres du navigateur.");
      else if (err.name === 'NotFoundError') setCameraError("Aucune caméra détectée sur cet appareil.");
      else setCameraError("Impossible d'accéder à la caméra. Vérifiez que la page est en HTTPS.");
    }
  };
 
  const handleCapturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 1280;
    canvas.height = videoRef.current.videoHeight || 720;
    canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setUploadedImage(canvas.toDataURL('image/jpeg', 0.92));
    stopCamera();
  };
 
  const stopCamera = () => {
    stream?.getTracks().forEach(t => t.stop());
    setStream(null);
    setShowCameraModal(false);
  };
 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setUploadedImage(ev.target?.result as string);
    reader.readAsDataURL(file);
    e.target.value = '';
  };
 
  return (
    <>
      {/* ─── Global responsive styles ─── */}
      <style dangerouslySetInnerHTML={{ __html: `
        html, body, #__next, .preview-root {
          background-color: #020406 !important;
          color: #e2e8f0 !important;
        }
 
        /* Fluid typography : clamp(min, preferred, max) */
        .title-fluid       { font-size: clamp(2rem, 8vw, 9rem); }
        .subtitle-fluid    { font-size: clamp(0.6rem, 1.2vw, 0.875rem); letter-spacing: clamp(0.3em, 1vw, 1em); }
        .label-fluid       { font-size: clamp(0.55rem, 0.9vw, 0.7rem); }
        .body-fluid        { font-size: clamp(0.7rem, 1vw, 0.875rem); }
        .caption-fluid     { font-size: clamp(0.55rem, 0.8vw, 0.7rem); }
        .heading-fluid     { font-size: clamp(0.75rem, 1.2vw, 1rem); }
        .scan-heading-fluid{ font-size: clamp(0.85rem, 1.5vw, 1.25rem); }
        .result-flux-fluid { font-size: clamp(0.85rem, 1.3vw, 1rem); }
 
        /* Card heights adapt to viewport */
        .preview-card      { height: clamp(280px, 45vw, 500px); }
 
        /* Scan zone aspect ratio preserved on all screens */
        .scan-zone         { aspect-ratio: 4/3; min-height: 160px; max-height: 420px; }
 
        /* TV / large screens (≥1920px) */
        @media (min-width: 1920px) {
          .title-fluid       { font-size: clamp(7rem, 6vw, 11rem); }
          .subtitle-fluid    { font-size: 1.05rem; letter-spacing: 1.2em; }
          .body-fluid        { font-size: 1rem; }
          .caption-fluid     { font-size: 0.8rem; }
          .heading-fluid     { font-size: 1.1rem; }
          .scan-heading-fluid{ font-size: 1.6rem; }
          .result-flux-fluid { font-size: 1.2rem; }
          .preview-card      { height: clamp(480px, 32vw, 700px); }
          .scan-zone         { max-height: 560px; }
          .max-w-tv          { max-width: 1600px; }
        }
 
        /* Tablet portrait (640–1023px) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .preview-card { height: clamp(300px, 50vw, 420px); }
          .scan-zone    { max-height: 340px; }
        }
 
        /* Phone (< 640px) */
        @media (max-width: 639px) {
          .preview-card       { height: clamp(240px, 70vw, 320px); }
          .scan-zone          { max-height: 260px; }
          .scenario-btn-text  { font-size: 0.65rem; }
          .scan-result-row    { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
        }
      `}} />
 
      <section className="
        pt-16 sm:pt-24 md:pt-32
        pb-12 sm:pb-20 md:pb-24
        px-4 sm:px-6 md:px-8 lg:px-10
        mx-auto w-full
        max-w-[90rem] max-w-tv
        relative z-10
        text-stone-200 font-montserrat
      ">
        <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full scale-75 pointer-events-none -z-10" />
 
        {/* ── TITRE ── */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1 className="
            title-fluid font-bold tracking-[0.12em] sm:tracking-[0.15em] mb-3 sm:mb-4
            bg-gradient-to-b from-amber-200 via-amber-500 to-amber-900
            bg-clip-text text-transparent
            drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]
            font-cinzel uppercase animate-pulse
          ">
            GLOW-ORIGAMIS
          </h1>
          <p className="subtitle-fluid text-amber-700/60 font-montserrat uppercase mb-8 sm:mb-12 px-4">
            PLIER LA LUMIÈRE POUR RÉVÉLER LA VÉRITÉ
          </p>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mx-auto" />
        </div>
 
        {/* ── SÉLECTEUR ── */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-10 sm:mb-14 md:mb-16 text-center">
          <label className="label-fluid text-amber-500/60 font-mono uppercase tracking-[0.3em] block mb-2 sm:mb-3">
            CHAMP DE TRANSFORMATION DIMENSIONNEL :
          </label>
          <div className="relative">
            <select
              value={selectedOrigamiId}
              onChange={e => { setSelectedOrigamiId(e.target.value); setScanResult(null); setUploadedImage(null); setCameraError(null); }}
              className="
                w-full bg-[#08090a] border border-amber-500/30 hover:border-amber-500/60
                text-amber-100 py-3 sm:py-4 px-5 sm:px-6
                rounded-xl font-cinzel tracking-wider uppercase
                outline-none transition-all duration-300 appearance-none cursor-pointer
                focus:ring-1 focus:ring-amber-500/50
                body-fluid
              "
            >
              {origamiModels.map(model => (
                <option key={model.id} value={model.id} className="bg-black text-stone-200">{model.title}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber-500">
              <svg className="fill-current h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
 
        {/* ── SPECS + GUIDE ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-14 md:mb-16 max-w-5xl 2xl:max-w-6xl mx-auto">
          {[
            { tag: "[ TEXTURE_ET_STRUCTURE_PHYSIQUE ]", tagColor: "text-teal-400", glowColor: "bg-amber-500/5", title: "Les Spécifications du Support", content: activeOrigami.paperSpecs },
            { tag: "[ RITUEL_DE_MANIPULATION_TRIDIMENSIONNELLE ]", tagColor: "text-purple-400", glowColor: "bg-purple-500/5", title: "Description du Processus de Pliage", content: activeOrigami.foldingGuide }
          ].map((card, i) => (
            <div key={i} className="border border-white/5 bg-[#08090a]/60 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative">
              <div className={`absolute -bottom-10 right-0 w-20 h-20 sm:w-24 sm:h-24 ${card.glowColor} blur-[50px] rounded-full pointer-events-none`} />
              <span className={`${card.tagColor} font-mono label-fluid block mb-2`}>{card.tag}</span>
              <h3 className="heading-fluid font-bold text-white uppercase tracking-widest mb-3 sm:mb-4 font-cinzel">{card.title}</h3>
              <p className="body-fluid text-stone-400 leading-relaxed font-light font-montserrat uppercase tracking-wide" key={activeOrigami.id}>{card.content}</p>
            </div>
          ))}
        </div>
 
        {/* ── IMAGES DÉPLIÉ / PLIÉ ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl 2xl:max-w-6xl mx-auto mb-14 sm:mb-20">
          {/* Carte 1 : Patron déplié */}
          <div className="border border-white/10 bg-[#08090a]/95 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col justify-between preview-card shadow-2xl">
            <div className="caption-fluid font-mono text-stone-600 uppercase tracking-widest mb-2">
              1. PATRON D'ÉVEIL (ÉTAT DÉPLIÉ)
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden py-2">
              <img
                key={activeOrigami.unfoldedImage}
                src={`/${activeOrigami.unfoldedImage}`}
                alt="Patron déplié"
                className="max-h-full max-w-full object-contain rounded-xl border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-105"
                onError={e => { e.currentTarget.src = "https://placehold.co/400x300/020406/f59e0b?text=PATRON+INDISPONIBLE"; }}
              />
            </div>
            <div className="border-t border-white/5 pt-3 sm:pt-4 mt-3 sm:mt-4">
              <h4 className="caption-fluid text-white font-bold uppercase tracking-wider mb-1 font-cinzel">Aperçu du Patron de Coloriage</h4>
              <p className="caption-fluid text-stone-500 uppercase tracking-wide leading-relaxed">
                Fichier : {activeOrigami.unfoldedImage}. Contient la structure et les marques de géométrie nécessaires au décodage.
              </p>
            </div>
          </div>
 
          {/* Carte 2 : Artéfact plié */}
          <div className="border border-white/10 bg-[#08090a]/95 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden flex flex-col justify-between preview-card shadow-2xl">
            <div className="caption-fluid font-mono text-stone-600 uppercase tracking-widest mb-2">
              2. ARTÉFACT PURIFIÉ (RÉSULTAT PLIÉ)
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 sm:gap-4 overflow-hidden py-2">
              {activeOrigami.extraPreview ? (
                <div className="flex gap-3 sm:gap-4 items-center justify-center w-full h-full">
                  <img
                    key={`extra-${activeOrigami.extraPreview}`}
                    src={`/${activeOrigami.extraPreview}`}
                    alt="Étape intermédiaire"
                    className="max-h-full w-1/2 object-contain rounded-xl border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105"
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <img
                    key={`folded-${activeOrigami.foldedImage}`}
                    src={`/${activeOrigami.foldedImage}`}
                    alt="Vaisseau fini"
                    className="max-h-full w-1/2 object-contain rounded-xl border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105"
                    onError={e => { e.currentTarget.src = "https://placehold.co/200x300/020406/f59e0b?text=REVELATION"; }}
                  />
                </div>
              ) : (
                <img
                  key={`folded-${activeOrigami.foldedImage}`}
                  src={`/${activeOrigami.foldedImage}`}
                  alt="Vaisseau fini"
                  className="max-h-full max-w-full object-contain rounded-xl border border-white/5 shadow-2xl transition-transform duration-700 hover:scale-105"
                  onError={e => { e.currentTarget.src = "https://placehold.co/400x300/020406/f59e0b?text=REVELATION"; }}
                />
              )}
            </div>
            <div className="border-t border-white/5 pt-3 sm:pt-4 mt-3 sm:mt-4">
              <h4 className="caption-fluid text-amber-500 font-bold uppercase tracking-wider mb-1 font-cinzel">Le Vaisseau sous son Alignement Final</h4>
              <p className="caption-fluid text-stone-500 uppercase tracking-wide leading-relaxed">
                Fichier : {activeOrigami.foldedImage}. Une fois les ailerons pliés avec soin, l'équilibre est restauré.
              </p>
            </div>
          </div>
        </div>
 
        {/* ── TÉLÉCHARGEMENT ── */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-20 text-center">
          <a
            href={`/${activeOrigami.downloadLink}`}
            download
            className="
              inline-block px-7 sm:px-10 py-3.5 sm:py-4
              bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700
              rounded-full text-black font-extrabold uppercase
              tracking-[0.15em] sm:tracking-[0.2em]
              body-fluid
              hover:scale-105 transition-all duration-500
              shadow-[0_0_30px_rgba(245,158,11,0.4)] border border-amber-400
            "
          >
            Télécharger le Patron d'épreuve (PDF)
          </a>
          <p className="caption-fluid text-stone-600 uppercase tracking-widest mt-2 font-mono">Fichier associé : {activeOrigami.downloadLink}</p>
        </div>
 
        {/* ── CONDITIONS DE RÉUSSITE ── */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto mb-12 sm:mb-20 border border-purple-500/10 bg-purple-500/5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative">
          <span className="label-fluid text-purple-400 font-mono block mb-2">[ CRITÈRES_D_ALIGNEMENT_CRUCIAUX ]</span>
          <h3 className="heading-fluid font-bold text-white uppercase tracking-widest mb-3 sm:mb-4 font-cinzel">Conditions de Réussite du Défi</h3>
          <p className="body-fluid text-stone-400 leading-relaxed font-light font-montserrat uppercase tracking-wide">{activeOrigami.successConditions}</p>
        </div>
 
        {/* ── CAPTEUR OPTIQUE ── */}
        <div className="border border-amber-500/20 bg-black/90 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-left relative overflow-hidden max-w-5xl 2xl:max-w-6xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />
 
          {/* Inputs cachés */}
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" />
 
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-stretch">
 
            {/* ── Zone caméra / upload ── */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 flex flex-col">
              <h3 className="scan-heading-fluid font-bold text-white uppercase tracking-[0.15em] sm:tracking-[0.2em] font-cinzel border-l-2 border-amber-500 pl-3 sm:pl-4">
                CAPTEUR OPTIQUE DE LA RÉSISTANCE
              </h3>
              <p className="body-fluid text-stone-400 uppercase tracking-wider leading-relaxed">
                Une fois votre pliage d'avion achevé, chargez ou prenez une photo de face. Notre algorithme analysera la fermeture de la pliure pour valider l'occlusion des anomalies ou l'exact alignement des lettrages et runes.
              </p>
 
              {/* Zone d'affichage */}
              <div className="
                border border-dashed border-white/10 bg-stone-900/40
                rounded-2xl sm:rounded-3xl scan-zone
                flex flex-col items-center justify-center
                p-4 sm:p-6 text-center relative overflow-hidden flex-1
              ">
                {/* Overlay scanning */}
                {isScanning && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm">
                    <div className="w-full h-0.5 sm:h-1 bg-amber-500 absolute top-0 left-0 animate-bounce shadow-[0_0_20px_#f59e0b]" />
                    <span className="body-fluid text-amber-500 font-mono tracking-[0.3em] sm:tracking-[0.4em] animate-pulse">ANALYZING GEOMETRIC SIGNATURE...</span>
                    <p className="caption-fluid text-stone-500 uppercase mt-2">Vérification de l'occlusion d'ombre</p>
                  </div>
                )}
 
                {uploadedImage ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img src={uploadedImage} alt="Origami chargé" className="max-h-full max-w-full rounded-xl sm:rounded-2xl object-contain border border-amber-500/30" />
                    <button
                      onClick={() => { setUploadedImage(null); setScanResult(null); }}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-black border border-white/10 rounded-full caption-fluid text-red-400 uppercase font-mono font-bold hover:bg-red-500 hover:text-black transition-colors"
                    >
                      Effacer
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4 w-full flex flex-col items-center">
                    <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-stone-700" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
 
                    {cameraError && (
                      <p className="caption-fluid text-red-400 font-mono uppercase tracking-wider px-2 text-center">{cameraError}</p>
                    )}
 
                    <div className="flex flex-col gap-2 sm:gap-3 items-center w-full max-w-xs">
                      <button
                        onClick={handleOpenCamera}
                        className="
                          w-full px-4 sm:px-6 py-2.5 sm:py-3
                          bg-[#08090a] border border-amber-500/30 rounded-full
                          caption-fluid text-amber-300 uppercase font-bold
                          hover:bg-stone-800 hover:border-amber-500/60 transition-all
                          font-montserrat flex items-center justify-center gap-2
                        "
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                        Prendre une photo (Caméra)
                      </button>
                      <button
                        onClick={handleFileUpload}
                        className="
                          w-full px-4 sm:px-6 py-2.5 sm:py-3
                          bg-[#08090a] border border-white/10 rounded-full
                          caption-fluid text-stone-300 uppercase font-bold
                          hover:bg-stone-800 hover:border-white/20 transition-all
                          font-montserrat flex items-center justify-center gap-2
                        "
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Charger depuis la galerie
                      </button>
                      <span className="caption-fluid text-stone-600 uppercase font-mono tracking-wider">Formats acceptés : JPG, PNG, WEBP</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
 
            {/* ── Contrôleur de scénario ── */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="bg-[#08090a] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex-1 flex flex-col">
                <h4 className="label-fluid text-stone-400 font-bold uppercase tracking-widest mb-3 sm:mb-4 font-mono">CONTRÔLEUR DE SYMETRIE DU RITUEL :</h4>
                <div className="space-y-2 sm:space-y-3 flex-1">
                  {[
                    { key: 'perfect',   emoji: '🎯', label: 'Pliage Parfait (Anomalie 100% masquée)',        pct: '100%' },
                    { key: 'misaligned',emoji: '⚠️', label: 'Décalage Léger (Anomalie partiellement visible)', pct: '60-65%' },
                    { key: 'failed',    emoji: '🚨', label: 'Alignement Rompu (Dérapage géométrique)',        pct: '25-30%' },
                  ].map(({ key, emoji, label, pct }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedScenario(key as any)}
                      className={`
                        w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left
                        caption-fluid scenario-btn-text
                        uppercase font-bold tracking-wider
                        transition-all flex justify-between items-center gap-2
                        ${selectedScenario === key
                          ? 'border-amber-500 bg-amber-500/5 text-amber-400'
                          : 'border-white/5 bg-[#020406]/60 text-stone-500 hover:border-white/10 hover:text-stone-300'
                        }
                      `}
                    >
                      <span className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <span className="shrink-0">{emoji}</span>
                        <span className="truncate sm:whitespace-normal">{label}</span>
                      </span>
                      <span className="font-mono shrink-0 ml-1">[ {pct} ]</span>
                    </button>
                  ))}
                </div>
 
                <button
                  onClick={handleScanAction}
                  disabled={!uploadedImage || isScanning}
                  className={`
                    w-full mt-4 sm:mt-6 py-3.5 sm:py-4 rounded-full uppercase tracking-widest
                    caption-fluid font-bold transition-all duration-300
                    ${!uploadedImage || isScanning
                      ? 'bg-stone-800 text-stone-600 border border-stone-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-black hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.2)] border border-amber-400'
                    }
                  `}
                >
                  {isScanning ? 'Analyse en cours...' : "Lancer l'Analyse du Pliage"}
                </button>
              </div>
            </div>
          </div>
 
          {/* ── Résultat du scan ── */}
          {scanResult && (
            <div className="mt-6 sm:mt-8 border border-white/10 bg-[#020406] p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-fade-in space-y-3 sm:space-y-4 font-mono uppercase tracking-wider">
              <div className="scan-result-row flex justify-between items-center border-b border-white/5 pb-3 gap-2">
                <span className="caption-fluid text-stone-500 font-montserrat shrink-0">STATUT DE L'ÉVALUATION :</span>
                <span className={`caption-fluid font-bold text-right ${scanResult.score === 100 ? 'text-teal-400' : scanResult.score >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
                  {scanResult.status} ({scanResult.score}%)
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Validation d'Occultation :", value: scanResult.details.occlusion },
                  { label: "Contrôle de Symétrie :", value: scanResult.details.alignment },
                ].map(({ label, value }) => (
                  <div key={label} className="scan-result-row flex justify-between gap-2">
                    <span className="caption-fluid text-stone-500 shrink-0">{label}</span>
                    <span className="caption-fluid text-white text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/5 pt-3 scan-result-row flex justify-between items-center text-amber-500 font-extrabold">
                <span className="body-fluid">Énergie de Flux Récoltée :</span>
                <span className="result-flux-fluid">+ {scanResult.fluxAwarded} FLUX</span>
              </div>
              <p className="caption-fluid text-stone-400 leading-relaxed font-sans normal-case border-t border-white/5 pt-3">
                <span className="text-amber-500 font-bold uppercase font-mono mr-2">[ REMARQUES DE L'ORACLE ]</span>
                {scanResult.comment}
              </p>
            </div>
          )}
        </div>
 
        {/* ── BOUTON RETOUR ── */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => setCurrentTab('home')}
            className="
              px-6 sm:px-8 py-3 sm:py-3.5
              bg-transparent border border-white/10
              text-stone-500 hover:text-stone-300 hover:border-white/20
              transition-all duration-500 caption-fluid font-bold uppercase tracking-widest
              rounded-full font-montserrat
            "
          >
            Retourner à l'Éveil de la Matrice
          </button>
        </div>
 
        {/* ── MODAL CAMÉRA DESKTOP ── */}
        {showCameraModal && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6">
            <div className="w-full max-w-sm sm:max-w-lg md:max-w-2xl space-y-3 sm:space-y-4">
              <p className="caption-fluid text-amber-400 font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-center animate-pulse">
                ◈ CAPTEUR OPTIQUE ACTIF — Positionnez l'avion dans le cadre ◈
              </p>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                <video ref={videoRef} className="w-full rounded-xl sm:rounded-2xl bg-black" autoPlay playsInline muted />
                {/* Viseur */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 border border-amber-500/40 rounded-lg relative">
                    <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-amber-500" />
                    <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-amber-500" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-amber-500" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-amber-500" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleCapturePhoto}
                  className="px-7 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-black font-extrabold uppercase caption-fluid rounded-full tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-400"
                >
                  ◉ Capturer
                </button>
                <button
                  onClick={stopCamera}
                  className="px-7 sm:px-10 py-3 sm:py-4 border border-white/20 text-stone-400 font-bold uppercase caption-fluid rounded-full hover:border-white/40 hover:text-stone-200 transition-all"
                >
                  Annuler
                </button>
              </div>
              <p className="caption-fluid text-stone-600 uppercase tracking-widest text-center font-mono">
                Nécessite HTTPS — Autorisez l'accès à la caméra dans votre navigateur
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}