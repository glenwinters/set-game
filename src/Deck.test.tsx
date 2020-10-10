import * as Deck from "./Deck";

test('createDeck', () => {
    var deck = Deck.createDeck();
    const firstCard = deck[0];

    expect(deck.length).toBe(81);

    // Make sure it's a card
    expect(firstCard.color).toBeDefined();
    expect(firstCard.shape).toBeDefined();
    expect(firstCard.shading).toBeDefined();
    expect(firstCard.number).toBeDefined();

    expect(firstCard.color).toEqual('red');
    expect(firstCard.number).toEqual(1);
    expect(firstCard.shape).toEqual('diamond');
    expect(firstCard.shading).toEqual('outline');
});
