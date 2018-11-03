import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AmenityListEntryModal from './amenityListEntryModal.jsx';

var ListContainer = styled.div`
margin-top: 24px;
`;

var AmenityListModal = ({ all, notAvailable }) => (
  <ListContainer>
    {all.map((amenity, i) => {
      var isLast = false;
      i === all.length - 1 ? isLast = true : isLast = false;
      return (
        <AmenityListEntryModal key={i} amenity={amenity} isLast={isLast} notAvailable={notAvailable}/>
      );
    })}
  </ListContainer>
);

AmenityListModal.propTypes = {
  all: PropTypes.array,
  notAvailable: PropTypes.bool
};

export default AmenityListModal;