import React from 'react';
import PropTypes from 'prop-types';

import AmenitiesListEntry from './amenitiesListEntry.jsx';

var AmenitiesList = ({ info }) => (
  <div>
    {info.map((amenity, i) => (
      <AmenitiesListEntry key={i} amenity={amenity}/>
    ))}
  </div>
);

AmenitiesList.propTypes = {
  info: PropTypes.array
};

export default AmenitiesList;