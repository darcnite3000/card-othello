// @flow

export type Suit = any

export type PipPool = {
  five: number,
  three: number,
  two: number
}
export type Card = {
  player?: Player,
  controller?: Player,
  value: number,
  pips: number[]
}
export type Cell = {
  x: number,
  y: number,
  card?: Card,
  suit?: number
}
export type Player = {
  name: string,
  suits: Suit[],
  deck: Card[],
  pips: PipPool,
  score: number,
  wins: number
}
export type Game = {
  suits: Suit[],
  players: Player[],
  board: Cell[][],
  start: number
}
export type GameConfig = {
  size?: number,
  players?: Player[]
}
export const defaultSuits = ['Diamond', 'Club', 'Heart', 'Spade']

export function buildBoard(size: number): Cell[][] {
  let board = []
  for (let x = 0; x < size; x++) {
    board[x] = []
    for (let y = 0; y < size; y++) {
      board[x][y] = { x, y }
    }
  }
  return board
}

export const defaultPipPool: PipPool = {
  five: 15,
  three: 15,
  two: 15
}
export function generateNewPlayer(name: string, config: any = {}): Player {
  return {
    name,
    score: 0,
    wins: 0,
    suits: [],
    deck: [],
    pips: defaultPipPool,
    ...config
  }
}

export function generateNewGame({
  size = 3,
  players = [generateNewPlayer('Player 1'), generateNewPlayer('Player 2')]
}: GameConfig = {}): Game {
  return {
    board: buildBoard(size),
    players,
    start: 0,
    suits: defaultSuits
  }
}
export const defaultGame = generateNewGame()

export const ADD_PLAYER = '_GAME_ADD_PLAYER_'
export const REMOVE_PLAYER = '_GAME_REMOVE_PLAYER_'
export const UPDATE_PLAYER = '_GAME_UPDATE_PLAYER_'

//$FlowFixMe
export function gameReducer(state = generateNewGame(), action = { type: '' }) {
  switch (action.type) {
    case ADD_PLAYER:
      return addPlayer(state, action.payload)
    case REMOVE_PLAYER:
      return deletePlayer(state, action.payload.id)
    case UPDATE_PLAYER:
      return updatePlayer(state, action.payload.id, action.payload.player)
    default:
      return state
  }
}

function addPlayer(state, player) {
  const players = [...state.players, player]
  return { ...state, players }
}

function deletePlayer(state, id) {
  if (state.players[id]) {
    const players = [
      ...state.players.slice(0, id),
      ...state.players.slice(id + 1)
    ]
    return { ...state, players }
  }
  return state
}

function updatePlayer(state, id, player) {
  const currentPlayer = state.players[id]
  if (currentPlayer) {
    const newPlayer = { ...currentPlayer, ...player }
    const players = [
      ...state.players.slice(0, id),
      newPlayer,
      ...state.players.slice(id + 1)
    ]
    return { ...state, players }
  }
  return state
}
