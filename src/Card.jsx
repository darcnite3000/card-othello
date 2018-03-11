import React from 'react'
import './card.css'
import Heart from './Heart'
import Club from './Club'
import Diamond from './Diamond'
import Spade from './Spade'

const SUITS = [Diamond, Club, Heart, Spade]
const cardInitial = {
  14: 'A',
  10: 'T',
  11: 'J',
  12: 'Q',
  13: 'K'
}
const defaultPips = [0, 0, 0, 0, 0, 0, 0, 0]
const defaultSuit = 0
const defaultValue = 1
const defaultPlayer = 0

function statusEffect(pip = 0, status = 0, { max = 14, min = 0 } = {}) {
  if (pip) {
    const newPip = pip + status
    return newPip < min ? min : newPip > max ? max : newPip
  }
  return pip
}
function faceValue(value) {
  return cardInitial[value] || value
}

const Card = ({
  player = defaultPlayer,
  value = defaultValue,
  pips = defaultPips,
  suit = defaultSuit,
  status = 0,
  style
}) => {
  const CardSuit = SUITS[suit]
  return (
    <div
      className={`card card-player-${player} card-suit-${suit} card-value-${value} card-status-${
        status < 0 ? 'weak' : status > 0 ? 'strong' : 'normal'
      }`}
      style={style}
    >
      <div className="value">
        <CardSuit value={faceValue(value)} />
      </div>
      <div className="pips">
        {pips.map((pip, i) => {
          pip = statusEffect(pip, status)
          return (
            <div key={i} className="pip">
              {pip ? faceValue(pip) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
