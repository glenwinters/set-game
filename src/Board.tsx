import React from 'react';

import styles from './board.module.css';

const SetCard = ({ card }: any) => <div className={styles.card}>{`${card.color}-${card.number}-${card.shape}-${card.shading}`}</div>;

const SetBoardRow = ({ cards }: any) => (
  <div className={styles.row}>
    {cards.map((card: any) => <SetCard card={card} />)}
  </div>
);

export const SetBoard = ({ G }: any) => {
  return (
    <div className={styles.board}>
      <SetBoardRow cards={G.board.slice(0, 4)}/>
      <br />
      <SetBoardRow cards={G.board.slice(4, 8)}/>
      <br />
      <SetBoardRow cards={G.board.slice(8)}/>
    </div>
  );
};
