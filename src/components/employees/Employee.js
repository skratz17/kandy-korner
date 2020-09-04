import React from 'react';

export const Employee = ({ employee }) => (
  <article className="card employee">
    <h3 className="card__header employee__name">{employee.name}</h3>
    <div className="card__contentWrapper">
    </div>
  </article>
);