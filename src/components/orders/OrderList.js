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

  const productsOrdered = orders
    .filter(o => o.customerId === parseInt(localStorage.getItem('kandy_customer')))
    .map(o => products.find(p => p.id === o.productId) || {});

  const tableConfig = [
    { header: 'Candy', field: 'name' },
    { header: 'Price', field: 'price' }
  ];

  return (
    <div className="orderListWrapper">
      <Table config={tableConfig} items={productsOrdered} />
    </div>
  );
};