import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import ParagraphList from './paragraphList.jsx';

var Text = styled.div`
word-wrap: break-word;
font-size: 16px;
line-height: 22px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
color: #484848;

margin-bottom: 15px;
`;

var ToggleContainer = styled.div`
cursor: pointer;
margin-top: 24px;
margin-bottom: 24px;
font-weight: 600;
word-wrap: break-word;
font-size: 16px;
color: #008489;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
display: flex;
`;

var Toggle = styled.div`
:hover {
  text-decoration: underline;
}
`;

var Caret = styled.img`
height: 15px;
width: 15px;
margin-left: 5px;

${p => !p.isExpanded && css`transform: scale(-1, -1)`}
`;

var Host = styled.div`
cursor: pointer;
font-weight: 600;
word-wrap: break-word;
font-size: 16px;
color: #008489;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;

class Long extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      buttonText: 'Read more about the space'
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    var buttonText = this.state.isExpanded ? 'Read more about the space' : 'Hide';
    this.setState({
      isExpanded: !this.state.isExpanded,
      buttonText: buttonText
    });
  }

  render() {
    return (
      <div>
        {!this.state.isExpanded ? <Text>{this.props.data.split('\n')[0]}</Text> : <ParagraphList info={this.props.data}/>}
        <ToggleContainer onClick={this.handleToggle}>
          <Toggle>{this.state.buttonText}</Toggle>
          <Caret isExpanded={this.state.isExpanded} src='https://static.thenounproject.com/png/427199-200.png'/>
        </ToggleContainer>
        <Host>Contact host</Host>
      </div>
    );
  }
}

Long.propTypes = {
  props: PropTypes.string
};

export default Long;