/**
 * Card attributes
 *
 * Each attribute should have the same number of options.
 */
const COLORS = ['red', 'green', 'blue'] as const;
const NUMBERS = [1, 2, 3] as const;
const SHAPES = ['diamond', 'squiggle', 'oval'] as const;
const SHADINGS = ['outline', 'striped', 'filled'] as const;

/**
 * Generates a range of numbers starting with 0
 *
 * @param size Size of the range
 */
export const range = (size: number): Array<number> => [...Array(size).keys()];

/**
 * Shuffles array in place. ES6 version
 * From https://stackoverflow.com/a/6274381
 *
 * @param {Array} a items An array containing the items.
 */
const shuffle = <T>(a: Array<T>): Array<T> => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

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
  range(81).map((i) => ({
    color: COLORS[i % 3],
    number: NUMBERS[Math.floor(i / 3) % 3],
    shape: SHAPES[Math.floor(i / 9) % 3],
    shading: SHADINGS[Math.floor(i / 27) % 3],
  }));

export const shuffleDeck = (deck: Deck): Deck => shuffle(deck);
