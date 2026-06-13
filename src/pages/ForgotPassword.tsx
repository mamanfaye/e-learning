import { useState } from 'react'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!email) {
      setError('Veuillez entrer votre email')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* PARTIE GAUCHE */}
      <div className="hidden md:flex w-1/2 bg-gray-900 flex-col justify-between p-12">
        <h1 className="text-2xl font-bold text-white">Tekki <span className="text-yellow-500">Learn</span></h1>
        <div>
          <p className="text-5xl font-bold text-white mb-4">Mot de passe<br/><span className="italic text-yellow-500">oublié ?</span></p>
          <p className="text-gray-400 text-lg">Pas de panique, on vous envoie un lien de réinitialisation.</p>
        </div>
        <p className="text-gray-600 text-sm">© 2026 Tekki Learn</p>
      </div>

      {/* PARTIE DROITE */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">

          {sent ? (
            <div className="text-center">
              <div className="text-6xl mb-6">📬</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Email envoyé !</h2>
              <p className="text-gray-500 mb-8">Vérifiez votre boîte mail et cliquez sur le lien de réinitialisation.</p>
              <a href="/login" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-yellow-500 hover:text-gray-900 transition">
                Retour à la connexion →
              </a>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Réinitialisation</h2>
                <p className="text-gray-500">Entrez votre email pour recevoir un lien.</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100 transition"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-yellow-500 hover:text-gray-900 transition">
                  Envoyer le lien →
                </button>
                <a href="/login" className="text-center text-sm text-yellow-500 hover:underline">
                  Retour à la connexion
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword