import React from 'react';

export const Location = ({ location }) => {
  const { name, address, squareFootage, isHandicapAccessible } = location;

  return (
    <article className="card location">
      <h3 className="card__header location__name">{name}</h3>
      <div className="card__contentWrapper">
        <address className="card__content location__address">{address}</address>
        <p className="card__content location__squareFootage">Square Footage: {squareFootage}</p>
        <p className="card__content location__handicapAccessible">Is handicap accessible? {String(isHandicapAccessible)}</p>
      </div>
    </article>
  );
};