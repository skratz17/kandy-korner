import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from './home/Home';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';
import { EmployeeProvider } from './employees/EmployeeProvider';
import { EmployeeList } from './employees/EmployeeList';

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
      <Route path="/employees">
        <EmployeeList />
      </Route>
    </EmployeeProvider>
  </>
);