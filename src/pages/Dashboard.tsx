import { useState } from 'react'

function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Tableau de bord' },
    { id: 'cours', icon: '📚', label: 'Mes cours' },
    { id: 'certificats', icon: '🏆', label: 'Certificats' },
    { id: 'profil', icon: '👤', label: 'Profil' },
    { id: 'parametres', icon: '⚙️', label: 'Paramètres' },
  ]

  const cours = [
    { title: 'React & TypeScript — Bootcamp', progress: 68, category: 'Développement Web', color: 'bg-blue-500' },
    { title: 'UI/UX Design avec Figma', progress: 45, category: 'Design', color: 'bg-purple-500' },
    { title: 'Python pour la Data Science', progress: 32, category: 'Data Science', color: 'bg-green-500' },
    { title: 'Marketing Digital', progress: 15, category: 'Marketing', color: 'bg-orange-500' },
  ]

  const historique = [
    { title: 'HTML & CSS pour débutants', date: '12 Mai 2026' },
    { title: 'JavaScript ES6+', date: '28 Avril 2026' },
    { title: 'Git & GitHub', date: '10 Avril 2026' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900 flex flex-col justify-between p-6 fixed h-full">
        <div>
          <h1 className="text-2xl font-bold text-white mb-10">
            Tekki <span className="text-yellow-500">Learn</span>
          </h1>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  activePage === item.id
                    ? 'bg-yellow-500 text-gray-900'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <a href="/login" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white text-sm transition">
          🚪 Déconnexion
        </a>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 ml-64 p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-500 text-sm">Bon retour 👋</p>
            <h2 className="text-2xl font-bold text-gray-900">Tableau de bord</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Mariama Faye</span>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
              M
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Cours en cours', value: '4', icon: '📚', bg: 'bg-blue-50', text: 'text-blue-600' },
            { label: 'Cours terminés', value: '12', icon: '✅', bg: 'bg-green-50', text: 'text-green-600' },
            { label: 'Certificats', value: '3', icon: '🏆', bg: 'bg-yellow-50', text: 'text-yellow-600' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} rounded-2xl p-6 border border-gray-100`}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-bold ${stat.text}`}>{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* COURS EN COURS */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Mes cours en cours</h3>
          <div className="flex flex-col gap-4">
            {cours.map((course, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {course.progress}%
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{course.title}</span>
                    <span className="text-sm text-yellow-500 font-medium">{course.progress}%</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{course.category}</div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HISTORIQUE */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cours terminés</h3>
          <div className="flex flex-col gap-3">
            {historique.map((course, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-xs text-gray-400">{course.date}</div>
                  </div>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">
                  🏆 Certifié
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard