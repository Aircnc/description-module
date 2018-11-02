import React from 'react';
import styled from 'styled-components';

import AmenityListModal from './amenityListModal.jsx';

var Category = styled.div`
margin-top: 32px;
font-size: 18px;
line-height: 26px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
color: rgb(72, 72, 72);
font-weight: 700;
`;

var CategoryList = ({ categories, all }) => (
  <div>
    {categories.map((category, i) => (
      <div key={i}>
        <Category >{category}</Category>
        <AmenityListModal all={all[i]}/>
      </div>
    ))}
  </div>
);


export default CategoryList;