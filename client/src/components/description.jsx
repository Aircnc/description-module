import React from 'react';

class Description extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {

  	}
  }

  componentDidMount() {

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