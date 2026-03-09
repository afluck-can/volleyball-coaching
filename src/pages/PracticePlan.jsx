import { useRef, useState, useCallback } from 'react'
import MiniCourt from '../components/CourtEditor/MiniCourt'
import practicePlans from '../data/practicePlans'

// ─── Data helpers ─────────────────────────────────────────────────────────────

const SECTIONS = ['Warm-up', 'Technical', 'Competitive', 'Cool-down']

const SECTION_COLORS = {
  'Warm-up':    { bg: 'bg-orange-50', border: 'border-orange-300', badge: 'bg-orange-500', text: 'text-orange-700' },
  'Technical':  { bg: 'bg-blue-50',   border: 'border-blue-300',   badge: 'bg-blue-600',   text: 'text-blue-700' },
  'Competitive':{ bg: 'bg-green-50',  border: 'border-green-300',  badge: 'bg-green-600',  text: 'text-green-700' },
  'Cool-down':  { bg: 'bg-purple-50', border: 'border-purple-300', badge: 'bg-purple-600', text: 'text-purple-700' },
}

function emptyDrill() {
  return {
    id: Date.now() + Math.random(),
    code: '',
    name: '',
    duration: 10,
    courtImageUrl: null,
    objective: '',
    successCriteria: '',
    referencePoints: '',
    variations: '',
    showCourt: false,
  }
}

function emptySection(name) {
  return { id: Date.now() + Math.random(), name, drills: [] }
}

// ─── Mini Court with save ──────────────────────────────────────────────────────

function DrillCourtEditor({ drillId, onSave, onCancel }) {
  const ref = useRef(null)
  return (
    <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
      <MiniCourt ref={ref} onCapture={url => onSave(drillId, url)} />
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onSave(drillId, ref.current?.toDataURL())}
          className="px-3 py-1 text-xs bg-blue-700 text-white rounded hover:bg-blue-800 font-medium"
        >
          Save Diagram
        </button>
        <button onClick={onCancel} className="px-3 py-1 text-xs text-gray-500 hover:text-gray-700">Cancel</button>
      </div>
    </div>
  )
}

// ─── Drill Block ──────────────────────────────────────────────────────────────

function DrillBlock({ drill, sectionId, onChange, onDelete, onMove, isFirst, isLast }) {
  const [editingCourt, setEditingCourt] = useState(false)

  const update = (field, val) => onChange(sectionId, drill.id, field, val)

  const handleCourtSave = (_, url) => {
    update('courtImageUrl', url)
    setEditingCourt(false)
  }

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      {/* Drill header row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <input
          value={drill.code}
          onChange={e => update('code', e.target.value)}
          placeholder="Code"
          className="w-20 border border-gray-300 rounded px-2 py-1 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <input
          value={drill.name}
          onChange={e => update('name', e.target.value)}
          placeholder="Drill name…"
          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <div className="flex items-center gap-1 shrink-0">
          <label className="text-xs text-gray-500">Duration</label>
          <input
            type="number"
            min={1}
            max={90}
            value={drill.duration}
            onChange={e => update('duration', Number(e.target.value))}
            className="w-14 border border-gray-300 rounded px-2 py-1 text-sm text-center focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <span className="text-xs text-gray-500">min</span>
        </div>
        <div className="flex items-center gap-0.5 ml-1">
          <button onClick={() => onMove(sectionId, drill.id, -1)} disabled={isFirst} className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30" title="Move up">↑</button>
          <button onClick={() => onMove(sectionId, drill.id, 1)} disabled={isLast} className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30" title="Move down">↓</button>
          <button onClick={() => onDelete(sectionId, drill.id)} className="p-1 text-red-400 hover:text-red-600" title="Delete drill">✕</button>
        </div>
      </div>

      {/* Body: court diagram + info table */}
      <div className="flex gap-0 divide-x divide-gray-200">
        {/* Left: court diagram */}
        <div className="w-72 shrink-0 p-3">
          {drill.courtImageUrl ? (
            <div className="space-y-2">
              <img src={drill.courtImageUrl} alt="Court diagram" className="w-full rounded border border-gray-200" />
              <div className="flex gap-2">
                <button onClick={() => setEditingCourt(true)} className="text-xs text-blue-600 hover:underline">Edit</button>
                <button onClick={() => update('courtImageUrl', null)} className="text-xs text-red-500 hover:underline">Remove</button>
              </div>
            </div>
          ) : editingCourt ? (
            <DrillCourtEditor
              drillId={drill.id}
              onSave={handleCourtSave}
              onCancel={() => setEditingCourt(false)}
            />
          ) : (
            <button
              onClick={() => setEditingCourt(true)}
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-colors flex flex-col items-center justify-center gap-1"
            >
              <span className="text-2xl">+</span>
              <span>Add court diagram</span>
            </button>
          )}
          {editingCourt && drill.courtImageUrl === null && null /* editor shown above */}
        </div>

        {/* Right: 4-cell info table */}
        <div className="flex-1 grid grid-cols-2 divide-x divide-y divide-gray-200">
          <InfoCell
            label="Description / Objective"
            value={drill.objective}
            onChange={v => update('objective', v)}
          />
          <InfoCell
            label="Success Criteria"
            value={drill.successCriteria}
            onChange={v => update('successCriteria', v)}
          />
          <InfoCell
            label="Reference Points"
            value={drill.referencePoints}
            onChange={v => update('referencePoints', v)}
          />
          <InfoCell
            label="Variations of Drill"
            value={drill.variations}
            onChange={v => update('variations', v)}
          />
        </div>
      </div>
    </div>
  )
}

function InfoCell({ label, value, onChange }) {
  return (
    <div className="p-2 flex flex-col min-h-[90px]">
      <p className="text-xs font-semibold text-gray-500 mb-1">{label}</p>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="—"
        rows={3}
        className="flex-1 text-sm text-gray-700 resize-none focus:outline-none bg-transparent placeholder:text-gray-300"
      />
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

function SectionBlock({ section, onAddDrill, onChangeDrill, onDeleteDrill, onMoveDrill, onDeleteSection, onRenameSection }) {
  const colors = SECTION_COLORS[section.name] || SECTION_COLORS['Technical']
  const totalMins = section.drills.reduce((s, d) => s + (d.duration || 0), 0)

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} overflow-hidden`}>
      {/* Section header */}
      <div className={`flex items-center gap-3 px-5 py-3 border-b ${colors.border}`}>
        <div className={`${colors.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>
          {section.name}
        </div>
        <input
          value={section.name}
          onChange={e => onRenameSection(section.id, e.target.value)}
          className={`flex-1 bg-transparent text-sm font-semibold ${colors.text} focus:outline-none border-b border-transparent focus:border-current`}
        />
        {totalMins > 0 && (
          <span className={`text-xs font-medium ${colors.text} opacity-70`}>{totalMins} min total</span>
        )}
        <button onClick={() => onDeleteSection(section.id)} className="text-gray-400 hover:text-red-500 text-sm" title="Remove section">✕</button>
      </div>

      {/* Drills */}
      <div className="p-4 space-y-4">
        {section.drills.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-4">No drills yet. Add your first drill below.</p>
        )}
        {section.drills.map((drill, i) => (
          <DrillBlock
            key={drill.id}
            drill={drill}
            sectionId={section.id}
            onChange={onChangeDrill}
            onDelete={onDeleteDrill}
            onMove={onMoveDrill}
            isFirst={i === 0}
            isLast={i === section.drills.length - 1}
          />
        ))}
        <button
          onClick={() => onAddDrill(section.id)}
          className={`w-full py-2 rounded-lg border-2 border-dashed ${colors.border} ${colors.text} text-sm font-medium hover:opacity-80 transition-opacity`}
        >
          + Add Drill
        </button>
      </div>
    </div>
  )
}

// ─── PDF builder ──────────────────────────────────────────────────────────────

function buildPdfHtml(header, sections) {
  const totalMins = sections.flatMap(s => s.drills).reduce((n, d) => n + (d.duration || 0), 0)

  const sectionHtml = sections.map(sec => {
    if (sec.drills.length === 0) return ''
    const drillHtml = sec.drills.map(d => {
      const courtCell = d.courtImageUrl
        ? `<img src="${d.courtImageUrl}" style="width:100%;border:1px solid #d1d5db;border-radius:4px;" />`
        : `<div style="width:100%;height:120px;border:2px dashed #d1d5db;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:11px;">No diagram</div>`

      return `
        <div style="margin-bottom:14px;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;page-break-inside:avoid;">
          <div style="display:flex;align-items:center;gap:10px;padding:6px 12px;background:#f9fafb;border-bottom:1px solid #e5e7eb;">
            ${d.code ? `<span style="font-size:11px;color:#6b7280;font-weight:600;">${d.code}</span>` : ''}
            <span style="font-size:13px;font-weight:700;flex:1;">${d.name || 'Unnamed Drill'}</span>
            <span style="font-size:12px;color:#6b7280;">Duration: <strong>${d.duration} min</strong></span>
          </div>
          <div style="display:flex;">
            <div style="width:200px;min-width:200px;padding:8px;border-right:1px solid #e5e7eb;">${courtCell}</div>
            <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;">
              <div style="padding:8px;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;">
                <div style="font-size:10px;font-weight:700;color:#6b7280;margin-bottom:4px;">Description / Objective</div>
                <div style="font-size:11px;color:#374151;white-space:pre-wrap;">${d.objective || ''}</div>
              </div>
              <div style="padding:8px;border-bottom:1px solid #e5e7eb;">
                <div style="font-size:10px;font-weight:700;color:#6b7280;margin-bottom:4px;">Success Criteria</div>
                <div style="font-size:11px;color:#374151;white-space:pre-wrap;">${d.successCriteria || ''}</div>
              </div>
              <div style="padding:8px;border-right:1px solid #e5e7eb;">
                <div style="font-size:10px;font-weight:700;color:#6b7280;margin-bottom:4px;">Reference Points</div>
                <div style="font-size:11px;color:#374151;white-space:pre-wrap;">${d.referencePoints || ''}</div>
              </div>
              <div style="padding:8px;">
                <div style="font-size:10px;font-weight:700;color:#6b7280;margin-bottom:4px;">Variations of Drill</div>
                <div style="font-size:11px;color:#374151;white-space:pre-wrap;">${d.variations || ''}</div>
              </div>
            </div>
          </div>
        </div>`
    }).join('')

    return `
      <div style="margin-bottom:20px;">
        <div style="font-size:14px;font-weight:800;padding:6px 12px;background:#1e40af;color:white;border-radius:4px;margin-bottom:10px;">
          ${sec.name} &nbsp;·&nbsp; ${sec.drills.reduce((n, d) => n + (d.duration || 0), 0)} min
        </div>
        ${drillHtml}
      </div>`
  }).join('')

  return `
    <div style="font-family:Arial,sans-serif;padding:28px;max-width:800px;margin:0 auto;color:#111;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:18px;font-size:12px;border:1px solid #d1d5db;">
        <tr>
          <td style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Date:</strong> ${header.date || '—'}</td>
          <td style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Time:</strong> ${header.time || '—'}</td>
          <td style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Location:</strong> ${header.location || '—'}</td>
          <td style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Practice #:</strong> ${header.practiceNumber || '—'}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Phase:</strong> ${header.phase || '—'}</td>
          <td colspan="2" style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Theme / Focus:</strong> ${header.theme || '—'}</td>
          <td style="padding:6px 10px;border:1px solid #d1d5db;font-weight:700;color:#1e40af;">${totalMins} min total</td>
        </tr>
        ${header.outcomes ? `<tr><td colspan="4" style="padding:6px 10px;border:1px solid #d1d5db;"><strong>Outcomes:</strong> ${header.outcomes}</td></tr>` : ''}
      </table>
      ${sectionHtml}
    </div>`
}

// ─── Main page ────────────────────────────────────────────────────────────────

const LEVEL_COLORS = {
  Beginner:     'bg-green-100 text-green-800 border-green-300',
  Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  Advanced:     'bg-red-100 text-red-800 border-red-300',
}

function TemplateModal({ onLoad, onClose }) {
  const [selected, setSelected] = useState(null)

  const loadTemplate = () => {
    if (!selected) return
    const plan = practicePlans.find(p => p.id === selected)
    if (!plan) return
    onLoad(plan)
    onClose()
  }

  const preview = practicePlans.find(p => p.id === selected)

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Load a Practice Plan Template</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Plan list */}
          <div className="w-64 shrink-0 border-r border-gray-200 overflow-y-auto p-3 space-y-2">
            {practicePlans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg border transition-colors ${
                  selected === plan.id
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                <p className="font-semibold text-sm leading-tight">{plan.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-1.5 py-0.5 rounded border font-medium ${selected === plan.id ? 'bg-white/20 text-white border-white/40' : LEVEL_COLORS[plan.level]}`}>
                    {plan.level}
                  </span>
                  <span className={`text-xs ${selected === plan.id ? 'text-blue-200' : 'text-gray-400'}`}>{plan.duration} min</span>
                </div>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="flex-1 overflow-y-auto p-5">
            {preview ? (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{preview.name}</h3>
                <div className="flex gap-3 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${LEVEL_COLORS[preview.level]}`}>{preview.level}</span>
                  <span className="text-xs text-gray-500">{preview.duration} min · {preview.players} players</span>
                </div>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Theme:</span> {preview.theme}</p>
                <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Outcomes:</span> {preview.outcomes}</p>
                <div className="space-y-3">
                  {preview.sections.map((sec, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{sec.name}</p>
                      <div className="space-y-1 pl-3 border-l-2 border-gray-200">
                        {sec.drills.map((d, j) => (
                          <div key={j} className="flex items-baseline gap-2">
                            <span className="text-xs text-gray-400 shrink-0">{d.duration}m</span>
                            <span className="text-sm text-gray-700">{d.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                Select a template to preview
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-400">Loading a template will replace your current plan.</p>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800">Cancel</button>
            <button
              onClick={loadTemplate}
              disabled={!selected}
              className="px-5 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 disabled:opacity-40 transition-colors"
            >
              Load Template
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PracticePlan() {
  const [header, setHeader] = useState({
    date: '', time: '', location: '', practiceNumber: '', phase: '', theme: '', outcomes: '',
  })

  const [sections, setSections] = useState(SECTIONS.map(emptySection))
  const [exporting, setExporting] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)

  const updateHeader = e => setHeader(h => ({ ...h, [e.target.name]: e.target.value }))

  const loadTemplate = (plan) => {
    setHeader({
      date: '', time: '', location: '', practiceNumber: '',
      phase: plan.phase || '',
      theme: plan.theme || '',
      outcomes: plan.outcomes || '',
    })
    setSections(plan.sections.map(sec => ({
      id: Date.now() + Math.random(),
      name: sec.name,
      drills: sec.drills.map(d => ({
        ...emptyDrill(),
        id: Date.now() + Math.random(),
        code: d.code || '',
        name: d.name || '',
        duration: d.duration || 10,
        objective: d.objective || '',
        successCriteria: d.successCriteria || '',
        referencePoints: d.referencePoints || '',
        variations: d.variations || '',
      })),
    })))
  }

  // Section operations
  const addSection = () => setSections(s => [...s, emptySection('New Section')])
  const deleteSection = id => setSections(s => s.filter(sec => sec.id !== id))
  const renameSection = (id, name) => setSections(s => s.map(sec => sec.id === id ? { ...sec, name } : sec))

  // Drill operations
  const addDrill = useCallback(sectionId => {
    setSections(s => s.map(sec =>
      sec.id === sectionId ? { ...sec, drills: [...sec.drills, emptyDrill()] } : sec
    ))
  }, [])

  const changeDrill = useCallback((sectionId, drillId, field, val) => {
    setSections(s => s.map(sec =>
      sec.id === sectionId
        ? { ...sec, drills: sec.drills.map(d => d.id === drillId ? { ...d, [field]: val } : d) }
        : sec
    ))
  }, [])

  const deleteDrill = useCallback((sectionId, drillId) => {
    setSections(s => s.map(sec =>
      sec.id === sectionId ? { ...sec, drills: sec.drills.filter(d => d.id !== drillId) } : sec
    ))
  }, [])

  const moveDrill = useCallback((sectionId, drillId, dir) => {
    setSections(s => s.map(sec => {
      if (sec.id !== sectionId) return sec
      const drills = [...sec.drills]
      const idx = drills.findIndex(d => d.id === drillId)
      const target = idx + dir
      if (target < 0 || target >= drills.length) return sec
      ;[drills[idx], drills[target]] = [drills[target], drills[idx]]
      return { ...sec, drills }
    }))
  }, [])

  const totalMins = sections.flatMap(s => s.drills).reduce((n, d) => n + (d.duration || 0), 0)

  const handleExport = async () => {
    setExporting(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const html = buildPdfHtml(header, sections)
      await html2pdf().set({
        margin: 0,
        filename: `${header.theme || 'practice-plan'}.pdf`,
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }).from(html).save()
    } catch (err) {
      console.error('PDF export failed', err)
      alert('PDF export failed. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {showTemplates && <TemplateModal onLoad={loadTemplate} onClose={() => setShowTemplates(false)} />}
      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Page header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Practice Plan Builder</h1>
            <p className="text-gray-500">Build your session section by section, add court diagrams per drill, then export to PDF.</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {totalMins > 0 && (
              <p className="text-sm text-gray-500">
                Total: <span className="font-bold text-gray-800">{totalMins} min</span>
              </p>
            )}
            <div className="flex gap-2">
              <button
                onClick={() => setShowTemplates(true)}
                className="border border-blue-600 text-blue-700 font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Load Template
              </button>
              <button
                onClick={handleExport}
                disabled={exporting}
                className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60 text-sm"
              >
                {exporting ? 'Exporting…' : 'Export to PDF'}
              </button>
            </div>
          </div>
        </div>

        {/* Session header card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-base font-bold text-gray-800 mb-4">Session Details</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Field label="Date" name="date" type="date" value={header.date} onChange={updateHeader} />
            <Field label="Time" name="time" value={header.time} onChange={updateHeader} placeholder="e.g. 6:00–8:00 PM" />
            <Field label="Location" name="location" value={header.location} onChange={updateHeader} placeholder="e.g. Mer Bleue Gym" />
            <Field label="Practice #" name="practiceNumber" value={header.practiceNumber} onChange={updateHeader} placeholder="e.g. 2" />
            <Field label="Phase" name="phase" value={header.phase} onChange={updateHeader} placeholder="e.g. General Prep" />
            <Field label="Theme / Skills of Focus" name="theme" value={header.theme} onChange={updateHeader} placeholder="e.g. Downball Attacks" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Key Outcomes</label>
            <textarea
              name="outcomes"
              value={header.outcomes}
              onChange={updateHeader}
              placeholder="e.g. Acquisition of passing and serving"
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map(section => (
            <SectionBlock
              key={section.id}
              section={section}
              onAddDrill={addDrill}
              onChangeDrill={changeDrill}
              onDeleteDrill={deleteDrill}
              onMoveDrill={moveDrill}
              onDeleteSection={deleteSection}
              onRenameSection={renameSection}
            />
          ))}
        </div>

        {/* Add section */}
        <button
          onClick={addSection}
          className="mt-6 w-full py-3 rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          + Add Section
        </button>
      </div>
    </div>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}
