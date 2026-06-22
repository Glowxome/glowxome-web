"use client";
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function UpdatePassword() {
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({ password: password });
    if (error) alert("Erreur : " + error.message);
    else {
      alert("Clé runique mise à jour avec succès !");
      window.location.href = '/'; // Retour au portail
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 text-amber-500">
      <h1 className="text-2xl font-bold mb-6">NOUVELLE CLÉ RUNIQUE</h1>
      <input 
        type="password" 
        placeholder="Entrez votre nouvelle clé" 
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-3 bg-stone-900 border border-amber-500/30 rounded-xl text-white"
      />
      <button 
        onClick={handleUpdate}
        className="px-6 py-3 bg-amber-600/20 border border-amber-500 rounded-xl"
      >
        Valider la nouvelle clé
      </button>
    </div>
  );
}