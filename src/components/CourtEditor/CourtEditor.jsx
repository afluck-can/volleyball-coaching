import { useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import { Stage, Layer, Rect, Line, Circle, RegularPolygon, Arrow, Text } from 'react-konva'
import Toolbar from './Toolbar'

const COURT_W = 700
const COURT_H = 500
const PADDING = 40

// Court dimensions in pixels (inside the padding)
const CW = COURT_W - PADDING * 2  // 620
const CH = COURT_H - PADDING * 2  // 420

const CourtEditor = forwardRef(function CourtEditor(_, ref) {
  const stageRef = useRef(null)
  const [activeTool, setActiveTool] = useState('select')
  const [elements, setElements] = useState([])
  const [arrowStart, setArrowStart] = useState(null)
  const [playerCount, setPlayerCount] = useState(0)
  const [coachCount, setCoachCount] = useState(0)

  useImperativeHandle(ref, () => ({
    toDataURL: () => stageRef.current?.toDataURL({ pixelRatio: 2 }),
  }))

  const handleStageClick = useCallback((e) => {
    const stage = e.target.getStage()
    const pos = stage.getPointerPosition()

    if (activeTool === 'player') {
      const n = playerCount + 1
      setPlayerCount(n)
      setElements(prev => [...prev, {
        id: `player-${Date.now()}`,
        type: 'player',
        x: pos.x,
        y: pos.y,
        label: `P${n}`,
      }])
    } else if (activeTool === 'coach') {
      const n = coachCount + 1
      setCoachCount(n)
      setElements(prev => [...prev, {
        id: `coach-${Date.now()}`,
        type: 'coach',
        x: pos.x,
        y: pos.y,
        label: `C${n}`,
      }])
    } else if (activeTool === 'ball') {
      setElements(prev => [...prev, {
        id: `ball-${Date.now()}`,
        type: 'ball',
        x: pos.x,
        y: pos.y,
      }])
    } else if (activeTool === 'arrow') {
      if (!arrowStart) {
        setArrowStart(pos)
      } else {
        setElements(prev => [...prev, {
          id: `arrow-${Date.now()}`,
          type: 'arrow',
          points: [arrowStart.x, arrowStart.y, pos.x, pos.y],
        }])
        setArrowStart(null)
      }
    }
  }, [activeTool, arrowStart, playerCount, coachCount])

  const handleElementClick = useCallback((e, id) => {
    if (activeTool === 'delete') {
      e.cancelBubble = true
      setElements(prev => prev.filter(el => el.id !== id))
    }
  }, [activeTool])

  const handleDragEnd = useCallback((e, id) => {
    const { x, y } = e.target.position()
    setElements(prev => prev.map(el => el.id === id ? { ...el, x, y } : el))
  }, [])

  const handleClear = () => {
    setElements([])
    setPlayerCount(0)
    setCoachCount(0)
    setArrowStart(null)
  }

  const draggable = activeTool === 'select'

  // Court geometry helpers
  const ox = PADDING  // court origin x
  const oy = PADDING  // court origin y
  const netY = oy + CH / 2
  const attackLineOffset = CH / 6  // 1/3 of half-court

  return (
    <div>
      <Toolbar activeTool={activeTool} onToolChange={setActiveTool} onClear={handleClear} />
      {activeTool === 'arrow' && arrowStart && (
        <p className="text-xs text-blue-600 mb-2">Click a second point to place the arrow end.</p>
      )}
      <div className="border border-gray-300 rounded-lg overflow-hidden inline-block">
        <Stage
          ref={stageRef}
          width={COURT_W}
          height={COURT_H}
          onClick={handleStageClick}
          style={{ cursor: activeTool === 'select' ? 'default' : activeTool === 'delete' ? 'crosshair' : 'crosshair' }}
        >
          <Layer>
            {/* Background */}
            <Rect x={0} y={0} width={COURT_W} height={COURT_H} fill="#c8a96a" />

            {/* Full court */}
            <Rect x={ox} y={oy} width={CW} height={CH} fill="#d4a96a" stroke="#fff" strokeWidth={2} />

            {/* Net */}
            <Line points={[ox, netY, ox + CW, netY]} stroke="#fff" strokeWidth={3} />

            {/* Attack lines */}
            <Line points={[ox, netY - attackLineOffset, ox + CW, netY - attackLineOffset]} stroke="#fff" strokeWidth={1.5} dash={[6, 4]} />
            <Line points={[ox, netY + attackLineOffset, ox + CW, netY + attackLineOffset]} stroke="#fff" strokeWidth={1.5} dash={[6, 4]} />

            {/* Centre line (on court) */}
            <Line points={[ox + CW / 2, oy, ox + CW / 2, oy + CH]} stroke="rgba(255,255,255,0.3)" strokeWidth={1} />

            {/* Net label */}
            <Text x={ox + CW / 2 - 15} y={netY - 20} text="NET" fill="rgba(255,255,255,0.6)" fontSize={12} />

            {/* Team labels */}
            <Text x={ox + 8} y={oy + 8} text="Team A" fill="rgba(255,255,255,0.5)" fontSize={11} />
            <Text x={ox + 8} y={oy + CH - 20} text="Team B" fill="rgba(255,255,255,0.5)" fontSize={11} />

            {/* Arrow preview while placing */}
            {arrowStart && (
              <Circle x={arrowStart.x} y={arrowStart.y} radius={5} fill="rgba(59,130,246,0.7)" />
            )}

            {/* Placed elements */}
            {elements.map(el => {
              if (el.type === 'player') {
                return (
                  <Circle
                    key={el.id}
                    x={el.x}
                    y={el.y}
                    radius={16}
                    fill="#2563eb"
                    stroke="#fff"
                    strokeWidth={2}
                    draggable={draggable}
                    onDragEnd={e => handleDragEnd(e, el.id)}
                    onClick={e => handleElementClick(e, el.id)}
                    onTap={e => handleElementClick(e, el.id)}
                  />
                )
              }
              if (el.type === 'coach') {
                return (
                  <RegularPolygon
                    key={el.id}
                    x={el.x}
                    y={el.y}
                    sides={4}
                    radius={18}
                    fill="#16a34a"
                    stroke="#fff"
                    strokeWidth={2}
                    draggable={draggable}
                    onDragEnd={e => handleDragEnd(e, el.id)}
                    onClick={e => handleElementClick(e, el.id)}
                    onTap={e => handleElementClick(e, el.id)}
                  />
                )
              }
              if (el.type === 'ball') {
                return (
                  <Circle
                    key={el.id}
                    x={el.x}
                    y={el.y}
                    radius={10}
                    fill="#f59e0b"
                    stroke="#fff"
                    strokeWidth={1.5}
                    draggable={draggable}
                    onDragEnd={e => handleDragEnd(e, el.id)}
                    onClick={e => handleElementClick(e, el.id)}
                    onTap={e => handleElementClick(e, el.id)}
                  />
                )
              }
              if (el.type === 'arrow') {
                return (
                  <Arrow
                    key={el.id}
                    points={el.points}
                    stroke="#ef4444"
                    strokeWidth={2.5}
                    fill="#ef4444"
                    pointerLength={10}
                    pointerWidth={8}
                    onClick={e => handleElementClick(e, el.id)}
                    onTap={e => handleElementClick(e, el.id)}
                  />
                )
              }
              return null
            })}

            {/* Token labels (drawn on top) */}
            {elements.filter(el => el.label).map(el => (
              <Text
                key={`label-${el.id}`}
                x={el.x - 8}
                y={el.y - 6}
                text={el.label}
                fill="#fff"
                fontSize={11}
                fontStyle="bold"
                listening={false}
              />
            ))}
          </Layer>
        </Stage>
      </div>
      <p className="text-xs text-gray-400 mt-1">
        Tools: Select to drag tokens | Player/Coach/Ball to place | Arrow: click start then end | Delete to remove
      </p>
    </div>
  )
})

export default CourtEditor
