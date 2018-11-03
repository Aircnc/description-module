import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

var ShortContainer = styled.div`
box-sizing: border-box;
`;

var FirstEntryContainer = styled.div`

`;

var EntryContainer = styled.div`
margin-top: 16px;
`;

var Header = styled.div`

`;

var Desc = styled.div`

`;

var Short = (props) => (
  <ShortContainer>
    <FirstEntryContainer></FirstEntryContainer>
    <EntryContainer></EntryContainer>
    <EntryContainer></EntryContainer>
    <EntryContainer></EntryContainer>
  </ShortContainer>
);

Short.propTypes = {
  props: PropTypes.object
};

export default Short;