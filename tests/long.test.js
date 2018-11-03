import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import Long from '../client/src/components/long.jsx';

describe('<Long />', () => {
  it('should handle state changes', () => {
    var wrapper = shallow(<Long data='mockPropsData'/>);
  
    expect(wrapper.state().isExpanded).toEqual(false);
    expect(wrapper.state().buttonText).toEqual('Read more about the space');
    wrapper.instance().handleToggle();
    expect(wrapper.state().isExpanded).toEqual(true);
    expect(wrapper.state().buttonText).toEqual('Hide');
  });
});