import { useState } from 'react'
import { systems } from '../data/rotations'

// Court position layout:
//  Front row (net side): 4 | 3 | 2
//  Back row:             5 | 6 | 1
const GRID = [
  [4, 3, 2],
  [5, 6, 1],
]

function CourtDiagram({ rotation, roleColors, playerNames, compact = false }) {
  const sz = compact ? 'w-10 h-10 text-xs' : 'w-16 h-16 text-sm'
  return (
    <div className="inline-block">
      {/* Net indicator */}
      <div className={`${compact ? 'h-2' : 'h-3'} bg-gray-700 rounded-t mb-1 w-full flex items-center justify-center`}>
        <span className={`text-white font-bold ${compact ? 'text-[9px]' : 'text-[10px]'}`}>NET</span>
      </div>
      <div className="bg-amber-100 border-2 border-amber-400 rounded-b p-2 space-y-2">
        {GRID.map((row, ri) => (
          <div key={ri} className="flex gap-2 justify-center">
            {row.map(pos => {
              const role = rotation.positions[pos]
              const colorClass = roleColors[role] || 'bg-gray-400'
              const name = playerNames?.[role]
              return (
                <div
                  key={pos}
                  className={`${sz} ${colorClass} rounded-full flex flex-col items-center justify-center text-white font-bold shadow`}
                  title={`P${pos}: ${role}${name ? ` (${name})` : ''}`}
                >
                  <span>{role}</span>
                  {!compact && name && <span className="text-[9px] font-normal truncate max-w-full px-1">{name}</span>}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      {!compact && (
        <div className="text-center mt-1">
          <span className="text-xs text-gray-400">← Left · Right →</span>
        </div>
      )}
    </div>
  )
}

export default function Rotations() {
  const [activeSystem, setActiveSystem] = useState(systems[0])
  const [playerNames, setPlayerNames] = useState({})
  const [focused, setFocused] = useState(null) // rotation index
  const [exporting, setExporting] = useState(false)

  const handleNameChange = (role, value) => {
    setPlayerNames(prev => ({ ...prev, [role]: value }))
  }

  const handleExport = async () => {
    setExporting(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default

      const rotationCards = activeSystem.rotations.map((rot, i) => {
        const rows = GRID.map(row =>
          `<div style="display:flex;gap:8px;justify-content:center;margin-bottom:8px;">${
            row.map(pos => {
              const role = rot.positions[pos]
              const name = playerNames[role] || ''
              return `<div style="width:52px;height:52px;border-radius:50%;background:#2563eb;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:11px;">
                <span>${role}</span>${name ? `<span style="font-size:9px;font-weight:normal;">${name}</span>` : ''}
              </div>`
            }).join('')
          }</div>`
        ).join('')

        return `<div style="display:inline-block;margin:8px;border:1px solid #e5e7eb;border-radius:8px;padding:12px;width:180px;vertical-align:top;">
          <div style="font-weight:700;font-size:13px;margin-bottom:2px;">${rot.label}</div>
          <div style="font-size:10px;color:#6b7280;margin-bottom:8px;">${rot.note}</div>
          <div style="background:#1f2937;border-radius:4px 4px 0 0;padding:3px;text-align:center;color:white;font-size:9px;font-weight:bold;">NET</div>
          <div style="background:#fef3c7;border:2px solid #f59e0b;border-radius:0 0 4px 4px;padding:8px;">${rows}</div>
        </div>`
      }).join('')

      const roleKey = activeSystem.roles.map(r =>
        `<span style="margin-right:12px;font-size:11px;"><strong>${r}</strong> = ${activeSystem.roleLabels[r]}${playerNames[r] ? ` (${playerNames[r]})` : ''}</span>`
      ).join('')

      const html = `
        <div style="font-family:Arial,sans-serif;padding:24px;max-width:800px;margin:0 auto;">
          <h1 style="font-size:22px;font-weight:800;color:#1e40af;border-bottom:3px solid #1e40af;padding-bottom:8px;margin-bottom:16px;">
            Rotation Sheet — ${activeSystem.label} System
          </h1>
          <p style="font-size:12px;color:#6b7280;margin-bottom:16px;">${activeSystem.description}</p>
          <div style="margin-bottom:16px;padding:8px;background:#f3f4f6;border-radius:4px;">${roleKey}</div>
          <div style="text-align:center;">${rotationCards}</div>
        </div>`

      await html2pdf().set({
        margin: 0,
        filename: `${activeSystem.label}-rotation-sheet.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
      }).from(html).save()
    } catch (err) {
      console.error('PDF export failed', err)
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Rotation Builder</h1>
            <p className="text-gray-500">Select a system, assign player names, and export a printable rotation sheet.</p>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60"
          >
            {exporting ? 'Exporting…' : 'Export PDF'}
          </button>
        </div>

        {/* System tabs */}
        <div className="flex gap-3 mb-8">
          {systems.map(sys => (
            <button
              key={sys.id}
              onClick={() => { setActiveSystem(sys); setFocused(null) }}
              className={`px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors ${
                activeSystem.id === sys.id
                  ? 'bg-blue-700 text-white border-blue-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {sys.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-8">{activeSystem.description}</p>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Player name inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-bold text-gray-800 mb-4">Assign Players</h2>
            <div className="space-y-3">
              {activeSystem.roles.map(role => (
                <div key={role} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${activeSystem.roleColors[role]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {role}
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500">{activeSystem.roleLabels[role]}</label>
                    <input
                      type="text"
                      value={playerNames[role] || ''}
                      onChange={e => handleNameChange(role, e.target.value)}
                      placeholder="Player name"
                      className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 font-semibold mb-2">Court legend</p>
              <div className="text-xs text-gray-500 font-mono space-y-0.5">
                <div>Front row (net): P4 | P3 | P2</div>
                <div>Back row:        P5 | P6 | P1</div>
              </div>
            </div>
          </div>

          {/* Rotation grid */}
          <div className="lg:col-span-2">
            {focused !== null ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setFocused(null)} className="text-sm text-blue-700 hover:underline">← All rotations</button>
                  <h2 className="font-bold text-gray-800">{activeSystem.rotations[focused].label}</h2>
                  <span className="text-sm text-gray-500">{activeSystem.rotations[focused].note}</span>
                </div>
                <div className="flex justify-center">
                  <CourtDiagram
                    rotation={activeSystem.rotations[focused]}
                    roleColors={activeSystem.roleColors}
                    playerNames={playerNames}
                  />
                </div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {activeSystem.rotations.map((rot, i) => (
                  <div
                    key={i}
                    onClick={() => setFocused(i)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-md hover:border-blue-300 transition-all"
                  >
                    <div className="mb-3">
                      <p className="font-semibold text-gray-900 text-sm">{rot.label}</p>
                      <p className="text-xs text-gray-500">{rot.note}</p>
                    </div>
                    <div className="flex justify-center">
                      <CourtDiagram
                        rotation={rot}
                        roleColors={activeSystem.roleColors}
                        playerNames={playerNames}
                        compact
                      />
                    </div>
                    <p className="text-xs text-blue-600 text-center mt-2">Click to expand</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
