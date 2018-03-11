import React, { Fragment } from 'react'
import Card from './Card'
import { Deck } from './deck'

function App() {
  const deck = new Deck().shuffle()
  const hands = []
  for (let i = 0; i < 4; i++) {
    hands.push(deck.dealHand(4))
  }
  return (
    <Fragment>
      <h1>Card Othello</h1>
      <p>
        Cards have values from 2 - 14 with their attack pips being all adding up
        to the value
      </p>
      {hands.map((hand, i) => (
        <div key={i} className="card-list" style={{ display: 'flex' }}>
          {hand.map(card => (
            <Card key={card.id} {...card} style={{ margin: '5px' }} />
          ))}
        </div>
      ))}
    </Fragment>
  )
}

export default App
