import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import AmenityListModal from '../client/src/components/amenityListModal.jsx';

describe('<AmenityListModal />', () => {
  it('should render as many divs as props length', () => {
    var props = [];
    var children = 5;
    for (var i = 0; i < children; i++) {
      props.push('example');
    }
    var wrapper = shallow(<AmenityListModal all={props}/>);

    expect(wrapper.children()).toHaveLength(children);
  });
});