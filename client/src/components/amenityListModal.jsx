import React from 'react';
import styled from 'styled-components';

import AmenityListEntryModal from './amenityListEntryModal.jsx';

var ListContainer = styled.div`
margin-top: 24px;
`;

var AmenityListModal = ({ all, notAvailable }) => (
  <ListContainer>
    {all.map((amenity, i) => {
      var isLast = false;
      if (i === all.length - 1) {
        isLast = true;
      }
      return (
        <AmenityListEntryModal key={i} amenity={amenity} isLast={isLast} notAvailable={notAvailable}/>
      );
    })}
  </ListContainer>
);

export default AmenityListModal;