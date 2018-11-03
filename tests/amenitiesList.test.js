import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import AmenitiesList from '../client/src/components/amenitiesList.jsx';

describe('<AmenitiesList />', () => {
  it('should render as many divs as props length', () => {
    var props = [];
    var children = 5;
    for (var i = 0; i < children; i++) {
      props.push('example');
    }
    var wrapper = shallow(<AmenitiesList info={props}/>);

    expect(wrapper.children()).toHaveLength(children);
  });
});