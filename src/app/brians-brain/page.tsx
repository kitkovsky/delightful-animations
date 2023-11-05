'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/Button'
import { AutomatonCanvas } from '@/components/AutomatonCanvas'
import {
  randomizeGrid,
  createGrid,
  updateGrid,
  drawGrid,
  type BBCell,
} from '@/automata-logic/briansBrain'

export default function BriansBrainPage() {
  const [isRunning, setIsRunning] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gridRef = useRef<BBCell[][]>([])

  return (
    <div className="relative flex h-full max-h-screen flex-col items-center justify-center gap-4 py-4 md:py-6 lg:py-8">
      <div className="flex gap-4">
        <Button onClick={() => setIsRunning((prev) => !prev)}>
          {isRunning ? 'stop' : 'start'}
        </Button>
        <Button onClick={() => randomizeGrid(gridRef, canvasRef)}>
          randomize
        </Button>
      </div>

      <AutomatonCanvas
        canvasRef={canvasRef}
        gridRef={gridRef}
        createGrid={createGrid}
        updateGrid={updateGrid}
        drawGrid={drawGrid}
        isRunning={isRunning}
      />
    </div>
  )
}
