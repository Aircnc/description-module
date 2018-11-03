import React from 'react';
import $ from 'jquery';
import styled, { css } from 'styled-components';

import Header from './header.jsx';
import Short from './short.jsx';
import Long from './long.jsx';
import Amenities from './amenities.jsx';
import AmenitiesModal from './amenitiesModal.jsx';

var All = styled.div`

`;

var DescriptionContainer = styled.div`
margin-top: 24px;
margin-left: 190px;
height: 1000px;
width: 611px;
${p => p.show && css`
  overflow: hidden;
  height: auto;
  background: rgba(255, 255, 255, 0.8) !important;
`}
`;

var HeaderContainer = styled.div`

`;

var ShortContainer = styled.div`
display: inline-block;
`;

var LongDescContainer = styled.div`
display: inline-block;
margin-bottom: 16px;
`;

var AmenitiesContainer = styled.div`


`;

var Border = styled.div`
margin-top: 24px;
margin-bottom: 24px;
border-bottom: 1px solid;
color: #EBEBEB;
`;

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: {},
      short: {},
      long: '',
      host: '',
      amenities: {amenities: {}, categories: [], isLeft: [], isRight: [], isAll: [], count: 0, not: []},
      show: false
    };

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    var id = 2;
    $.get(`/listings/${id}/description`, (data) => {
      this.setState({
        header: {title: data.title, city: data.location.city, avatar: data.owner.avatar, name: data.owner.name.split(' ')[0], superStatus: data.owner.superStatus},
        short: {rooms: data.description.short, reviews: data.reviews},
        long: data.description.long,
        host: data.owner,
        amenities: {amenities: data.amenities.amenities, categories: data.amenities.categories, isLeft: data.amenities.isLeft, isRight: data.amenities.isRight, isAll: data.amenities.isAll, count: data.amenities.count, not: data.amenities.not}
      });
    });
  }

  showModal() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <All show={this.state.show}>
        <AmenitiesModal showModal={this.showModal} show={this.state.show} data={this.state.amenities}></AmenitiesModal>
        <DescriptionContainer show={this.state.show}>
          <HeaderContainer>
            <Header data={this.state.header}/>
          </HeaderContainer>
          <ShortContainer>
            <Short data={this.state.short}/>
          </ShortContainer>
          <LongDescContainer>
            <Long data={this.state.long}/>
          </LongDescContainer>
          <Border></Border>
          <AmenitiesContainer>
            <Amenities data={this.state.amenities} showModal={this.showModal}/>
          </AmenitiesContainer>
        </DescriptionContainer>
      </All>
    );
  }
}

export default Description;