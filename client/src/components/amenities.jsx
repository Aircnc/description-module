import React from 'react';
import styled from 'styled-components';

import AmenitiesList from './amenitiesList.jsx';

var Header = styled.h2`
word-wrap: break-word;
font-size: 16px;
line-height: 22px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
font-weight: 700;
margin-bottom: 16px;
`;

var ListContainer = styled.div`
margin-left: -8px;
margin-right: -8px;
`;

var LeftListContainer = styled.div`
padding-left: 8px;
padding-right: 8px;
min-height: 1px;
width: 45%;
float: left;
`;

var RightListContainer = styled.div`
padding-left: 8px;
padding-right: 8px;
min-height: 1px;
width: 45%;
float: right;
`;

var LeftList = styled.ul`
margin-bottom: 15px;
padding-left: 25px;
`;

var RightList = styled.ul`
margin-bottom: 15px;
padding-left: 25px;
`;

var Toggle = styled.div`
cursor: pointer;
float: left;
margin-top: 8px;
margin-bottom: 24px;
font-weight: 600;
word-wrap: break-word;
font-size: 16px;
color: #008489;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
:hover {
  text-decoration: underline;
}
`;

var Amenities = ({ data, showModal }) => (
  <div>
    <Header>Amenities</Header>
    <ListContainer>
      <LeftListContainer>
        <LeftList>
          <AmenitiesList info={data.isLeft}/>
        </LeftList>
      </LeftListContainer>
      <RightListContainer>
        <RightList>
          <AmenitiesList info={data.isRight}/>
        </RightList>
      </RightListContainer>		
    </ListContainer>
    <Toggle onClick={showModal}>Show all {data.count} amenities</Toggle>
  </div>
);

export default Amenities;