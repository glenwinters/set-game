import React from 'react';

const SetCard = ({ card }: any) => <div>{`${card.color}-${card.number}-${card.shape}-${card.shading}`}</div>;

const SetBoardRow = ({ cards }: any) => (
  <div>
    {cards.map((card: any) => <SetCard card={card} />)}
  </div>
);

export const SetBoard = ({ G }: any) => {
  return (
    <div>
      <SetBoardRow cards={G.board.slice(0, 4)}/>
      <br />
      <SetBoardRow cards={G.board.slice(4, 8)}/>
      <br />
      <SetBoardRow cards={G.board.slice(8)}/>
    </div>
  );
};
