import React from 'react'
import { Card } from './Card'
import { suitFace, getStatus } from './suits'
import './cell.css'

const LockedCell = () => <div className="cell-base-locked" />
const EmptyCell = () => <div className="cell-base-empty" />

const BoardCell = ({ suit = -1, card, style, locked = false }) => {
  const BaseCell = locked
    ? LockedCell
    : suit === -1 ? EmptyCell : suitFace[suit]
  return (
    <div
      className={`cell${locked ? ' cell-locked' : ''}${
        suit !== -1 ? ` cell-suit-${suit}` : ''
      }`}
      style={style}
    >
      <div className="cell-base">
        <BaseCell />
      </div>
      <div className="cell-card">
        {card && <Card {...card} status={getStatus(suit, card.suit)} />}
      </div>
    </div>
  )
}

export default BoardCell
