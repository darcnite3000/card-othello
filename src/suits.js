import Heart from './Heart'
import Club from './Club'
import Diamond from './Diamond'
import Spade from './Spade'

export const suitFace = [Diamond, Club, Heart, Spade]
export const cardInitial = {
  14: 'A',
  10: 'T',
  11: 'J',
  12: 'Q',
  13: 'K'
}

function range(min = 0, max = 1) {
  let rangeValues = []
  for (let i = min; i <= max; i++) {
    rangeValues.push(i)
  }
  return rangeValues
}

export const minValue = 2
export const maxValue = 14
export const values = range(minValue, maxValue)
export const suits = range(0, suitFace.length - 1)
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
