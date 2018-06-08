import { range } from '../lib/utils'
import Heart from './Heart'
import Club from './Club'
import Diamond from './Diamond'
import Spade from './Spade'

export const suitFace = [Diamond, Club, Heart, Spade]
export const cardInitial = {
  1: 'A',
  10: 'T',
  11: 'J',
  12: 'Q',
  13: 'K'
}

export const minValue = 1
export const maxValue = 13
export const values = range(minValue, maxValue)
export const suits = range(0, suitFace.length - 1)
