import React from 'react'
import './card.css'
import { cardInitial, suitFace } from './suits'
import { statusEffect } from './grid'

const defaultPips = [0, 0, 0, 0, 0, 0, 0, 0]
const defaultSuit = 0
const defaultValue = 1
const defaultPlayer = 0

function faceValue(value) {
  return cardInitial[value] || value
}

export const Card = ({
  player = defaultPlayer,
  value = defaultValue,
  pips = defaultPips,
  suit = defaultSuit,
  status = 0,
  style
}) => {
  const CardSuit = suitFace[suit]
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
