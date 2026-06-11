function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-gray-900 flex flex-col justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-10">Nova<span className="text-yellow-500">Mind</span></h1>
          <nav className="flex flex-col gap-2">
            {[
              { icon: "📊", label: "Tableau de bord" },
              { icon: "📚", label: "Mes cours" },
              { icon: "🏆", label: "Certificats" },
              { icon: "👤", label: "Profil" },
              { icon: "⚙️", label: "Paramètres" },
            ].map((item, i) => (
              <button key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${i === 0 ? "bg-yellow-500 text-gray-900" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white text-sm">
          🚪 Déconnexion
        </button>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 p-8 overflow-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-500 text-sm">Bon retour 👋</p>
            <h2 className="text-2xl font-bold text-gray-900">Tableau de bord</h2>
          </div>
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">Y</div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Cours en cours", value: "4", icon: "📚", color: "bg-blue-50" },
            { label: "Cours terminés", value: "12", icon: "✅", color: "bg-green-50" },
            { label: "Certificats obtenus", value: "3", icon: "🏆", color: "bg-yellow-50" },
          ].map((stat, i) => (
            <div key={i} className={`${stat.color} rounded-2xl p-6 border border-gray-100`}>
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* COURS EN COURS */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Mes cours en cours</h3>
          <div className="flex flex-col gap-4">
            {[
              { title: "React & TypeScript — Bootcamp", progress: 68, category: "Développement Web" },
              { title: "UI/UX Design avec Figma", progress: 45, category: "Design" },
              { title: "Python pour la Data Science", progress: 32, category: "Data Science" },
              { title: "Marketing Digital", progress: 15, category: "Marketing" },
            ].map((course, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">📖</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{course.title}</span>
                    <span className="text-sm text-yellow-500 font-medium">{course.progress}%</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{course.category}</div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${course.progress}%` }}></div>
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
            {[
              { title: "HTML & CSS pour débutants", date: "12 Mai 2026", cert: true },
              { title: "JavaScript ES6+", date: "28 Avril 2026", cert: true },
              { title: "Git & GitHub", date: "10 Avril 2026", cert: true },
            ].map((course, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-xs text-gray-400">{course.date}</div>
                  </div>
                </div>
                {course.cert && (
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium">🏆 Certifié</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard