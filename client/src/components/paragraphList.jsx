import React from 'react';
import ParagraphListEntry from './paragraphListEntry.jsx';
import PropTypes from 'prop-types';

var ParagraphList = ({ info }) => (
  <div>
    {info.split('\n').map((paragraph, i) => (
      <ParagraphListEntry key={i} paragraph={paragraph} />
    ))}
  </div>
);

ParagraphList.propTypes = {
  info: PropTypes.string
};

export default ParagraphList;