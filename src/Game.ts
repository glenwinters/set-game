import { createDeck, shuffleDeck } from './Deck'

export const SetGame = {
  setup: () => ({ board: shuffleDeck(createDeck()).slice(0, 12) }),
};
