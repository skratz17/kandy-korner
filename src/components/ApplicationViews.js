import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Home } from './home/Home';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';
import { EmployeeProvider } from './employees/EmployeeProvider';
import { EmployeeList } from './employees/EmployeeList';
import { EmployeeForm } from './employees/EmployeeForm';
import { OrderProvider } from './orders/OrderProvider';
import { OrderList } from './orders/OrderList';
import { CustomerProvider } from './customers/CustomerProvider';
import { CustomerList } from './customers/CustomerList';
import { ProductSearch } from './products/ProductSearch';
import { ProductDetails } from './products/ProductDetails';

export const ApplicationViews = () => (
  <>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/logout" render={() => {
      localStorage.removeItem('kandy_customer');
      return <Redirect to="/login" />;
    }} />

    <LocationProvider>
      <Route path="/locations">
        <LocationList />
      </Route>
    </LocationProvider>

    <ProductProvider>
      <OrderProvider>
        <Route exact path="/products">
          <>
            <ProductSearch />
            <ProductList />
          </>
        </Route>

        <CustomerProvider>
          <Route path="/products/:productId(\d+)" component={ProductDetails} />
        </CustomerProvider>

        <Route path="/orders">
          <OrderList />
        </Route>
      </OrderProvider>
    </ProductProvider>

    <CustomerProvider>
      <OrderProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </OrderProvider>
    </CustomerProvider>

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