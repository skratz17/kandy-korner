import React from 'react';

export const Product = ({ product }) => {
  const { name, price, productType } = product;

  return (
    <article className="card product">
      <h3 className="card__header product__name">{name}</h3>
      <div className="card__contentWrapper">
        <p className="card__content product__price">Price: ${price}</p>
        <p className="card__content product__productType">Product Type: {productType.name}</p>
      </div>
    </article>
  );
};