import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import Description from '../client/src/components/description.jsx';

describe('<Description />', () => {
  it('should show the <Header /> component be default', () => {
    var wrapper = shallow(<Description />);
    var container = wrapper.first('div');
    var loadingComponent = wrapper.find('Header');

    expect(container.length).toBe(1);
  });
});