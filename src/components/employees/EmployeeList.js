import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EmployeeContext } from './EmployeeProvider';
import { Employee } from './Employee';
import './EmployeeList.css';

export const EmployeeList = props => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
    document.title = 'Kandy Korner | Employees';
  }, []);

  return (
    <div className="employeesContainer">
      <h2 className="sectionHeader employeesHeader">Employees</h2>
      <Link className="btn btn--create addEmployeeButton" to="/employees/create">New Employee</Link>
      <section className="list employees">
        { employees.map(e => <Employee key={e.id} employee={e} />) }
      </section>
    </div>
  );
};