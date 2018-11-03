import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ParagraphListEntry from '../client/src/components/paragraphListEntry.jsx';

describe('ParagraphListEntry', () => {
  it('should render correctly', () => {
    var output = shallow(
      <ParagraphListEntry paragraph='mockParagraph'/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});