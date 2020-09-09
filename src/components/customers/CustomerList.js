import React, { useContext, useEffect } from 'react';
import { CustomerContext } from './CustomerProvider';
import { Table } from '../ui/components/Table';

export const CustomerList = props => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []);

  const tableConfig = [
    { header: 'Customer', field: 'name' }
  ];

  return (
    <div className="customersContainer">
    <h2 className="sectionHeader customersHeader">Customers</h2>
    <Table config={tableConfig} items={customers} />
  </div>
  );
};