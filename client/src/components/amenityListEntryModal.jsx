import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

var Amenity = styled.div`
word-wrap: break-word;
font-size: 16px;
line-height: 22px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
font-weight: normal;
${p => p.notAvailable && css`
  text-decoration: line-through;
  color: rgb(118, 118, 118);
`}
`;

var Desc = styled.div`
word-wrap: break-word;
font-size: 14px;
line-height 18px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
font-weight: normal;
margin-top: 8px;
${p => p.notAvailable && css`display: none`}
`;

var Border = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border-bottom: 1px solid;
color: #EBEBEB;

${p => p.isLast && css`display: none`}
`;

var AmenityListEntryModal = ({ amenity, isLast, notAvailable }) => (
  <div>
    <Amenity notAvailable={notAvailable}>{amenity}</Amenity>
    <Desc notAvailable={notAvailable}>A description for this item is not available at this time</Desc>
    <Border isLast={isLast}></Border>
  </div>
);

AmenityListEntryModal.propTypes = {
  amenity: PropTypes.string,
  isLast: PropTypes.bool,
  notAvailable: PropTypes.bool
};

export default AmenityListEntryModal;