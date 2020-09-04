import React from 'react';

export const Select = props => {
  const { id, className, value, onChange, placeholder, name, items, displayNameProperty } = props;

  return (
    <select id={id} className={`select ${className || ''}`}
      value={value}
      name={name}
      onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        { items.map(item => <option key={item.id} value={item.id}>{item[displayNameProperty] || item.name}</option>) }
    </select>
  );
};