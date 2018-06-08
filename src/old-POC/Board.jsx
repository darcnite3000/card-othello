import React from 'react'
import BoardCell from './BoardCell'
import { buildGrid } from './grid'

const defaultGrid = buildGrid()
export const Board = ({ grid = defaultGrid }) => (
  <div className="board">
    {grid.map((row, y) => (
      <div key={y} style={{ display: 'flex' }}>
        {row.map((cell, x) => <BoardCell key={x} {...cell} />)}
      </div>
    ))}
  </div>
)
