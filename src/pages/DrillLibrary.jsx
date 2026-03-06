import { useState } from 'react'
import drills from '../data/drills'
import DrillCard from '../components/DrillCard'

export default function DrillLibrary() {
  const categories = drills.map(d => d.category)
  const [active, setActive] = useState(categories[0])

  const currentDrills = drills.find(d => d.category === active)?.drills ?? []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Drill Library</h1>
        <p className="text-gray-500 mb-8">Select a skill category to browse drills.</p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Drills grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {currentDrills.map(drill => (
            <DrillCard key={drill.id} drill={drill} />
          ))}
        </div>

        {currentDrills.length === 0 && (
          <p className="text-gray-400 text-center py-16">No drills found in this category.</p>
        )}
      </div>
    </div>
  )
}
