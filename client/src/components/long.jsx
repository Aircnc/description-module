import React from 'react';
import ParagraphList from './paragraphList.jsx';

class Long extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      desc: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    var buttonText = !this.state.isExpanded ? 'Read more about the space' : 'Hide';
    var style = {transform: !this.state.isExpanded ? 'scale(-1, -1)' : ''};
    return (
      <div>
        {!this.state.isExpanded ? <div className='text'>{this.props.data.split('\n')[0]}</div> : <ParagraphList className='text' info={this.props.data}/>}
        <div className='toggle-container' onClick={this.handleToggle}>
          <div className='toggle'>{buttonText}</div>
          <img className='caret' style={style} src='https://static.thenounproject.com/png/427199-200.png'/>
        </div>
        <div className='host'>Contact host</div>
      </div>
    );
  }
}

export default Long;