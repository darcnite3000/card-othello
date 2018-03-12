import { maxValue } from './suits'

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

export function getStatus(cellSuit, cardSuit) {
  return cellSuit === -1 ? 0 : cellSuit === cardSuit ? 1 : -1
}
export function statusEffect(
  pip = 0,
  status = 0,
  { max = maxValue, min = 0 } = {}
) {
  if (pip) {
    const newPip = pip + status
    return newPip < min ? min : newPip > max ? max : newPip
  }
  return pip
}

export const getGridCell = grid => ({ x = 0, y = 0 }) => grid[y][x] || {}
const pipRel = [
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 1, y: 1 }
]
export const testGridCell = grid => {
  const getCell = getGridCell(grid)
  return ({ x = 0, y = 0 }) => {
    const { card, suit } = getCell({ x, y })
    const flipCells = []
    if (card) {
      const status = getStatus(suit, card.suit)
      card.pips.map(pip => statusEffect(pip, status)).forEach((pip, i) => {
        if (pip) {
          const { x: dx, y: dy } = pipRel[i]
          const cXY = { x: x + dx, y: y + dy }
          const { card: cCard, suit: cSuit } = getCell(cXY)
          if (cCard && cCard.player !== card.player) {
            const cStatus = getStatus(cSuit, cCard.suit)
            const compPips = [...cCard.pips].reverse()
            if (statusEffect(compPips[i], cStatus) < pip) {
              flipCells.push(cXY)
            }
          }
        }
      })
    }
    return flipCells
  }
}
