import { useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import { Stage, Layer, Rect, Line, Circle, RegularPolygon, Arrow, Text } from 'react-konva'

const W = 260
const H = 200
const PAD = 16
const CW = W - PAD * 2
const CH = H - PAD * 2

const MiniCourt = forwardRef(function MiniCourt({ onCapture }, ref) {
  const stageRef = useRef(null)
  const [tool, setTool] = useState('select')
  const [elements, setElements] = useState([])
  const [arrowStart, setArrowStart] = useState(null)
  const [pCount, setPCount] = useState(0)
  const [cCount, setCCount] = useState(0)

  useImperativeHandle(ref, () => ({
    toDataURL: () => stageRef.current?.toDataURL({ pixelRatio: 2 }),
    clear: () => { setElements([]); setPCount(0); setCCount(0); setArrowStart(null) },
  }))

  const netY = PAD + CH / 2

  const handleClick = useCallback((e) => {
    const pos = e.target.getStage().getPointerPosition()
    if (tool === 'player') {
      const n = pCount + 1; setPCount(n)
      setElements(p => [...p, { id: `p-${Date.now()}`, type: 'player', x: pos.x, y: pos.y, label: `P${n}` }])
    } else if (tool === 'coach') {
      const n = cCount + 1; setCCount(n)
      setElements(p => [...p, { id: `c-${Date.now()}`, type: 'coach', x: pos.x, y: pos.y, label: `C${n}` }])
    } else if (tool === 'ball') {
      setElements(p => [...p, { id: `b-${Date.now()}`, type: 'ball', x: pos.x, y: pos.y }])
    } else if (tool === 'arrow') {
      if (!arrowStart) { setArrowStart(pos) }
      else {
        setElements(p => [...p, { id: `a-${Date.now()}`, type: 'arrow', points: [arrowStart.x, arrowStart.y, pos.x, pos.y] }])
        setArrowStart(null)
      }
    }
  }, [tool, arrowStart, pCount, cCount])

  const handleElClick = useCallback((e, id) => {
    if (tool === 'delete') { e.cancelBubble = true; setElements(p => p.filter(el => el.id !== id)) }
  }, [tool])

  const handleDragEnd = useCallback((e, id) => {
    const { x, y } = e.target.position()
    setElements(p => p.map(el => el.id === id ? { ...el, x, y } : el))
  }, [])

  const draggable = tool === 'select'

  const tools = [
    { id: 'select', icon: '↖' }, { id: 'player', icon: 'P' }, { id: 'coach', icon: 'C' },
    { id: 'ball', icon: 'O' }, { id: 'arrow', icon: '→' }, { id: 'delete', icon: '✕' },
  ]

  return (
    <div>
      <div className="flex gap-1 mb-1 flex-wrap">
        {tools.map(t => (
          <button
            key={t.id}
            onClick={() => setTool(t.id)}
            className={`px-2 py-0.5 text-xs rounded border font-bold transition-colors ${
              tool === t.id ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-600 border-gray-300'
            }`}
          >
            {t.icon}
          </button>
        ))}
        <button onClick={() => { setElements([]); setPCount(0); setCCount(0); setArrowStart(null) }}
          className="ml-auto px-2 py-0.5 text-xs rounded border border-red-300 text-red-500 hover:bg-red-50">
          Clear
        </button>
        {onCapture && (
          <button onClick={() => onCapture(stageRef.current?.toDataURL({ pixelRatio: 2 }))}
            className="px-2 py-0.5 text-xs rounded border border-green-400 text-green-700 hover:bg-green-50 font-medium">
            Save
          </button>
        )}
      </div>
      <div className="border border-gray-300 rounded overflow-hidden">
        <Stage ref={stageRef} width={W} height={H} onClick={handleClick} style={{ cursor: 'crosshair' }}>
          <Layer>
            <Rect x={0} y={0} width={W} height={H} fill="#c8a96a" />
            <Rect x={PAD} y={PAD} width={CW} height={CH} fill="#d4a96a" stroke="#fff" strokeWidth={1.5} />
            <Line points={[PAD, netY, PAD + CW, netY]} stroke="#fff" strokeWidth={2.5} />
            <Line points={[PAD, netY - CH/6, PAD + CW, netY - CH/6]} stroke="rgba(255,255,255,0.6)" strokeWidth={1} dash={[4,3]} />
            <Line points={[PAD, netY + CH/6, PAD + CW, netY + CH/6]} stroke="rgba(255,255,255,0.6)" strokeWidth={1} dash={[4,3]} />
            <Text x={PAD + CW/2 - 10} y={netY - 12} text="NET" fill="rgba(255,255,255,0.5)" fontSize={9} />
            {arrowStart && <Circle x={arrowStart.x} y={arrowStart.y} radius={4} fill="rgba(59,130,246,0.7)" />}
            {elements.map(el => {
              if (el.type === 'player') return (
                <Circle key={el.id} x={el.x} y={el.y} radius={12} fill="#2563eb" stroke="#fff" strokeWidth={1.5}
                  draggable={draggable} onDragEnd={e => handleDragEnd(e, el.id)} onClick={e => handleElClick(e, el.id)} />
              )
              if (el.type === 'coach') return (
                <RegularPolygon key={el.id} x={el.x} y={el.y} sides={4} radius={14} fill="#16a34a" stroke="#fff" strokeWidth={1.5}
                  draggable={draggable} onDragEnd={e => handleDragEnd(e, el.id)} onClick={e => handleElClick(e, el.id)} />
              )
              if (el.type === 'ball') return (
                <Circle key={el.id} x={el.x} y={el.y} radius={7} fill="#f59e0b" stroke="#fff" strokeWidth={1}
                  draggable={draggable} onDragEnd={e => handleDragEnd(e, el.id)} onClick={e => handleElClick(e, el.id)} />
              )
              if (el.type === 'arrow') return (
                <Arrow key={el.id} points={el.points} stroke="#ef4444" strokeWidth={2} fill="#ef4444"
                  pointerLength={7} pointerWidth={6} onClick={e => handleElClick(e, el.id)} />
              )
              return null
            })}
            {elements.filter(el => el.label).map(el => (
              <Text key={`lbl-${el.id}`} x={el.x - 6} y={el.y - 5} text={el.label} fill="#fff" fontSize={9} fontStyle="bold" listening={false} />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  )
})

export default MiniCourt
