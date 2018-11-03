import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AmenityListEntryModal from '../client/src/components/amenityListEntryModal.jsx';

describe('AmenityListEntryModal', () => {
  it('should render correctly', () => {
    var output = shallow(
      <AmenityListEntryModal amenity='mockAmenity' isLast='mockIsLast' notAvailable='mockNotAvailable'/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});