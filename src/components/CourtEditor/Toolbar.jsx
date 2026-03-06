const tools = [
  { id: 'select', label: 'Select', icon: '↖' },
  { id: 'player', label: 'Player', icon: 'P' },
  { id: 'coach', label: 'Coach', icon: 'C' },
  { id: 'ball', label: 'Ball', icon: 'O' },
  { id: 'arrow', label: 'Arrow', icon: '→' },
  { id: 'delete', label: 'Delete', icon: '✕' },
]

export default function Toolbar({ activeTool, onToolChange, onClear }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-3">
      {tools.map(tool => (
        <button
          key={tool.id}
          onClick={() => onToolChange(tool.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
            activeTool === tool.id
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          <span className="font-bold">{tool.icon}</span>
          {tool.label}
        </button>
      ))}
      <button
        onClick={onClear}
        className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium border border-red-300 text-red-600 hover:bg-red-50 transition-colors"
      >
        Clear All
      </button>
    </div>
  )
}
