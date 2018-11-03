import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import CategoryList from '../client/src/components/categoryList.jsx';

describe('<CategoryList />', () => {
  it('should render as many divs as props length', () => {
    var props = [];
    var children = 5;
    for (var i = 0; i < children; i++) {
      props.push('example');
    }
    var wrapper = shallow(<CategoryList categories={props} all={props}/>);

    expect(wrapper.children()).toHaveLength(children);
  });
});