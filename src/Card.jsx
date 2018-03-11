import React from 'react'
import './card.css'
import Heart from './Heart'
import Club from './Club'
import Diamond from './Diamond'
import Spade from './Spade'

const SUITS = [Diamond, Club, Heart, Spade]
const faceCard = {
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
const Card = ({
  player = defaultPlayer,
  value = defaultValue,
  pips = defaultPips,
  suit = defaultSuit,
  status = 0,
  style
}) => {
  const CardSuit = SUITS[suit]
  const face = faceCard[value] || value
  return (
    <div
      className={`card card-player-${player} card-suit-${suit} card-value-${value} card-status-${
        status < 0 ? 'weak' : status > 0 ? 'strong' : 'normal'
      }`}
      style={style}
    >
      <div className="value">
        <CardSuit value={face} />
      </div>
      <div className="pips">
        {pips.map((pip, i) => {
          if (pip) pip = pip + status < 0 ? 0 : pip + status
          return (
            <div key={i} className="pip">
              {pip ? faceCard[pip] || pip : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
