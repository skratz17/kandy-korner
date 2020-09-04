import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EmployeeContext } from './EmployeeProvider';
import { Employee } from './Employee';

export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
    document.title = 'Kandy Korner | Employees';
  }, []);

  return (
    <div className="employeesContainer">
      <Link className="btn btn--create" to="/employees/create">New Employee</Link>
      <section className="list employees">
        { employees.map(e => <Employee key={e.id} employee={e} />) }
      </section>
    </div>
  );
};