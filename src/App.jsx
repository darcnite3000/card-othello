import React, { Fragment } from 'react'
import Card from './Card'
import { Deck, randomCard } from './deck'

function App() {
  const player1Deck = new Deck(0).shuffle()
  const player2Deck = new Deck(1).shuffle()
  console.log(randomCard())
  console.log(randomCard(1, { value: 2, suit: 0 }))
  const hands = []
  for (let i = 0; i < 2; i++) {
    hands.push(player1Deck.dealHand(7))
    hands.push(player2Deck.dealHand(7))
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
