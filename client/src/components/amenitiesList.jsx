import React from 'react';

import AmenitiesListEntry from './amenitiesListEntry.jsx';

var AmenitiesList = ({ info }) => (
  <div>
    {info.map((amenity, i) => (
      <AmenitiesListEntry key={i} amenity={amenity}/>
    ))}
  </div>
);

export default AmenitiesList;