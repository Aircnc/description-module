import React from 'react';
import styled from 'styled-components';

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

export default Short;