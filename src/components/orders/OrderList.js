import React, { useContext, useEffect } from 'react';

import { OrderContext } from './OrderProvider.js';
import { ProductContext } from '../products/ProductProvider';
import { Table } from '../ui/components/Table';

export const OrderList = props => {
  const { orders, getOrders } = useContext(OrderContext);
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getOrders();
    getProducts();
  }, []);

  const productsOrderedCounts = orders
    .filter(o => o.customerId === parseInt(localStorage.getItem('kandy_customer')))
    .map(o => products.find(p => p.id === o.productId) || {})
    .reduce((counts, product) => {
      counts[product.id] = counts[product.id] ? counts[product.id] + 1 : 1
      return counts;
    }, {});

  const collapsedProductsOrdered = Object.keys(productsOrderedCounts)
    .map(id => {
      const product = products.find(p => p.id === parseInt(id)) || {};

      return { 
        ...product,
        count: productsOrderedCounts[id],
        totalPrice: product.price * productsOrderedCounts[id] 
      };
    });

  const tableConfig = [
    { header: 'Candy', field: 'name' },
    { header: 'Quantity', field: 'count' },
    { header: 'Price/unit', field: 'price' },
    { header: 'Total Price', field: 'totalPrice' }
  ];

  return (
    <div className="orderListWrapper">
      <Table config={tableConfig} items={collapsedProductsOrdered} />
    </div>
  );
};