import React, { Component } from 'react'
import './app.css'

function Game() {
  return <div>Coming Soon</div>
}

function Rules() {
  return (
    <div>
      <h3>Game Setup:</h3>
      <ul>
        <li>Determine Starting Player</li>
        <li>Choose 24 cards for each player and 2 suit tokens</li>
        <li>Assign Pip Pools, each player gets 15 5pt, 15 3pt and 15 2pt</li>
        <li>Shuffle player decks</li>
      </ul>
      <h3>Round:</h3>
      <h4>Setup Phase:</h4>
      <ul>
        <li>Players draw 8 cards from their deck</li>
        <li>
          Assign Attack Pips to cards from the pool up to the value of the card,
          Aces can be assigned one pip of any value
        </li>
        <li>
          Players may place a suit token down on the board (in turn order)
        </li>
      </ul>
      <h4>Turn:</h4>
      <ol>
        <li>Place a card in an empty grid cell</li>
        <li>
          If there is a suit token on the cell of the same type, increase the
          Attack Pips Powers by 1
        </li>
        <li>
          If there is a suit token on the cell of another type, decrease the
          Attack Pips Powers by 1
        </li>
        <li>
          If the cards Attack Pips point to another card it will attack it
        </li>
      </ol>

      <h4>Attacking</h4>
      <h5>Win Cases:</h5>
      <ul>
        <li>If the Attack direction is undefended</li>
        <li>
          If the Defender&apos;s corresponding Attack Pip is less than the
          Attacker&apos;s
        </li>
      </ul>
      <p>Upon being defeated the card then will attack it&apos;s neighbours</p>

      <h4>Round End:</h4>
      <p>
        The round ends when there is no more cards to play, or grid positions to
        play to
      </p>
      <h5>Round Cleanup:</h5>
      <ol>
        <li>Controlled Cards are counted and added to score</li>
        <li>Player with the most Controlled Cards earns a Round Win token</li>
        <li>Hands are discarded</li>
        <li>Used Suit Tokens are discarded</li>
        <li>Starting Player is incremented</li>
      </ol>

      <h4>Game End:</h4>
      <p>The game ends after three rounds</p>
      <h5>Winner</h5>
      <p>Winning is based on Score + Round Win tokens * 4</p>
    </div>
  )
}

class App extends Component {
  state = {
    page: 'rules'
  }
  showRules = event => {
    event.preventDefault()
    this.setState({ page: 'rules' })
  }
  showGame = event => {
    event.preventDefault()
    this.setState({ page: 'game' })
  }
  render() {
    return (
      <div>
        <header>
          <h1>Card Othello</h1>
          <nav>
            <a href="#" onClick={this.showGame}>
              Game
            </a>
            <a href="#" onClick={this.showRules}>
              Rules
            </a>
            <a href={'https://github.com/darcnite3000/card-othello'}>
              Source on GitHub
            </a>
          </nav>
        </header>
        {this.state.page === 'rules' && <Rules />}
        {this.state.page === 'game' && <Game />}
      </div>
    )
  }
}

export default App
