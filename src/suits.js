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
