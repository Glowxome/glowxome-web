"use client";
import React, { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function ConnexionView({ setCurrentTab }: { setCurrentTab: (tab: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomCode, setNomCode] = useState('');

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("Flux refusé: " + error.message);
    else setCurrentTab('home');
  };

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: { data: { nom_de_code: nomCode } } 
    });
    if (error) alert("Erreur d'éveil: " + error.message);
    else alert("Profil initialisé ! Vérifiez votre adresse Éther pour confirmer.");
  };

  // Nouvelle fonction pour la récupération
  const handleForgotPassword = async () => {
    if (!email) {
      alert("Veuillez entrer votre adresse Éther dans le champ identifiant.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/update-password',
    });
    if (error) alert("Signal de secours échoué : " + error.message);
    else alert("Un signal de réinitialisation a été envoyé à votre adresse Éther.");
  };

  return (
    <section className="pt-24 pb-20 max-w-5xl mx-auto px-6 text-center min-h-[75vh] flex flex-col justify-center items-center relative z-10 animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-amber-500 mb-2 uppercase">PORTAIL D'ÉVEIL</h1>
      
      <div className="grid md:grid-cols-2 gap-8 w-full items-start">
        {/* CADRE 1 : CONNEXION & RÉCUPÉRATION */}
        <div className="bg-black/70 border border-amber-500/30 p-8 rounded-3xl text-left space-y-6">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Déjà Éclaireur</h2>
          <input type="email" placeholder="Email (Identifiant)" onChange={(e) => setEmail(e.target.value)} className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-amber-500" />
          <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-amber-500" />
          <button onClick={handleSignIn} className="w-full py-4 bg-amber-600/10 border border-amber-500/30 text-amber-500 rounded-xl uppercase text-xs font-bold hover:bg-amber-600/20">Établir le Flux</button>
          
          {/* LIEN RÉCUPÉRATION */}
          <div className="text-center pt-2">
            <button onClick={handleForgotPassword} className="text-[9px] text-stone-600 uppercase tracking-[0.1em] hover:text-amber-500 transition-colors underline decoration-dotted underline-offset-4">
              Clé perdue ? Demander une réinitialisation
            </button>
          </div>
        </div>

        {/* CADRE 2 : INSCRIPTION */}
        <div className="bg-black/70 border border-white/10 p-8 rounded-3xl text-left space-y-6">
          <h2 className="text-stone-300 font-bold uppercase tracking-widest text-sm">Nouveau Signal</h2>
          <input type="text" placeholder="Nom de code" onChange={(e) => setNomCode(e.target.value)} className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-stone-300" />
          <input type="email" placeholder="Adresse mail" onChange={(e) => setEmail(e.target.value)} className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-stone-300" />
          <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} className="w-full bg-stone-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-stone-300" />
          <button onClick={handleSignUp} className="w-full py-4 bg-transparent border border-stone-600 text-stone-400 rounded-xl uppercase text-xs font-bold hover:border-amber-500">Initialiser le Profil</button>
        </div>
      </div>

      <button onClick={() => setCurrentTab('home')} className="mt-12 px-8 py-3 bg-transparent border border-white/10 text-stone-500 uppercase text-xs rounded-full hover:bg-white/5 transition-all">
        Retourner à l'Éveil
      </button>
    </section>
  );
}