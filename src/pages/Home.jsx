import { Link } from 'react-router-dom'

const features = [
  {
    to: '/drills',
    title: 'Drill Library',
    description: 'Browse 24+ drills across Setting, Digging, Passing, Serving, Hitting, and Blocking. Filter by category and expand any drill for full instructions, coaching cues, and variations.',
    icon: '📚',
    cta: 'Browse Drills',
    color: 'from-blue-500 to-blue-700',
  },
  {
    to: '/practice-plan',
    title: 'Practice Plan Builder',
    description: 'Build a complete session plan with title, goals, and an interactive court diagram. Place players, coaches, and arrows on a visual volleyball court, then export to PDF.',
    icon: '📋',
    cta: 'Build a Plan',
    color: 'from-green-500 to-green-700',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Volleyball Coaching Encyclopaedia
        </h1>
        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
          Your complete toolkit for planning, coaching, and developing volleyball players at every level.
        </p>
      </div>

      {/* Feature cards */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">What would you like to do?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map(f => (
            <div key={f.to} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`bg-gradient-to-r ${f.color} text-white p-6`}>
                <div className="text-5xl mb-3">{f.icon}</div>
                <h3 className="text-2xl font-bold">{f.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{f.description}</p>
                <Link
                  to={f.to}
                  className="inline-block bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  {f.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center pb-12 text-sm text-gray-400">
        Built for volleyball coaches — static, offline-capable, free to use.
      </div>
    </div>
  )
}
