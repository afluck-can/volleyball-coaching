import { useState, useMemo } from 'react'
import drills from '../data/drills'
import DrillCard from '../components/DrillCard'

const ALL = 'All'
const DURATIONS = [ALL, '≤10 min', '11–15 min', '15+ min']
const PLAYERS = [ALL, '1–2', '3–5', '6+']
const DIFFICULTIES = [ALL, 'Beginner', 'Intermediate', 'Advanced']

function parseDuration(d) {
  return parseInt(d) || 0
}

function matchDuration(drill, filter) {
  if (filter === ALL) return true
  const mins = parseDuration(drill.duration)
  if (filter === '≤10 min') return mins <= 10
  if (filter === '11–15 min') return mins >= 11 && mins <= 15
  if (filter === '15+ min') return mins > 15
  return true
}

function matchPlayers(drill, filter) {
  if (filter === ALL) return true
  const n = drill.minPlayers || 1
  if (filter === '1–2') return n <= 2
  if (filter === '3–5') return n >= 3 && n <= 5
  if (filter === '6+') return n >= 6
  return true
}

function FilterBar({ label, options, value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-20 shrink-0">{label}</span>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
            value === opt
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default function DrillLibrary() {
  const categories = drills.map(d => d.category)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [duration, setDuration] = useState(ALL)
  const [players, setPlayers] = useState(ALL)
  const [difficulty, setDifficulty] = useState(ALL)
  const [search, setSearch] = useState('')

  const allDrillsInCategory = drills.find(d => d.category === activeCategory)?.drills ?? []

  const filtered = useMemo(() => {
    return allDrillsInCategory.filter(drill => {
      if (!matchDuration(drill, duration)) return false
      if (!matchPlayers(drill, players)) return false
      if (difficulty !== ALL && drill.difficulty !== difficulty) return false
      if (search.trim()) {
        const q = search.toLowerCase()
        if (!drill.name.toLowerCase().includes(q) && !drill.description.toLowerCase().includes(q)) return false
      }
      return true
    })
  }, [activeCategory, duration, players, difficulty, search, allDrillsInCategory])

  const hasActiveFilters = duration !== ALL || players !== ALL || difficulty !== ALL || search.trim()

  const clearFilters = () => {
    setDuration(ALL)
    setPlayers(ALL)
    setDifficulty(ALL)
    setSearch('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Drill Library</h1>
        <p className="text-gray-500 mb-8">Select a category and use filters to find the right drill.</p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-6 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-semibold text-gray-700">Filters</p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="text-xs text-blue-600 hover:underline">Clear all</button>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide w-20 shrink-0">Search</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search drills…"
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
            />
          </div>

          <FilterBar label="Duration" options={DURATIONS} value={duration} onChange={setDuration} />
          <FilterBar label="Players" options={PLAYERS} value={players} onChange={setPlayers} />
          <FilterBar label="Level" options={DIFFICULTIES} value={difficulty} onChange={setDifficulty} />
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-800">{filtered.length}</span> of {allDrillsInCategory.length} drills
        </p>

        {/* Drills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map(drill => (
            <DrillCard key={drill.id} drill={drill} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-2">No drills match your filters.</p>
            <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  )
}
