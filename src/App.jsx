import React, { Fragment } from 'react'
import { Card } from './Card'
import { Board, buildGrid } from './Board'
import { Deck, randomCard } from './deck'
import { testGridCell } from './suits'
import './app.css'

function App() {
  const prePlayer1Deck = new Deck(0).shuffle()
  const prePlayer2Deck = new Deck(1).shuffle()
  const player1Deck = new Deck(0, prePlayer1Deck.cards)
  const player2Deck = new Deck(1, prePlayer2Deck.cards)
  const card = randomCard(0)
  const cardReversePips = { ...card, pips: [...card.pips].reverse() }
  const grid = buildGrid()
  const hands = []
  for (let i = 0; i < 2; i++) {
    hands.push(player1Deck.dealHand(7))
    hands.push(player2Deck.dealHand(7))
  }
  grid[0][0].locked = true
  grid[0][1].suit = 0
  grid[2][2].suit = 1
  grid[2][2].card = hands[0][0]
  grid[1][2].card = hands[1][0]
  const flips = testGridCell(grid)({ x: 2, y: 1 })
  return (
    <Fragment>
      <h1>Card Othello</h1>
      <a href={'https://github.com/darcnite3000/card-othello'}>
        Source on GitHub
      </a>
      <p>
        Cards have values from 2 - 14 with their attack pips being all adding up
        to the value
      </p>
      <h2>Proof that reversing pip array allows for comparison</h2>
      <h4>Random Card</h4>
      <code>
        <pre>{JSON.stringify(card.pips)}</pre>
      </code>
      <h4>Random Card Reversed Pips</h4>
      <code>
        <pre>{JSON.stringify(cardReversePips.pips)}</pre>
      </code>
      <div className="card-list" style={{ display: 'flex' }}>
        <Card {...card} style={{ margin: '5px' }} />
        <Card {...cardReversePips} style={{ margin: '5px' }} />
      </div>
      <h2>Hand Deal Examples</h2>
      <h3>Decks Before Deal</h3>
      <h4>Player 1 Deck</h4>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {prePlayer1Deck.cards.map(card => (
          <Card key={card.id} {...card} style={{ margin: '5px' }} />
        ))}
      </div>
      <h4>Player 2 Deck</h4>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {prePlayer2Deck.cards.map(card => (
          <Card key={card.id} {...card} style={{ margin: '5px' }} />
        ))}
      </div>
      <h3>Hands</h3>
      {hands.map((hand, i) => (
        <div key={i} className="card-list" style={{ display: 'flex' }}>
          {hand.map(card => (
            <Card key={card.id} {...card} style={{ margin: '5px' }} />
          ))}
        </div>
      ))}
      <h3>Decks After Deal</h3>
      <h4>Player 1 Deck</h4>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {player1Deck.cards.map(card => (
          <Card key={card.id} {...card} style={{ margin: '5px' }} />
        ))}
      </div>
      <h4>Player 2 Deck + sorted</h4>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {player2Deck
          .sort()
          .cards.map(card => (
            <Card key={card.id} {...card} style={{ margin: '5px' }} />
          ))}
      </div>
      <h2>Board Tests</h2>
      <Board grid={grid} />
      <p>Card Placed at 2,1 will flip:</p>
      <code>
        <pre>{JSON.stringify(flips, null, 2)}</pre>
      </code>
    </Fragment>
  )
}

export default App
