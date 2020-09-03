import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationProvider';
import { Location } from './Location';

export const LocationList = props => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, [])

  return (
    <section className="list locations">
      { locations.map(l => <Location key={l.id} location={l} />) }
    </section>
  );
};