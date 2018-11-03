import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var Entry = styled.li`
word-wrap: break-word;
font-size: 16px;
line-height: 22px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
margin-bottom: 16px;
`;

var AmenitiesListEntry = ({ amenity }) => (
  <Entry>{amenity}</Entry>
);

AmenitiesListEntry.propTypes = {
  amenity: PropTypes.string
};

export default AmenitiesListEntry;