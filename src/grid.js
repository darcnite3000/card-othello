import { maxValue, suits } from './suits'
import { getRandomInt } from './utils'

const pipRel = [
  { dx: -1, dy: -1 },
  { dx: 0, dy: -1 },
  { dx: 1, dy: -1 },
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: -1, dy: 1 },
  { dx: 0, dy: 1 },
  { dx: 1, dy: 1 }
]

export const countGridLocked = (grid = [[]]) => {
  return grid.reduce(
    (count, row) =>
      count +
      row.reduce((count, { locked }) => (locked ? count + 1 : count), 0),
    0
  )
}
export const countGridSuited = (grid = [[]]) => {
  return grid.reduce(
    (count, row) =>
      count +
      row.reduce((count, { suit }) => (suit !== -1 ? count + 1 : count), 0),
    0
  )
}
export const countGridCards = (grid = [[]]) => {
  return grid.reduce(
    (count, row) =>
      count + row.reduce((count, { card }) => (card ? count + 1 : count), 0),
    0
  )
}

export const getGridCell = (grid = [[]]) => ({ x = 0, y = 0 }) =>
  grid[y][x] || {}
export const getGridRandomCell = (grid = [[{}]]) => {
  const maxY = grid.length - 1
  const maxX = grid[0].length - 1
  const getCell = getGridCell(grid)
  return () => getCell({ x: getRandomInt(0, maxY), y: getRandomInt(0, maxX) })
}

export function addLocked(grid, count = 0) {
  const randCell = getGridRandomCell(grid)
  const locked = countGridLocked(grid)
  const cards = countGridCards(grid)
  const cells = grid.length * grid[0].length
  const freeCells = cells - locked - cards
  count = count > freeCells ? freeCells : count
  for (let i = 0; i < count; i++) {
    let cell = randCell()
    while (!cell.locked || cell.card) cell = randCell()
    cell.locked = true
  }
  return grid
}

export function addSuited(grid, count = 0) {
  const randCell = getGridRandomCell(grid)
  const suited = countGridSuited(grid)
  const locked = countGridLocked(grid)
  const cells = grid.length * grid[0].length
  const freeCells = cells - locked - suited
  count = count > freeCells ? freeCells : count
  for (let i = 0; i < count; i++) {
    let cell = randCell()
    while (cell.locked || cell.suit !== -1) cell = randCell()
    cell.suit = suits[getRandomInt(0, suits.length - 1)]
  }
  return grid
}

export function buildGrid({
  width = 3,
  height = 3,
  defaultCell = { suit: -1, card: null, locked: false },
  locked = 0,
  suited = 0
}) {
  let grid = []
  for (let y = 0; y < height; y++) {
    let row = []
    for (let x = 0; x < width; x++) {
      row.push({
        ...defaultCell
      })
    }
    grid.push(row)
  }
  grid = addSuited(addLocked(grid, locked), suited)
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

export const testGridCell = grid => {
  const getCell = getGridCell(grid)
  return ({ x = 0, y = 0 }) => {
    const { card, suit } = getCell({ x, y })
    const flipCells = []
    if (card) {
      const status = getStatus(suit, card.suit)
      card.pips.map(pip => statusEffect(pip, status)).forEach((pip, i) => {
        if (pip) {
          const { dx, dy } = pipRel[i]
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
