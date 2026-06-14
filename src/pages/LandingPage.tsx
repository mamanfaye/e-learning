function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tekki <span className="text-yellow-500">Learn</span></h1>
        <div className="flex gap-4">
          <a href="/login" className="px-4 py-2 border border-gray-800 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition">Connexion</a>
          <a href="/register" className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-gray-800 transition">Commencer</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-8 text-center">
        <p className="text-yellow-500 font-mono text-sm uppercase tracking-widest mb-4">Plateforme de formation en ligne</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Apprenez à votre rythme.<br/><span className="italic text-yellow-500">Excellez partout.</span></h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">Tekki Learn réunit des formateurs experts et des apprenants ambitieux sur une plateforme pensée pour la progression réelle.</p>
        <div className="flex gap-4 justify-center">
          <a href="/register" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-yellow-500 hover:text-gray-900 transition">Démarrer gratuitement →</a>
          <a href="#formations" className="px-8 py-3 border border-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition">Voir les cours</a>
        </div>
        <div className="flex justify-center gap-16 mt-16 pt-8 border-t border-gray-200">
          <div>
            <div className="text-3xl font-bold text-gray-900">12K+</div>
            <div className="text-sm text-gray-500 mt-1">Apprenants actifs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">280+</div>
            <div className="text-sm text-gray-500 mt-1">Cours disponibles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">94%</div>
            <div className="text-sm text-gray-500 mt-1">Taux de satisfaction</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="formations" className="px-8 py-20 bg-white">
        <p className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-2">Pourquoi Tekki Learn</p>
        <h3 className="text-3xl font-bold text-gray-900 mb-12">Une plateforme pensée pour votre réussite</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Parcours personnalisés", desc: "Un algorithme adapte votre parcours selon vos objectifs et votre rythme." },
            { icon: "🎬", title: "Vidéos HD interactives", desc: "Des contenus avec quiz intégrés, annotations et chapitres." },
            { icon: "🏆", title: "Certificats reconnus", desc: "Des diplômes valorisés par plus de 300 entreprises partenaires." },
            { icon: "💬", title: "Mentorat en direct", desc: "Accès à des sessions live avec vos formateurs." },
            { icon: "📱", title: "Apprenez hors ligne", desc: "Téléchargez vos cours et progressez sans connexion." },
            { icon: "📊", title: "Suivi de progression", desc: "Un dashboard visualise vos avancées en temps réel." },
          ].map((f, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-gray-900 text-center">
        <p className="text-yellow-500 font-mono text-xs uppercase tracking-widest mb-4">Rejoignez 12 000+ apprenants</p>
        <h3 className="text-4xl font-bold text-white mb-4">Votre prochaine version<br/>commence <span className="italic text-yellow-500">ici.</span></h3>
        <p className="text-gray-400 max-w-md mx-auto mb-8">Créez votre compte en 30 secondes et accédez à votre premier cours dès aujourd'hui.</p>
        <a href="/register" className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-400 transition">Créer mon compte gratuit →</a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 text-center py-6 text-sm">
        © 2026 Tekki Learn. Tous droits réservés.
      </footer>
    </div>
  )
}

export default LandingPage