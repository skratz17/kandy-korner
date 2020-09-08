import React, { useContext, useEffect } from 'react';

import { OrderContext } from './OrderProvider.js';
import { ProductContext } from '../products/ProductProvider';
import { Table } from '../ui/components/Table';
import './OrderList.css';

export const OrderList = props => {
  const { orders, getOrders } = useContext(OrderContext);
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getOrders();
    getProducts();
  }, []);

  const productsOrderedCounts = orders
    .filter(o => o.customerId === parseInt(localStorage.getItem('kandy_customer')))
    .reduce((counts, order) => {
      counts[order.productId] = counts[order.productId] ? counts[order.productId] + 1 : 1
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
    <>
      <h2 className="sectionHeader">My Order</h2>
      <div className="orderListWrapper">
        <Table config={tableConfig} items={collapsedProductsOrdered} />
      </div>
    </>
  );
};