import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import ParagraphList from '../client/src/components/paragraphList.jsx';

describe('<ParagraphList />', () => {
  it('should render as many divs as props length', () => {
    var props = 'example \n example \n example \n example \n example'
    var wrapper = shallow(<ParagraphList info={props}/>);

    expect(wrapper.children()).toHaveLength(5);
  });
});