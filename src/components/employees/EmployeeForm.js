import React, { useState, useContext, useEffect } from 'react';
import { FormGroup } from '../ui/form/FormGroup';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../locations/LocationProvider';
import { Select } from '../ui/form/Select';

export const EmployeeForm = props => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [ formValues, setFormValues ] = useState({});

  useEffect(() => {
    getLocations();
    document.title = 'Kandy Korner | New Employee';
  }, []);

  const handleChange = e => {
    const newValue = e.target.value;
    const field = e.target.name;

    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [field]: newValue
    }));
  };

  const createEmployee = e => {
    e.preventDefault();

    if(formValues.name && formValues.location && formValues.hourlyRate) {
      addEmployee(formValues)
        .then(() => props.history.push('/employees'));
    }
    else {
      alert('ahhhhh')
    }
  }

  return (
    <form onSubmit={createEmployee} className="employeeForm">
      <h2 className="employeeForm__header">Add a New Employee</h2>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="name">Employee Name</label>
        <input type="text"
          name="name"
          id="name"
          value={formValues.name || ''}
          onChange={handleChange}
          placeholder="Employee name" />
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__location" htmlFor="location">Location</label>
        <Select placeholder="Choose a location"
          name="location"
          id="location"
          displayNameProperty="address"
          items={locations} 
          value={formValues.location || ''}
          onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__isManager" htmlFor="isManager">Is Manager?</label>
        <input type="checkbox"
          name="isManager"
          id="isManager"
          value={formValues.isManager || false}
          onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__isFullTime" htmlFor="isFullTime">Is Full Time?</label>
        <input type="checkbox"
          name="isFullTime"
          id="isFullTime"
          value={formValues.isFullTime || false}
          onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__hourlyRate" htmlFor="hourlyRate">Hourly Rate</label>
        <input type="number"
          name="hourlyRate"
          id="hourlyRate"
          value={formValues.hourlyRate || ''}
          onChange={handleChange} />
      </FormGroup>

      <button type="submit" className="btn btn--create">Create Employee</button>
    </form>
  );
};