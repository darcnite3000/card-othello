import {
  generateNewGame,
  defaultSuits,
  generateNewPlayer,
  gameReducer,
  defaultGame,
  UPDATE_PLAYER,
  REMOVE_PLAYER,
  ADD_PLAYER
} from './game'

describe('default game', () => {
  const gameState = generateNewGame()
  it('to generate a valid board', () => {
    expect(gameState.board.length).toBe(3)
    expect(gameState.board[0].length).toBe(3)
  })
  it('to assign two players', () => {
    const p1 = generateNewPlayer('Player 1')
    const p2 = generateNewPlayer('Player 2')
    expect(gameState.players[0]).toEqual(p1)
    expect(gameState.players[1]).toEqual(p2)
  })
  it('sets player 1 to start', () => {
    expect(gameState.start).toBe(0)
  })
  it('sets the default suits', () => {
    expect(gameState.suits).toBe(defaultSuits)
  })
})

describe('gameReducer', () => {
  it('returns the default state', () => {
    const state = gameReducer()
    expect(state).toEqual(defaultGame)
  })
  it('can update a player', () => {
    const state = gameReducer(defaultGame, {
      type: UPDATE_PLAYER,
      payload: {
        id: 0,
        player: { name: 'John' }
      }
    })
    expect(state.players[0].name).toBe('John')
  })
  it('can remove a player', () => {
    const state = gameReducer(defaultGame, {
      type: REMOVE_PLAYER,
      payload: {
        id: 0
      }
    })
    expect(state.players.length).toBe(1)
    expect(state.players[0].name).toBe(defaultGame.players[1].name)
  })
  it('can add a player', () => {
    const state = gameReducer(defaultGame, {
      type: ADD_PLAYER,
      payload: generateNewPlayer('John')
    })
    expect(state.players.length).toBe(3)
    expect(state.players[2].name).toBe('John')
  })
})
