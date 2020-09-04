import React from 'react';

export const FormErrors = ({ errors }) => {
  if(!errors) return null;
  return (
    <ul className="form__errors">
      <li className="form__error">{errors}</li>
    </ul>
  );
};