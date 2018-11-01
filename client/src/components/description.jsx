import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import Header from './header.jsx';
import Short from './short.jsx';
import Long from './long.jsx';
import Amenities from './amenities.jsx';

var DescriptionContainer = styled.div`
margin-top: 24px;
margin-left: 190px;
height: 1000px;
width: 611px;
`;

var HeaderContainer = styled.div`

`;

var LongDescContainer = styled.div`
display: inline-block;
`;

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: '',
      short: '',
      long: '',
      host: '',
      amenities: ''
    };
  }

  componentDidMount() {
    var id = 2;
    $.get(`/listings/${id}/description`, (data) => {
      console.log(data);
      this.setState({
        header: {title: data.title, city: data.location.city, avatar: data.owner.avatar, name: data.owner.name.split(' ')[0], superStatus: data.owner.superStatus},
        short: {rooms: data.description.short, reviews: data.reviews},
        long: data.description.long,
        host: data.owner,
        amenities: data.description.amenities
      });
    });
  }

  render() {
    return (
      <DescriptionContainer>
        <HeaderContainer>
          <Header data={this.state.header}/>
        </HeaderContainer>
        <div className="short-desc-container">
          <Short />
        </div>
        <LongDescContainer>
          <Long data={this.state.long}/>
        </LongDescContainer>
        <div className="amenities-container">
          <Amenities />
        </div>
      </DescriptionContainer>
    );
  }
}

export default Description;