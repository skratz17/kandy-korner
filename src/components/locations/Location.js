import React from 'react';

export const Location = ({ location }) => {
  const { address, squareFootage, isHandicapAccessible } = location;

  return (
    <article className="card location">
      <h3 className="card__header location__name">{address}</h3>
      <div className="card__contentWrapper">
        <p className="card__content location__squareFootage">Square Footage: {squareFootage}</p>
        <p className="card__content location__handicapAccessible">Is handicap accessible? {String(isHandicapAccessible)}</p>
      </div>
    </article>
  );
};