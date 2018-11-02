import React from 'react';
import styled from 'styled-components';

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

export default AmenitiesListEntry;