import React from 'react'
import BoardCell from './BoardCell'

export function buildGrid(
  width = 3,
  height = 3,
  defaultCell = { suit: -1, card: null, locked: false }
) {
  let grid = []
  for (let y = 0; y < height; y++) {
    let row = []
    for (let x = 0; x < width; x++) {
      row.push({ ...defaultCell })
    }
    grid.push(row)
  }
  return grid
}

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
