export const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
export const suits = [0, 1, 2, 3]

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max + 1)
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomPips(value) {
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

export class Deck {
  constructor(player = 0, deck = []) {
    this.player = player
    this._buildDeck(deck)
    this._discard = []
  }
  get cards() {
    return [...this._deck]
  }
  get discardPile() {
    return [...this._discard]
  }
  _buildDeck(deck = []) {
    this._deck = deck.length
      ? deck.map(card => ({ ...card, player: this.player }))
      : suits.reduce((cards, suit) => [
          ...cards,
          ...values.map(value => ({
            id: `${suit}-${value}`,
            value,
            suit,
            player: this.player,
            pips: getRandomPips(value)
          }))
        ])
    return this
  }
  sort(addDiscard = false) {
    if (addDiscard) this.restoreDiscard()
    this._deck.sort((a, b) => {
      if (a.suit < b.suit) return -1
      if (a.suit > b.suit) return 1
      return a.suit - b.suit || a.value - b.value
    })
    return this
  }
  shuffle(addDiscard = false) {
    if (addDiscard) this.restoreDiscard()
    var currentIndex = this._deck.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = this._deck[currentIndex]
      this._deck[currentIndex] = this._deck[randomIndex]
      this._deck[randomIndex] = temporaryValue
    }
    return this
  }
  returnCards(cards = [], pos = getRandomInt(0, this._deck.length - 1)) {
    this._deck = [
      ...this._deck.slice(0, pos),
      ...cards,
      ...this._deck.slice(pos)
    ]
  }
  restoreDiscard() {
    this._deck = [...this._deck, ...this._discard]
    return this
  }
  discardCards(cards = []) {
    this._discard = [
      ...cards.map(card => ({ ...card, player: this.player })),
      ...this._discard
    ]
  }
  dealHand(size = 1) {
    let hand = []
    if (this._deck.length <= size) {
      hand = this._deck
      this._deck = []
      return hand
    }
    hand = this._deck.slice(0, size)
    this._deck = this._deck.slice(size)
    return hand
  }
}
