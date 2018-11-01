import React from 'react';
import ParagraphListEntry from './paragraphListEntry.jsx';

var ParagraphList = ({ info }) => {
  return (
    <div>
      {info.split('\n').map((paragraph, i) => (
        <ParagraphListEntry key={i} paragraph={paragraph} />
      ))}
    </div>
  );
};

export default ParagraphList;