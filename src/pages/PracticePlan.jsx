import { useRef, useState } from 'react'
import CourtEditor from '../components/CourtEditor/CourtEditor'

export default function PracticePlan() {
  const courtRef = useRef(null)
  const [exporting, setExporting] = useState(false)

  const [form, setForm] = useState({
    title: '',
    date: '',
    ageGroup: '',
    concept: '',
    outcomes: '',
    notes: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleExport = async () => {
    setExporting(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const courtImage = courtRef.current?.toDataURL() ?? ''

      const html = `
        <div style="font-family: Arial, sans-serif; padding: 32px; max-width: 800px; margin: 0 auto; color: #1a1a1a;">
          <h1 style="font-size: 24px; font-weight: 800; color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 8px; margin-bottom: 20px;">
            ${form.title || 'Practice Plan'}
          </h1>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
            <div><strong>Date:</strong> ${form.date || '—'}</div>
            <div><strong>Age Group / Level:</strong> ${form.ageGroup || '—'}</div>
          </div>

          ${form.concept ? `<div style="margin-bottom: 16px;"><strong>Key Concept:</strong><p style="margin: 4px 0 0; color: #374151;">${form.concept}</p></div>` : ''}
          ${form.outcomes ? `<div style="margin-bottom: 16px;"><strong>Key Outcomes / Goals:</strong><p style="margin: 4px 0 0; color: #374151;">${form.outcomes}</p></div>` : ''}
          ${form.notes ? `<div style="margin-bottom: 16px;"><strong>Notes:</strong><p style="margin: 4px 0 0; color: #374151;">${form.notes}</p></div>` : ''}

          <h2 style="font-size: 18px; font-weight: 700; margin: 24px 0 12px; color: #1e40af;">Court Diagram</h2>
          ${courtImage ? `<img src="${courtImage}" style="width: 100%; border: 1px solid #e5e7eb; border-radius: 8px;" />` : '<p style="color: #9ca3af;">No court diagram created.</p>'}
        </div>
      `

      await html2pdf()
        .set({
          margin: 0,
          filename: `${form.title || 'practice-plan'}.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(html)
        .save()
    } catch (err) {
      console.error('PDF export failed', err)
      alert('PDF export failed. Please try again.')
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-1">Practice Plan Builder</h1>
            <p className="text-gray-500">Fill in your session details and design the court diagram, then export to PDF.</p>
          </div>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {exporting ? 'Exporting…' : 'Export to PDF'}
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-5">Session Details</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Session Title" name="title" value={form.title} onChange={handleChange} placeholder="e.g. Tuesday Night Practice" />
            <Field label="Date" name="date" value={form.date} onChange={handleChange} type="date" />
            <Field label="Age Group / Level" name="ageGroup" value={form.ageGroup} onChange={handleChange} placeholder="e.g. U18 Intermediate" />
          </div>
          <div className="mt-5 space-y-5">
            <TextArea label="Key Concept" name="concept" value={form.concept} onChange={handleChange} placeholder="e.g. Serve-receive and transition offense" />
            <TextArea label="Key Outcomes / Measurable Goals" name="outcomes" value={form.outcomes} onChange={handleChange} placeholder="e.g. 80% positive pass rate on float serves; hitters contact 3 kills per set" />
            <TextArea label="Notes" name="notes" value={form.notes} onChange={handleChange} placeholder="Any additional notes for the session…" />
          </div>
        </div>

        {/* Court Editor */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-5">Court Diagram</h2>
          <CourtEditor ref={courtRef} />
        </div>
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
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  )
}

function TextArea({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={3}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </div>
  )
}
