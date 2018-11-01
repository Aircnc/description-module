import React from 'react';
import styled from 'styled-components';

var Paragraph = styled.p`
word-wrap: break-word;
font-size: 16px;
line-height: 22px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
margin-bottom: 15px;
`;

var ParagraphListEntry = ({ paragraph }) => (
  <Paragraph>{paragraph}</Paragraph>
);

export default ParagraphListEntry;