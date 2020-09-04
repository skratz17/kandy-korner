import React, { useContext, useEffect } from 'react';

import { EmployeeContext } from './EmployeeProvider';
import { Employee } from './Employee';

export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <section className="list employees">
      { employees.map(e => <Employee key={e.id} employee={e} />) }
    </section>
  );
};