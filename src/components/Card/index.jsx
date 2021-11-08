import React from 'react';
import './Card.css';

function Card({ card, handleChoice, flipped, disabled }) {
  function handleClick() {
    if (!disabled) handleChoice(card);
  }

  return (
    <div className='item'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='front' />
        <img
          className='back'
          src='/img/cover.png'
          onClick={handleClick}
          alt='back'
        />
      </div>
    </div>
  );
}

export default Card;
