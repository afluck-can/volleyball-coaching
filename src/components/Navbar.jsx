import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/drills', label: 'Drill Library' },
    { to: '/rotations', label: 'Rotations' },
    { to: '/practice-plan', label: 'Practice Plan' },
  ]

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight hover:text-blue-200 transition-colors">
          Volleyball Coaching Encyclopaedia
        </Link>
        <div className="flex gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors hover:text-blue-200 ${
                pathname === to ? 'text-yellow-300 border-b-2 border-yellow-300 pb-0.5' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
