import { useState } from 'react'
function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* PARTIE GAUCHE */}
      <div className="hidden md:flex w-1/2 bg-gray-900 flex-col justify-between p-12">
        <h1 className="text-2xl font-bold text-white">Tekki<span className="text-yellow-500">Learn</span></h1>
        <div>
          <p className="text-4xl font-bold text-white mb-4">Reprenez là<br/>où vous<br/><span className="italic text-yellow-500">vous étiez.</span></p>
          <p className="text-gray-400">Connectez-vous et continuez votre parcours d'apprentissage.</p>
        </div>
        <p className="text-gray-600 text-sm">© 2026 Tekki Learn</p>
      </div>

      {/* PARTIE DROITE */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Connexion</h2>
          <p className="text-gray-500 mb-8">Pas encore de compte ? <a href="/register" className="text-yellow-500 font-medium hover:underline">S'inscrire</a></p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
              <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 transition"/>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Mot de passe</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 transition"/>
            </div>
            <div className="flex justify-end">
              <a href="/forgot-password" className="text-sm text-yellow-500 hover:underline">Mot de passe oublié ?</a>
            </div>
            <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-yellow-500 hover:text-gray-900 transition">
              Se connecter →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage