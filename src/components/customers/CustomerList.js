import React, { useContext, useEffect, useState } from 'react';
import { CustomerContext } from './CustomerProvider';
import { Table } from '../ui/components/Table';
import { OrderContext } from '../orders/OrderProvider';

export const CustomerList = props => {
  const { customers, getCustomers } = useContext(CustomerContext);
  const { orders, getOrders } = useContext(OrderContext);

  const [ customersWithCandyCounts, setCustomersWithCandyCounts ] = useState([]);

  useEffect(() => {
    getCustomers()
    getOrders();
  }, []);

  useEffect(() => {
    const customerCandyCounts = customers 
      .map(c => {
        return {
          ...c,
          candyCount: orders.filter(o => o.customerId === c.id).length
        }
      })
      .sort((a, b) => b.candyCount - a.candyCount);
    
    setCustomersWithCandyCounts(customerCandyCounts);
  }, [ customers, orders ])

  const tableConfig = [
    { header: 'Customer', field: 'name' },
    { header: 'Candies Bought', field: 'candyCount' }
  ];

  return (
    <div className="customersContainer">
      <h2 className="sectionHeader customersHeader">Customers</h2>
      <Table config={tableConfig} items={customersWithCandyCounts} />
    </div>
  );
};