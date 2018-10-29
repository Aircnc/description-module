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
      header: "",
      short: "",
      long: "",
      host: "",
      amenities: ""
  	}
  }

  componentDidMount() {
    $.get(`/:id/description`, (data) => {
      console.log(data);
    })
  }

  render() {
  	return (
      <div className="description-container">
        <div className="header-container">
          <Header />
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
  	)
  }
}

export default Description;