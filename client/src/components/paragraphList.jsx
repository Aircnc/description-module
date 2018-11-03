import React from 'react';
import ParagraphListEntry from './paragraphListEntry.jsx';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

var Container = styled.div`

`;

var ParagraphList = ({ info }) => (
  <Container>
    {info.split('\n').map((paragraph, i) => (
      <ParagraphListEntry key={i} paragraph={paragraph} />
    ))}
  </Container>
);

ParagraphList.propTypes = {
  info: PropTypes.string
};

export default ParagraphList;