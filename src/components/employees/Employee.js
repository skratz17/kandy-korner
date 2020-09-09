import React from 'react';

export const Employee = ({ employee, onFireEmployee }) => (
  <article className="card employee">
    <h3 className="card__header employee__name">{employee.name}</h3>
    <div className="card__contentWrapper">
      <button className="btn btn--delete" onClick={() => onFireEmployee(employee.id)}>Fire Employee</button>
    </div>
  </article>
);