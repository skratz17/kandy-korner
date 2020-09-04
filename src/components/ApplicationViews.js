import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './home/Home';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';
import { EmployeeProvider } from './employees/EmployeeProvider';
import { EmployeeList } from './employees/EmployeeList';
import { EmployeeForm } from './employees/EmployeeForm';

export const ApplicationViews = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>

    <LocationProvider>
      <Route path="/locations">
        <LocationList />
      </Route>
    </LocationProvider>

    <ProductProvider>
      <Route path="/products">
        <ProductList />
      </Route>
    </ProductProvider>

    <EmployeeProvider>
      <LocationProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
        <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />} />
      </LocationProvider>
    </EmployeeProvider>
  </>
);