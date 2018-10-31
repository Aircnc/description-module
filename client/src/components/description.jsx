import React from 'react';
import $ from 'jquery';

import Header from './header.jsx';
import Short from './short.jsx';
import Long from './long.jsx';
import Host from './host.jsx';
import Amenities from './amenities.jsx';

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
      <div className="description-container">
        <div className="header-container">
          <Header data={this.state.header}/>
        </div>
        <div className="short-desc-container">
          <Short />
        </div>
        <div className="long-desc-container">
          <Long />
        </div>
        <div className="host-container">
          <Host />
        </div>
        <div className="amenities-container">
          <Amenities />
        </div>
      </div>
    );
  }
}

export default Description;