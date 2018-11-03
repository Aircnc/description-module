import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import CategoryList from './categoryList.jsx';
import AmenityListModal from './amenityListModal.jsx';

var Modal = styled.div`
z-index: 2000;
position: fixed;
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;
width: 100%;
max-width: 600px;
height: 100%;
top:50%;
left:50%;
overflow-y: auto;
transform: translate(-50%,-50%);
display: none;


${p => p.show && css`display: block`}
`;

var Container = styled.div`
background: white;
`;

var Button = styled.img`
cursor: pointer;
margin-bottom: 24px;
height: 24px;
width: 24px;
display: block;
fill: rgb(118, 118, 118);
`;

var Section = styled.section`
padding: 64px;
`;

var Header = styled.header`
word-wrap: break-word;
font-size: 24px;
line-height: 30px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;
font-weight: 700;
margin-bottom: 16px;
`;

var AmenityList = styled.div`

`;

var AmenityContainer = styled.div`

`;

var Amenity = styled.div`

`;

var Desc = styled.div`

`;

var NotIncluded = styled.div`
margin-top: 32px;
margin-bottom: 16px;
font-size: 18px;
line-height: 26px;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
color: rgb(72, 72, 72);
font-weight: 700;
`;

var AmenitiesModal = ({ showModal, show, data }) => (
  <Modal show={show}>
    <Container>
      <Section>
        <Button onClick={showModal}src={'https://cdn1.iconfinder.com/data/icons/thin-ui-1/100/Noun_Project_100Icon_1px_grid_thin_ic_x-512.png'}></Button>
        <Header>Amenities</Header>
        <CategoryList categories={data.categories} all={data.isAll}/>
        <NotIncluded>Not included
          <AmenityListModal all={data.not} notAvailable={true}/>
        </NotIncluded>
      </Section>
    </Container>
  </Modal>
);

AmenitiesModal.propTypes = {
  showModal: PropTypes.func,
  show: PropTypes.bool,
  data: PropTypes.object
};

export default AmenitiesModal;