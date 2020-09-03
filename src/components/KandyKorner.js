import React from 'react';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';

export const KandyKorner = props => {
  return (
    <>
      <h1>Kandy Korner</h1>
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </>
  );
};