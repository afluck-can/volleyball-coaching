import { useState } from 'react'

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Advanced: 'bg-red-100 text-red-800',
}

export default function DrillCard({ drill }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900">{drill.name}</h3>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${difficultyColors[drill.difficulty] || 'bg-gray-100 text-gray-700'}`}>
            {drill.difficulty}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-1">{drill.duration}</p>
        <p className="text-sm text-gray-600">{drill.description}</p>

        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={() => setExpanded(v => !v)}
            className="text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            {expanded ? 'Hide details' : 'View details'}
          </button>
          {drill.videoSearchUrl && (
            <a
              href={drill.videoSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
              </svg>
              Find on YouTube
            </a>
          )}
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-3 bg-gray-50 text-sm">
          <Section title="Objectives" items={drill.objectives} />
          <div>
            <p className="font-semibold text-gray-700 mb-1">Setup</p>
            <p className="text-gray-600">{drill.setup}</p>
          </div>
          <Section title="Instructions" items={drill.instructions} ordered />
          <Section title="Coaching Cues" items={drill.coachingCues} />
          <Section title="Variations" items={drill.variations} />
        </div>
      )}
    </div>
  )
}

function Section({ title, items, ordered }) {
  if (!items || items.length === 0) return null
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <div>
      <p className="font-semibold text-gray-700 mb-1">{title}</p>
      <Tag className={`${ordered ? 'list-decimal' : 'list-disc'} list-inside text-gray-600 space-y-0.5`}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </Tag>
    </div>
  )
}
