import React from 'react';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';

export const KandyKorner = props => {
  return (
    <>
      <h1>Kandy Korner</h1>
      <LocationProvider>
        <LocationList />
      </LocationProvider>

      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </>
  );
};