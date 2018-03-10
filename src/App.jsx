import React, { Fragment } from 'react'
import Card from './Card'

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const suits = [0, 1, 2, 3]

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max + 1)
  return Math.floor(Math.random() * (max - min)) + min
}

function getPips(value) {
  const attacks =
    value <= 4
      ? getRandomInt(Math.floor(value / 2) + 1, value)
      : getRandomInt(2, 6)
  let currentStrength = value
  let pips = [0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < attacks; i++) {
    const attacksLeft = attacks - i - 1
    const maxAttack = currentStrength - attacksLeft
    const attackStrength = attacksLeft ? getRandomInt(1, maxAttack) : maxAttack
    currentStrength -= attackStrength
    let attackDirection = getRandomInt(0, 7)
    while (pips[attackDirection] !== 0) {
      attackDirection = getRandomInt(0, 7)
    }
    pips[attackDirection] = attackStrength
  }
  return pips
}

function App() {
  return (
    <Fragment>
      <h1>Card Othello</h1>
      {suits.map(suit => (
        <div key={suit} className="card-list" style={{ display: 'flex' }}>
          {values.map(value => (
            <Card
              key={value}
              value={value}
              suit={suit}
              pips={getPips(value)}
              status={0}
              style={{ margin: '5px' }}
            />
          ))}
        </div>
      ))}
    </Fragment>
  )
}

export default App
