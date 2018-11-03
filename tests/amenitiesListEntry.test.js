import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AmenitiesListEntry from '../client/src/components/amenitiesListEntry.jsx';

describe('AmenitiesListEntry', () => {
  it('should render correctly', () => {
    var output = shallow(
      <AmenitiesListEntry amenity='mockAmenity' />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});