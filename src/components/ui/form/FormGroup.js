import React from 'react';

export const FormGroup = props => (
  <fieldset>
    <div className="formGroup">
      {props.children}
    </div>
  </fieldset>
);