import React from 'react';

export const Select = ({ className, value, onChange, placeholder, items }) => {
  return (
    <select className={`select ${className || ''}`}
      value={value}
      onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        { items.map(item => <option key={item.id} value={item.id}>{item.name}</option>) }
    </select>
  );
};