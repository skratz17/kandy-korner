import React from 'react';

import './Table.css';

export const Table = ({ config, items }) => (
  <table className="table">
    <thead className="tableHead">
      <tr className="table__row tableHead__row">
        { config.map(c => <th key={c.field} className="table__cell tableHead__cell">{c.header}</th>) }
      </tr>
    </thead>
    <tbody className="tableBody">
      { items.map(i => (
        <tr key={i.id} className="table__row tableBody__row">{config.map(c => <td key={i.id + '--' + c.field} className="table__cell tableBody__cell">{i[c.field]}</td>)}</tr>
      ))}
    </tbody>
  </table>
);