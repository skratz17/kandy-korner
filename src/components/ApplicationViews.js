import React from 'react';
import { Route } from 'react-router-dom';

import { LocationProvider } from './locations/LocationProvider';
import { ProductProvider } from './products/ProductProvider';
import { Home } from './home/Home';
import { LocationList } from './locations/LocationList';
import { ProductList } from './products/ProductList';

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
  </>
);