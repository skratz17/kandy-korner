import React, { useContext, useEffect, useState } from 'react';

import { ProductContext } from './ProductProvider';
import { OrderContext } from '../orders/OrderProvider';
import { CustomerContext } from '../customers/CustomerProvider';

export const ProductDetails = props => {
  const { getProductById } = useContext(ProductContext);
  const { orders, getOrders } = useContext(OrderContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  const [ product, setProduct ] = useState({ productType: '' });

  useEffect(() => {
    getProductById(props.match.params.productId)
      .then(setProduct);
    getOrders();
    getCustomers();
  }, []);

  const renderOrdersList = () => {
    const foundCustomers = new Set();

    return (
      orders
      .filter(o => o.productId === product.id)
      .filter(o => {
        if(foundCustomers.has(o.customerId)) return false;
        foundCustomers.add(o.customerId);
        return true;
      })
      .map(o => customers.find(c => c.id === o.customerId) || {})
      .map(c => <li className="product__fan">{c.name}</li>)
    )
  }

  return (
    <article className="card product">
      <h2 className="product__name">{product.name}</h2>
      <p className="product__type">Type: {product.productType.name}</p>
      <p className="product__price">Price: {product.price}</p>
      <h3 className="product__fansHeader">People who like this product:</h3>
      <ul className="product__fans">
        { renderOrdersList() }
      </ul>
    </article>
  );
};