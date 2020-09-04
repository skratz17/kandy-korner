import React, { useState, useContext, useEffect } from 'react';
import { FormGroup } from '../ui/form/FormGroup';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../locations/LocationProvider';
import { Select } from '../ui/form/Select';
import { FormErrors } from '../ui/form/FormErrors';
import './EmployeeForm.css';

export const EmployeeForm = props => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [ formValues, setFormValues ] = useState({ name: '', location: '', isManager: false, isFullTime: false, hourlyRate: '' });
  const [ formErrors, setFormErrors ] = useState({});
  const [ touchedValues, setTouchedValues ] = useState({});

  useEffect(() => {
    getLocations();
    document.title = 'Kandy Korner | New Employee';
  }, []);

  useEffect(() => {
    validateForm();
  }, [ formValues ]);

  const handleChange = e => {
    const newValue = e.target.value;
    const field = e.target.name;

    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [field]: newValue
    }));

    if(!touchedValues[field]) {
      setTouchedValues(prevTouchedValues => ({
        ...prevTouchedValues,
        [field]: true
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const { name, location, hourlyRate } = formValues;

    if(name.trim() === '') errors.name = 'Name cannot be blank.';

    if(location === '') errors.location = 'You must select a location.';
    
    if(isNaN(parseInt(hourlyRate))) errors.hourlyRate = 'Hourly rate must be a number.';
    else if(parseInt(hourlyRate) < 8) errors.hourlyRate = 'Value must be above minimum wage (which I am pretending is anything below $8/hr).';

    setFormErrors(errors);
  };

  const createEmployee = () => {
    if(Object.keys(formErrors).length === 0) {
      addEmployee(formValues)
        .then(() => props.history.push('/employees'));
    }
  }

  return (
    <form className="employeeForm"
      onSubmit={e => {
        e.preventDefault();
        createEmployee();
      }}
    >
      <h2 className="sectionHeader employeeForm__header">Add a New Employee</h2>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="name">Employee Name</label>
        <input type="text"
          name="name"
          className="employeeForm__name"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          placeholder="Employee name" />
        {touchedValues.name && <FormErrors errors={formErrors.name} />}
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="location">Location</label>
        <Select placeholder="Choose a location"
          name="location"
          className="employeeForm__location"
          id="location"
          displayNameProperty="address"
          items={locations} 
          value={formValues.location}
          onChange={handleChange} />
        {touchedValues.location && <FormErrors errors={formErrors.location} />}
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="isManager">Is Manager?</label>
        <input type="checkbox"
          className="employeeForm__isManager"
          name="isManager"
          id="isManager"
          value={formValues.isManager}
          onChange={handleChange} />
        {touchedValues.isManager && <FormErrors errors={formErrors.isManager} />}
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="isFullTime">Is Full Time?</label>
        <input type="checkbox"
          className="employeeForm__isFullTime"
          name="isFullTime"
          id="isFullTime"
          value={formValues.isFullTime}
          onChange={handleChange} />
        {touchedValues.isFullTime && <FormErrors errors={formErrors.isFullTime} />}
      </FormGroup>

      <FormGroup>
        <label className="employeeForm__label" htmlFor="hourlyRate">Hourly Rate</label>
        <input type="number"
          className="employeeForm__hourlyRate"
          name="hourlyRate"
          id="hourlyRate"
          value={formValues.hourlyRate}
          onChange={handleChange} />
        {touchedValues.hourlyRate && <FormErrors errors={formErrors.hourlyRate} />}
      </FormGroup>

      <button type="submit" className="btn btn--create createEmployeeButton" disabled={Object.keys(touchedValues).length === 0 || Object.keys(formErrors).length !== 0}>Create Employee</button>
    </form>
  );
};