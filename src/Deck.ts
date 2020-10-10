import _ from "lodash";

/**
 * Card attributes
 *
 * Each attribute should have the same number of options.
 */
const COLORS = ['red', 'green', 'blue'] as const;
const NUMBERS = [1, 2, 3] as const;
const SHAPES = ['diamond', 'squiggle', 'oval'] as const;
const SHADINGS = ['outline', 'striped', 'filled'] as const;

type Card = {
  color: typeof COLORS[number];
  number: typeof NUMBERS[number];
  shape: typeof SHAPES[number];
  shading: typeof SHADINGS[number];
};
type Deck = Card[];

/**
 * Creates a deck of Set cards
 *
 * This assumes that all attributes have the same number of options.
 */
export const createDeck = (): Deck =>
  _.range(81).map((i) => ({
    color: COLORS[i % 3],
    number: NUMBERS[Math.floor(i / 3) % 3],
    shape: SHAPES[Math.floor(i / 9) % 3],
    shading: SHADINGS[Math.floor(i / 27) % 3],
  }));

export const shuffleDeck = (deck: Deck): Deck => _.shuffle(deck);
