import React, { useContext, useState } from 'react';

import { OrderContext } from '../orders/OrderProvider';
import './Product.css';

export const Product = ({ product }) => {
  const { id, name, price, productType } = product;
  const { addOrder } = useContext(OrderContext);

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ isSubmitSuccess, setIsSubmitSuccess ] = useState(false);

  const handleAddToOrderClick = id => {
    setIsSubmitting(true);
    addOrder(id)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitSuccess(true);
        setTimeout(() => setIsSubmitSuccess(false), 1500);
      });
  }

  return (
    <article className="card product">
      <h3 className="card__header product__name">{name}</h3>
      <div className="card__contentWrapper">
        <p className="card__content product__price">Price: ${price}</p>
        <p className="card__content product__productType">Product Type: {productType.name}</p>
        <div className="card__content product__addToOrderWrapper">
          <button 
            className="product__addToOrder btn btn--create" 
            onClick={() => handleAddToOrderClick(id)}
            disabled={isSubmitting || isSubmitSuccess}
          >
              {isSubmitSuccess ? 'Added to Order!' : 'Add to Order'}
          </button>
        </div>
      </div>
    </article>
  );
};